import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isLogin = request.cookies.get('logged');
  const locale = request.nextUrl.locale;
  if (!isLogin) {
    if (request.nextUrl.pathname.startsWith('/main')) {
      return NextResponse.redirect(new URL(`${locale}/signin`, request.url));
    }
  } else if (isLogin) {
    if (request.nextUrl.pathname.startsWith(`/sign`)) {
      return NextResponse.redirect(new URL(`${locale}/main`, request.url));
    }
  }
}
