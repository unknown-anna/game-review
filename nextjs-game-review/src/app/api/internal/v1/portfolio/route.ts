import "server-only";

import { type PortfolioList, PortfolioListSchema } from "@/schema/PortfolioSchema";
import { parseWithSchemaName } from "@/schema/namedParser";
import { NextResponse } from "next/server";
import logger from "@/lib/logger/logger";
import path from "node:path";
import fs from "node:fs";
import { withTiming } from "@/lib/api/withTiming";

const porfolioListPath = 
	path.join(process.cwd(), "/public/placeholder/portfolio.json");

const loadPortfolioData = () => {

	logger.debug(
		`getPortfolio() fetching portfolio from: ${porfolioListPath}...`
	);

	let dataString: string;
	try {
		dataString = fs.readFileSync(porfolioListPath, "utf-8");
	} catch (error) {
		logger.error(
			{err:error},
			`getPortfolio() failed to read file: ${error}`
		);
		throw error;
	}

	let parsedJSON: unknown;
	try {
		parsedJSON = JSON.parse(dataString);
	} catch (error) {
		logger.error(
			{err:error},
			`getPortfolio() faild to parse JSON: ${error}`
		);
	}

	try {
		return parseWithSchemaName(
			PortfolioListSchema, 
			parsedJSON,
			"PortfolioListSchema"
		);
	} catch (error) {
		logger.error(
			{err:error},
			`getPortfolio() failed to validate data with PortfolioListSchema: ${error}`
		);
	}
};

const getPortfolio = async () => {
	const portfolioData: PortfolioList = await loadPortfolioData();
	return NextResponse.json(portfolioData);
}
export const GET = withTiming(getPortfolio, process.env.API_INTERNAL_V1_URL);