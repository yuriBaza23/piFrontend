"use client";

import Sidebar from '@/components/ui/Sidebar';
import { Spacer } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"
import { useCallback, useEffect, useState } from 'react';
import api from '../../../../lib/api';
import { sidebarIncItems } from '../../../../lib/sidebarItems';
import localApi from '../../../../lib/localApi';
import { Boards } from '../../../../components/ui/boards';

export default function Tasks({ params }: { params: { id: string } }) {
    const [company, setCompany] = useState<any>({})
    const [boards, setBoards] = useState<any[]>([])
    const [lists, setList] = useState<any[]>([])
    const [cards, setCards] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const getCompany = useCallback(async (incId: string) => {
        const res = await api.get(`company`);
        setLoading(true)
        if(res.data) {
            setCompany(res.data.filter((el: any) => el.hubId == incId && el.id == params.id)[0]);
            const result = await localApi.get(`api/projects?id=${params.id}`)
            if(result.data) {
                const getBoards = await fetch(`https://api.trello.com/1/members/me/boards?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${result.data.token}`)
                const data = await getBoards.json()
                const permitedBoards = data.filter((board: any) => result.data.boards.includes(board.id))
                setBoards(permitedBoards)
                let lists: any[] = []
                let cards: any[] = []
                for(let board of permitedBoards) {
                    lists.push(... await getLists(board.id, result.data.token))
                }
                for(let list of lists) {
                    cards.push(... await getCards(list.id, result.data.token))
                }
                setList(lists)
                setCards(cards)   
                setLoading(false)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id, lists, cards])

    const getLists = useCallback(async (boardId: string, token: string) => {
        const getLists = await fetch(`https://api.trello.com/1/boards/${boardId}/lists?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${token}`)
        const data = await getLists.json()
        return data
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getCards = useCallback(async (listId: string, token: string) => {
        const getCards = await fetch(`https://api.trello.com/1/lists/${listId}/cards?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${token}`)
        const data = await getCards.json()
        return data
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getMyIds = useCallback(async () => {
        const myId = localStorage.getItem('@pi_myId');
        if (myId) {
            getCompany(myId)
        }
    }, [getCompany])

    useEffect(() => {
        getMyIds()
    }, [getMyIds])

    return (
        <div className='layout'>
            <Sidebar sidebarItems={sidebarIncItems}/>
            <div className="content">
                    <div>
                        <div className="w-[calc(100vw-6em-4rem)] flex flex-col md:flex-row items-center justify-between mt-2 mx-auto">
                        <h1 className='mt-0 mb-2'>Gerenciamento de atividades {company.name}</h1>
                        <div className='flex gap-4'>
                            <Button>Gerar relatório de atividades</Button>
                        </div>
                    </div>
                    <Separator />
                    <Spacer x={4} />
                    <div className="flex flex-col gap-10 overflow-y-auto overflow-x-hidden h-[calc(100vh-7rem)]">
                        <Boards boards={boards} cards={cards} lists={lists} loading={loading}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
