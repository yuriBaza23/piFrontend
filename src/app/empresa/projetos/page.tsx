'use client'

import Sidebar from "@/components/ui/Sidebar";
import RegisterFinance from "@/components/ui/RegisterFinance";
import FinanceVisualization from "@/components/ui/FinanceVisualization";
import { sidebarCmpItems } from "../../../lib/sidebarItems";
import { Spacer } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { useState, useCallback, useEffect } from "react";
import api from "../../../lib/api";
import ProjectManager from "../../../components/ui/projectManager";
import { LoginProjectsProvider } from "../../../components/ui/loginProjectsProvider";
import localApi from "../../../lib/localApi";

export default function About() {
  const [_, setMyId] = useState("");
  const [cmpId, setCmpId] = useState("");
  const [finances, setFinances] = useState<any[]>([])
  const [projects, setProjects] = useState<any[]>([])
  const [projectsPermissions, setProjectsPermissions] = useState<any[]>([])

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

  const getBoards = useCallback(async () => {
    const token = localStorage.getItem('@pi_trello_token')
    if(token && cmpId) {
      const res = await fetch(`https://api.trello.com/1/members/me/boards?key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&token=${token}`)
      const data = await res.json()
      const boards = data.map((board: any) => board.id)
      const createPermissions = await localApi.post('api/projects', { 
        company: cmpId,
        boards,
        token
      })
      if(createPermissions.status === 200) {
        setProjectsPermissions(createPermissions.data.boards)
      }
      setProjects(data)
    } else {
      setProjects([])
    }
  }, [cmpId])


  useEffect(() => {
    getMyIds()
    getFinance()
  }, [getMyIds, getFinance])

  useEffect(() => {
    getBoards()
  }, [getBoards])

  return (
    <div className="layout">
      <Sidebar sidebarItems={sidebarCmpItems} />
      <div className="content">
      <div className="w-[calc(100vw-6em-4rem)] mx-auto flex flex-col md:flex-row justify-between mt-2">
          <h1 className='mt-0 mb-2'>Gerenciamento</h1>
          <div className='flex flex-wrap gap-2 sm:gap-4 md:gap-8 mx-auto mt-4 mb-4'>
            <RegisterFinance companyId={cmpId}/>
            <FinanceVisualization data={finances}/>
            <LoginProjectsProvider getBoards={getBoards} cmpId={cmpId}/>
          </div>
        </div>
        <Separator />
        <div className='w-[calc(100vw-6em-4rem)] mx-auto mt-4 mb-4'>
          <Spacer x={4} />
          <ProjectManager 
            projects={projects} 
            projectsPermissions={projectsPermissions} 
            cmpId={cmpId}
            getBoards={getBoards}
          />
        </div>
      </div>
    </div>
  );
}
