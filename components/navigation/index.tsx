import React from "react";
import MenuButton from "./menu-button";
import Address from "./address";
import Phone from "./phone";
import Image from "next/image";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center my-4 h-full">
      <div className="flex items-center gap-8">
        <Image src="/logo.svg" alt="Animalia Vet" width={80} height={80} />
      </div>
      <div className="flex items-center gap-2 lg:gap-8">
        <Phone />
        <Address />
        <MenuButton />
      </div>
    </div>
  );
};

export default Navigation;
