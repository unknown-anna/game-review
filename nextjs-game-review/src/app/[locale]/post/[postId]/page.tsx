import type { FC } from 'react';

type Props = {
  params: Promise<{
    locale: "ja" | "en",
    postId: number
  }>;
}
const Post: FC<Props> = async ({ params }) => {
  const resolveParams = await params;

  return (
    <div>
      <h1>{resolveParams.postId}</h1>
    </div>
  );
}

export default Post