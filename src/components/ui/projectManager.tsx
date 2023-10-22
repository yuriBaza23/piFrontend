"use client";

import { Target, TrelloIcon } from 'lucide-react';
import { Button } from './button';
import localApi from '../../lib/localApi';
import { useToast } from './use-toast';

export interface IProject {
  id: string;
  name: string;
  desc: string;
  companyID: string;
  shortUrl: string;
}

export interface UserManagerProps {
  projects: IProject[];
  projectsPermissions: string[];
  cmpId: string;
  getBoards: () => void;
}

export default function ProjectManager({ projects, projectsPermissions, cmpId, getBoards }: UserManagerProps) {
  const { toast } = useToast();

  const handlePermition = async (id: string, action: string) => {
    if(action === 'add') {
      await localApi.put('api/projects', {
        company: cmpId,
        boards: projectsPermissions.concat(id),
      })

      toast({
        title: 'Sucesso',
        description: 'Agora a incubadora pode ver esse projeto',
      })
      getBoards()
    } else if (action === 'remove'){
      await localApi.put('api/projects', {
        company: cmpId,
        boards: projectsPermissions.filter(el => el !== id),
      })

      toast({
        title: 'Sucesso',
        description: 'Agora a incubadora não pode ver esse projeto',
      })
      getBoards()
    }
  }

  return (
    <div className='flex flex-col overflow-y-auto h-[calc(100vh-7rem)]'>
      <h1 className='p-0 m-0 mb-2 text-lg'>Projetos cadastrados</h1>
      {projects.length == 0 && <span>Nenhum projeto cadastrado</span>}
      <div className='grid grid-cols-5 grid-rows-90 gap-4'>
        {projects && projects && projects.map((project) => (
          <div className='flex justify-between flex-col bg-[#26282A] p-2 rounded gap-4' key={project.id}>
            <div>
              <div className='flex items-center mt-2'>
                <Target className='text-lg w-12'/>
                <h1 className='m-0 text-lg font-semibold p-0 ml-2 text-ellipsis truncate'>{project.name}</h1>
              </div>
              <span className='text-sm text-gray-400'>Descrição: {project.desc ? project.desc.substring(0, 102) + '...' : 'Esse projeto não tem nenhuma descrição ainda. Você pode adicionar uma na plataforma de gestão de projetos'.substring(0, 105)}</span>
            </div>
            <>
              <Button onClick={() => window.open(project.shortUrl, "_blank")}><TrelloIcon className='mr-2'/> Ver projeto</Button>
              { projectsPermissions.find(el =>  el === project.id)?.length! > 0 ? (
                <Button variant="destructive" onClick={() => handlePermition(project.id, 'remove')}>Desabilitar visão da incubadora</Button>
              ) : (
                <Button onClick={() => handlePermition(project.id, 'add')}>Habilitar visão da incubadora</Button>
              ) }
            </>
          </div>
        ))}
      </div>
    </div>
  );
}
