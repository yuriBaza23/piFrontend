"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import api from "../../lib/api";
import { useToast } from "../../components/ui/use-toast";
import { Button } from "../../components/ui/button";
import { Loader2 } from "lucide-react";

export default function Login() {
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const router = useRouter();

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
        let res = await api.get("/user");
        const user = res.data.find((user: any) => user.email === email);
        if (!user) {
            res = await api.get("/incubator");
            const incubator = res.data.find((inc: any) => inc.email === email);
            if (!incubator) {
                toast({
                    title: "Usuário não encontrado",
                    description: "Verifique seus dados e tente novamente",
                    variant: 'destructive'
                })
                return;
            }

            localStorage.setItem("@pi_myId", incubator.id);
            localStorage.setItem("@pi_type", 'incubator');

            router.push("/incubadora/home");
            return;
        }

        localStorage.setItem("@pi_myId", user.id);
        localStorage.setItem("@pi_cmpId", user.companyId);
        localStorage.setItem("@pi_type", 'user');

        if (user.isPreRegister) router.push(`/empresa/cadastro/${user.id}`);
        else router.push("/empresa/configuracao");
        return;
    }

    const isLogged = useCallback(async () => {
        const myId = localStorage.getItem("@pi_myId");
        const type = localStorage.getItem("@pi_type");
        if (myId && type) {
            if (type === 'user') {
                const res = await api.get(`/user/${myId}`);
                if (res.status === 200) {
                    if (res.data.isPreRegister) router.push(`/empresa/cadastro/${myId}`);
                    else router.push("/empresa/configuracao");
                }
            } else {
                const res = await api.get(`/incubator/${myId}`);
                if (res.status === 200) {
                    router.push("/incubadora/home");
                }
            }
        }
    }, [router])

    useEffect(() => {
        setIsDisabled(false)
        isLogged();
    }, [isLogged])

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