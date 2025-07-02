"use client";

import type { FC } from 'react';
import { 
  useGetPost
} from '@/lib/api/v1/post/hooks';
import Image from 'next/image'
import { Masonry } from "@mui/lab"
import { Card, CardMedia, CardContent, Typography } from "@mui/material"
import Link  from "next/link"

type Props = {
  tagId: number,
  categoryId: number
}
const PostList: FC<Props> = ({ tagId=0, categoryId=0 }) => {
	const { data: PostList, error, isLoading } = useGetPost(categoryId, tagId);

	return (
      <Masonry columns={3} spacing={0}>
        { isLoading && <div>Loading...</div> }

        { PostList?.posts.map((post) => (
          <Card 
            key={post.id}
            sx={{
              bgcolor: 'background.paper',
              boxShadow: 0,
              borderRadius: 0,
              p: 0,
            }}
          > 
            <CardContent
              sx={{
                bgcolor: 'background.paper',
                boxShadow: 0,
                borderRadius: 0,
                p: '1rem',
                '&:last-child': {
                  pb: '1rem',
                },
              }}
            >

              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                <Link href={`/category/${post.category.id}`} key={post.category.id}>
                  <span key={post.category.id}>{post.category.name}</span>
                </Link>
              </Typography>

              { post.thumbnail.url &&
                <CardMedia
                  component="img"
                  height={post.thumbnail.height}
                  image={post.thumbnail.url}
                  alt={post.title}
                />
              }

              <Typography 
                variant="h5" 
                component="div"
                sx = {{
                  lineHeight: '1.8rem',
                  py: '0.5rem',
                }}
              >
                {post.title}
              </Typography>

              <Typography 
                variant="body2"
                 sx = {{
                  mb: '0.5rem',
                }}
              >
                {post.excerpt}
              </Typography>

              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                {post.date}
              </Typography>
            </CardContent>
          </Card>
          )) 
        }
      </Masonry>
	)
}
export default PostList