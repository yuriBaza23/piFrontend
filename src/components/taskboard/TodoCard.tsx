"use client";
// import getImageUrl from "@/lib/getImageUrl";
import { useBoardStore } from "@/store/BoardStore";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";
import Image from "next/image";

type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

const TodoCard = ({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) => {
  // const deleteTask = useBoardStore((state) => state.deleteTask);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <div
      className="bg-[#414448] rounded-md space-y-2 drop-shadow-md"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <div className="flex justify-between items-center">
        <div className="p-4">
          <p>{todo.title}</p>
        </div>
        <div className="justify-end items-center">
          <button
            // onClick={() => editTask(index, todo, id)}
            className=" text-gray-400 hover:text-yellow-500"
          >
            <PencilSquareIcon className="ml-10 h-6 w-6" />
          </button>
          <button
            // onClick={() => deleteTask(index, todo, id)}
            className=" text-gray-400 hover:text-red-500"
          >
            <TrashIcon className="ml-3 mr-4 h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
