"use client";

import Sidebar from "@/components/ui/Sidebar";
import { Spacer } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import api from "../../../../lib/api";
import { sidebarIncItems } from "../../../../lib/sidebarItems";
import localApi from "../../../../lib/localApi";
import { Boards } from "../../../../components/ui/boards";
import { StatusPieChart } from "@/components/ui/statusPieChart";
import ReactPDF, { BlobProvider } from "@react-pdf/renderer";
import { ReportTemplate } from "@/components/report/template";

export default function Tasks({ params }: { params: { id: string } }) {
  const [company, setCompany] = useState<any>({});
  const [boards, setBoards] = useState<any[]>([]);
  const [lists, setList] = useState<any[]>([]);
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [statusCounts, setStatusCounts] = useState<{
    [key: string]: { [key: string]: number };
  }>({});
  const [totalStatusCounts, setTotalStatusCounts] = useState<{
    [key: string]: number;
  }>({});

  const getCompany = useCallback(
    async (incId: string) => {
      const res = await api.get(`company`);
      setLoading(true);
      if (res.data) {
        setCompany(
          res.data.filter(
            (el: any) => el.hubId == incId && el.id == params.id
          )[0]
        );
        const result = await localApi.get(`api/projects?id=${params.id}`);
        if (result.data) {
          const getBoards = await fetch(
            `https://api.trello.com/1/members/me/boards?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${result.data.token}`
          );
          const data = await getBoards.json();
          let permitedBoards: any[] = [];
          if (Array.isArray(data)) {
            permitedBoards = data.filter((board: any) =>
              result.data.boards.includes(board.id)
            );
            setBoards(permitedBoards);
          } else {
            console.error("data não é um array");
          }
          //setBoards(permitedBoards);
          let lists: any[] = [];
          let cards: any[] = [];
          for (let board of permitedBoards) {
            const boardLists = await getLists(board.id, result.data.token);
            if (boardLists && boardLists.length > 0) {
              lists.push(...boardLists);
            }
          }
          for (let list of lists) {
            const listCards = await getCards(list.id, result.data.token);
            if (listCards && listCards.length > 0) {
              cards.push(...listCards);
            }
          }
          setList(lists);
          setCards(cards);
          setLoading(false);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [params.id]
  );

  const getLists = useCallback(async (boardId: string, token: string) => {
    const getLists = await fetch(
      `https://api.trello.com/1/boards/${boardId}/lists?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${token}`
    );
    const data = await getLists.json();
    return data;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCards = useCallback(async (listId: string, token: string) => {
    const getCards = await fetch(
      `https://api.trello.com/1/lists/${listId}/cards?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${token}&fields=id,name,due,start,dueComplete,dateLastActivity,idList,idBoard`
    );
    const data = await getCards.json();

    if (!Array.isArray(data)) {
      console.error("Data is not an array:", data);
      return;
    }

    const cardsWithStatus = data.map((card: any) => {
      let status;
      const dueDate = new Date(card.due);
      const lastActivity = new Date(card.dateLastActivity);
      const today = new Date();

      if (card.dueComplete) {
        status = dueDate > lastActivity ? "Concluído" : "Concluído com atraso";
      } else if (card.due) {
        status = dueDate > today ? "Pendente" : "Atrasado";
      } else {
        status = "Indefinido";
      }

      return { ...card, status };
    });

    return cardsWithStatus;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMyIds = useCallback(async () => {
    const myId = localStorage.getItem("@pi_myId");
    if (myId) {
      getCompany(myId);
    }
  }, [getCompany]);

  const countStatus = useCallback((cards: any[]) => {
    let counts: { [key: string]: { [key: string]: number } } = {};
    let totalCounts: { [key: string]: number } = {};

    for (let card of cards) {
      if (!counts[card.idBoard]) {
        counts[card.idBoard] = {};
      }

      if (!counts[card.idBoard][card.status]) {
        counts[card.idBoard][card.status] = 1;
      } else {
        counts[card.idBoard][card.status]++;
      }

      if (!totalCounts[card.status]) {
        totalCounts[card.status] = 1;
      } else {
        totalCounts[card.status]++;
      }
    }

    setStatusCounts(counts);
    setTotalStatusCounts(totalCounts);
  }, []);

  useEffect(() => {
    countStatus(cards);
  }, [cards, countStatus]);

  useEffect(() => {
    getMyIds();
  }, [getMyIds]);

  const generateReport = useCallback(() => {
    ReactPDF.renderToStream(<ReportTemplate />);
  }, []);

  return (
    <div className="layout">
      <Sidebar sidebarItems={sidebarIncItems} />
      <div className="content">
        <div>
          <div className="w-[calc(100vw-6em-4rem)] flex flex-col md:flex-row items-center justify-between mt-2 mx-auto">
            <h1 className="mt-0 mb-2">
              Gerenciamento de atividades {company.name}
            </h1>
            <div className="flex gap-4">
              <BlobProvider document={<ReportTemplate />}>
                {({ url }) => (
                  <a href={url as string} target="_blank">
                    <Button>Gerar relatório de atividades</Button>
                  </a>
                )}
              </BlobProvider>
            </div>
          </div>
          <Separator />
          <Spacer x={4} />
          <div className="flex flex-col gap-10 overflow-y-auto overflow-x-hidden h-[calc(100vh-7rem)]">
            <div className="flex items-center justify-center">
              <StatusPieChart
                totalStatusCounts={totalStatusCounts}
                companyName={company.name}
                loading={loading}
              />
            </div>
            <Boards
              boards={boards}
              cards={cards}
              lists={lists}
              loading={loading}
              statusCounts={statusCounts}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
