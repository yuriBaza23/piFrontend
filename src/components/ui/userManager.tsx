"use client";

import { Fragment, ReactNode, useCallback, useEffect, useState } from 'react';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { Button } from './button';
import { Separator } from './separator';
import api from '../../lib/api';

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface UserManagerProps {
  getUsers: () => void;
  users: IUser[];
  myId: string;
}

export default function UserManager({ getUsers, users, myId }: UserManagerProps) {
  const removeUser = useCallback(async (userId: string) => {
    if(window.confirm('Tem certeza que deseja remover este sócio?')) {
      await api.delete(`user/${userId}`);
      getUsers();
    }
  }, [getUsers])

  return (
    <div className='w-full flex gap-4 flex-col mt-2'>
      <h1 className='p-0 m-0 mb-2 text-lg'>Sócios cadastrados</h1>
      {users.length == 0 && <span>Nenhum sócio cadastrado</span>}
      {users && users.map((user, index) => (
        <Fragment key={user.id}>
          <div className='flex items-center justify-between'>
            <div>
              <div className='flex items-center'>
                <BsFillPersonVcardFill className='text-lg'/>
                <h1 className='m-0 text-lg font-semibold p-0 ml-2'>{user.name}</h1>
              </div>
              <span className='text-sm'>{user.email}</span>
            </div>
            <Button variant='destructive' disabled={myId == user.id} onClick={() => removeUser(user.id)}>Remover sócio</Button>
          </div>
          {index != users.length-1 && <Separator/>}
        </Fragment>
      ))}
    </div>
  );
}
