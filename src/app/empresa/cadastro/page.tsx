"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function Cadastro_Empresa() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaC, setCSenha] = useState("");
    const [usarioE, setUsuarioE] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

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
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="E-mail do proprietário"
                        className="wider-input"
                    />
                    <input
                        onChange={(e) => setUsuarioE(e.target.value)}
                        type="text"
                        placeholder="Usuário da empresa (/nome_empresa)"
                        className="wider-input"
                    />
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
                    <button className="bg-yellow-600 text-white font-bold cursor-pointer px-6 py-2 hover:bg-yellow-700">
                        Confirmar
                    </button>
                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-6">
                            {error}
                        </div>
                    )}

                </form>
            </div>
        </div>
    );
}
