import { BsBuildingAdd, BsHouseDoor, BsClipboardX, BsJournalBookmark } from "react-icons/bs";

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
];