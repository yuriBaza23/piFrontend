"use client";
import Sidebar from "@/components/ui/Sidebar";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Spacer } from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Busca_Empresa() {

    return (
        <div>
            <div className="layout">
                <Sidebar></Sidebar>
                <div>
                    <h1>Início</h1>
                    <Separator />
                    <div>
                        <Spacer x={4} />
                        <div className="flex w-full max-w-sm items-center space-x-2">
                            <Input type="text" placeholder="Buscar..." />
                            <Button >
                                <AiOutlineSearch className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}