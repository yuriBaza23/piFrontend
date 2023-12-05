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
import { format } from "date-fns";
import { Tab } from "@nextui-org/react";

export interface Finance {
    id: string;
    name: string;
    type: "revenue" | "expense";
    category: string;
    value: number;
    createdAt: string;
}

interface RegisterFinanceProps {
    data: Finance[];
}

const FinanceVisualization = ({ data }: RegisterFinanceProps) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
        setModalOpen(false);
    };

    return (
        <div>
            <button
                onClick={() => setModalOpen(true)}
                className="bg-yellow-600 text-white font-bold cursor-pointer px-6 py-2 hover:bg-yellow-700 mt-1"
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
                                        <TableHead>Data</TableHead>
                                        <TableHead>Nome do item</TableHead>
                                        <TableHead>Fluxo</TableHead>
                                        <TableHead>Categoria</TableHead>
                                        <TableHead className="text-right">Valor</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    { data && data.map((finance) => (
                                        <TableRow key={finance.id}>
                                            <TableCell className="font-medium">{format(new Date(finance.createdAt), 'dd/MM/yyyy')}</TableCell>
                                            <TableCell>{finance.name}</TableCell>
                                            <TableCell>{finance.type === 'revenue' ? 'Receita' : 'Despesa'}</TableCell>
                                            <TableCell>{finance.category}</TableCell>
                                            <TableCell className="text-right">R${finance.value/100}</TableCell>
                                        </TableRow>
                                    )) }
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
