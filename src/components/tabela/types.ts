export type Media =
  | "phoneCall"
  | "soinvieMail"
  | "cleanUpMail"
  | "pipefy"
  | "cleanUpWhatsapp"
  | "soinvieWhatsapp";

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
    case "phoneCall":
      return "Ligação telefônica";
    case "soinvieMail":
      return "E-mail Soinvie";
    case "cleanUpMail":
      return "E-mail Clean Up";
    case "pipefy":
      return "Pipefy";
    case "cleanUpWhatsapp":
      return "Whatsapp Clean Up";
    case "soinvieWhatsapp":
      return "Whatsapp Soinvie";
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    fev: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    mar: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    abr: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    mai: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    jun: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    jul: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    ago: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    set: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    out: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    nov: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    dez: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
  2021: {
    jan: {
      cleanUpMail: [
        { subType: "institutional", value: 5 },
        { subType: "sac", value: 6 },
        { subType: "shopping", value: 7 },
        { subType: "sales", value: 8 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    fev: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    mar: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    abr: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    mai: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    jun: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    jul: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    ago: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    set: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    out: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    nov: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    dez: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
  2022: {
    jan: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    fev: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    mar: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    abr: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    mai: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    jun: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    jul: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    ago: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    set: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    out: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    nov: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    dez: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
  2023: {
    jan: {
      cleanUpMail: [
        { subType: "institutional", value: 1, isEditable: true },
        { subType: "sac", value: 2, isEditable: true },
        { subType: "shopping", value: 3 },
        { subType: "sales", value: 4 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0, isEditable: true },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    fev: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    mar: {
      cleanUpMail: [
        { subType: "institutional", value: 0, isEditable: true },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    abr: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    mai: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    jun: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    jul: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    ago: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    set: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    out: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    nov: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
    dez: {
      cleanUpMail: [
        { subType: "institutional", value: 0 },
        { subType: "sac", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sales", value: 0 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
} as DataPerYear;

export const monthData = {
  jan: {
    fernanda: {
      cleanUpMail: [
        { subType: "institutional", value: 123, isEditable: true },
        { subType: "sac", value: 123, isEditable: true },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 , isEditable: true},
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0, isEditable: true },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0, isEditable: true },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 13 },
        { subType: "sac", value: 13 },
        { subType: "shopping", value: 13 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0, isEditable: true },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
      cleanUpMail: [
        { subType: "institutional", value: 123 },
        { subType: "sac", value: 123 },
        { subType: "shopping", value: 123 },
        { subType: "sales", value: 123 },
      ],
      cleanUpWhatsapp: [
        { subType: "sales", value: 0 },
        { subType: "shopping", value: 0 },
        { subType: "sac", value: 0 },
      ],
      phoneCall: [
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
