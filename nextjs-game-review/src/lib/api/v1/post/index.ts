import { type PostList, PostListSchema } from "@/schema/PostSchema";
import { parseAsyncWithSchemaName } from "@/schema/namedParser";

export const GET_POST_WP_API_URL = "http://localhost:8080";
export const GET_POST_BY_CATEGORY_WP_API_URL = "http://localhost:8080";
export const GET_POST_BY_TAG_WP_API_URL = "http://localhost:8080";
export const getPost = async (): Promise<PostList> => {
	
	try {
		const data = await (
			await fetch(
				GET_POST_WP_API_URL,
				{
					next: { revalidate: 60 },
				}
			)
		).json();
		return await parseAsyncWithSchemaName(
			PostListSchema, 
			data,
			"PostListSchema"
		);
	} catch (error) {
		console.log(error);
		const emptyData: PostList = {
			posts: []
		}
	return await parseAsyncWithSchemaName(
			PostListSchema, 
			emptyData,
			"PostListSchema"
		);
	}
}