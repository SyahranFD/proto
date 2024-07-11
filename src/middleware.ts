import {NextRequest, NextResponse} from 'next/server';
import {cookies} from 'next/headers';

const protectedRoutes = ['/'];
const publicRoutes = ['/login', '/signup'];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = cookies().get('user-token')?.value;

    if (isProtectedRoute
        && !cookie
    ) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (
        isPublicRoute &&
        cookie &&
        req.nextUrl.pathname.startsWith('/')
    ) {
        return NextResponse.redirect(new URL('/', req.nextUrl));
    }

    return NextResponse.next();
}
