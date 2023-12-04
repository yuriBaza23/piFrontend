export type Media =
  | "indicadores"
  | "receita"
  | "retirada";

export type months =
  | "jan"
  | "fev"
  | "mar"
  | "abr"
  | "mai"
  | "jun"
  | "jul"
  | "ago"
  | "set"
  | "out"
  | "nov"
  | "dez";

export const translateMonth = (month: months) => {
  switch (month) {
    case "jan":
      return "Janeiro";
    case "fev":
      return "Fevereiro";
    case "mar":
      return "Março";
    case "abr":
      return "Abril";
    case "mai":
      return "Maio";
    case "jun":
      return "Junho";
    case "jul":
      return "Julho";
    case "ago":
      return "Agosto";
    case "set":
      return "Setembro";
    case "out":
      return "Outubro";
    case "nov":
      return "Novembro";
    case "dez":
      return "Dezembro";
  }
};

export const translateMedia = (media: Media) => {
  switch (media) {
    case "indicadores":
      return "Indicadores financeiros";
    case "receita":
      return "Receita";
    case "retirada":
      return "Saídas";
  }
};

export type ColData = {
  subType: string;
  value: number;
  isEditable?: boolean;
};

export type DataPerType = {
  [key in Media]: ColData[];
};

export type DataPerMonth = {
  [key in months]: DataPerType;
};

export type DataPerYear = {
  [key: string]: DataPerMonth;
};

export type colTypes = {
  [key: string]: string[];
};

export type DataPerSeller = {
  [key: string]: DataPerType;
};

export type DataPerSellerPerMonth = {
  [key in months]: DataPerSeller;
};

export const yearData = {
  2020: {
    jan: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
  },
  2021: {
    jan: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
  },
  2022: {
    jan: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
  },
  2023: {
    jan: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: false },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: false },
        { subType: "Receita líquida", value: 0, isEditable: false },
        { subType: "Lucro líquido", value: 0, isEditable: false },
      ],
    },
  },
} as DataPerYear;

export const monthData = {
  jan: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
  abr: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
  jul: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
  out: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
  fev: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
  mai: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
  ago: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
  nov: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
  mar: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
  jun: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
  set: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
  dez: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true },
        { subType: "Não recorrente", value: 0, isEditable: true },
        { subType: "Bruta", value: 0, isEditable: true },
      ],
      retirada: [
        { subType: "Despesas", value: 0, isEditable: true },
        { subType: "Imposto", value: 0, isEditable: true },
        { subType: "Deduções", value: 0, isEditable: true },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0, isEditable: true },
        { subType: "Receita líquida", value: 0, isEditable: true },
        { subType: "Lucro bruto", value: 0, isEditable: true },
      ],
    },
  },
} as DataPerSellerPerMonth;
