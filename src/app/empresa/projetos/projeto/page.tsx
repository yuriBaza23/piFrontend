'use client'

import Sidebar from "@/components/ui/Sidebar";
import Board from "@/components/taskboard/Board";
import Header from "@/components/taskboard/Header";
import { sidebarCmpItems } from "../../../../lib/sidebarItems";

export default function About() {
  return (
    <div>
      <div className="layout">
        <Sidebar sidebarItems={sidebarCmpItems}/>
        {/* <Separator /> */}
        <div className="w-[calc(100vw-6em-4rem)]">
          <Header />
          <Board />
        </div>
      </div>
    </div>
  );
}
