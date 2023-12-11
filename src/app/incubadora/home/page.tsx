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
import { IStatistics, getAllStatistics } from '../../../lib/mockStatistics';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
    ArcElement
  } from "chart.js";
  import { Doughnut } from "react-chartjs-2";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    ArcElement
  );

export default function Home_i() {
    const [companies, setCompanies] = useState<any[]>([])
    const [statistics, setStatistics] = useState<any>([])
    const [others, setOthers] = useState<any[]>([])
    const { user } = useAuth();
    const router = useRouter();

    const getCompany = useCallback(async (id: string) => {
        const res = await api.get(`company`);
        if(res.data) {
            setCompanies(res.data.filter((el: any) => el.hubId == id));
        }
        const comp: any = await getAllStatistics(res.data.filter((el: any) => el.hubId == id).length)
        setStatistics(comp.statisticsArray)
        setOthers([comp.totalDone, comp.totalInProgress, comp.totalDelayed])
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
                <Sidebar sidebarItems={sidebarIncItems}/>
                <div className='content'>
                    <div className='w-[calc(100vw-6em-4rem)] flex flex-col md:flex-row items-center justify-between mt-2 mx-auto'>
                        <h1 className="mt-0 mb-2">Início</h1>
                        <Button onClick={() => router.push('/incubadora/pre-cadastro')}>Adicionar empresa</Button>
                    </div>
                    <Separator />
                    <Spacer x={4} />
                    <div className='p-10'>
                        <caption className="py-4 w-[calc(100vw-12rem)] text-xl bg-[#26282A]">
                            Estatísticas sobre as empresas
                        </caption>
                        <div className="w-[calc(100vw-12rem)] bg-[#26282A] mt-2 mb-10 flex flex-col p-10 items-center">
                            { others.length > 0 && (
                                <div className='w-fit items-center justify-center flex flex-col'>
                                    <h1 className='text-2xl font-semibold m-0 p-0'>A {user?.name} possui o total de {others[0] + others[1] + others[2]} tarefas realizadas pelas empresas.</h1>
                                    <h1 className='text-2xl font-semibold m-0 p-0'>{Math.floor((others[0]*100)/(others[0] + others[1] + others[2]))}% dessas tarefas foram concluídas!</h1>
                                </div>
                            ) }
                            <div className='flex gap-10 items-center justify-center'>
                                {statistics.length > 0 ? statistics.map((statistic: IStatistics, index: number) => (
                                    <div className="flex items-center justify-center" key={index}>
                                        <div className='w-64 flex flex-col gap-10'>
                                            <div className='flex gap-4 items-center justify-center'>
                                                <h1 className='text-2xl'>{companies[index].name}</h1>
                                            </div>
                                            <Doughnut 
                                                data={{
                                                labels: ["Terminadas", "Em andamento", "Atrasadas"],
                                                datasets: [{
                                                    data: [statistic.done, statistic.inProgress, statistic.delayed],
                                                    borderColor: [
                                                        "rgb(75, 192, 77)",
                                                        "rgb(255, 205, 86)",
                                                        "rgb(255, 99, 132)",
                                                    ],
                                                    backgroundColor: [
                                                    "rgb(75, 192, 77)",
                                                    "rgb(255, 205, 86)",
                                                    "rgb(255, 99, 132)",
                                                    ],
                                                    borderWidth: 2,
                                                }]
                                                }}
                                            />
                                            <div>
                                                <p>Essa empresa possui {' '}
                                                {statistic.delayed as any} {statistic.delayed as any > 1 || statistic.delayed === 0 ? 'tarefas' : 'tarefa'} {statistic.delayed as any > 1 || statistic.delayed === 0 ? 'atrazadas' : 'atrazada'}, {' '}
                                                {statistic.done} {statistic.done as any> 1 || statistic.done === 0 ? 'tarefas' : 'tarefa'} {statistic.done as any > 1 || statistic.done === 0 ? 'terminadas' : 'terminada'} e {' '}
                                                {statistic.inProgress} {statistic.inProgress as any > 1 || statistic.inProgress === 0 ? 'tarefas' : 'tarefa'} {statistic.inProgress as any > 1 || statistic.inProgress === 0 ? 'em andamento' : 'em andamento'}.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )) : (
                                    <div className="flex flex-col items-center justify-center py-10">
                                        <h1 className='text-lg m-0 p-0'>Nenhuma empresa cadastrada</h1>
                                        <h2 className='text-lg m-0'>Adicione uma empresa para ver as estatísticas</h2>
                                    </div>
                                )}
                            </div>
                            <div className='flex mt-10 w-full items-center justify-center'>
                                <div className='flex gap-4'>
                                    <div className='flex gap-2'>
                                        <div className='w-4 h-4 bg-green-500 rounded-full'></div>
                                        <p>Terminadas</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className='w-4 h-4 bg-yellow-500 rounded-full'></div>
                                        <p>Em andamento</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <div className='w-4 h-4 bg-red-500 rounded-full'></div>
                                        <p>Atrasadas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <caption className="py-4 w-[calc(100vw-12rem)] text-xl bg-[#26282A]">
                            Empresas da {user?.name}
                        </caption>
                        <div className="gap-3 grid grid-cols-2 sm:grid-cols-4 mt-2">
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
                                    <CardBody className="overflow-visible py-2">
                                        <Button onClick={() =>  router.push(`/incubadora/tasks/${company.id}`)}>
                                            Gerenciar
                                        </Button>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}