"use client";

import Modal from "./Modal";
import { FormEventHandler, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";
import api from "../../lib/api";
import { LuListPlus } from "react-icons/lu"; 

interface RegisterFinanceProps {
  companyId?: string;
  categories?: { revenue: string[], expense: string[] };
}

const RegisterFinance = ({ companyId, categories: cateoriesProp }: RegisterFinanceProps) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newFinanceTitle, setNewFinanceTitle] = useState<string>("");
  const [newFinanceValue, setNewFinanceValue] = useState("");
  const [newFinanceType, setNewFinanceType] = useState<Finance>("revenue");
  const [newFinanceCategory, setNewFinanceCategory] = useState<string>("");

  const [isAddingNewCategory, setIsAddingNewCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  const defaultCategories: FinanceCategories = {
    revenue: new Set(["Receita recorrente", "Receita não recorrente"]),
    expense: new Set([
      "Imposto", "Dedução", "RPAs e custo de serviço",
      "Head count de TI", "Pessoal de TI",
      "Softwares", "Outros gastos com TI", "Head count administrativo",
      "Pessoal administrativo", "Coworking",
      "Outros gastos administrativos"
    ]),
  };

  const combineCategories = (propCategories?: RegisterFinanceProps['categories']): FinanceCategories => {
    let combinedCategories: FinanceCategories = { ...defaultCategories };
    if (propCategories) {
      (Object.keys(propCategories) as Finance[]).forEach(type => {
        propCategories[type].forEach(cat => combinedCategories[type].add(cat));
      });
    }
    return combinedCategories;
  }

  const [categoriesState, setCategoriesState] = useState<FinanceCategories>(combineCategories(cateoriesProp));

  useEffect(() => {
    setCategoriesState(combineCategories(cateoriesProp));
  }, [cateoriesProp]);

  const { toast } = useToast();

  const handleAddNewCategory = () => {
    if (newCategoryName) {
      setCategoriesState(prevState => {
        const updatedCategories = { ...prevState };
        updatedCategories[newFinanceType].add(newCategoryName);
        return updatedCategories;
      });
      setNewFinanceCategory(newCategoryName);
      setIsAddingNewCategory(false);
      setNewCategoryName("");
    }
  };

  const handleSubmitNewFinance: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!newFinanceTitle || !newFinanceValue || !newFinanceType || !newFinanceCategory) {
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
      finCategory: newFinanceCategory,
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
        <form onSubmit={handleSubmitNewFinance}>
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
                onChange={(e) => setNewFinanceValue((parseInt(e.target.value.toString().replace("R$", "").replace(".", "").replace(",", ".")) * 100).toString())}
                type="number"
                placeholder="Valor da Finança"
                className="input input-bordered w-full"
              />

              <div className="mb-2"></div>
              <h3 className="mb-1">Tipo de fluxo:</h3>
              <select
                value={newFinanceType}
                onChange={(e) => {
                  setNewFinanceType(e.target.value as Finance);
                  setNewFinanceCategory("");
                }}
                className="select select-bordered flex w-full mb-4 text-gray-500"
              >
                <option value="revenue">Receita</option>
                <option value="expense">Despesa</option>
              </select>

              <h3 className="mb-1">Categoria do fluxo:</h3>
              {newFinanceType && categoriesState[newFinanceType] && (
                <select
                  value={newFinanceCategory}
                  onChange={(e) => {
                    setNewFinanceCategory(e.target.value);
                    if (e.target.value === "add_new") {
                      setIsAddingNewCategory(true);
                    }
                  }}
                  className="select select-bordered flex w-full mb-4 text-gray-500"
                >
                  <option disabled value="">
                    Selecione a categoria
                  </option>
                  {Array.from(categoriesState[newFinanceType]).map((cat: string) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                  <option value="add_new">Adicionar nova categoria</option>
                </select>
              )}
              {isAddingNewCategory && (
                <div>
                  <h3 className="mb-1">Nova Categoria:</h3>
                  <div className="mb-2 w-full">
                    <div className="mb-2 w-full flex items-center">
                      <input
                        type="text"
                        placeholder="Nome da nova categoria"
                        className="input input-bordered w-full"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                      />
                      <button
                        onClick={handleAddNewCategory}
                        className="btn ml-2 px-3 py-3 text-lg"
                      >
                        <LuListPlus />
                      </button>
                    </div>
                  </div>
                </div>
              )}
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
