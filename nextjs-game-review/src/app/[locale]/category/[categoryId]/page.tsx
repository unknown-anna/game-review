
import type { FC } from 'react';
import type { LanguageCode } from 'iso-639-1';
import { getLocale, getTranslations } from 'next-intl/server';
import styles from "@/lib/scss/Index.module.scss"; 
import PostList from '@/components/organisms/PostList';

type Props ={
  params: Promise<{
    locale: "ja" | "en",
    categoryId: number
  }>;
}
const Index: FC<Props> = async ({ params}) => {
  const t = await getTranslations('Meta');
  const resolveParams = await params;

  return (
    <main className={`w-5xl mx-auto pt-30 ${styles.index}`}>
      <PostList tagId={0} categoryId={resolveParams.categoryId} />
    </main>
  );
}
export default Index