import Image from 'next/image'
import React from 'react'
import arr from "@/public/Svg/downarr.svg"
import flag from "@/public/Svg/flag.svg"
import facebook from "@/public/Svg/facebook.svg"
import instagram from "@/public/Svg/instagram.svg"
import twitter from "@/public/Svg/twitter.svg"
import mail from "@/public/Svg/mail.svg"

const Footer = () => {
    return (
        <div className='lg:flex lg:flex-col lg:px-12 lg:py-16 md:px-10 md:py-12 sm:px-8 sm:py-10 px-6 py-6 overflow-hidden'>
            <div className='sm:flex sm:flex-row sm:justify-between sm:items-center lg:gap-32 md:gap-7 flex flex-col sm:gap-12 gap-6'>
                <div className='flex-1 flex flex-col justify-start gap-4'>
                    <div><h1 className='text-6xl font-black capitalize'>logo</h1></div>
                    <div><h5 className='w-[300px]'>Phosf luorescently engage worldwide method process shopping.</h5></div>
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
                <div className='h-[1px] bg-gray-400 bg-opacity-30 w-full my-1 sm:hidden block'></div>
                <div className='flex-1  '>
                    <div className='flex flex-col justify-start gap-4 lg:w-[300px] md:w-[200px] sm:w-[150px]'>
                        <h5 className='md:text-xl sm:text-lg font-medium w-fit'>Shop</h5>
                        <h5 className='w-fit '>My account</h5>
                        <h5 className='w-fit'>Login</h5>
                        <h5 className='w-fit'>Wishlist</h5>
                        <h5 className='w-fit'>Cart</h5>
                    </div>
                </div>
                <div className='h-[1px] bg-gray-400 bg-opacity-30 w-full my-1 sm:hidden block'></div>
                <div className='flex-1 '>
                    <div className='flex flex-col justify-start gap-4 lg:w-[300px] md:w-[200px] sm:w-[150px]'>
                        <h5 className='md:text-xl font-medium'>Information</h5>
                        <h5 className='w-fit'>Shipping Policy</h5>
                        <h5 className='w-fit'>Returns & Refunds</h5>
                        <h5 className='w-fit'>Cookies Policy</h5>
                        <h5 className='w-fit'>Frequently asked</h5>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='md:flex md:flex-col hidden justify-start gap-4 lg:w-[300px] md:w-[200px] '>
                        <h5 className='md:text-xl font-medium'>Company</h5>
                        <h5>About us</h5>
                        <h5>Privacy Policy</h5>
                        <h5>Terms & Conditions</h5>
                        <h5>Contact Us</h5>
                    </div>
                </div>
            </div>
            <div className='h-[1px] bg-gray-400 bg-opacity-30 w-full my-6'></div>
            <div className='flex justify-between items-center'>
                <div>
                    <h5>© 2088 Nayzak Design</h5>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <div className='flex justify-between items-center gap-3'>
                        <Image src={flag} alt='' />
                        <h5>English</h5>
                        <Image src={arr} alt='' />
                    </div>
                    <div className='flex justify-between items-center gap-3'>
                        <h5>USD</h5>
                        <Image src={arr} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer