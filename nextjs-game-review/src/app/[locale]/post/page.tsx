import type { FC } from 'react';

type Props ={
  params: Promise<{
    locale: "ja" | "en"
  }>;
}
const Post: FC<Props> = async ({ params}) => {
  const resolveParams = await params;

  return (
    <div>
      this is Post
      <p>locale = {resolveParams.locale}</p>
    </div>
  );
}

export default Post