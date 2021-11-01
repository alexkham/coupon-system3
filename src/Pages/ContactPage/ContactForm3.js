import React from "react";
import { useForm } from "react-hook-form";


export default function ContactForm3(){
     const{register,handleSubmit}=useForm();

     const onSubmit =(data)=>{
         console.log(data)
     }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder ="Name" name='name' ref={register}/>
             <input type="text" placeholder ="Email" name='email'ref={register} />
             <input type="submit" />
        </form>
    )
}