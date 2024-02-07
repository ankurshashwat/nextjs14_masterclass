import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="relative flex min-h-[56px] background-light800_darkgradient grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search..."
          value=" "
          className="parahgraph-regular no-focus placeholder bg-transparent border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
