"use client";
import { FormEvent, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useModalStore } from "@/store/ModalStore";
import { useBoardStore } from "@/store/BoardStore";
import TaskTypeRadioGroup from "./TaskTypeRadioGroup";
import { DatePickerWithRange } from "../ui/DatePicker";

function Modal() {
  const imagePickerRef = useRef<HTMLInputElement>(null);
  const [
    newTaskTitle,
    setNewTaskTitle,
    newTaskDescription,
    setNewTaskDescription,
    newTaskStartDate,
    setNewTaskStartDate,
    newTaskDueDate,
    setNewTaskDueDate,
    newTaskType,
    /*addTask,*/
  ] = useBoardStore((state) => [
    state.newTaskTitle,
    state.setNewTaskTitle,
    state.newTaskDescription,
    state.setNewTaskDescription,
    state.newTaskStartDate,
    state.setNewTaskStartDate,
    state.newTaskDueDate,
    state.setNewTaskDueDate,
    // state.addTask,
    state.newTaskType,
  ]);
  const [isOpen, closeModal] = useModalStore((state) => [
    state.isOpen,
    state.closeModal,
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTaskTitle) return;

    // addTask(newTaskInput, newTaskType);
    closeModal();
  };

  return (
    // Use the `Transition` component at the root level
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="form"
        onSubmit={handleSubmit}
        className="relative z-10"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overfull-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#343639] p-6 text-left align-middle shadow-xl transition-all ">
                <Dialog.Title
                  as="h2"
                  className="text-lg font-medium leading-6 text-gray-100 pb-2"
                >
                  Adicionar tarefa
                </Dialog.Title>

                <div className="mt-2">
                  <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Titulo da tarefa"
                    className="w-full border border-gray-500 bg-[#414448] rounded-md outline-none p-5 text-white"
                  />
                </div>

                <div className="mt-2">
                  <textarea
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                    placeholder="Descrição da tarefa"
                    className="w-full border border-gray-500 bg-[#414448] rounded-md outline-none p-5 text-white"
                  />
                </div>

                <Dialog.Description className="mt-1 mb-2">
                  Selecione a data de inicio e entrega da tarefa:
                </Dialog.Description>

                <DatePickerWithRange />

                <TaskTypeRadioGroup />

                <div className="mt-2"></div>

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={!newTaskTitle}
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:gb-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    Adicionar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
