"use client";

import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full h-[3.75rem] bg-white flex items-center justify-between px-4 shadow-md">
      <h1>Opa Play</h1>
      <div className="bg-white flex h-12 w-full md:w-[17.938em] items-center rounded-md border-2 border-[#DFDFDF]">
        <Input
          type="text"
          className="h-full w-full text-black pl-4 bg-transparent outline-none"
          placeholder="Pesquisar"
        />
      </div>
    </header>
  );
};

export default Header;
