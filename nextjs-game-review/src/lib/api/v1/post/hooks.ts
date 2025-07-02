"use client";

import useSWR from "swr";
import { 
	getPost,
	GET_POST_WP_API_URL, 
	GET_POST_BY_CATEGORY_WP_API_URL, 
	GET_POST_BY_TAG_WP_API_URL
} from ".";

export const useGetPost = (categoryId: number, tagId: number) => {
	if(categoryId) {
		return useSWR(
			[GET_POST_BY_CATEGORY_WP_API_URL, categoryId],
			() => getPost(categoryId, tagId)
		);
	} 
	if(tagId) {
		return useSWR(
			[GET_POST_BY_TAG_WP_API_URL, tagId],
			() => getPost(categoryId, tagId)
		);
	}
	return useSWR(
		[GET_POST_WP_API_URL],
		() => getPost(categoryId, tagId)
	);
};