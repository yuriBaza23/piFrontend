"use client";

import * as React from "react";
import {
    CaretSortIcon,
    ChevronDownIcon,
} from "@radix-ui/react-icons";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Separator } from "@/components/ui/separator";
import Sidebar from "@/components/ui/Sidebar";
import { Spacer } from "@nextui-org/react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { IoMdAddCircleOutline } from "react-icons/io";


const data: Payment[] = [
    {
        id: "m5gr84i9",
        data: "20/05/23",
        empresa: "Empresa 1",
        motivo: "Não compriu tarefa A.",
    },
    {
        id: "3u1reuv4",
        data: "15/02/23",
        empresa: "Empresa 1",
        motivo: "Não compriu tarefa B.",
    },
    {
        id: "derv1ws0",
        data: "30/08/23",
        empresa: "Empresa 2",
        motivo: "Não compriu tarefa C.",
    },
    {
        id: "5kma53ae",
        data: "20/05/23",
        empresa: "Empresa 3",
        motivo: "Não compriu tarefa D.",
    },
    {
        id: "bhqecj4p",
        data: "20/05/23",
        empresa: "Empresa 4",
        motivo: "Não compriu tarefa E.",
    },
]

export type Payment = {
    id: string
    data: string
    empresa: string
    motivo: string
}

export const columns: ColumnDef<Payment>[] = [
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
        accessorKey: "data",
        header: "Data",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("data")}</div>
        ),
    },
    {
        accessorKey: "empresa",
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
        cell: ({ row }) => <div className="lowercase">{row.getValue("empresa")}</div>,
    },
    {
        accessorKey: "motivo",
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

export default function DataTableDemo() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div>
            <div className="layout">
                <Sidebar></Sidebar>
                <div>
                    <h1>Gerenciar advertências</h1>
                    <Separator />
                    <div>
                        <Spacer x={4} />
                        <div className="w-full">
                            <div className="flex items-center py-4">
                                <Input
                                    placeholder="Filtrar advertências"
                                    value={(table.getColumn("empresa")?.getFilterValue() as string) ?? ""}
                                    onChange={(event) =>
                                        table.getColumn("empresa")?.setFilterValue(event.target.value)
                                    }
                                    className="max-w-sm"
                                />
                                <Spacer x={2} />
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="color-card">
                                            Colunas <ChevronDownIcon className="ml-2 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <Spacer x={2} />
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="teste"><IoMdAddCircleOutline className="mr-2 h-4 w-4" />Advertência</Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px] bg-card2 color-card">
                                            <DialogHeader>
                                                <DialogTitle>Adicionar advertência</DialogTitle>
                                                <DialogDescription>
                                                    Adicione uma advertência a uma empresa específica.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4">
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="empresa" className="text-right">
                                                        Empresa
                                                    </Label>
                                                    <Input id="empresa" className="col-span-3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="date" className="text-right">
                                                        Data
                                                    </Label>
                                                    <Input id="date" value="19/09/23" className="col-span-3" />
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="motivo" className="text-right">
                                                        Motivo
                                                    </Label>
                                                    <Input id="motivo" className="col-span-3" />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button type="submit">Cadastrar</Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>


                                    <DropdownMenuContent align="end">
                                        {table
                                            .getAllColumns()
                                            .filter((column) => column.getCanHide())
                                            .map((column) => {
                                                return (
                                                    <DropdownMenuCheckboxItem
                                                        key={column.id}
                                                        className="capitalize"
                                                        checked={column.getIsVisible()}
                                                        onCheckedChange={(value: boolean) =>
                                                            column.toggleVisibility(!!value)
                                                        }
                                                    >
                                                        {column.id}
                                                    </DropdownMenuCheckboxItem>
                                                )
                                            })}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>

                                <Table className="bg-card2">
                                    <TableHeader>
                                        {table.getHeaderGroups().map((headerGroup) => (
                                            <TableRow key={headerGroup.id}>
                                                {headerGroup.headers.map((header) => {
                                                    return (
                                                        <TableHead key={header.id}>
                                                            {header.isPlaceholder
                                                                ? null
                                                                : flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext()
                                                                )}
                                                        </TableHead>
                                                    )
                                                })}
                                            </TableRow>
                                        ))}
                                    </TableHeader>
                                    <TableBody>
                                        {table.getRowModel().rows?.length ? (
                                            table.getRowModel().rows.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    data-state={row.getIsSelected() && "selected"}
                                                >
                                                    {row.getVisibleCells().map((cell) => (
                                                        <TableCell key={cell.id}>
                                                            {flexRender(
                                                                cell.column.columnDef.cell,
                                                                cell.getContext()
                                                            )}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={columns.length}
                                                    className="h-24 text-center"
                                                >
                                                    No results.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className="flex items-center justify-end space-x-2 py-4">
                                <div className="flex-1 text-sm text-muted-foreground">
                                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                                    {table.getFilteredRowModel().rows.length} row(s) selected.
                                </div>
                                <div className="space-x-2">
                                    <Button
                                        variant="outline" className="color-card"
                                        size="sm"
                                        onClick={() => table.previousPage()}
                                        disabled={!table.getCanPreviousPage()}
                                    >
                                        Anterior
                                    </Button>
                                    <Button 
                                        variant="outline" className="color-card"
                                        size="sm"
                                        onClick={() => table.nextPage()}
                                        disabled={!table.getCanNextPage()}
                                    >
                                        Próximo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
