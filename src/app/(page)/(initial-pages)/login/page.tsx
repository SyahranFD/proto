import React from 'react';
import Image from "next/image";
import {Input} from "@/app/components/ui/input";
import {Button} from "@/app/components/ui/button";
import Link from "next/link";
import FormLayoutLogin from "@/app/(page)/(initial-pages)/login/components/form-layout";

const LoginPage: React.FC = () => {




    return (
        <div className={'flex items-center justify-center w-full h-screen'}>

            <div className={'p-8 w-1/4 gap-8  flex flex-col justify-center rounded-2xl items-center rounded border'}>
                <Image
                    src="/assets/svg/logo-vertical.svg"
                    alt="Logo Horizontal"
                    width={100}
                    height={100}/>
                <div className={'flex items-center flex-col justify-center gap-2'}>
                    <h1 className={'font-semibold text-xl'}>Welcome Back</h1>
                    <p className={'text-[#7A7A7A] text-sm'}>Please enter your account to sign in.</p>
                </div>


                <FormLayoutLogin />


                <p className={'mt-5'}>

                    Don’t have an account?  <Link className={'font-bold'} href="register">
                    Sign up
                </Link>
                </p>


            </div>

        </div>
    );
};


export default LoginPage;