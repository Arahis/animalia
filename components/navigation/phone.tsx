import React from "react";
import { Phone as PhoneIco } from "lucide-react";

const Phone = () => {
  return (
    <a
      href="tel:+37379761971"
      className="flex items-center gap-2 text-black hover:text-primary"
    >
      <PhoneIco size={18} />
      <h3 className="font-semibold">+373 79 761 971</h3>
    </a>
  );
};

export default Phone;
