"use client";

import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";
import api from "../../lib/api";

interface NewProjectProps {
  companyId?: string;
}

const NewProject = ({ companyId }: NewProjectProps) => {
  const router = useRouter();
  const { toast } = useToast();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newProjectTitle, setNewProjectTitle] = useState<string>("");
  const [newProjectDescription, setNewProjectDescription] =
    useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if(!newProjectTitle || !newProjectDescription) {
      toast({
        title: "Erro ao criar projeto",
        description: "Preencha todos os campos",
        variant: "destructive"
      })
      return;
    }

    const res = await api.post('project', {
      name: newProjectTitle,
      description: newProjectDescription,
      companyID: companyId
    });

    if (res.status === 200) {
      toast({
        title: "Projeto criado com sucesso",
        description: "Projeto criado com sucesso"
      })
      window.location.reload();
    }
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
            <div className="flex flex-col gap-4">
              <div className="mb-2 w-full">
                <input
                  value={newProjectTitle}
                  onChange={(e) => setNewProjectTitle(e.target.value)}
                  type="text"
                  placeholder="Título do Projeto"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-2">
                <input
                  value={newProjectDescription}
                  onChange={(e) => setNewProjectDescription(e.target.value)}
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

export default NewProject;
