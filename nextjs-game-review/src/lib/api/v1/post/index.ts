import { 
  type PostList, PostListSchema,
  type Post, PostSchema,
  type PostThumbnail, PostThumbnailSchema,
  type PostCategory, PostCategorySchema,
  type PostTag, PostTagSchema
} from "@/schema/PostSchema";
import { parseAsyncWithSchemaName } from "@/schema/namedParser";

export const GET_POST_LIST_WP_API_URL = "http://localhost:8080";
export const GET_POST_WP_API_URL = "http://localhost:8080?p=";
export const GET_POST_BY_CATEGORY_WP_API_URL = "http://localhost:8080?cat=";
export const GET_POST_BY_TAG_WP_API_URL = "http://localhost:8080?tag=";

export const getPostList = async (
  categoryId: number, 
  tagId: number
): Promise<PostList> => {
  let apiUrl: string;

  if(categoryId) {
    apiUrl = GET_POST_BY_CATEGORY_WP_API_URL+categoryId;
  } else if(tagId) {
    apiUrl = GET_POST_BY_TAG_WP_API_URL+tagId;
  } else {
    apiUrl = GET_POST_LIST_WP_API_URL
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

export const getPost = async (
  postId: number, 
): Promise<Post> => {

	try {
		const data = await (
			await fetch(
				GET_POST_WP_API_URL+postId,
				{
					next: { revalidate: 60 },
				}
			)
		).json();
		return await parseAsyncWithSchemaName(
			PostSchema, 
			data,
			"PostSchema"
		);
	} catch (error) {
    console.log(error);
    const emptyData: Post = {
      id: 0,
      title: "",
      author: "",
      excerpt: "",
      date: "",
      category: PostCategorySchema.parse({}),
      tag: [],
      thumbnail: PostThumbnailSchema.parse({}),
      content: ""
    }
	return await parseAsyncWithSchemaName(
			PostSchema, 
			emptyData,
			"PostSchema"
		);
	}
}
