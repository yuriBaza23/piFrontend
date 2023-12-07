"use client";

import { use, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ArrowLeft } from "lucide-react";
import useMainTableData from "./useMainTableData";
import {
  Media,
  colTypes,
  months,
  translateMedia,
  translateMonth,
} from "./types";
import useMainTableSellerData from "./useMainTableSellerData";

interface IMainTableProps {
  companyId: string;
}

export default function MainTable({ companyId }: IMainTableProps) {
  const { colTypes, months, years, dataMatrix, resetData, changeSelectedYear, selectedYear } =
    useMainTableData();

  const {
    changeSelectedMonth,
    resetSellerData,
  } = useMainTableSellerData();

  const allColumns = Object.values(colTypes)
    .flat()
    .map((col: colTypes) => col.subType)
    .flat();

  useEffect(() => {
    if(companyId) resetData(companyId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [companyId])

  const [month, setMonth] = useState(undefined as string | undefined);

  return (
    <div className="text-xs max-h-full max-w-full xl:text-sm">
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
            ? "de " + translateMonth(month as months) + " de " + selectedYear!.toString()
            : selectedYear!.toString()}
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
                      // setYear(value);
                      resetData(companyId);
                    }
                }
                value={month ? month : selectedYear!.toString()}
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
                      {!month ? (
                        <>
                          {/* <UpdateColDialog id={colType} /> */}
                          {/* <AddColDialog id={colType} /> */}
                        </>
                      ) : null}
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
                        className={`border border-[#26282A] text-center w-full h-full`}
                      >
                        {data.value}
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
