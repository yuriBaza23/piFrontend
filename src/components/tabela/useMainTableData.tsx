import { format } from "date-fns";
import api from "../../lib/api";
import {
  DataPerYear,
  ColData,
  months,
  Media,
  yearData,
  colTypes,
} from "./types";
import { create } from "zustand";

export interface MainTableColsProps {
  mainData: DataPerYear;
  years: string[];
  months: months[];
  colTypes: colTypes[];
  dataMatrix: {
    value: number;
    isEditable: boolean;
  }[][];
  addCol: (col: Media, colType: string) => void;
  removeCol: (col: Media, colType: string) => void;
  updateCol: (col: Media, newCol: string, oldCol: string) => void;
  selectedYear?: string;
  changeSelectedYear?: (year: string) => void;
  resetData: (compId: string) => void;
}

const getTotalValue = (data: any, selectedYear: string, month: string, category: string, type: string) => {
  return data.filter((d: any) => 
  d.type === type && 
    format(new Date(d.createdAt), 'yyyy') === selectedYear && 
    format(new Date(d.createdAt), 'MM') === month &&
    d.category === category
  ).map((d: any) => d.value).reduce((a: number, b: number) => a + b, 0);
}

const getTotalValueExpenses = (data: any, selectedYear: string, month: string, type: string) => {
  return data.filter((d: any) => 
  d.type === type && 
    format(new Date(d.createdAt), 'yyyy') === selectedYear && 
    format(new Date(d.createdAt), 'MM') === month
  ).map((d: any) => d.value).reduce((a: number, b: number) => a + b, 0);
}

const useMainTableData = create<MainTableColsProps>()(
  (set, get): MainTableColsProps => ({
    selectedYear: yearData
      ? Object.keys(yearData)[0].toString()
      : new Date().getFullYear().toString(),

    changeSelectedYear: (year: string) => {
      set({
        selectedYear: year,
        dataMatrix: Object.assign(
          Object.values(
            Object.values(Object.values(Object.values(yearData[year])))
          ).map((col) =>
            Object.values(col)
              .map((c) => c.map((d) => d.value))
              .flat()
          )
        ),
      });
    },

    resetData: async (compId: string) => {
      try {
        const {data} = await api.get(`finance/company/${compId}`);
        console.log(data);
        console.log(get().selectedYear)

        const years = data.map((d: any) => format(new Date(d.createdAt), 'yyyy')).filter((v: any, i: any, a: any) => a.indexOf(v) === i);
        set({
          selectedYear: years[0],
        })

        const bJan = getTotalValue(data, get().selectedYear!, '01', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '01', 'Receita não recorrente', 'revenue');
        const bFev = getTotalValue(data, get().selectedYear!, '02', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '02', 'Receita não recorrente', 'revenue');
        const bMar = getTotalValue(data, get().selectedYear!, '03', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '03', 'Receita não recorrente', 'revenue');
        const bAbr = getTotalValue(data, get().selectedYear!, '04', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '04', 'Receita não recorrente', 'revenue');
        const bMai = getTotalValue(data, get().selectedYear!, '05', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '05', 'Receita não recorrente', 'revenue');
        const bJun = getTotalValue(data, get().selectedYear!, '06', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '06', 'Receita não recorrente', 'revenue');
        const bJul = getTotalValue(data, get().selectedYear!, '07', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '07', 'Receita não recorrente', 'revenue');
        const bAgo = getTotalValue(data, get().selectedYear!, '08', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '08', 'Receita não recorrente', 'revenue');
        const bSet = getTotalValue(data, get().selectedYear!, '09', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '09', 'Receita não recorrente', 'revenue');
        const bOut = getTotalValue(data, get().selectedYear!, '10', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '10', 'Receita não recorrente', 'revenue');
        const bNov = getTotalValue(data, get().selectedYear!, '11', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '11', 'Receita não recorrente', 'revenue');
        const bDez = getTotalValue(data, get().selectedYear!, '12', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '12', 'Receita não recorrente', 'revenue');

        const myYearData = {
          [get().selectedYear!]: {
            jan: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '01', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '02', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bJan },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '01', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '01', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '01', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: 0 },
                { subType: "Receita líquida", value: bJan - getTotalValueExpenses(data, get().selectedYear!, '01', 'expense') }
              ]
            },
            fev: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '02', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '02', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bFev },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '02', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '02', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '02', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: (bJan - 1 < 0 ? 0 : bFev/(bJan-1)) },
                { subType: "Receita líquida", value: getTotalValue(data, get().selectedYear!, '02', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '02', 'Receita não recorrente', 'revenue') - getTotalValueExpenses(data, get().selectedYear!, '02', 'expense') }
              ]
            },
            mar: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '03', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '03', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bMar },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '03', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '03', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '03', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: (bFev - 1 < 0 ? 0 : bMar/(bFev-1)) },
                { subType: "Receita líquida", value: getTotalValue(data, get().selectedYear!, '03', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '03', 'Receita não recorrente', 'revenue') - getTotalValueExpenses(data, get().selectedYear!, '03', 'expense') }
              ]
            },
            abr: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '04', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '04', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bAbr },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '04', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '04', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '04', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: (bMar - 1 < 0 ? 0 : bAbr/(bMar-1)) },
                { subType: "Receita líquida", value: getTotalValue(data, get().selectedYear!, '04', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '04', 'Receita não recorrente', 'revenue') - getTotalValueExpenses(data, get().selectedYear!, '04', 'expense') }
              ]
            },
            mai: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '05', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '05', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bMai },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '05', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '05', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '05', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: (bAbr - 1 < 0 ? 0 : bMai/(bAbr-1)) },
                { subType: "Receita líquida", value: getTotalValue(data, get().selectedYear!, '05', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '05', 'Receita não recorrente', 'revenue') - getTotalValueExpenses(data, get().selectedYear!, '05', 'expense') }
              ]
            },
            jun: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '06', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '06', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bJun },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '06', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '06', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '06', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: (bMai - 1 < 0 ? 0 : bJun/(bMai-1)) },
                { subType: "Receita líquida", value: getTotalValue(data, get().selectedYear!, '06', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '06', 'Receita não recorrente', 'revenue') - getTotalValueExpenses(data, get().selectedYear!, '06', 'expense') }
              ]
            },
            jul: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '07', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '07', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bJul },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '07', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '07', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '07', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: (bJun - 1 < 0 ? 0 : bJul/(bJun-1)) },
                { subType: "Receita líquida", value: getTotalValue(data, get().selectedYear!, '07', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '07', 'Receita não recorrente', 'revenue') - getTotalValueExpenses(data, get().selectedYear!, '07', 'expense') }
              ]
            },
            ago: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '08', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '08', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bAgo },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '08', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '08', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '08', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: (bJul - 1 < 0 ? 0 : bAgo/(bJul-1)) },
                { subType: "Receita líquida", value: getTotalValue(data, get().selectedYear!, '08', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '08', 'Receita não recorrente', 'revenue') - getTotalValueExpenses(data, get().selectedYear!, '08', 'expense') }
              ]
            },
            set: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '09', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '09', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bSet },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '09', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '09', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '09', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: (bAgo - 1 < 0 ? 0 : bSet/(bAgo-1)) },
                { subType: "Receita líquida", value: getTotalValue(data, get().selectedYear!, '09', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '09', 'Receita não recorrente', 'revenue') - getTotalValueExpenses(data, get().selectedYear!, '09', 'expense') }
              ]
            },
            out: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '10', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '10', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bOut },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '10', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '10', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '10', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: (bSet - 1 < 0 ? 0 : bOut/(bSet-1)) },
                { subType: "Receita líquida", value: getTotalValue(data, get().selectedYear!, '10', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '10', 'Receita não recorrente', 'revenue') - getTotalValueExpenses(data, get().selectedYear!, '10', 'expense') }
              ]
            },
            nov: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '11', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '11', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bNov },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '11', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '11', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '11', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: (bOut - 1 < 0 ? 0 : bNov/(bOut-1)) },
                { subType: "Receita líquida", value: getTotalValue(data, get().selectedYear!, '11', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '11', 'Receita não recorrente', 'revenue') - getTotalValueExpenses(data, get().selectedYear!, '11', 'expense') }
              ]
            },
            dez: {
              receita: [
                { subType: "Recorrente", value: getTotalValue(data, get().selectedYear!, '12', 'Receita recorrente', 'revenue') },
                { subType: "Não recorrente", value: getTotalValue(data, get().selectedYear!, '12', 'Receita não recorrente', 'revenue') },
                { subType: "Bruta", value: bDez },
              ],
              retirada: [
                { subType: "Despesas", value: getTotalValueExpenses(data, get().selectedYear!, '12', 'expense') },
                { subType: "Imposto", value: getTotalValue(data, get().selectedYear!, '12', 'Imposto', 'expense') },
                { subType: "Deduções", value: getTotalValue(data, get().selectedYear!, '12', 'Deduções', 'expense') },
              ],
              indicadores: [
                { subType: "Taxa de crescimento", value: (bNov - 1 < 0 ? 0 : bDez/(bNov-1)) },
                { subType: "Receita líquida", value: getTotalValue(data, get().selectedYear!, '12', 'Receita recorrente', 'revenue') + getTotalValue(data, get().selectedYear!, '12', 'Receita não recorrente', 'revenue') - getTotalValueExpenses(data, get().selectedYear!, '12', 'expense') }
              ]
            },
          }
        }

        set({
          mainData: myYearData,
          years: myYearData ? years : [],
          months: myYearData
            ? (Object.keys(Object.values(myYearData)[0]) as months[])
            : [],
          colTypes: myYearData
            ? Object.assign(
                Object.values(Object.values(Object.values(myYearData)[0]))[0]
              )
            : [],
          dataMatrix: Object.assign(
            Object.values(
              Object.values(
                Object.values(Object.values(myYearData[get().selectedYear!]))
              )
            ).map((col) =>
              Object.values(col)
                .map((c) =>
                  c.map((d) => {
                    return {
                      value: d.value/100,
                      isEditable: false,
                    };
                  })
                )
                .flat()
            )
          ),
        });
      } catch (err) {
        console.log(err);
      }
    },

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
    updateCol: (col: Media, newCol: string, oldCol: string) => {
      set((state) => {
        const newData = state.mainData;
        Object.keys(newData).forEach((year) => {
          Object.keys(newData[year]).forEach((month) => {
            newData[year][month as months] = {
              ...newData[year][month as months],
              [col]: [
                ...newData[year][month as months][col].map((c) =>
                  c.subType === oldCol ? { ...c, subType: newCol } : c
                ),
              ] as ColData[],
            };
          });
        });
        return {
          ...state,
          mainData: newData,
        };
      });
    },
    removeCol: (col: Media, colType: string) => {
      set((state) => {
        const newData = state.mainData;
        Object.keys(newData).forEach((year) => {
          Object.keys(newData[year]).forEach((month) => {
            newData[year][month as months] = {
              ...newData[year][month as months],
              [col]: [
                ...newData[year][month as months][col].filter((c) => {
                  return c.subType !== colType;
                }),
              ] as ColData[],
            };
          });
        });
        return {
          ...state,
          mainData: newData,
        };
      });
    },
    addCol: (col: Media, colType: string) => {
      set((state) => {
        const newData = state.mainData;
        Object.keys(newData).forEach((year) => {
          Object.keys(newData[year]).forEach((month) => {
            newData[year][month as months] = {
              ...newData[year][month as months],
              [col]: [
                ...newData[year][month as months][col],
                {
                  subType: colType,
                  value: 0,
                  isEditable: true,
                },
              ] as ColData[],
            };
          });
        });
        return {
          ...state,
          mainData: newData,
        };
      });
    },
  })
);

export default useMainTableData;
