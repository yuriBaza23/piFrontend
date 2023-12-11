"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { BsChevronLeft } from "react-icons/bs";
import api from "../../../lib/api";
import { useToast } from "../../../components/ui/use-toast";
import { Loader2 } from "lucide-react";


export default function Pre_Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [nomeP, setNomeP] = useState("");
    const [emailP, setEmailP] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const { toast } = useToast();
    const [companyId, setCompanyId] = useState("");

    async function createCompany(e: any) {
        e.preventDefault();
        if (!nome || !email || !nomeP || !emailP || !cnpj) {
            toast({
                title: "Campos vazios",
                description: "Preencha todos os campos",
                variant: 'destructive'
            })
            return;
        }

        if(cnpj.length !== 14) {
            toast({
                title: "CNPJ inválido",
                description: "Verifique seu CNPJ e tente novamente",
                variant: 'destructive'
            })
            return;
        }

        if(!email.includes('@') || !emailP.includes('@') || !email.includes('.') || !emailP.includes('.')) {
            toast({
                title: "E-mail inválido",
                description: "Verifique seu e-mail e tente novamente",
                variant: 'destructive'
            })
            return;
        }

        setIsDisabled(true);
        const res = await api.post('/company', {
            name: nome,
            email,
            cnpj,
            hubId: companyId,
            isPreCad: true,
            ownerName: nomeP,
            ownerEmail: emailP
        })

        if (res.status !== 200) {
            toast({
                title: "Erro",
                description: "Tente novamente mais tarde",
                variant: 'destructive'
            })
            return;
        } else {
            router.push("/incubadora/home");
        }
    }

    const getMyIds = useCallback(async () => {
        const myId = localStorage.getItem('@pi_myId');
        if (myId) {
            setCompanyId(myId)
        }
    }, [])

    useEffect(() => {
        getMyIds()
    }, [getMyIds])

    const router = useRouter();

    return (
        <div className="grid place-items-center h-screen">
            <Button className="absolute top-4 left-4" variant='outline' onClick={() => router.back()}>
                <BsChevronLeft className='mr-2'/>
                Voltar
            </Button>
            <div className="shadow-lg p-5 rounded-lg bg-login">
                <div className="login-logo">
                    <Image
                        src="/img/logo.svg"
                        width={100}
                        height={100}
                        // className="sidebar__logo"
                        alt="logo" />
                </div>
                <h1 className="text-xl font-bold my-4">Cadastro de empresa</h1>
                <form className="flex flex-col gap-3">
                    <input
                        onChange={(e) => setNome(e.target.value)}
                        type="text"
                        placeholder="Nome da empresa"
                        className="wider-input"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="E-mail da empresa"
                        className="wider-input"
                    />
                    <input
                        onChange={(e) => setCnpj(e.target.value)}
                        type="number"
                        placeholder="CNPJ da empresa"
                        className="wider-input"
                    />
                    <input
                        onChange={(e) => setNomeP(e.target.value)}
                        type="text"
                        placeholder="Nome do proprietário"
                        className="wider-input"
                    />
                    <input
                        onChange={(e) => setEmailP(e.target.value)}
                        type="text"
                        placeholder="E-mail do proprietário"
                        className="wider-input"
                    />
                    <Button
                        onClick={(e) => createCompany(e)}
                        disabled={isDisabled}
                    >
                        {isDisabled && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Cadastrar
                    </Button>
                </form>
            </div>
        </div>
    );
}
