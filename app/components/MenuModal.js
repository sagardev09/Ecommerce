import React from 'react'
import Image from 'next/image'
import search from "@/public/Svg/Search.svg"
import downarr from "@/public/Svg/downarr.svg"
import cart from "@/public/Svg/cart.svg"
import heart from "@/public/Svg/heart.svg"
import facebook from "@/public/Svg/facebook.svg"
import instagram from "@/public/Svg/instagram.svg"
import twitter from "@/public/Svg/twitter.svg"
import mail from "@/public/Svg/mail.svg"

const MenuModal = () => {
    return (
        <div className='h-[93vh]  bg-white w-[100vw] transition-transform duration-1000 flex flex-col justify-between sm:px-10 px-6 sm:py-8 '>
            <div>
                <div className='relative my-6 sm:hidden block'>
                    <input type="text" name="" id="" className='w-full py-2 px-10 rounded-md border border-gray-400 bg-transparent' placeholder='search' />
                    <Image src={search} alt='' className='absolute left-2 top-2' />
                </div>
                <div className='flex justify-between items-center cursor-pointer border-b-[0.5px] border-b-gray-500 py-3 sm:border-none'>
                    <h5 className='sm:text-2xl font-semibold tracking-wider text-base capitalize'>category</h5>
                    <Image src={downarr} alt='' className='sm:hidden block' />
                </div>
                <div className='flex justify-between items-center cursor-pointer  border-b-[0.5px] border-b-gray-500 py-3 sm:border-none'>
                    <h5 className='sm:text-2xl font-semibold tracking-wider text-base capitalize'>shop</h5>
                    <Image src={downarr} alt='' className='sm:hidden block' />
                </div>
                <div className='flex justify-between items-center cursor-pointer  border-b-[0.5px] border-b-gray-500 py-3 sm:border-none'>
                    <h5 className='sm:text-2xl font-semibold tracking-wider text-base capitalize'>product</h5>
                    <Image src={downarr} alt='' className='sm:hidden block' />
                </div>
                <div className='flex justify-between items-center cursor-pointer  border-b-[0.5px] border-b-gray-500 py-3 sm:border-none'>
                    <h5 className='sm:text-2xl font-semibold tracking-wider text-base capitalize'>pages</h5>
                    <Image src={downarr} alt='' className='sm:hidden block' />
                </div>
                <div className=' items-center justify-start gap-6 py-4 hidden sm:flex'>
                    <div className='bg-gray-400 bg-opacity-30 rounded-full p-2 cursor-pointer'>
                        <Image src={facebook} alt='' />
                    </div>
                    <div className='bg-gray-400 bg-opacity-30 rounded-full p-2 cursor-pointer'>
                        <Image src={instagram} alt='' />
                    </div>
                    <div className='bg-gray-400 bg-opacity-30 rounded-full p-2 cursor-pointer'>
                        <Image src={twitter} alt='' />
                    </div>
                    <div className='bg-gray-400 bg-opacity-30 rounded-full p-2 cursor-pointer'>
                        <Image src={mail} alt='' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between items-center sm:hidden'>
                    <div>
                        <h5 className='text-gray-600'>Cart</h5>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <Image src={cart} alt='' />
                        <div className='bg-black px-3 py-[6px] rounded-full text-white'>
                            <h5 className='text-sm'>2</h5>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center sm:hidden'>
                    <div>
                        <h5 className='text-gray-600'>Wishlist</h5>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <Image src={heart} alt='' />
                        <div className='bg-black px-3 py-[6px] rounded-full text-white'>
                            <h5 className='text-sm'>2</h5>
                        </div>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-gray-500 my-3 sm:hidden block'></div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h5 className='text-gray-600'>Currency</h5>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <h5>USD</h5>
                        <Image src={downarr} alt='' />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h5 className='text-gray-600'>Language</h5>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                        <h5>English</h5>
                        <Image src={downarr} alt='' />
                    </div>
                </div>
                <div className='h-[1px] w-full bg-gray-500 my-3'></div>
                <div>
                    <button className='w-full bg-black p-3 text-white rounded-md'>Sign in</button>
                </div>
                <div className=' items-center justify-start gap-6 py-4 flex sm:hidden'>
                    <div className='bg-gray-400 bg-opacity-30 rounded-full p-2 cursor-pointer'>
                        <Image src={facebook} alt='' />
                    </div>
                    <div className='bg-gray-400 bg-opacity-30 rounded-full p-2 cursor-pointer'>
                        <Image src={instagram} alt='' />
                    </div>
                    <div className='bg-gray-400 bg-opacity-30 rounded-full p-2 cursor-pointer'>
                        <Image src={twitter} alt='' />
                    </div>
                    <div className='bg-gray-400 bg-opacity-30 rounded-full p-2 cursor-pointer'>
                        <Image src={mail} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuModal