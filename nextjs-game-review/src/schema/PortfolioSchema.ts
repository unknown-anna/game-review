import z from "zod";

export const PortfolioSchema = z
.object({
	title: z.string().nullable(),
	filename: z.string(),
	width: z.number(),
	height: z.number(),
});
export type Portfolio = z.infer<typeof PortfolioSchema>;

export const PortfolioListSchema = z
.object({
	portfolios: z.array(PortfolioSchema),
});
export type PortfolioList = z.infer<typeof PortfolioListSchema>;
