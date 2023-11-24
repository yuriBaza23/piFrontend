"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Plus } from "lucide-react";
import useMainTableData from "./useMainTableData";
import { Media } from "./types";

type AddColDialogProps = {
  id: string;
};

export default function AddColDialog({ id }: AddColDialogProps) {
  const [newCol, setNewCol] = useState("");
  const { addCol, resetData } = useMainTableData();

  const colTypes = [
    ["phoneCall", "Ligação telefônica"],
    ["soinvieMail", "Email soinvie"],
    ["cleanUpMail", "Email clean-up"],
    ["pipefy", "Pipefy"],
    ["soinvieWhatsapp", "WhatsApp soinvie"],
    ["cleanUpWhatsapp", "WhatsApp clean-up"],
  ];

  return (
    <div>
      <Dialog>
        <DialogTrigger
          asChild
          className="hover:bg-gray-300 p-1 rounded-full cursor-pointer"
        >
          <Plus className="w-6 h-6" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-4">
              Adicionar nova coluna de {colTypes.find((c) => c[0] === id)?.[1]}
            </DialogTitle>
            <DialogDescription>
              <Input
                placeholder="Nome da coluna"
                value={newCol}
                onChange={(e) => setNewCol(e.target.value)}
              />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={() => {
                  addCol(id as Media, newCol);
                  resetData();
                  setNewCol("");
                }}
              >
                Adicionar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
