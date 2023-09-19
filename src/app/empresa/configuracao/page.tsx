"use client";

import Sidebar from '@/components/ui/Sidebar';
import { Card, CardHeader, CardBody, Spacer } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { Button } from '@/components/ui/button';
import AddUserModal from '../../../components/ui/addUserModal';
import UserManagerModal from '../../../components/ui/userManagerModal';

export default function Configuracoes_empresa() {
    return (
        <div>
            <div className="layout">
                <Sidebar/>
                <div>
                    <div className='w-[calc(100vw-6em-4rem)] flex items-center justify-between mt-2'>
                        <h1 className='mt-0 mb-2'>Configuração</h1>
                        <div className='flex gap-4'>
                            <UserManagerModal>
                                <Button>Gerenciar sócios</Button>
                            </UserManagerModal>
                            <AddUserModal>
                                <Button>Adicionar novo sócio</Button>
                            </AddUserModal>
                        </div>
                    </div>
                    <Separator />
                    <div className='inline-block'>
                        <Spacer x={4} />
                        {/* <Card className="py-4 bg-card">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                <h4 className="font-bold text-large color-card">Empresa 1</h4>
                                <Spacer x={3} />
                                <small className="text-default-500 color-card">Localização</small>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                            </CardBody>
                        </Card> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
