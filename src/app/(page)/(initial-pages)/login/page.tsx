


import React from 'react';
import Image from "next/image";
import {Input} from "@/app/components/ui/input";
import {Button} from "@/app/components/ui/button";

const LoginPage:React.FC = () => {
 return (

     <div className={'flex items-center justify-center w-full h-screen'}>

      <form className={'p-5 w-1/4 gap-5 flex flex-col justify-center items-center rounded border'}>
       <Image
           src="/assets/svg/logo-vertical.svg"
           alt="Logo Horizontal"
           width={100}
           height={100}/>
       <div className={'flex items-center flex-col justify-center gap-2'}>
        <h1>Hello There</h1>
        <p>Get started with creating your account</p>
       </div>


       <div className={'w-full flex flex-col gap-3'}>
        <label className={'font-medium text-lg'}>Email</label>
        <Input placeholder={"Enter your full name"} className={'h-14 rounded-lg'}/>
       </div>
       <div className={'w-full flex flex-col gap-3'}>
        <label className={'font-medium text-lg'}>Password</label>
        <Input placeholder={"Enter your full name"} className={'h-14 rounded-lg'}/>
       </div>


       <Button>Sign in</Button>

      </form>

     </div>
 );
};


export default LoginPage;