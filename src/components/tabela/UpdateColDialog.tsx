"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../ui/input";
import { Edit3 } from "lucide-react";
import useMainTableData from "./useMainTableData";
import { Media, colTypes, translateMedia } from "./types";
import { useState } from "react";

type UpdateColDialogProps = {
  id: string;
};

export default function UpdateColDialog({ id }: UpdateColDialogProps) {
  const { colTypes, updateCol, removeCol, resetData } = useMainTableData();

  const [newNames, setNewNames] = useState<string[]>([]);
  const [colsToRemove, setColsToRemove] = useState<
    { id: string; col: string }[]
  >([]);

  const allColumns = Object.values(colTypes[id as keyof typeof colTypes])
    .flat()
    .map((col: any) => col.subType)
    .flat();

  return (
    <div>
      <Dialog
        onOpenChange={(open) => {
          setNewNames(allColumns);
        }}
      >
        <DialogTrigger
          asChild
          className="hover:bg-gray-300 p-1 rounded-full cursor-pointer"
        >
          <Edit3 className="w-6 h-6" />
        </DialogTrigger>
        <DialogContent onPointerDownOutside={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle className="mb-4">
              Editar colunas de{" "}
              {translateMedia(
                Object.keys(colTypes).find((c) => c === id) as Media
              )}
            </DialogTitle>
            <DialogDescription asChild className="flex flex-col gap-6">
              <div>
                {allColumns.map((c, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4"
                  >
                    <Input
                      placeholder="Nome da coluna"
                      defaultValue={newNames[index]}
                      className="text-black"
                      onChange={(e) => {
                        const newNamesCopy = [...newNames];
                        newNamesCopy[index] = e.target.value;
                        setNewNames(newNamesCopy);
                      }}
                    />
                    <Button
                      onClick={() => {
                        const colsToRemoveCopy = [...colsToRemove];
                        colsToRemoveCopy.push({ id: id, col: c });
                        setColsToRemove(colsToRemoveCopy);

                        // removeCol(id as Media, c);
                        // resetData();
                      }}
                      className="bg-red-600"
                      disabled={
                        allColumns.length === 1 ||
                        colsToRemove.find((col) => col.col === c) !== undefined
                      }
                    >
                      Remover
                    </Button>
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-8">
            <DialogClose asChild>
              <Button
                onClick={() => {
                  allColumns.forEach((c, index) => {
                    updateCol(id as Media, newNames[index], c);
                  });
                  colsToRemove.forEach((c) => {
                    removeCol(c.id as Media, c.col);
                  });
                  setColsToRemove([]);

                  resetData();
                }}
              >
                Finalizar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
