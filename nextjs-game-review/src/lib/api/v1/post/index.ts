import { type PostList, PostListSchema } from "@/schema/PostSchema";
import { parseAsyncWithSchemaName } from "@/schema/namedParser";
import { abortOnSynchronousPlatformIOAccess } from "next/dist/server/app-render/dynamic-rendering";

export const GET_POST_WP_API_URL = "http://localhost:8080";
export const GET_POST_BY_CATEGORY_WP_API_URL = "http://localhost:8080?cat=";
export const GET_POST_BY_TAG_WP_API_URL = "http://localhost:8080?tag=";

export const getPost = async (
  categoryId: number, 
  tagId: number
): Promise<PostList> => {
  let apiUrl: string;

  if(categoryId) {
    apiUrl = GET_POST_BY_CATEGORY_WP_API_URL+categoryId;
  } else if(tagId) {
    apiUrl = GET_POST_BY_TAG_WP_API_URL+tagId;
  } else {
    apiUrl = GET_POST_WP_API_URL
  }

	try {
		const data = await (
			await fetch(
				apiUrl,
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
