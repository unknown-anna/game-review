import  type { FC } from 'react';
import styles from "@/lib/scss/Index.module.scss"; 
import PostContent from '@/components/organisms/PostContent';
import { getPost } from '@/lib/api/v1/post';
import { notFound } from 'next/navigation';
import LoadingScreen from '@/components/organisms/LoadingScreen';

type Props = {
  params: Promise<{
    locale: "ja" | "en",
    postId: number
  }>;
}
const Post: FC<Props> = async ({ params }) => {
  const resolveParams = await params;
  const Post = await getPost(resolveParams.postId);

  if(!Post) {
    notFound();
  }

  return (
    <main className={`w-2xl mx-auto pt-30 ${styles.index}`}>
      <LoadingScreen isLoading={ Post === null } />
      <PostContent Post={Post} />      
    </main>
  );
}

export default Post