import { routing } from "@/i18n/routing";
import type { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

export function handleLocaleRewrite (
	request: NextRequest
): NextResponse | undefined {

	const { pathname } = request.nextUrl;
	const locale = request.headers.get("user-Language") || 'ja';
	
	if( pathname.startsWith("/en") || pathname.startsWith("/ja") )
		return undefined;

	request.nextUrl.pathname = `/${locale}`;

	if( pathname !== "/") 
	request.nextUrl.pathname = `${pathname}`;

	const intlMiddleware = createMiddleware(routing);
	return intlMiddleware(request);
}