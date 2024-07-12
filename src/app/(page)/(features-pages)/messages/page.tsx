"use client"
import React, {FormEventHandler, useEffect, useRef, useState} from 'react';
import {CiSearch} from "react-icons/ci";
import {IoSearch} from "react-icons/io5";
import {Avatar, AvatarFallback, AvatarImage} from "@/app/components/ui/avatar";
import {FiPaperclip} from "react-icons/fi";
import {IoMdSend} from "react-icons/io";
import {Button} from "@/app/components/ui/button";
import {addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where} from "@firebase/firestore";
import {auth, firestore} from "../../../../../firebase";



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

    const [messages, setMessages] = useState<string>("");
    const [messagesList, setMessagesList] = useState<responseMessage[]>([]);

    const bodyChat = useRef()

    const mesageRef = collection(firestore, "messages");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (messages == "") return;


        await addDoc(mesageRef, {
            text: messages,
            createdAt: serverTimestamp(),
            user: "daffa",
            room: "messi"
        })

        setMessages("")
    }

    useEffect(() => {
        const queryMessagesOrder = query(mesageRef, orderBy("createdAt", "asc"));

        const unsubscribe = onSnapshot(queryMessagesOrder, (snapshot) => {

            const data: responseMessage[] = []
            snapshot.forEach((doc) => {
                data.push({...doc.data(), id: doc.id})

            })

            setMessagesList(data)
        })

        return () => unsubscribe()
    }, []);

    return (
        <main className={'flex h-screen'}>


            <aside className={'w-[21%] p-7 flex-col flex gap-10'}>


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


                <section className={'flex flex-col gap-3'}>

                    <div className={'h-fit w-full flex items-center space-x-5  justify-between flex-row '}>
                        <Avatar className={'h-16 w-16   '}>
                            <AvatarImage src="https://github.com/shadcn.png"/>
                        </Avatar>

                        <div className={'flex-1 space-y-2'}>
                            <p className={'font-bold'}>Alex Benjamin</p>
                            <p className={'line-clamp-1 text-sm'}>Hello there nice to meet you. Can i join...</p>

                        </div>

                        <div className={'flex  space-y-2 flex-col justify-end items-end'}>
                            <p className={'font-bold'}>15:00</p>

                            <div
                                className={' h-7 rounded-full w-7 text-white text-center bg-[#282828] flex items-center justify-center'}>
                                <p className="text-xs m-0">12</p>
                            </div>

                        </div>


                    </div>

                </section>

            </aside>


            <div className={'bg-[#F8F8F8] flex-1 flex-col h-screen flex justify-between'}>
                <div className={'w-full h-20 border-x  border-b bg-white'}>

                    <section className={' flex flex-col space-y-1 justify-center p-5 h-full'}>
                        <h1 className={
                            'font-bold text-xl'
                        }>Dewa Dapa Spero</h1>
                        <p className={'text-sm text-[#A2A2A2]'}>Fullstack Developer (17)</p>
                    </section>

                </div>
                <div  className={'w-full h-full overflow-y-scroll flex-col flex gap-5 p-5'}>
                    {messagesList && messagesList.map((message) => {

                        if(auth.currentUser?.displayName === message.user){
                            return (

                                <div key={message.id} className={' w-full flex justify-end'}>

                                    <div className={'bg-[#282828] w-fit p-4 rounded  text-white'}>
                                        <p>
                                            {message.text}
                                        </p>
                                    </div>

                                </div>

                            )
                        } else {
                            return (

                                <div key={message.id}  className={' w-full flex justify-start'}>

                                    <div className={'bg-white w-fit p-4 rounded'}>
                                        <p>
                                            {message.text}
                                        </p>
                                    </div>

                                </div>

                            )
                        }


                    })}
                </div>
                <form onSubmit={handleSubmit}
                      className={'w-full h-20 flex items-center justify-between gap-4 p-5 flex-row border-x border-t bg-white'}>

                    <FiPaperclip size={"22"}/>


                    <div
                        className={'p-4 text-[#8A8A8A] items-center flex-1 gap-4 bg-[#F8F8F8] rounded-2xl px-5 flex flex-row'}>


                        <input value={messages} onChange={(e) => setMessages(e.target.value)}
                               placeholder={"Type a message..."} type="text"
                               className={'border  bg-[#F8F8F8] text-xs placeholder:text-xs border-none focus:outline-none w-full'}/>


                    </div>

                    <Button type={"submit"}
                            className={'rounded-full p-2 text-center bg-[#282828] flex items-center justify-center  hover:bg-[#282828]'}
                            variant="outline" size="icon">


                        <IoMdSend className={'text-md text-white'}/>

                    </Button>
                </form>

            </div>

        </main>
    );
};


export default MessagingPage;