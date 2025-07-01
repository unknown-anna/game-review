"use client";

import useSWR from "swr";
import { 
	GET_POST_WP_API_URL, 
	getPost 
} from ".";

export const usePost = () => {
	return useSWR(GET_POST_WP_API_URL, getPost);
};