import {
  ColData,
  months,
  Media,
  monthData,
  colTypes,
  DataPerSellerPerMonth,
} from "./types";
import { create } from "zustand";

export interface MainTableColsProps {
  mainSellerData: DataPerSellerPerMonth;
  sellerMonths: months[];
  sellerNames: string[];
  sellerColTypes: colTypes[];
  sellerDataMatrix: {
    value: number;
    isEditable: boolean;
  }[][];
  changeCellValue: (
    month: months,
    seller: string,
    col: Media,
    colType: string,
    value: number
  ) => void;
  selectedMonth?: months;
  changeSelectedMonth?: (month: months) => void;
  resetSellerData: () => void;
}

const useMainTableSellerData = create<MainTableColsProps>()(
  (set, get): MainTableColsProps => ({
    mainSellerData: monthData,
    sellerNames: monthData ? Object.keys(Object.values(monthData)[0]) : [],

    selectedMonth: monthData ? (Object.keys(monthData)[0] as months) : "jan",
    changeSelectedMonth: (month: months) => {
      set({ selectedMonth: month });
    },

    sellerMonths: monthData ? (Object.keys(monthData) as months[]) : [],
    sellerColTypes: monthData
      ? Object.assign(
          Object.values(Object.values(Object.values(monthData))[0])[0]
        )
      : [],
    sellerDataMatrix: Object.assign(
      Object.values(
        Object.values(Object.values(Object.values(monthData[`jan`])))
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
    resetSellerData: () => {
      set({
        mainSellerData: monthData,
        sellerNames: monthData ? Object.keys(Object.values(monthData)[0]) : [],
        sellerMonths: monthData ? (Object.keys(monthData) as months[]) : [],
        sellerColTypes: monthData
          ? Object.assign(
              Object.values(Object.values(Object.values(monthData))[0])[0]
            )
          : [],
        sellerDataMatrix: Object.assign(
          Object.values(
            Object.values(
              Object.values(Object.values(monthData[get().selectedMonth!]))
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
    changeCellValue: (
      month: months,
      seller: string,
      col: Media,
      colType: string,
      value: number
    ) => {
      set((state) => {
        const newData = state.mainSellerData;
        newData[month][seller][col] = [
          ...newData[month][seller][col].map((c) => {
            return c.subType === colType ? { ...c, value: value } : c;
          }),
        ] as ColData[];
        return {
          ...state,
          mainSellerData: newData,
        };
      });
    },
  })
);

export default useMainTableSellerData;
