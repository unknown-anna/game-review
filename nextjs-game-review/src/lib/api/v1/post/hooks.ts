"use client";

import useSWR from "swr";
import { 
	getPostList,
	getPost,
	GET_POST_LIST_WP_API_URL, 
	GET_POST_WP_API_URL, 
	GET_POST_BY_CATEGORY_WP_API_URL, 
	GET_POST_BY_TAG_WP_API_URL
} from ".";

export const useGetPostList = (categoryId: number, tagId: number) => {
	if(categoryId) {
		return useSWR(
			[GET_POST_BY_CATEGORY_WP_API_URL, categoryId],
			() => getPostList(categoryId, tagId)
		);
	} 
	if(tagId) {
		return useSWR(
			[GET_POST_BY_TAG_WP_API_URL, tagId],
			() => getPostList(categoryId, tagId)
		);
	}
	return useSWR(
		[GET_POST_LIST_WP_API_URL],
		() => getPostList(categoryId, tagId)
	);
};

export const useGetPost = (postId: number) => {
	return useSWR(
		[GET_POST_WP_API_URL],
		() => getPost(postId)
	);
}