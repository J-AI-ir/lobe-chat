import { DEFAULT_LANG } from '@/const/locale';

import resources from './default';

export const locales = [
  'en-US',
  'fa-IR',
  'zh-CN',
  'af'
] as const;

export type DefaultResources = typeof resources;
export type NS = keyof DefaultResources;
export type Locales = (typeof locales)[number];

export const normalizeLocale = (locale?: string): string => {
  if (!locale) return DEFAULT_LANG;
  if (locale.startsWith('fa')) return 'fa-IR';
  if (locale.startsWith('af')) return 'fa-IR';
  for (const l of locales) {
    if (l.startsWith(locale)) {
      return l;
    }
  }

  return DEFAULT_LANG;
};

type LocaleOptions = {
  label: string;
  value: Locales;
}[];

export const localeOptions: LocaleOptions = [
  {
    label: 'English',
    value: 'en-US',
  },
  {
    label: 'فارسی',
    value: 'fa-IR',
  },
] as LocaleOptions;

export const supportLocales: string[] = [...locales, 'en', 'fa'];
