
import type { FC } from 'react';
import type { LanguageCode } from 'iso-639-1';
import { getLocale, getTranslations } from 'next-intl/server';
import PostMasonry from '@/components/organisms/PostMasonry';
import { getPostList } from '@/lib/api/v1/post';
import styles from "@/lib/scss/Index.module.scss"; 
import LoadingScreen from '@/components/organisms/LoadingScreen';

type Props ={
  params: Promise<{
    locale: "ja" | "en"
  }>;
}
const Index: FC<Props> = async ({ params}) => {
  const PostList = await getPostList(0, 0);

  return (
    <main className={`w-5xl mx-auto pt-30 ${styles.index}`}>
      <LoadingScreen isLoading={PostList === undefined}/>
      <PostMasonry PostList={PostList} />
    </main>
  );
}
export default Index