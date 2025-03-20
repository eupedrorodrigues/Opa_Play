"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeaderProps } from "@/types/video";

const Header = ({ onToggleShowFavorites, isShowingFavorites }: HeaderProps) => {
  return (
    <header className="absolute top-0 left-0 w-full h-[3.75rem] bg-white flex items-center justify-between px-4 shadow-md">
      <Link href="/">
        <h1>Opa Play</h1>
      </Link>

      <div className="bg-white flex h-12 w-full md:w-[17.938em] items-center rounded-md border-2 border-[#DFDFDF]">
        <Input
          type="text"
          className="h-full w-full text-black pl-4 bg-transparent outline-none"
          placeholder="Pesquisar"
        />
      </div>

      <Button
        className={`p-2 rounded-full cursor-pointer ${
          isShowingFavorites ? "bg-red-500 text-white" : "bg-gray-300"
        }`}
        onClick={onToggleShowFavorites}
      >
        ❤️
      </Button>
    </header>
  );
};

export default Header;
