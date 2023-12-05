"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useToast } from "../../components/ui/use-toast";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const router = useRouter();
    const { signIn, signed, type, user } = useAuth();

    // Para simular autenticação
    async function getUser(e: any) {
        e.preventDefault();
        if (!email || !password) {
            toast({
                title: "Campos vazios",
                description: "Preencha todos os campos",
                variant: 'destructive'
            })
            return;
        }
        
        setIsDisabled(true);
        let res = await signIn({ email, password });
        if(!res) {
            toast({
                title: "Usuário não encontrado",
                description: "Verifique seus dados e tente novamente",
                variant: 'destructive'
            })
            setIsDisabled(false);
            return;
        }
        if (res.type !== 'company') {
            router.push("/incubadora/home");
            setIsDisabled(false);
        } else {
            if (res.user.isPreRegister) router.push(`/empresa/cadastro/${res.user.id}`);
            else router.push("/empresa/configuracao");
            setIsDisabled(false);
        }
    }

    const isLogged = useCallback(async () => {
        if (signed && user) {
            if (type === 'company') {
                if (user.isPreRegister) router.push(`/empresa/cadastro/${user.id}`);
                else router.push("/empresa/configuracao");
            } else {
                router.push("/incubadora/home");
            }
        }
    }, [signed, type, user, router])

    useEffect(() => {
        setIsDisabled(false)
        isLogged();
    }, [isLogged])

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg bg-login">
                <div className="login-logo">
                    <Image
                        src="/img/logo_name_yellow.svg"
                        width={150}
                        height={150}
                        // className="sidebar__logo"
                        alt="logo" />
                </div>
                <h1 className="text-xl font-bold my-4">Login</h1>
                <form className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="E-mail"
                        className="wider-input"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Senha"
                        className="wider-input"
                    />
                    <Button
                        onClick={(e) => getUser(e)}
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