'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export async function createSession(userToken: string,userID: string) {

    cookies().set('user-token',userToken , {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
    });

    cookies().set('user-id',userID , {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: '/',
    });



    redirect('/');
}

export async function verifySession(key?:string) {
    const cookie = cookies().get(key ?? 'user-token')?.value;


    if (!cookie) {
        redirect('/login');
    }

    return { isAuth: true, token: cookie };
}

export async function verifySessionUserID() {
    const cookie = cookies().get('user-id')?.value;


    if (!cookie) {
        redirect('/login');
    }

    return { isAuth: true, token: cookie };
}


export async function deleteSession() {

}
