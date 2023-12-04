"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ArrowLeft, Minus, Plus } from "lucide-react";
import useMainTableData from "./useMainTableData";
import {
  Media,
  colTypes,
  months,
  translateMedia,
  translateMonth,
  yearData,
} from "./types";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import useMainTableSellerData from "./useMainTableSellerData";
import Testao from "./useMainTableDataTeste";

export default function MainTable() {
  const { colTypes, months, years, dataMatrix, resetData, changeSelectedYear } =
    useMainTableData();

  const {
    sellerDataMatrix,
    changeSelectedMonth,
    sellerColTypes,
    selectedMonth,
    resetSellerData,
  } = useMainTableSellerData();

  const {
    changeCellValue,
  } = Testao();

  const allColumns = Object.values(colTypes)
    .flat()
    .map((col: colTypes) => col.subType)
    .flat();

  const colTypesLenghtArray = Object.values(colTypes).map(
    (colType) => colType.length
  ) as unknown as number[];

  const [year, setYear] = useState(years[years.length - 1]);
  const [month, setMonth] = useState(undefined as string | undefined);
  const [cellValue, setCellValue] = useState(0);

  return (
    <div className="text-xs overflow-auto max-h-full max-w-full xl:text-sm">
      <table className="table-auto">
        <caption className="relative py-4 text-xl bg-[#26282A]">
          {month && (
            <span
              className="absolute -translate-y-1/2 top-1/2 p-2 left-8 cursor-pointer hover:bg-[#26282A] border border-[#26282A]"
              onClick={() => setMonth(undefined)}
            >
              <ArrowLeft />
            </span>
          )}
          Relatório financeiro{" "}
          {month
            ? "de " + translateMonth(month as months) + " de " + year.toString()
            : year.toString()}
        </caption>
        <thead>
          <tr className="">
            <th
              rowSpan={2}
              className="px-4 py-2 border border-[#26282A] bg-[#101214]"
            >
              <Select
                onValueChange={
                  month
                    ? (value) => {
                      changeSelectedMonth
                        ? changeSelectedMonth(value as months)
                        : null;
                      setMonth(value);
                      resetSellerData();
                    }
                    : (value) => {
                      changeSelectedYear ? changeSelectedYear(value) : null;
                      setYear(value);
                      resetData();
                    }
                }
                value={month ? month : year.toString()}
              >
                <SelectTrigger className="color-t bg-[#101214]">
                  <SelectValue placeholder="Ano" />
                </SelectTrigger>
                <SelectContent>
                  {!month
                    ? years.map((year, index) => {
                      return (
                        <SelectItem key={index
                        } value={year.toString()}>
                          {year}
                        </SelectItem>
                      );
                    })
                    : months.map((month, index) => {
                      return (
                        <SelectItem key={index} value={month}>
                          {month}
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
            </th>
            {Object.keys(colTypes).map((colType, index) => {
              return (
                <th
                  key={index}
                  colSpan={
                    Object.values(colTypes[colType as keyof typeof colTypes])
                      .length
                  }
                  className="px-4 py-2 border border-[#26282A] bg-[#070708]"
                  id={colType}
                >
                  {/* Parte do menu de cima que lista receita, saídas e indicadores financeiros */}
                  <div className="flex items-center justify-center gap-2 w-full">
                    <div className="w-max items-center flex gap-2">
                      {translateMedia(colType as Media)}
                    </div>
                  </div>
                </th>
              );
            })}
          </tr>
          <tr>
            {allColumns?.map((column, index) => {
              return (
                <th
                  key={index}
                  className="border border-[#26282A] px-2 text-center py-1 bg-[#101214]"
                >
                  {/* Lista de categorias de cada coluna: recorrente, não recorrente... */}
                  {column.charAt(0).toUpperCase() + column.slice(1)}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {!month
            ? months.map((month, index) => {
              return (
                <tr key={index}>
                  <td
                    className="border border-[#26282A] px-4 py-2 bg-[#070708]
                  hover:bg-[#26282A] cursor-pointer"

                  >
                    {/* Lista os meses*/}
                    <p className="m-0 font-bold mb-1">
                      {translateMonth(month as months)}
                    </p>
                  </td>{" "}
                  {dataMatrix[index].map((data, index2) => {
                    return (
                      <td
                        key={index2}
                        className={`border border-[#26282A] text-center w-full h-full ${data.isEditable
                          ? "hover:bg-[#26282A] cursor-pointer"
                          : ""
                          }`}
                      >
                        {data.isEditable ? (
                          <Popover>
                            <PopoverTrigger asChild>
                              <div
                                className="w-full h-full py-2"
                                onClick={() => {
                                  setCellValue(data.value);
                                }}
                              >
                                {data.value}
                              </div>
                            </PopoverTrigger>
                            <PopoverContent className="flex justify-center w-fit flex-col gap-2">
                              <Label htmlFor={`input${index2}`}>
                                Editar valor da célula
                              </Label>
                              <div className="flex gap-4">
                                <input
                                  className="flex h-10 w-full text-black rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  type="number"
                                  value={cellValue}
                                  onChange={(e) => setCellValue(Number(e.target.value))}
                                />

                                <Button
                                  onClick={() => {
                                    let sum = 0;
                                    colTypesLenghtArray.map((colTypeLength, index3) => {
                                      if (sum === -1) {
                                        console.log("sum is -1");
                                        return null;
                                      }
                                      if (index2 < sum + colTypeLength) {
                                        changeCellValue(
                                          year,
                                          month as months,
                                          Object.keys(colTypes)[index3] as Media,
                                          allColumns[index2],
                                          cellValue
                                        );
                                        return (sum = -1);
                                      }
                                      return (sum += colTypeLength);
                                    });
                                    resetSellerData();
                                  }}
                                >
                                  Salvar
                                </Button></div>
                            </PopoverContent>
                          </Popover>
                        ) : (
                          data.value
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })
            : null /* Se houver um mês, o tbody estará vazio (null) */}
        </tbody>
      </table>
    </div >
  );
}
