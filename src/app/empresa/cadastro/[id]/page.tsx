"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import api from "../../../../lib/api";
import { useToast } from "../../../../components/ui/use-toast";
import { Button } from "../../../../components/ui/button";
import { Loader2 } from "lucide-react";


export default function Cadastro_Empresa({ params }: { params: { id: string } }) {
    const { toast } = useToast();
    const [senha, setSenha] = useState("");
    const [senhaC, setCSenha] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const router = useRouter();

    async function updateUser(e: any) {
        e.preventDefault();
        if (!senha || !senhaC) {
            toast({
                title: "Campos vazios",
                description: "Preencha todos os campos",
                variant: 'destructive'
            })
            return;
        }

        if (senha !== senhaC) {
            toast({
                title: "Senhas não coincidem",
                description: "Verifique suas senhas e tente novamente",
                variant: 'destructive'
            })
            return;
        }

        setIsDisabled(true);
        const res = await api.put(`/user/${params.id}`, {
            password: senha
        })

        if (res.status !== 200) {
            toast({
                title: "Erro",
                description: "Tente novamente mais tarde",
                variant: 'destructive'
            })
            return;
        } else {
            router.push("/empresa/configuracao");
        }
    }

    useEffect(() => {
        setIsDisabled(false)
    }, [])

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg bg-login">
                <div className="login-logo">
                    <Image
                        src="https://i.imgur.com/HI8Xaw5.png"
                        width={80}
                        height={50}
                        className="sidebar__logo"
                        alt="logo" />
                </div>
                <h1 className="text-xl font-bold my-4">Confirmação de cadastro</h1>
                <form className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setSenha(e.target.value)}
                        type="password"
                        placeholder="Senha"
                        className="wider-input"
                    />
                    <input
                        onChange={(e) => setCSenha(e.target.value)}
                        type="password"
                        placeholder="Confirmar senha"
                        className="wider-input"
                    />
                    <Button
                        onClick={(e) => updateUser(e)}
                        disabled={isDisabled}
                    >
                        {isDisabled && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Login
                    </Button>

                </form>
            </div>
        </div>
    );
}
