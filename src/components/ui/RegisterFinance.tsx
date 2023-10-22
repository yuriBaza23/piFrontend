"use client";

import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";
import api from "../../lib/api";

interface RegisterFinanceProps {
  companyId?: string;
}

const RegisterFinance = ({ companyId }: RegisterFinanceProps) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newFinanceTitle, setNewFinanceTitle] = useState<string>("");
  const [newFinanceValue, setNewFinanceValue] = useState("");
  const [newFinanceType, setNewFinanceType] = useState<Finance>("revenue");
  const { toast } = useToast();

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if(!newFinanceTitle || !newFinanceValue || !newFinanceType) {
      toast({
        title: "Erro ao registrar finança",
        description: "Preencha todos os campos",
        variant: "destructive"
      })
      return;
    }
    const res = await api.post('finance', {
      name: newFinanceTitle,
      finValue: newFinanceValue,
      type: newFinanceType,
      companyId,
    });

    if (res.status === 200) {
      toast({
        title: "Finança registrada com sucesso",
        description: "Finança registrada com sucesso"
      })
      window.location.reload();
    }

  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-yellow-600 text-white font-bold cursor-pointer px-6 py-2 hover:bg-yellow-700 mt-1"
      >
        Registrar Finança
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Registrar fluxo de caixa</h3>
          <div className="flex flex-col modal-action">
            <div className="flex flex-col">
              <h3 className="mb-1">Financa:</h3>
              <div className="mb-2 w-full">
                <input
                  value={newFinanceTitle}
                  onChange={(e) => setNewFinanceTitle(e.target.value)}
                  type="text"
                  placeholder="Descrição da Finança"
                  className="input input-bordered w-full"
                />
              </div>
              <h3 className="mb-1">Valor:</h3>
              <input
                  onChange={(e) => setNewFinanceValue((parseInt(e.target.value.toString().replace("R$", "").replace(".", "").replace(",", "."))*100).toString())}
                  type="number"
                  placeholder="Valor da Finança"
                  className="input input-bordered w-full"
                />
              {/* <CurrencyInput
                name="input-name"
                decimalSeparator=","
                groupSeparator="."
                decimalScale={2}
                placeholder="Digite um número"
                defaultValue={0}
                decimalsLimit={2}
                prefix="R$"
                onValueChange={(value) => value && setNewFinanceValue((parseInt(value.toString().replace("R$", "").replace(".", "").replace(",", "."))*100).toString())}
                className="input input-bordered w-full"
              /> */}

              <div className="mb-2"></div>
              <h3 className="mb-1">Tipo de fluxo:</h3>
              <select
                onChange={(e) => setNewFinanceType(e.target.value as Finance)}
                className="select select-bordered flex w-full mb-4"
              >
                <option disabled selected>
                  Selecione
                </option>
                <option value="revenue">Receita</option>
                <option value="expense">Despesa</option>
              </select>

              <div className="flex justify-end">
                <button type="submit" className="btn">
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default RegisterFinance;
