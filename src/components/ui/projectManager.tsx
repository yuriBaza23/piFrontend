"use client";

import { Fragment } from 'react';
import { Separator } from './separator';
import { Target } from 'lucide-react';
import { Button } from './button';
import { useRouter } from 'next/navigation';

export interface IProject {
  id: string;
  name: string;
  description: string;
  companyID: string;
}

export interface UserManagerProps {
  projects: IProject[];
}

export default function ProjectManager({ projects }: UserManagerProps) {
  const router = useRouter();
  return (
    <div className='w-full flex gap-4 flex-col mt-2'>
      <h1 className='p-0 m-0 mb-2 text-lg'>Projetos cadastrados</h1>
      {projects.length == 0 && <span>Nenhum projeto cadastrado</span>}
      {projects && projects && projects.map((project, index) => (
        <Fragment key={project.id}>
          <div className='flex items-center justify-between'>
            <div>
              <div className='flex items-center'>
                <Target className='text-lg'/>
                <h1 className='m-0 text-lg font-semibold p-0 ml-2'>{project.name}</h1>
              </div>
              <span className='text-sm'>{project.description}</span>
            </div>
            <Button onClick={() => router.push('/empresa/projetos/projeto')}>Ver projeto</Button>
          </div>
          {index != projects.length-1 && <Separator/>}
        </Fragment>
      ))}
    </div>
  );
}
