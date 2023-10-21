"use client";
import Sidebar from "@/components/ui/Sidebar";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Spacer } from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Busca_Empresa() {

    return (
        <div>
            <div className="layout">
                <Sidebar></Sidebar>
                <div className="content ml-4 mr-4 mt-4 mb-4">
                    <h1>Início</h1>
                    <Separator />
                    <div>
                        <Spacer x={4} />
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input type="text" placeholder="Buscar..." />
                            <Button >
                                <AiOutlineSearch className="h-4 w-4" />
                            </Button>
                            <Button >
                                All
                            </Button>
                        </div>
                        <Spacer x={4} />
                        <Card className="w-[350px] bg-card2">
                            <CardHeader>
                                <CardDescription className="color-card">Confira os dados da empresa:</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="id">ID da empresa:</Label>
                                            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                                                ID da empresa
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="name">Nome da empresa:</Label>
                                            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                                                Nome da empresa
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="email">Email da empresa:</Label>
                                            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                                                Email da empresa
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="cnpj">CNPJ da empresa:</Label>
                                            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                                                CNPJ
                                            </div>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="cnpj">Nome do proprietário</Label>
                                            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
                                                Proprietário
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>

                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
}