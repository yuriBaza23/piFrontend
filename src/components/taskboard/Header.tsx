"use client";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import { stat } from "fs";
import { useEffect, useState } from "react";
// import fetchSuggestion from "@/lib/fetchSuggestion";

function Header() {
  const [/*board,*/ searchString, setSearchString] = useBoardStore((state) => [
    //state.board,
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-[#26282a] justify-between rounded-b-2xl w-[calc(100w-6em-4rem)]">
        <div className="flex items-center space-x-5 rounded-md  shadow-md flex-1 md:flex-initial">
          <h2>Projeto</h2>
        </div>

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}
          <form className="flex items-center space-x-5 bg-black/30 rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/* Avatar
          <Avatar
            name="Gabriela Paola Sereniski"
            round
            size="50"
            color="#0054d1"
          /> */}
        </div>
      </div>

      {/* <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1] p-5 py-2">
          <UserCircleIcon
            className={`inline-block h-10 w-10 text-[#0055d1] mr-1 ${
              loading && "animate-spin"
            }`}
          />
          {suggestion && !loading
            ? suggestion
            : "GPT is summarising your tasks for the day..."}
        </p>
      </div> */}
    </header>
  );
}

export default Header;
