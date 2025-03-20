"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Heart } from "lucide-react";

import { Logo } from "@/constants/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeaderProps } from "@/types/video";
import Image from "next/image";

const Header = ({
  onToggleShowFavorites,
  isShowingFavorites,
  onSearch,
}: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm.trim());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      onSearch("");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[5em] flex items-center justify-between px-8 md:px-10 z-1 shadow-2xl">
      <div className="bg-[#DC33F9] fixed w-screen h-0.5 top-0 left-0 z-1 shadow-md"></div>

      <Link href="/" onClick={() => (window.location.href = "/")}>
        <Image src={Logo.logo} alt={Logo.title} width={80} height={80} />
      </Link>

      <div className="flex h-10 w-full  md:w-[40em] mr-2 md:mr-0 items-center rounded-4xl border-none bg-[#292D38]">
        <Input
          type="text"
          className="h-full w-full bg-[#131927] text-white pl-4 border-none rounded-l-4xl rounded-r-none  outline-none focus:ring-0 focus:border-transparent"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <span className="p-6 cursor-pointer " onClick={handleSearch}>
          <Search size={18} className="text-white" />
        </span>
      </div>

      <Button
        className={`p-5 rounded-full cursor-pointer ${
          isShowingFavorites ? "bg-red-500 text-white" : "bg-[#292D38]"
        }`}
        onClick={onToggleShowFavorites}
      >
        <Heart />
      </Button>
    </header>
  );
};

export default Header;
