import { ColumnDef } from "@tanstack/react-table"
import { Warning } from "./page"
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../../../components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";

export const columns: ColumnDef<Warning>[] = [
  {

      id: "select",
      header: ({ table }) => (
          <Checkbox
              checked={table.getIsAllPageRowsSelected()}
              onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(!!value)}
              aria-label="Selecione todos"
          />
      ),
      cell: ({ row }) => (
          <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
              aria-label="Selecione a linha"
          />
      ),
      enableSorting: false,
      enableHiding: false,
  },
  {
      accessorKey: "title",
      header: "Título",
      cell: ({ row }) => (
          <div className="capitalize">{row.getValue("title")}</div>
      ),
  },
  {
      accessorKey: "company",
      header: ({ column }) => {
          return (

              <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                  Empresa
                  <CaretSortIcon className="ml-2 h-4 w-4" />
              </Button>
          )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("company")}</div>,
  },
  {
      accessorKey: "content",
      header: ({ column }) => {
          return (

              <Button
                  variant="ghost"
                  onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                  Motivo
                  <CaretSortIcon className="ml-2 h-4 w-4" />
              </Button>
          )
      },
  },
]