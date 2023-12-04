import { create } from "zustand";
import { months, Media, ColData, DataPerYear, yearData, colTypes } from "./types";

interface SellerYearProps {
  mainData: DataPerYear;
  years: string[];
  months: months[];
  colTypes: Media[];
  dataMatrix: {
    value: number;
    isEditable: boolean;
  }[][];
  changeCellValue: (
    year: string,
    month: months,
    col: Media,
    colType: string,
    value: number
  ) => void;
  selectedMonth?: months;
  selectedYear?: string;
}

const Testao = create<SellerYearProps>()(
  (set, get): SellerYearProps => ({
    selectedYear: yearData
      ? Object.keys(yearData)[0].toString()
      : new Date().getFullYear().toString(),

    mainData: yearData,
    years: yearData ? Object.keys(yearData) : [],
    months: yearData
      ? (Object.keys(Object.values(yearData)[0]) as months[])
      : [],
    colTypes: yearData
      ? Object.assign(
        Object.values(Object.values(Object.values(yearData)[0]))[0]
      )
      : [],
    dataMatrix: Object.assign(
      Object.values(
        Object.values(Object.values(Object.values(yearData[2023])))
      ).map((col) =>
        Object.values(col)
          .map((c) =>
            c.map((d) => {
              return {
                value: d.value,
                isEditable: d.isEditable,
              };
            })
          )
          .flat()
      )
    ),

    changeCellValue: (
      year: string,
      month: months,
      col: Media,
      colType: string,
      value: number
    ) => {
      set((state) => {
        const newData = { ...state.mainData };
        newData[year][month][col] = newData[year][month][col].map((c: ColData) =>
          c.subType === colType ? { ...c, value: value } : c
        ) as ColData[];

        // Receita
        const subtipoRecorrente = "Recorrente";
        const subtipoNaoRecorrente = "Não recorrente";
        const subtipoBruta = "Bruta";
        
        if (col === "receita" && (colType === subtipoRecorrente || colType === subtipoNaoRecorrente)) {
          // Obtendo os valores dos subtipos "Recorrente" e "Não recorrente"
          const valorRecorrente = newData[year][month][col].find(
            (c: ColData) => c.subType === subtipoRecorrente
          )?.value ?? 0;
        
          const valorNaoRecorrente = newData[year][month][col].find(
            (c: ColData) => c.subType === subtipoNaoRecorrente
          )?.value ?? 0;
        
          // Calculando a soma dos valores
          const resultado = valorRecorrente + valorNaoRecorrente;
        
          // Atualizando o valor do subtipo "Bruta"
          const itemBruta = newData[year][month][col].find(
            (c: ColData) => c.subType === subtipoBruta
          );
        
          if (itemBruta) {
            itemBruta.value = resultado;
          }
          // Retorne o estado atualizado
          return {
            ...state,
            mainData: newData,
          };
        }
        return {
          ...state,
          mainData: newData,
        };
      });
    },
  })
);

export default Testao;

