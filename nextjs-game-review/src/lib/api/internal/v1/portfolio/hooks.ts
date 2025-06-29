"use client";

import useSWR from "swr";
import { GET_PORTFOLIO_URL, getPortfolio } from ".";

export const usePortfolio = () => {
	return useSWR(GET_PORTFOLIO_URL, getPortfolio);
};