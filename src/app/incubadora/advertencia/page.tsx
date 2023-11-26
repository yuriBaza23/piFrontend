"use client";

import {
    ChevronDownIcon,
} from "@radix-ui/react-icons";
import {
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
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
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
import { useState, useEffect, useCallback } from "react";

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
import { sidebarIncItems } from "../../../lib/sidebarItems";
import { useToast } from "../../../components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select";
import api from "../../../lib/api";
import { Loader2 } from "lucide-react";
import { columns } from "./columns";

export type Warning = {
    id: string
    title: string
    company: string
    content: string
}

export default function DataTableDemo() {
    const [incubatorId, setIncubatorId] = useState("")
    const [description, setDescription] = useState("")
    const [isDisabled, setIsDisabled] = useState(false);
    const [cmp, setCmp] = useState("")
    const [companies, setCompanies] = useState<any[]>([])
    const [warnings, setWarnings] = useState<any[]>([])
    const [open, setOpen] = useState(false)
    const { toast } = useToast();
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})

    const table = useReactTable({
        data: warnings,
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

    const addWarning = useCallback(async () => {
        setIsDisabled(true)
        if (!cmp || !description) {
            toast({
                title: 'Preencha todos os campos',
                variant: 'destructive'
            })
            setIsDisabled(false)
            return
        }

        const res = await api.post(`warning`, {
            title: 'Advertência',
            content: description,
            companyID: cmp,
            incubatorID: incubatorId
        })
        if (res.status == 200) {
            toast({
                title: 'Advertência cadastrada com sucesso'
            })
        } else {
            toast({
                title: 'Erro ao cadastrar advertência',
                variant: 'destructive'
            })
        }
        setOpen(false)
        setIsDisabled(false)
    }, [cmp, description, incubatorId, toast])

    const getCompany = useCallback(async (id: string) => {
        const res = await api.get(`company`);
        setCompanies(res.data.filter((el: any) => el.hubId == id));
    }, [])

    const getWarnings = useCallback(async (incId?: string) => {
        let res = await api.get(`warning`);
        if (res.data) {
            if (incId) setWarnings(res.data.filter((el: any) => el.incubatorID == incId));
            else setWarnings(res.data.filter((el: any) => el.incubatorID == incubatorId));
            res.data.forEach((el: any) => {
                el.company = companies.find((cmp: any) => cmp.id == el.companyID)?.name
            })
        }
    }, [companies, incubatorId])

    const getMyIds = useCallback(async () => {
        const myId = localStorage.getItem('@pi_myId');
        if (myId) {
            setIncubatorId(myId)
            getCompany(myId)
            getWarnings(myId)
        }
    }, [getCompany, getWarnings])

    useEffect(() => {
        getMyIds()
    }, [getMyIds])

    return (
        <div>
            <div className="layout">
                <Sidebar sidebarItems={sidebarIncItems} />
                <div className="content">
                    <div className='w-[calc(100vw-6em-4rem)] flex flex-col md:flex-row items-center justify-between mt-2 mx-auto'>
                        <h1 className="mt-0 mb-2">Gerenciar advertências</h1>
                    </div>
                    <Separator />
                    <div>
                        <Spacer x={4} />
                        <div className="ml-8 mr-8 mt-4 mb-4">
                            <div className="flex items-center">
                                <Input
                                    placeholder="Filtrar advertências por empresa"
                                    value={(table.getColumn("company")?.getFilterValue() as string) ?? ""}
                                    onChange={(event) =>
                                        table.getColumn("company")?.setFilterValue(event.target.value)
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
                                    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
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
                                                    <Select
                                                        onValueChange={(value: string) => {
                                                            setCmp(value)
                                                        }}
                                                    >
                                                        <SelectTrigger id="empresa" className="col-span-3">
                                                            <SelectValue placeholder="Selecione a empresa" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {companies.map((company) => (
                                                                <SelectItem key={company.id} value={company.id}>{company.name}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="grid grid-cols-4 items-center gap-4">
                                                    <Label htmlFor="motivo" className="text-right">
                                                        Motivo
                                                    </Label>
                                                    <Input id="motivo" className="col-span-3" onChange={(e) => setDescription(e.target.value)} />
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <Button
                                                    onClick={() => addWarning()}
                                                    disabled={isDisabled}
                                                >
                                                    {isDisabled && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                                    Cadastrar
                                                </Button>
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

                            <Table className="bg-card2 mt-2">
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
                        <div className="flex items-center space-x-2 py-4 mr-4 ml-2">
                            <div className="text-sm text-muted-foreground mr-2 ml-2">
                                {table.getFilteredSelectedRowModel().rows.length} de{" "}
                                {table.getFilteredRowModel().rows.length} linhas selecionadas.
                            </div>
                            <div className="space-x-2 md:flex-row items-center mx-auto my-auto">
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

