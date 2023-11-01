"use client";

import Sidebar from '@/components/ui/Sidebar';
import { Spacer } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import AddUserModal from '../../../components/ui/addUserModal';
import UserManager, { IUser } from '../../../components/ui/userManager';
import { useCallback, useEffect, useState } from 'react';
import api from '../../../lib/api';
import { sidebarCmpItems } from '../../../lib/sidebarItems';
import { useAuth } from '../../../hooks/useAuth';

export default function Configuracoes_empresa() {
    const [users, setUsers] = useState<IUser[]>([])
    const { user } = useAuth();

    const getUsers = useCallback(async () => {
        if (user) {
            const res = await api.get(`company/${user.companyId}`);
            setUsers(res.data.users);
        }
    }, [user])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    return (
        <div>
            <div className="layout">
                <Sidebar sidebarItems={sidebarCmpItems} />
                <div className="content">
                    <div className="w-[calc(100vw-6em-4rem)] flex flex-col md:flex-row items-center justify-between mt-2 mx-auto">
                        <h1 className="mt-0 mb-2">Configuração</h1>
                        <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-8">
                            <AddUserModal getUsers={getUsers}>
                                <Button>Adicionar novo sócio</Button>
                            </AddUserModal>
                        </div>
                    </div>
                    <Separator />
                    <div className="w-[calc(100vw-6em-4rem)] md:flex-row items-center justify-between mt-2 mx-auto">
                        <Spacer x={4} />
                        <UserManager getUsers={getUsers} myId={user?.id || ""} users={users} />
                    </div>
                </div>
            </div>
        </div>
    );
}
