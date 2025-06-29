"use client";

import type { FC } from 'react';
import { usePost } from '@/lib/api/v1/post/hooks';
import Image from 'next/image'
import { Masonry } from "@mui/lab"

const PostList: FC = () => {
	const { data: PostList, error, isLoading } = usePost();

	return (
      <Masonry columns={4} spacing={0}>
        { isLoading && <div>Loading...</div> }

        { PostList?.posts.map((post) => (
          <div key={post.id}>
          </div>
          )) 
        }
      </Masonry>
	)
}
export default PostList