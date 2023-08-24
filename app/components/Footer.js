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
        <div className='flex flex-col px-12 py-16'>
            <div className='flex justify-between items-center gap-32'>
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
                <div className='flex-1 '>
                    <div className='flex flex-col justify-start gap-4'>
                        <h5 className='md:text-xl font-medium'>Shop</h5>
                        <h5>My account</h5>
                        <h5>Login</h5>
                        <h5>Wishlist</h5>
                        <h5>Cart</h5>
                    </div>
                </div>
                <div className='flex-1 '>
                    <div className='flex flex-col justify-start gap-4'>
                        <h5 className='md:text-xl font-medium'>Information</h5>
                        <h5>Shipping Policy</h5>
                        <h5>Returns & Refunds</h5>
                        <h5>Cookies Policy</h5>
                        <h5>Frequently asked</h5>
                    </div>
                </div>
                <div className='flex-1 '>
                    <div className='flex flex-col justify-start gap-4'>
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
                        <Image src={flag} />
                        <h5>English</h5>
                        <Image src={arr} />
                    </div>
                    <div className='flex justify-between items-center gap-3'>
                        <h5>USD</h5>
                        <Image src={arr} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer