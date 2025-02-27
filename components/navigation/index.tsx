import { routing } from "@/i18n/routing";
import React from "react";

const Navigation = () => {
  return (
    <div>
      {routing.locales.map((v) => (
        <p key={v}>{v}</p>
      ))}
    </div>
  );
};

export default Navigation;
