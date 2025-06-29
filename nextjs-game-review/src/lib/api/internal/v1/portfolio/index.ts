import { type PortfolioList, PortfolioListSchema } from "@/schema/PortfolioSchema";
import { parseAsyncWithSchemaName } from "@/schema/namedParser";

export const GET_PORTFOLIO_URL = "api/internal/v1/portfolio";
export const getPortfolio = async (): Promise<PortfolioList> => {
	try { 
		const data = await (
			await fetch(
				GET_PORTFOLIO_URL,
				{
					next: { revalidate: 60 },
				}
			)
		).json();

		return await parseAsyncWithSchemaName(
			PortfolioListSchema, 
			data,
			"PortfolioListSchema"
		);
	} catch (error) {
    const emptyData: PortfolioList = {
      portfolios: []
    }
    return await parseAsyncWithSchemaName(
			PortfolioListSchema, 
			emptyData,
			"PortfolioListSchema"
		);
	}
	
}