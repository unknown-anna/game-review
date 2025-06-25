import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { handleLocaleRewrite } from "./lib/middleware/handleLocaleRewrite";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	
	const response = handleLocaleRewrite(request);
	// if(response) return response;

	return NextResponse.next();

}

export const config = {
  matcher: 
    /*
     * Only run middleware on app routes, not static files or _next
     */
    '/((?!_next|favicon.ico|robots.txt|api|.well-known|.*\\..*).*)',
}