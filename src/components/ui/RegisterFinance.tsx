"use client";

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

const FewFinance = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newFinanceTitle, setNewFinanceTitle] = useState<string>("");
  const [newFinanceDescription, setNewFinanceDescription] =
    useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // await addNewFinance({
    //   id: uuidv4(),
    //   text: newNewFinanceTitle,
    // });
    setNewFinanceTitle("");
    setNewFinanceDescription("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-yellow-600 text-white font-bold cursor-pointer px-6 py-2 hover:bg-yellow-700 mt-2"
      >
        Novo Projeto
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg">Criar novo projeto</h3>
          <div className="flex flex-col modal-action">
            <div className="flex flex-col">
              <div className="mb-2 w-full">
                <input
                  value={newFinanceTitle}
                  onChange={(e) => setNewFinanceTitle(e.target.value)}
                  type="text"
                  placeholder="Título do Projeto"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-2">
                <textarea
                  value={newFinanceDescription}
                  onChange={(e) => setNewFinanceDescription(e.target.value)}
                  placeholder="Descrição do Projeto"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" className="btn">
                  Criar
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default FewFinance;
