"use client"
import React, {FormEventHandler, useEffect, useRef, useState} from 'react';
import {CiSearch} from "react-icons/ci";
import {IoSearch} from "react-icons/io5";
import {FiPaperclip} from "react-icons/fi";
import {IoMdSend} from "react-icons/io";
import {Button} from "@/app/components/ui/button";
import {addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, where} from "@firebase/firestore";

import {Avatar, AvatarImage} from "@/app/components/ui/avatar";

import {verifySession, verifySessionUserID} from "@/app/lib/services/session/session";
import {firestore} from "../../../../../firebase";
import Users from "@/app/(page)/(features-pages)/messages/Components/users";


interface responseMessage {
    createdAt?: {
        nanoseconds: number,
        seconds: number,

    }
    id?: string
    room?: string
    text?: string
    user?: string
}

const MessagingPage: React.FC = () => {

    const [user, setUser] = useState<{ id: string }>();


    const fetchUser = async () => {

        const {token} = await verifySessionUserID()

        const docRef = doc(firestore, 'users', token);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = ({id: docSnap.id, ...docSnap.data()})
            setUser(data);
        } else {
            console.log('Nfattah jago');
        }

    }


    useEffect(() => {

        fetchUser()

    }, []);

    if (user == null) return (<div className='text-4xl'>Loading...</div>);

    return (
        <main className={'flex h-screen'}>


            <aside className={'w-[22%] p-7 flex-col flex gap-10'}>


                <section className={'flex flex-col gap-3'}>
                    <h1 className={'font-bold text-2xl'}>messaging</h1>

                    <p className={'font-sm text-[#CECECE] line-clamp-1 text-xs'}>All chat that you need to do related to
                        project
                        can be do here.</p>


                    <div
                        className={'p-4 text-[#8A8A8A] items-center gap-4 bg-[#F8F8F8] rounded-2xl px-5 flex flex-row'}>
                        <IoSearch/>

                        <input placeholder={"Chat"} type="text"
                               className={'border  bg-[#F8F8F8] text-xs placeholder:text-xs border-none focus:outline-none w-full'}/>


                    </div>


                </section>


                <Users userData={user} />

            </aside>


        </main>
    );
};


export default MessagingPage;