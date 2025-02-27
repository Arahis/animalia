import { useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const t = useTranslations("MainPage.hero");
  return (
    <div className="w-full bg-primary p-8 rounded-3xl">
      <h1 className="text-7xl font-bold text-black">{t("title")}</h1>
      <p className="text-xl font-semibold text-white">{t("description")}</p>
    </div>
  );
};

export default Hero;
