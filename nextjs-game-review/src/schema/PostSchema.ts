import z from "zod";

export const PostCategorySchema = z
  .object({
    id: z.number(),
    name: z.string(),
    url: z.string(),
  })
export type PostCategory = z.infer<typeof PostCategorySchema>;

export const PostTagSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    url: z.string(),
  })
export type PostTag = z.infer<typeof PostTagSchema>;

export const PostSchema = z
	.object({
		id: z.number(),
		title: z.string(),
		author: z.string(),
		excerpt: z.string(),
		date: z.string(),
    category: z.array(PostCategorySchema),
		tag: z.array(PostTagSchema),
		content: z.string(),
	}).passthrough();
export type Post = z.infer<typeof PostSchema>;

export const PostListSchema = z
  .object({
    posts: z.array(PostSchema),
  });
export type PostList = z.infer<typeof PostListSchema>;
