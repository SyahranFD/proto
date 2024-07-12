"use client"
import React, {useEffect, useState} from 'react';
import {Avatar, AvatarImage} from "@/app/components/ui/avatar";
import {collection, onSnapshot, query, where} from "@firebase/firestore";
import {firestore} from "../../../../../../firebase";
import UsersCard from "@/app/(page)/(features-pages)/messages/Components/users-card";

function Users({userData}: { userData: { id: string } }) {

    const [loading, setLoading] = useState(false);
    const [userChatrooms, setUserChatrooms] = useState([]);


    //get all user chatroom
    useEffect(() => {
        setLoading(true);
        if(!userData?.id) return;
        const chatroomsQuery = query(collection(firestore, 'chatrooms'), where('users', 'array-contains', userData.id));
        const unsubscribeChatrooms = onSnapshot(chatroomsQuery, (snapshot) => {
            const chatrooms = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setLoading(false);
            setUserChatrooms(chatrooms);

        });

        // Cleanup function for chatrooms
        return () => unsubscribeChatrooms();
    }, [userData]);

    return (
        <section className={'flex flex-col gap-3'}>

            {/*{JSON.stringify(userData, null, 2)}*/}
            {/*<div className={'h-fit w-full flex items-center space-x-5  justify-between flex-row '}>*/}
            {/*    <Avatar className={'h-16 w-16   '}>*/}
            {/*        <AvatarImage src="https://github.com/shadcn.png"/>*/}
            {/*    </Avatar>*/}

            {/*    <div className={'flex-1 space-y-2'}>*/}
            {/*        <p className={'font-bold'}>Alex Benjamin</p>*/}
            {/*        <p className={'line-clamp-1 text-sm'}>Hello there nice to meet you. Can i join...</p>*/}

            {/*    </div>*/}

            {/*    <div className={'flex  space-y-2 flex-col justify-end items-end'}>*/}
            {/*        <p className={'font-bold'}>15:00</p>*/}

            {/*        <div*/}
            {/*            className={' h-7 rounded-full w-7 text-white text-center bg-[#282828] flex items-center justify-center'}>*/}
            {/*            <p className="text-xs m-0">12</p>*/}
            {/*        </div>*/}

            {/*    </div>*/}


            {/*</div>*/}

            <>
                <h1 className='px-4 text-base font-semibold'>Chatrooms</h1>
                {
                    loading && (
                        <div className="flex justify-center items-center h-full">
                            <span className="loading loading-spinner text-primary"></span>
                        </div>
                    )
                }
                {
                    userChatrooms.map((chatroom) => (
                        <UsersCard
                            name={chatroom}
                            avatarUrl={""}
                            latestMessage={"prototype"}
                            type={"chat"}
                        />
                    ))
                }
            </>

        </section>
    );
};


export default Users;