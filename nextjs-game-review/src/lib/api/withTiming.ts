import type { NextRequest, NextResponse } from "next/server";
import logger from "../logger/logger";

export const withTiming = <
	T extends (
		req: NextRequest,
		//biome-ignore lint/suspicious/noExplicitAny: <explanation>
		props: { params: Promise<any> }
	) => Promise<NextResponse>,
>(
	handler: T,
	routeName = "",
	threshold = 300,
): T => {
	return (async (request: NextRequest, props) => {
		const start = Date.now();
		const res = await handler(request, props);
		const duration = Date.now() - start;
		
		if(duration > threshold) {
			logger.warn(
				`[SLOW API] ${request.method} ${request.url} ${routeName} took ${duration}ms`,
			);
		}

		return res;
	}) as T;
}