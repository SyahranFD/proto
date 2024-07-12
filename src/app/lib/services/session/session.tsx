'use server'

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';



export async function createSession(userToken: string,userID: string,name:string) {

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

    cookies().set('user-name',name , {
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

export async function verifySessionUserID() {
    const cookie = cookies().get('user-id')?.value;


    if (!cookie) {
        redirect('/login');
    }

    return { isAuth: true, token: cookie };
}

export async function verifySessionName() {
    const cookie = cookies().get('user-name')?.value;


    if (!cookie) {
        redirect('/login');
    }

    return { isAuth: true, token: cookie };
}



export async function deleteSession(data:string) {
    cookies().delete(data)
    redirect('/login');
}
