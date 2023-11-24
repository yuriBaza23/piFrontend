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
  resetData: () => void;
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

    resetData: () => {
      set({
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
            Object.values(
              Object.values(Object.values(yearData[get().selectedYear!]))
            )
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
      });
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
