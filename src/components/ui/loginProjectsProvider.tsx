'use client'

import { useCallback, useEffect, useState } from "react";
import { Button } from "./button";
import { TrelloIcon } from "lucide-react";
import localApi from "../../lib/localApi";

interface IGetProjects {
  getBoards: () => void
  cmpId: string
}

export function LoginProjectsProvider({ getBoards, cmpId }: IGetProjects) {
  const [haveAuthorizedProjects, setHaveAuthorizedProjects] = useState(false)

  const getTrelloToken = useCallback(() => {
    if(typeof window !== 'undefined') {
      const token = localStorage.getItem('@pi_trello_token')
      if(token) {
        setHaveAuthorizedProjects(true)
        getBoards()
      } else {
        const token = window.location.href.split('token=')[1]
        if(token) {
          localStorage.setItem('@pi_trello_token', token)
          setHaveAuthorizedProjects(true)
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const authorizeProjects = () => {
    window.open(
      `https://trello.com/1/authorize?expiration=never&name=Projeto Integrador&scope=read&response_type=token&key=${process.env.NEXT_PUBLIC_TRELLO_API_KEY}&return_url=http://localhost:3000/empresa/projetos`,
      "_blank"
    )
  }

  const disconnectProjects = async () => {
    localStorage.removeItem('@pi_trello_token')
    await localApi.delete('api/projects?id='+ cmpId)
    getBoards()
    setHaveAuthorizedProjects(false)
  }

  useEffect(() => {
    getTrelloToken()
  }, [getTrelloToken])

  return haveAuthorizedProjects ? (
    <>
      <Button variant="destructive" className="mt-1" onClick={() => disconnectProjects()}><TrelloIcon className="mr-2"/> Desconectar projetos</Button>
    </>
  ) : (
    <Button className="mt-1" onClick={() => authorizeProjects()}><TrelloIcon className="mr-2"/> Autorizar projetos</Button>
  )
}