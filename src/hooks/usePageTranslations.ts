import { useTranslations } from 'next-intl';

export function usePageTranslations(page: string, section: string) {
  return useTranslations(`pages.${page}.${section}`);
}
