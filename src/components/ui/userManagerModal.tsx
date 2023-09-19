"use client";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Fragment, ReactNode, useCallback, useEffect, useState } from 'react';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { Button } from '../../components/ui/button';
import { Separator } from '../../components/ui/separator';
import api from '../../lib/api';

interface UserManagerModalProps {
  children: ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
}

export default function UserManagerModal({ children }: UserManagerModalProps) {
  const [myId, setMyId] = useState("");
  const [cmpId, setCmpId] = useState("");
  const [users, setUsers] = useState<IUser[]>([])

  const getMyIds = useCallback(async () => {
    const myId = localStorage.getItem('@pi_myId');
    const cmpId = localStorage.getItem('@pi_cmpId');
    if (myId && cmpId) {
      setMyId(myId);
      setCmpId(cmpId)
    }
  }, [])

  const getUsers = useCallback(async () => {
    if(cmpId) {
      const res = await api.get(`company/${cmpId}`);
      setUsers(res.data.users);
    }
  }, [cmpId])

  const TheGets = useCallback(async () => {
    getMyIds()
    getUsers()
  }, [getMyIds, getUsers])

  const removeUser = useCallback(async (userId: string) => {
    if(window.confirm('Tem certeza que deseja remover este sócio?')) {
      await api.delete(`user/${userId}`);
      getUsers();
    }
  }, [getUsers])

  useEffect(() => {
    TheGets()
  }, [TheGets])

  return (
    <Dialog onOpenChange={TheGets}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Gerenciamento de sócios</DialogTitle>
          <div className='flex gap-4 flex-col mt-2'>
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
