"use client";

import { useBoardStore } from "@/store/BoardStore";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const types = [
  {
    id: "backlog",
    name: "Backlog",
    description: "",
    color: "bg-gray-400",
  },
  {
    id: "todo",
    name: "To Do",
    description: "",
    color: "bg-red-500",
  },
  {
    id: "inprogress",
    name: "In Progress",
    // description: "",
    color: "bg-yellow-500",
  },
  {
    id: "done",
    name: "Done",
    // description: "",
    color: "bg-green-500",
  },
];

function TaskTypeRadioGroup() {
  const [setNewTaskType, newTaskType] = useBoardStore((state) => [
    state.setNewTaskType,
    state.newTaskType,
  ]);

  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          value={newTaskType}
          onChange={(e) => {
            setNewTaskType(e);
          }}
        >
          <div className="flex flex-row justify-between">
            {types.map((type) => (
              <RadioGroup.Option
                key={type.id}
                value={type.id}
                className={({ active, checked }) =>
                  `${active ? "ring-1 ring-offset-1 ring-offset-gray-500" : ""}
                        ${
                          checked
                            ? `${type.color} bg-opacity-75 text-wh  ite`
                            : "bg-[#414448]"
                        } 
                        relative flex cursor-pointer rounded-full px-4 py-2 shadow-md focus:outline-none overflow-hidden`
                }
              >
                {({ checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium mx-1 ${
                              checked ? "text-white" : "text-gray-300"
                            }`}
                          >
                            {type.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default TaskTypeRadioGroup;
