import { BsBuildingAdd, BsHouseDoor, BsClipboardX, BsJournalBookmark, BsBank } from "react-icons/bs";

export const sidebarIncItems = [
  {
    name: "Home",
    href: "/",
    icon: BsHouseDoor,
  },
  {
    name: "Adicionar empresa",
    href: "/incubadora/pre-cadastro",
    icon: BsBuildingAdd,
  },
  {
    name: "Gerenciamento de advertências",
    href: "/incubadora/advertencia",
    icon: BsClipboardX,
  },
];

export const sidebarCmpItems = [
  {
    name: "Home",
    href: "/",
    icon: BsHouseDoor,
  },
  {
    name: "Projetos",
    href: "/empresa/projetos",
    icon: BsJournalBookmark,
  },
  {
    name: "Financeiro",
    href: "/empresa/financas",
    icon: BsBank
  }
];