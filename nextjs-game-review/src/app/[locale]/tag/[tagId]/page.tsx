
import type { FC } from 'react';
import type { LanguageCode } from 'iso-639-1';
import { getLocale, getTranslations } from 'next-intl/server';
import styles from "@/lib/scss/Index.module.scss"; 
import PostList from '@/components/organisms/PostMasonry';

type Props ={
  params: Promise<{
    locale: "ja" | "en",
    tagId: number
  }>;
}
const Index: FC<Props> = async ({ params}) => {
  const t = await getTranslations('Meta');
  const resolveParams = await params;

  return (
    <main className={`w-5xl mx-auto pt-30 ${styles.index}`}>
      <PostList categoryId={0} tagId={resolveParams.tagId}/>
    </main>
  );
}
export default Index