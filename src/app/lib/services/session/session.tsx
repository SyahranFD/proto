'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export async function createSession(userToken: string) {

    cookies().set('user-token',userToken , {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
    });

    redirect('/');
}

export async function verifySession() {
    const cookie = cookies().get('user-token')?.value;


    if (!cookie) {
        redirect('/login');
    }

    return { isAuth: true, token: cookie };
}


export async function deleteSession() {

}
