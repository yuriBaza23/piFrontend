"use client";

import Modal from "./Modal";
import { FormEventHandler, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";
import api from "../../lib/api";
import { LuListPlus } from "react-icons/lu";
import CurrencyInput from 'react-currency-input-field';


interface RegisterFinanceProps {
  companyId?: string;
  categories?: FinanceCategories;
}

const RegisterFinance = ({ companyId, categories: categoriesProp }: RegisterFinanceProps) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newFinanceTitle, setNewFinanceTitle] = useState<string>("");

  const [newFinanceValue, setNewFinanceValue] = useState(0); // Valor numérico
  const [displayValue, setDisplayValue] = useState(''); // Valor exibido (formatado)

  const [newFinanceType, setNewFinanceType] = useState<Finance>("revenue");
  const [newFinanceCategory, setNewFinanceCategory] = useState<Category | null>(null);

  const [isAddingNewCategory, setIsAddingNewCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");



  const defaultCategories: FinanceCategories = {
    revenue: [{ name: "Receita recorrente" }, { name: "Receita não recorrente" }],
    expense: [
      { name: "Imposto" }, { name: "Dedução" }, { name: "RPAs e custo de serviço" },
      { name: "Head count de TI" }, { name: "Pessoal de TI" },
      { name: "Softwares" }, { name: "Outros gastos com TI" }, { name: "Head count administrativo" },
      { name: "Pessoal administrativo" }, { name: "Coworking" },
      { name: "Outros gastos administrativos" }
    ],
  };

  const combineCategories = (propCategories?: RegisterFinanceProps['categories']): FinanceCategories => {
    let combinedCategories: FinanceCategories = { ...defaultCategories };

    if (propCategories) {
      (Object.keys(propCategories) as (keyof FinanceCategories)[]).forEach((type) => {
        const propCategoryArray = propCategories[type];
        if (Array.isArray(propCategoryArray)) {
          // Mantenha categorias do banco e adicione as categorias padrão que não conflitam
          combinedCategories[type] = propCategoryArray.concat(
            defaultCategories[type].filter(defaultCat =>
              !propCategoryArray.some(propCat => propCat.name === defaultCat.name)
            )
          );
        }
      });
    }

    return combinedCategories;
  };

  const [categoriesState, setCategoriesState] = useState<FinanceCategories>(combineCategories(categoriesProp));

  useEffect(() => {
    setCategoriesState(combineCategories(categoriesProp));
  }, [categoriesProp]);

  const { toast } = useToast();

  async function registerCategory(categoryName: string, financeType: Finance, categoriesState: FinanceCategories): Promise<Category> {

    const existingCategory = categoriesState[financeType].find(category => category.name === categoryName);

    if (existingCategory && existingCategory.id) {
      throw new Error('Categoria já existe');
    }
    try {
      const response = await api.post('/category', {
        name: categoryName,
        type: financeType,
        companyId: companyId,
      });

      if (response.status === 200) {
        toast({
          title: "Categoria registrada com sucesso",
          description: "Categoria registrada com sucesso"
        })

        return { id: response.data.message.split('ID: ')[1], name: categoryName };
      } else {
        toast({
          title: "Erro ao registrar categoria",
          description: "Erro ao registrar categoria",
          variant: "destructive"
        });
        throw new Error('Erro ao registrar categoria');
      }
    } catch (error) {
      console.error('Falha ao registrar categoria', error);
      throw error;
    }
  }


  const handleAddNewCategory = async () => {
    if (newCategoryName && newFinanceType) {
      console.log('Adicionando nova categoria', newCategoryName, newFinanceType)
      try {
        const newCategory = await registerCategory(newCategoryName, newFinanceType, categoriesState);
        setCategoriesState(prevState => {
          const updatedCategories = { ...prevState };
          updatedCategories[newFinanceType].push(newCategory);
          return updatedCategories;
        });

        setNewFinanceCategory(newCategory); // Define a nova categoria como a categoria selecionada
        setIsAddingNewCategory(false);
        setNewCategoryName("");
      } catch (error) {
        console.error('Erro ao adicionar nova categoria', error);
      }
    }
  };


  const handleSubmitNewFinance: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!newFinanceTitle || !newFinanceValue || !newFinanceType || !newFinanceCategory) {
      toast({
        title: "Erro ao registrar finança",
        description: "Preencha todos os campos",
        variant: "destructive"
      });
      return;
    }

    console.log('Registrando finança', newFinanceTitle, newFinanceValue, newFinanceType, newFinanceCategory)

    let categoryId = newFinanceCategory.id;
    if (!categoryId) {
      console.log('Categoria não existe, registrando nova categoria')
      const resCat = await registerCategory(newFinanceCategory.name, newFinanceType, categoriesState);
      categoryId = resCat.id;

      setCategoriesState(prevState => {
        const updatedCategories = { ...prevState };
        const updatedCategoryList = [...updatedCategories[newFinanceType], resCat];
        updatedCategories[newFinanceType] = updatedCategoryList;
        return updatedCategories;
      });

      console.log('Categoria registrada', categoryId);
    }

    const resFin = await api.post('finance', {
      name: newFinanceTitle,
      type: newFinanceType,
      category: categoryId,
      finValue: newFinanceValue.toString(),
      companyId,
    });

    if (resFin.status === 200) {
      toast({
        title: "Finança registrada com sucesso",
        description: "Finança registrada com sucesso"
      })

      window.location.reload();
    }

  };


  const handleValueChange = (value: string | undefined) => {
    const numericValue = value ? parseInt(value.replace(/\D/g, '')) : 0;
    setNewFinanceValue(numericValue);
    setDisplayValue(value || '');
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
              <CurrencyInput
                id="newFinanceValue"
                name="newFinanceValue"
                value={displayValue}
                onValueChange={handleValueChange}
                prefix="R$"
                decimalSeparator=","
                groupSeparator="."
                decimalScale={2}
                // fixedDecimalLength={1}
                decimalsLimit={2}
                className="input input-bordered w-full"
                placeholder="Valor da Finança"
              />

              <div className="mb-2"></div>
              <h3 className="mb-1">Tipo de fluxo:</h3>
              <select
                value={newFinanceType}
                onChange={(e) => {
                  setNewFinanceType(e.target.value as Finance);
                  setNewFinanceCategory(null);
                }}
                className="select select-bordered flex w-full mb-4 text-gray-500"
              >
                <option value="revenue">Receita</option>
                <option value="expense">Despesa</option>
              </select>

              <h3 className="mb-1">Categoria do fluxo:</h3>
              {newFinanceType && categoriesState[newFinanceType] && (
                <select
                  value={newFinanceCategory ? newFinanceCategory.name : ""}
                  onChange={(e) => {
                    const selectedCategory = categoriesState[newFinanceType].find(cat => cat.name === e.target.value);
                    setNewFinanceCategory(selectedCategory || null);
                    if (e.target.value === "add_new") {
                      setIsAddingNewCategory(true);
                    }
                  }}
                  className="select select-bordered flex w-full mb-4 text-gray-500"
                >
                  <option disabled value="">
                    Selecione a categoria
                  </option>
                  {categoriesState[newFinanceType].map((cat) => (
                    <option key={cat.id || cat.name} value={cat.name}> {cat.name} {cat.id ? `(${cat.id})` : ''}</option>
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
                        type="button"
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
