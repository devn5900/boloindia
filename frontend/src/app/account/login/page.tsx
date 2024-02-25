"use client"
import React, { useState } from 'react'
import signin from '../../../assets/signin.svg'
import Image from 'next/image'
import {FcGoogle} from 'react-icons/fc'
import Link from 'next/link'
import { loginCredenType } from '@/helper/types'
import { isValidEmail, validatePassword } from '@/helper/validations'
import {IoIosAlert} from 'react-icons/io'
import {AiFillCheckCircle} from 'react-icons/ai'
const page = () => {
    const [credentials,setCredentials]= useState<loginCredenType>({
        email:"",
        password:""
    })
    const [emailValid,setEmailValid]= useState<boolean>(false);
    const [passValid,setPassValid]= useState<boolean>(false);

    const handleInputCred=(e:React.ChangeEvent<HTMLInputElement>)=>{
            if(e.target.name=='email'){
                if(!isValidEmail(e.target.value)){
                    setCredentials({...credentials,[e.target.name]:e.target.value})
                    setEmailValid(true)
                }else{
                    setCredentials({...credentials,[e.target.name]:e.target.value})
                    setEmailValid(false)
                }
            }
            if(e.target.name=="password"){
                if(!validatePassword(e.target.value)){
                    setCredentials({...credentials,[e.target.name]:e.target.value})
                    setPassValid(true)
                }else{
                    setCredentials({...credentials,[e.target.name]:e.target.value})
                    setPassValid(false)
                }
            }
    }
console.log(credentials);
  return (
    <div className=' w-3/4 m-auto'>
        <div className='flex py-10 gap-3'>
            <div><Image src={signin} alt='Signin' /></div>
            <div className='flex justify-center'>
            <div className='p-10 border-2 rounded-lg'>
                <h1 className='text-2xl font-bold p-4'>Explore New Things  Log In</h1>
                <div className='flex items-center gap-3 py-5'>
                    <div className=' hover:bg-gray-100 cursor-pointer flex items-center gap-2 py-2 px-4 border-2 rounded-lg'>
                        <span className=' text-lg'><FcGoogle/></span>
                        <span className=' text-md font-poppins '>Log in with Google</span>
                    </div>
                    <div className='hover:bg-gray-100 cursor-pointer flex items-center gap-2 py-2 px-4 border-2 rounded-lg'>
                        <span className=' text-lg'><FcGoogle/></span>
                        <span className=' text-md font-poppins '>Log in with Google</span>
                    </div>
                   
                </div>
                <div className='flex items-center justify-center'><span className=' text-lg text-gray-300'>OR</span></div>
                <div className='py-5'>
                    <form  className='flex flex-col  justify-center gap-3'>
                        <div className='relative'>
                        <input name='email' onChange={handleInputCred} className={`w-full "border-gray-400" border-[1px]  px-3 py-3 rounded-lg`} type='text' placeholder='Email Id' />
                    {credentials.email&&<span className='absolute top-1/2 transform -translate-y-1/2 right-5'>
                            {emailValid?<IoIosAlert className='text-red-700 text-lg font-bold' />:
                            <AiFillCheckCircle className='text-green-700 text-lg font-bold' />}
                            </span>}
                        </div>
                        <div className='relative'>
                        <input name='password' onChange={handleInputCred} className=' w-full border-[1px] border-gray-400 px-3 py-3 rounded-lg' type='password' placeholder='Password' />
                        {credentials.password&&<span className='absolute top-1/2 transform -translate-y-1/2 right-5'>
                            {passValid?<IoIosAlert className='text-red-700 text-lg font-bold' />:
                            <AiFillCheckCircle className='text-green-700 text-lg font-bold' />}
                            </span>}
                        </div>
                        <button type='submit' className='px-2 my-3 text-white hover:bg-blue-800 transition-colors duration-300 py-3 bg-blue-700 rounded-lg text-xl font-semibold' >Sign In</button>
                    </form>
                </div>
                <div className='flex items-center justify-between'>
                    <span className='text-sm flex items-center gap-2' >Already have an account 
                    <Link href={"/account/signup"} className='text-blue-700 underline' >Signup</Link>
                    </span>
                    
                    <span className='text-sm flex items-center gap-2' >
                    <Link href={"/"} className='text-blue-700 underline' >
                        Forgot password ? 
                    </Link>
                    </span>
                </div>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default page