"use client";

import type { FC } from 'react';
import { 
  useGetPost
} from '@/lib/api/v1/post/hooks';
import type { Post } from "@/schema/PostSchema";
import Image from 'next/image'
import { Box, Typography, Skeleton } from "@mui/material"
import HTMLReactParser from 'html-react-parser';
import styles from "@/lib/scss/PostContent.module.scss"; 

type Props = {
  Post: Post
}
const PostContent: FC<Props> = ({ Post }) => {
  
	return (
    <Box>
      <div>
        <Typography variant="h3">{Post?.title}</Typography>

        { Post?.thumbnail && 
          <Image
            src={Post.thumbnail.url}
            width={Post.thumbnail.width}
            height={Post.thumbnail.height}
            alt={Post.title}
            className='py-5'
          />
        }

        {
          Post?.content && 
          <Typography variant="body1" component={"div"} className={`${styles.post_content}`}>
            { HTMLReactParser(Post.content) }
          </Typography>
        }

      </div>
    </Box>
	)
}
export default PostContent