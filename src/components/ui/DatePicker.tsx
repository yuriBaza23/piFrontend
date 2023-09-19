"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useBoardStore } from "@/store/BoardStore";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const [
    NewTaskStartDate,
    setNewTaskStartDate,
    newTaskDueDate,
    setNewTaskDueDate,
  ] = useBoardStore((state) => [
    state.newTaskStartDate,
    state.setNewTaskStartDate,
    state.newTaskDueDate,
    state.setNewTaskDueDate,
  ]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal bg-[#414448] text-gray-300 border-gray-500 border p-5 hover:bg-[#414448] hover:text-white",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <div className="justify-center w-full">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={new Date()}
              selected={date}
              onSelect={(dateRange) => {
                if (dateRange) {
                  setNewTaskStartDate(dateRange.from?.toString() ?? ""); // Armazena a data de início
                  setNewTaskDueDate(dateRange.to?.toString() ?? ""); // Armazena a data final
                }
                console.log(NewTaskStartDate);
                console.log(newTaskDueDate);
                setDate(dateRange);
              }}
              numberOfMonths={2}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
