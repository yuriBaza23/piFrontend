'use client'
import Sidebar from "@/components/ui/Sidebar";
import Board from "@/components/taskboard/Board";
import Header from "@/components/taskboard/Header";
import { sidebarCmpItems } from "../../../../lib/sidebarItems";

export default function About() {
  return (
    <div className="layout">
      <Sidebar sidebarItems={sidebarCmpItems} />
      {/* <Separator /> */}
      <div className="content">
        <div className="w-[calc(100vw-6em-4rem)] mx-auto">
          <Header />
          <Board />
        </div>
      </div>
    </div>
  );
}
