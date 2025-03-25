"use client";

import React, { useTransition } from "react";

import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

const SwitchItem = ({
  onClick,
  locale,
  currentLocale,
}: {
  onClick: (v: Locale) => void;
  locale: Locale;
  currentLocale: Locale;
}) => {
  const isSelected = locale === currentLocale;
  const localeSelect = () => onClick(locale);

  return (
    <button
      onClick={localeSelect}
      className={`text-xs font-semibold pl-4 ${
        isSelected
          ? "text-black relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-primary before:rounded-full"
          : "text-gray hover:text-primary"
      }`}
    >
      {locale.toUpperCase()}
    </button>
  );
};

const LanguageSwitch = () => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function handleSelectLocale(locale: Locale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: locale }
      );
    });
  }

  return (
    <div className="flex flex-col gap-2">
      {routing.locales.map((v) => (
        <SwitchItem
          key={v}
          onClick={handleSelectLocale}
          locale={v}
          currentLocale={params.locale as Locale}
        />
      ))}
    </div>
  );
};

export default LanguageSwitch;
