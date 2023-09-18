"use client";

import Sidebar from '@/components/ui/Sidebar';
import { Card, CardHeader, CardBody, Spacer } from "@nextui-org/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button"

export default function Home_i() {
    return (
        <div>
            <div className="layout">
                <Sidebar></Sidebar>
                <div>
                    <h1>Início</h1>
                    <Separator />
                    <Spacer x={4} />
                    <div className="gap-3 grid grid-cols-2 sm:grid-cols-4">
                        <Card className="py-4 bg-card flex-col">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                <h4 className="font-bold text-large color-card">Empresa 1</h4>
                                <Spacer x={3} />
                                <small className="text-default-500 color-card">Localização</small>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2"><Button variant={"ghost"}>Gerenciar</Button></CardBody>
                        </Card>
                        <Card className="py-4 bg-card flex-col">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                <h4 className="font-bold text-large color-card">Empresa 2</h4>
                                <Spacer x={3} />
                                <small className="text-default-500 color-card">Localização</small>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2"><Button variant={"ghost"}>Gerenciar</Button></CardBody>
                        </Card>
                        <Card className="py-4 bg-card flex-col">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                <h4 className="font-bold text-large color-card">Empresa 3</h4>
                                <Spacer x={3} />
                                <small className="text-default-500 color-card">Localização</small>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2"><Button variant={"ghost"}>Gerenciar</Button></CardBody>
                        </Card>
                        <Card className="py-4 bg-card flex-col">
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                <h4 className="font-bold text-large color-card">Empresa 4</h4>
                                <Spacer x={3} />
                                <small className="text-default-500 color-card">Localização</small>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2"><Button variant={"ghost"}>Gerenciar</Button></CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
