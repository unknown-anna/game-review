
import type { FC } from 'react';
import type { LanguageCode } from 'iso-639-1';
import { getLocale, getTranslations } from 'next-intl/server';
import styles from "@/lib/scss/Index.module.scss"; 
import PortfolioList from '@/components/organisms/PortfolioList';

type Props ={
  params: Promise<{
    locale: "ja" | "en"
  }>;
}
const Index: FC<Props> = async ({ params}) => {
  const t = await getTranslations('Meta');
  const resolveParams = await params;

  return (
    <main className={`w-full ${styles.index}`}>
      <PortfolioList />
    </main>
  );
}
export default Index