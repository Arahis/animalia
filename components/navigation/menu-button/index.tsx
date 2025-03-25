import { Button } from "@/components/ui/button";
import { AlignCenter } from "lucide-react";

import React from "react";

const MenuButton = () => {
  return (
    <Button
      size="icon"
      className="rounded-[16px] aspect-square"
      variant="secondary"
    >
      <AlignCenter />
    </Button>
  );
};

export default MenuButton;
