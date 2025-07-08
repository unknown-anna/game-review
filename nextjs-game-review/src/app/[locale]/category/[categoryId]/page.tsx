
import type { FC } from 'react';
import type { LanguageCode } from 'iso-639-1';
import { getLocale, getTranslations } from 'next-intl/server';
import styles from "@/lib/scss/Index.module.scss"; 
import { getPostList } from '@/lib/api/v1/post';
import PostMasonry from '@/components/organisms/PostMasonry';

type Props ={
  params: Promise<{
    locale: "ja" | "en",
    categoryId: number
  }>;
}
const Index: FC<Props> = async ({ params}) => {
  const t = await getTranslations('Meta');
  const resolveParams = await params;
  const PostList = await getPostList(0, 0);

  return (
    <main className={`w-5xl mx-auto pt-30 ${styles.index}`}>
      <PostMasonry PostList={PostList} />
    </main>
  );
}
export default Index