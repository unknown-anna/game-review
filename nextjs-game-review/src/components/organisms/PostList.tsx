"use client";

import type { FC } from 'react';
import { usePost } from '@/lib/api/v1/post/hooks';
import Image from 'next/image'
import { Masonry } from "@mui/lab"
import { Card, CardContent, Typography } from "@mui/material"
import Link  from "next/link"

type Props = {
  tagId: number,
  categoryId: number
}
const PostList: FC<Props> = ({ tagId=0, categoryId=0 }) => {
	const { data: PostList, error, isLoading } = usePost();

	return (
      <Masonry columns={3} spacing={2}>
        { isLoading && <div>Loading...</div> }

        { PostList?.posts.map((post) => (
          <Card variant="outlined" key={post.id}> 
            <CardContent>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                { post.category.map((category) => (
                  <Link href={`/category/${category.id}`} key={category.id}>
                    <span key={category.id}>{category.name}</span>
                  </Link>
                ))}
              </Typography>
              <Typography variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography variant="body2">
                {post.excerpt}
              </Typography>
            </CardContent>
          </Card>
          )) 
        }
      </Masonry>
	)
}
export default PostList