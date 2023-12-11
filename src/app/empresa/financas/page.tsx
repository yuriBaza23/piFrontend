'use client'

import Sidebar from "@/components/ui/Sidebar";
import RegisterFinance from "@/components/ui/RegisterFinance";
import FinanceVisualization from "@/components/ui/FinanceVisualization";
import { sidebarCmpItems } from "../../../lib/sidebarItems";
import { Spacer } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { useState, useCallback, useEffect } from "react";
import api from "../../../lib/api";
import MainTable from "@/components/tabela/MainTable";

export default function About() {
    const [_, setMyId] = useState("");
    const [cmpId, setCmpId] = useState("");
    const [finances, setFinances] = useState<any[]>([])
    const [financeCategories, setFinanceCategories] = useState({ revenue: [], expense: [] });

    const getMyIds = useCallback(async () => {
        const myId = localStorage.getItem('@pi_myId');
        const cmpId = localStorage.getItem('@pi_cmpId');
        if (myId && cmpId) {
            setMyId(myId);
            setCmpId(cmpId)
        }
    }, [])

    const getFinance = useCallback(async () => {
        if (cmpId) {
            const res = await api.get(`finance/company/${cmpId}`);
            setFinances(res.data)
        }
    }, [cmpId])

    // const getFinanceCategories = useCallback(async () => {
    //     if (cmpId) {
    //         const res = await api.get(`finance/company/categories/${cmpId}`);
    //         setFinanceCategories(res.data)
    //     }
    // }, [cmpId])

    useEffect(() => {
        getMyIds()
        getFinance()
        // getFinanceCategories()
    }, [getMyIds, getFinance])


    return (
        <div className="layout">
            <Sidebar sidebarItems={sidebarCmpItems} />
            <div className="content">
                <div className="w-[calc(100vw-6em-4rem)] flex flex-col md:flex-row items-center justify-between mt-2 mx-auto">
                    <h1 className='mt-0 mb-2'>Gerenciamento de finanças</h1>
                    <div className='flex flex-wrap gap-2 sm:gap-4 md:gap-8'>
                        <RegisterFinance companyId={cmpId} categories={financeCategories} />
                        <FinanceVisualization data={finances} />
                    </div>
                </div>
                <Separator />
                <div className='w-[calc(100vw-6em-4rem)] md:flex-row items-center justify-between mt-2 mx-auto'>
                    <Spacer x={4} />
                    <MainTable companyId={cmpId}/>
                </div>
            </div>
        </div>
    );
}
