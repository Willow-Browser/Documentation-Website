export const SITE = {
  title: "Willow Browser",
  description: "A Modern SNMP MIB Browser and Manager",
  defaultLanguage: "en_US",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: KnownLanguageCode;
  isMdx?: boolean;
};

export const KNOWN_LANGUAGES = {
  // Add more languages here
  en: "English",
} as const;
export type KnownLanguageCode = keyof typeof KNOWN_LANGUAGES;

// export const GITHUB_EDIT_URL = `https://github.com/t3-oss/create-t3-app/tree/next/www`;

// export const COMMUNITY_INVITE_URL = `https://t3.gg/discord`;

// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: "create-t3-app",
//   appId: "0LE5592BV4",
//   apiKey: "892c4647b96fe1b3d0b7d8de1c5b5e40",
// };

// export type OuterHeaders = "Willow Browser" | "Usage" | "Deployment";

export type SidebarItem<TCode extends KnownLanguageCode = KnownLanguageCode> = {
  text: string;
  link: `${TCode}/${string}`;
};
