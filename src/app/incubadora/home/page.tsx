"use client";

import Sidebar from '@/components/ui/Sidebar';
import { Card, CardHeader, CardBody, Spacer } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"
import { useCallback, useEffect, useState } from 'react';
import api from '../../../lib/api';
import { sidebarIncItems } from '../../../lib/sidebarItems';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../hooks/useAuth';
import { Avatar } from "@nextui-org/react";

export default function Home_i() {
    const [companies, setCompanies] = useState<any[]>([])
    const { user } = useAuth();
    const router = useRouter();

    const getCompany = useCallback(async (id: string) => {
        const res = await api.get(`company`);
        if (res.data) {
            setCompanies(res.data.filter((el: any) => el.hubId == id));
        }
    }, [])

    const getMyIds = useCallback(async () => {
        if (user) {
            getCompany(user.id)
        }
    }, [getCompany, user])

    useEffect(() => {
        getMyIds()
    }, [getMyIds])

    return (
        <div>
            <div className="layout">
                <Sidebar sidebarItems={sidebarIncItems} />
                <div className='content'>
                    <div className='w-[calc(100vw-6em-4rem)] flex flex-col md:flex-row items-center justify-between mt-2 mb-2 mx-auto'>
                        <h1 className="mt-0 mb-2">Início</h1>
                        <Button onClick={() => router.push('/incubadora/pre-cadastro')}>Adicionar empresa</Button>
                    </div>
                    <Separator />
                    <Spacer x={4} />
                    <div className="gap-3 grid grid-cols-2 sm:grid-cols-4 px-4 py-3">
                        {companies.map((company) => {
                            const initials = company.name.split(' ').map((word: string) => word[0]).join('').toUpperCase();
                            return (
                                <Card className="py-4 px-4 bg-card flex-col" key={company.id}>
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col">
                                        <div className="avatar placeholder pb-3">
                                            <div className="mask egg-mask bg-yellow-600 rounded-full">
                                                <span className="text-3xl px-4 font-bold">{initials}</span>
                                            </div>
                                        </div>
                                        <h2 className="font-bold text-gray-300">{company.name}</h2>
                                    </CardHeader>
                                    <Spacer x={3} />
                                    <div className='flex items-center justify-center'>
                                        <span className="text-gray-400 color-cardt px-4 mt-auto flex">
                                            {company.cnpj.toString().substring(0, 2)}.
                                            {company.cnpj.toString().substring(2, 5)}.
                                            {company.cnpj.toString().substring(5, 8)}/
                                            {company.cnpj.toString().substring(8, 12)}-
                                            {company.cnpj.toString().substring(12, 14)}
                                        </span>
                                    </div>
                                    <CardBody className="overflow-visible py-2">
                                        <Button onClick={() => router.push(`/incubadora/tasks/${company.id}`)}>
                                            Gerenciar
                                        </Button>
                                    </CardBody>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}