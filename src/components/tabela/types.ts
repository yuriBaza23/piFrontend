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

export type Seller = {
  name: string;
  status: boolean;
  quantity: number;
  disabled?: boolean;
};

export const yearData = {
  2020: {
    jan: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],      
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
  },
  2021: {
    jan: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],      
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
  },
  2022: {
    jan: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],      
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
  },
  2023: {
    jan: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],      
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 0 },
        { subType: "Não recorrente", value: 0 },
        { subType: "Bruta", value: 0 },
      ],
      retirada: [
        { subType: "Despesas", value: 0 },
        { subType: "Imposto", value: 0 },
        { subType: "Deduções", value: 0 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 0 },
        { subType: "Receita líquida", value: 0 },
        { subType: "Lucro bruto", value: 0 },
      ],
    },
  },
} as DataPerYear;

export const monthData = {
  jan: {
    fernanda: {
      receita: [
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
        { subType: "Recorrente", value: 0, isEditable: true},
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
