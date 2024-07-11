import React from 'react';
import {Input} from "@/app/components/ui/input";
import {Button} from "@/app/components/ui/button";

const FormLayoutLogin:React.FC = () => {
 return (
     <form className={'w-full flex flex-col gap-6'}>
         <div className={'w-full flex flex-col gap-3'}>
             <label className={'font-semibold text-lg'}>Email</label>
             <Input placeholder={"Enter your email"} className={'h-14 rounded-lg'}/>
         </div>
         <div className={'w-full flex flex-col gap-3'}>
             <label className={'font-semibold text-lg'}>Password</label>
             <Input placeholder={"Enter your password"} className={'h-14 rounded-lg'}/>
         </div>


         <Button className={'mt-4'}>Sign in</Button>
     </form>
 );
};


export default FormLayoutLogin;