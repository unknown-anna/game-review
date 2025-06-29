import z from "zod";

export const PostSchema = z
.object({
	title: z.string(),
	slug: z.string(),
	content: z.string(),
});
export type Post = z.infer<typeof PostSchema>;

export const PostListSchema = z
.object({
	posts: z.array(PostSchema),
});
export type PostList = z.infer<typeof PostListSchema>;