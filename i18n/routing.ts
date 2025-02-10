import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["ru", "ro", "en"], // Define in this line the possible languages for translation
  defaultLocale: "ru", // Define in this line the default language to be shown
  pathnames: {
    "/services": {
      ru: "/услуги",
      ro: "/servicii",
      en: "/services",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
