import React from 'react';
import Image from "next/image";
import {Input} from "@/app/components/ui/input";
import {Button} from "@/app/components/ui/button";
import Link from "next/link";
import FormLayoutRegister from "@/app/(page)/(initial-pages)/register/components/form-layout";

const RegisterPage: React.FC = () => {
    return (

        <div className={'flex items-center justify-center w-full h-screen'}>

            <div className={'p-8 w-1/4 gap-8  flex flex-col justify-center rounded-2xl items-center  border'}>
                <Image
                    src="/assets/svg/logo-vertical.svg"
                    alt="Logo Horizontal"
                    width={100}
                    height={100}/>
                <div className={'flex items-center flex-col justify-center gap-2'}>
                    <h1 className={'text- font-semibold text-xl'}>Hello there</h1>
                    <p className={'text-[#7A7A7A] text-sm'}>Get started with creating your account</p>
                </div>


                <FormLayoutRegister/>

                <p className={'mt-5'}>
                    Don’t have an account?  <Link className={'font-bold'} href="/login">
                    Sign in
                </Link>
                </p>


            </div>

        </div>
    );
};


export default RegisterPage;