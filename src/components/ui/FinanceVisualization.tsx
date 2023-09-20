"use client";

import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const FinanceVisualization = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newFinanceTitle, setNewFinanceTitle] = useState<string>("");

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        // await addNewFinance({
        //   text: newNewFinanceTitle,
        // });
        setNewFinanceTitle("");
        setModalOpen(false);
        router.refresh();
    };

    return (
        <div>
            <button
                onClick={() => setModalOpen(true)}
                className="bg-yellow-600 text-white font-bold cursor-pointer px-6 py-2 hover:bg-yellow-700 mt-2"
            >
                Visualizar Finanças
            </button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTodo}>
                    <h3 className="font-bold text-lg">Visualizar finanças existentes</h3>
                    <div className="flex flex-col modal-action">
                        <div className="flex flex-col">

                            <Table>
                                <TableCaption>Lista das finanças cadastradas</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead >Data</TableHead>
                                        <TableHead>Nome do item</TableHead>
                                        <TableHead>Método de pagamento</TableHead>
                                        <TableHead className="text-right">Valor</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">19/09/23</TableCell>
                                        <TableCell>Gelo</TableCell>
                                        <TableCell>Pix</TableCell>
                                        <TableCell className="text-right">R$15,00</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell className="font-medium">18/09/23</TableCell>
                                        <TableCell>Cartolina</TableCell>
                                        <TableCell>Pix</TableCell>
                                        <TableCell className="text-right">R$3,00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                            <div className="flex justify-end">
                                <button type="submit" className="btn">
                                    Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default FinanceVisualization;
