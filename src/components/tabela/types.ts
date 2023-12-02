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
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],      
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
  },
  2021: {
    jan: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],      
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
  },
  2022: {
    jan: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],      
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
  },
  2023: {
    jan: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],      
    },
    fev: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    mar: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    abr: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    mai: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    jun: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    jul: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    ago: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    set: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    out: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    nov: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
    dez: {
      receita: [
        { subType: "Recorrente", value: 123 },
        { subType: "Não recorrente", value: 123 },
        { subType: "Bruta", value: 123 },
      ],
      retirada: [
        { subType: "Despesas", value: 123 },
        { subType: "Imposto", value: 123 },
        { subType: "Deduções", value: 123 },
      ],
      indicadores: [
        { subType: "Taxa de crescimento", value: 123 },
        { subType: "Receita líquida", value: 123 },
        { subType: "Lucro bruto", value: 123 },
      ],
    },
  },
} as DataPerYear;

export const monthData = {
  jan: {
    fernanda: {
      receita: [
        { subType: "recorrente", value: 123, isEditable: true },
        { subType: "não recorrente", value: 123, isEditable: true },
        { subType: "bruta", value: 123, isEditable: true },
      ],
      retirada: [
        { subType: "sales", value: 0, isEditable: true },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0, isEditable: true },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 , isEditable: true},
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 , isEditable: true},
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
  abr: {
    fernanda: {
      receita: [
        { subType: "institutional", value: 13 },
        { subType: "sac", value: 13 },
        { subType: "shopping", value: 13 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0, isEditable: true },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0, isEditable: true },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 , isEditable: true},
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
  jul: {
    fernanda: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
  out: {
    fernanda: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
  fev: {
    fernanda: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
  mai: {
    fernanda: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
  ago: {
    fernanda: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
  nov: {
    fernanda: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
  mar: {
    fernanda: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
  jun: {
    fernanda: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
  set: {
    fernanda: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
  dez: {
    fernanda: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
    Marcelo: {
      receita: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      retirada: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      indicadores: [
        { subType: "clean-up", value: 0 },
        { subType: "soinvie", value: 0 },
      ],
      pipefy: [{ subType: "clean-up", value: 0 }],
      soinvieMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "soinvieSac", value: 0 },
        { subType: "soinvieSupport", value: 0 },
      ],
      soinvieWhatsapp: [
        { subType: "soinvieInstitutional", value: 0 },
        { subType: "soinvieOnline", value: 0 },
      ],
    },
  },
} as DataPerSellerPerMonth;
