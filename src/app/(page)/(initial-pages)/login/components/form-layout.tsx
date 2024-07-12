"use client"

import React, {ChangeEvent, useState} from 'react';
import {Input} from "@/app/components/ui/input";
import {Button} from "@/app/components/ui/button";
import {useFormik} from "formik";
import {usePost, usePostAuth} from "@/app/lib/services/api/actions";
import {useRouter} from "next/navigation";
import {useToast} from "@/app/components/ui/use-toast";
import {IoEye, IoEyeOff} from "react-icons/io5";
import Loading from "@/app/components/ui/loading";
import * as yup from "yup";
import {createSession} from "@/app/lib/services/session/session";
import {ResponseModelUserLogin} from "@/app/lib/services/model/response-model-user-login";
import {getItem, setItem} from "@/app/lib/services/session/local-storage";


const FormLayoutLogin: React.FC = () => {

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {toast} = useToast()
    const router = useRouter();
    const formik = useFormik({
        initialValues: {

            email: "",
            password: ""
        },
        onSubmit: (values) => {
            mutate({...values})
        },
        validationSchema: yup.object().shape({
            email: yup.string().required().email(),
            password: yup.string().required()
        })
    })


    const {mutate, isLoading, error} = usePostAuth<ResponseModelUserLogin,object>({
        endpoint: "users/login",
        onError: (error) => {
            console.log(error)
            toast({
                variant: "destructive",
                title: "Message",
                description: "Anda Kesalahan",
            })
        },
        onSuccess: async (body) => {

            toast({
                title: "Message",
                description: "Anda Berhasil Melakukan Login",
            })
            await createSession(body.token,body.data.id)
            router.push("/");
        },
    })


    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue(e.target.name, e.target.value)
    }

    return (
        <form onSubmit={formik.handleSubmit} className={'w-full flex flex-col gap-3'}>

            <div className={'w-full flex flex-col gap-3'}>
                <label className={'font-semibold text-lg'}>Email</label>
                <Input onChange={handleForm} name={"email"} placeholder={"Enter your email"}
                       className={'h-14 rounded-lg'}/>
                <p className={'text-red-600'}>{formik.errors.email}</p>
            </div>
            <div className={'w-full flex flex-col gap-3'}>
                <label className={'font-semibold text-lg'}>Password</label>
                <Input type={showPassword ? "text" : "password"}
                       rightIcon={showPassword ? <IoEye onClick={() => setShowPassword(!showPassword)} size={25}/> :
                           <IoEyeOff onClick={() => setShowPassword(!showPassword)} size={25}/>} onChange={handleForm}
                       name={"password"} placeholder={"Enter your password"}
                       className={'h-14 rounded-lg'}/>

                <p className={'text-red-600'}>{formik.errors.password}</p>
            </div>


            <Button className={'mt-4'}>

                {
                    isLoading ? <Loading/> : "Sign in"
                }

            </Button>
        </form>
    );
};


export default FormLayoutLogin;