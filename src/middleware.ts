import { NextRequest, NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get('logged');
  if (!isLogin) {
    if (request.nextUrl.pathname.startsWith('/main')) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  } else if (isLogin) {
    if (request.nextUrl.pathname.startsWith('/sign')) {
      return NextResponse.redirect(new URL('/main', request.url));
    }
  }
}
