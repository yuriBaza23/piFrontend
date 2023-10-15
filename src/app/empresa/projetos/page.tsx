'use client'

import Sidebar from "@/components/ui/Sidebar";
import NewProject from "@/components/ui/NewProject";
import RegisterFinance from "@/components/ui/RegisterFinance";
import FinanceVisualization from "@/components/ui/FinanceVisualization";
import { sidebarCmpItems } from "../../../lib/sidebarItems";
import { Spacer } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { useState, useCallback, useEffect } from "react";
import api from "../../../lib/api";
import ProjectManager from "../../../components/ui/projectManager";

export default function About() {
  const [_, setMyId] = useState("");
  const [cmpId, setCmpId] = useState("");
  const [finances, setFinances] = useState<any[]>([])
  const [projects, setProjects] = useState<any[]>([])

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

  const getProjects = useCallback(async () => {
    if (cmpId) {
      const res = await api.get(`project`);
      if(res.data) {
        setProjects(res.data.filter((project: any) => project.companyID == cmpId))
      }
    }
  }, [cmpId])


  useEffect(() => {
    getMyIds()
    getFinance()
    getProjects()
  }, [getMyIds, getFinance, getProjects])

  return (
    <div>
      <div className="layout">
        <Sidebar sidebarItems={sidebarCmpItems} />
        <div>
          <div className="w-[calc(100vw-6em-4rem)] flex items-center justify-between mt-2 pb-2">
            <h1 className='mt-0 mb-2'>Gerenciamento</h1>
            <div className='flex gap-4'>
              <RegisterFinance companyId={cmpId}/>
              <FinanceVisualization data={finances}/>
              <NewProject companyId={cmpId}/>
            </div>
          </div>
          <Separator />
          <div className='w-[calc(100vw-6em-4rem)] flex items-center justify-between mt-2'>
            <Spacer x={4} />
            <ProjectManager projects={projects}/>
          </div>
        </div>
      </div>
    </div>
  );
}
