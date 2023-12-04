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

const calcularReceitaBruta = (
  newData: DataPerYear,
  year: string,
  month: months,
  col: Media
) => {
  const subtipoRecorrente = "Recorrente";
  const subtipoNaoRecorrente = "Não recorrente";
  const subtipoBruta = "Bruta";

  if (col === "receita") {
    const valorRecorrente =
      newData[year][month][col].find(
        (c: ColData) => c.subType === subtipoRecorrente
      )?.value ?? 0;

    const valorNaoRecorrente =
      newData[year][month][col].find(
        (c: ColData) => c.subType === subtipoNaoRecorrente
      )?.value ?? 0;

    const resultado = valorRecorrente + valorNaoRecorrente;

    const itemBruta = newData[year][month][col].find(
      (c: ColData) => c.subType === subtipoBruta
    );

    if (itemBruta) {
      itemBruta.value = resultado;
    }
  }
};

// Função para calcular a Taxa de Crescimento da Receita Bruta
const calcularTaxaCrescimento = (
  newData: DataPerYear,
  year: string,
  month: months,
  col: Media
) => {
  const subtipoBruta = "Bruta";
  const subtipoTaxaCrescimento = "Taxa de crescimento";
  const mesAnteriorMap: { [key in months]: months } = {
    "jan": "dez",
    "fev": "jan",
    "mar": "fev",
    "abr": "mar",
    "mai": "abr",
    "jun": "mai",
    "jul": "jun",
    "ago": "jul",
    "set": "ago",
    "out": "set",
    "nov": "out",
    "dez": "nov",
  };

  if (col === "receita") {
    const mesAnterior: months = month === "jan" ? "dez" : mesAnteriorMap[month];

    const valorReceitaAtual =
    newData[year][month][col].find((c: ColData) => c.subType === subtipoBruta)
        ?.value ?? 0;

    const valorReceitaAnterior =
      newData[year][mesAnterior][col].find(
        (c: ColData) => c.subType === subtipoBruta
      )?.value ?? 0;

    const  taxaCrescimento=
      valorReceitaAnterior !== 0
      ? parseFloat(((valorReceitaAtual / valorReceitaAnterior - 1) * 100).toFixed(2))
      : 0;

    // Armazenar a Taxa de Crescimento na coluna Indicadores
    const itemTaxaCrescimento = newData[year][month]["indicadores"].find(
      (c: ColData) => c.subType === subtipoTaxaCrescimento
    );

    if (itemTaxaCrescimento) {
      itemTaxaCrescimento.value = taxaCrescimento;
    }
  }
};

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
        // Chamada das funções para calcular a Receita Bruta e a Taxa de Crescimento
        calcularReceitaBruta(newData, year, month, col);
        calcularTaxaCrescimento(newData, year, month, col);

        // Retorne o estado atualizado
        return {
          ...state,
          mainData: newData,
        };
      });
    },
  })
);

export default Testao;

