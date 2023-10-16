"use client";

import Sidebar from '@/components/ui/Sidebar';
import { Card, CardHeader, CardBody, Spacer } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"
import { useCallback, useEffect, useState } from 'react';
import api from '../../../lib/api';
import { sidebarIncItems } from '../../../lib/sidebarItems';
import { useRouter } from 'next/navigation';

export default function Home_i() {
    const [companies, setCompanies] = useState<any[]>([])
    const router = useRouter();

    const getCompany = useCallback(async (id: string) => {
        const res = await api.get(`company`);
        if(res.data) {
            setCompanies(res.data.filter((el: any) => el.hubId == id));
        }
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
        <div>
            <div className="layout">
                <Sidebar sidebarItems={sidebarIncItems}/>
                <div>
                    <div className='w-[calc(100vw-6em-4rem)] flex items-center justify-between mt-2'>
                        <h1>Início</h1>
                        <Button onClick={() => router.push('/incubadora/pre-cadastro')}>Adicionar empresa</Button>
                    </div>
                    <Separator />
                    <Spacer x={4} />
                    <div className="gap-3 grid grid-cols-2 sm:grid-cols-4">
                        {companies.map((company) => (
                            <Card className="py-4 bg-card flex-col" key={company.id}>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col">
                                    <h4 className="font-bold text-large color-card">{company.name}</h4>
                                </CardHeader>
                                <Spacer x={3} />
                                <small className="text-default-500 color-cardt px-4 mt-auto">
                                    {company.cnpj.toString().substring(0, 2)}.
                                    {company.cnpj.toString().substring(2, 5)}.
                                    {company.cnpj.toString().substring(5, 8)}/
                                    {company.cnpj.toString().substring(8, 12)}-
                                    {company.cnpj.toString().substring(12, 14)}
                                </small>
                                <CardBody className="overflow-visible py-2"><Button variant={"ghost"}>Gerenciar</Button></CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}