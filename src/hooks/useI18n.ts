"use client";
import { useTranslations } from 'next-intl';

export const useI18n = (namespace?: string) => {
  const t = useTranslations(namespace);
  return { t };
};
