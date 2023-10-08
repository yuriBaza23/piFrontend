"use client";
import Sidebar from "@/components/ui/Sidebar";
// import NewProject from "@/components/ui/NewProject";
import Board from "@/components/taskboard/Board";
import Header from "@/components/taskboard/Header";
import { Separator } from "@radix-ui/react-separator";
export default function About() {
  return (
    <div>
      <div className="layout">
        <Sidebar></Sidebar>
        {/* <Separator /> */}
        <div className="w-[calc(100vw-6em-4rem)]">
          <Header />
          <Board />
        </div>
      </div>
    </div>
  );
}
