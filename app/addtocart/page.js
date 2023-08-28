import Image from 'next/image'
import React from 'react'
import main from "@/public/Pics/demo1.png"
import primary from "@/public/Pics/demo2.png"
import arr from "@/public/Svg/downarr.svg"
import star from "@/public/Svg/fillstar.svg"
import cross from "@/public/Svg/cross.svg"
import scale from "@/public/Svg/scale.svg"
import tick from "@/public/Svg/tick.svg"
import heart from "@/public/Svg/heart.svg"
import question from "@/public/Svg/question.svg"
import share from "@/public/Svg/share.svg"
import eye from "@/public/Svg/eye.svg"

const AddToCart = () => {
    return (
        <div className='flex gap-12 overflow-hidden px-40 py-8 justify-center'>
            <div className='flex flex-col gap-4'>
                <div>
                    <Image src={main} alt='' />
                </div>
                <div className='flex gap-4'>
                    <Image src={primary} alt='' className='border border-black cursor-pointer' />
                    <Image src={primary} alt='' />
                    <Image src={primary} alt='' />
                    <Image src={primary} alt='' />
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-2 items-center justify-start'>
                    <h5 className='text-sm font-normal text-zinc-500'>Home</h5>
                    <Image src={arr} alt='' className='-rotate-90 h-[10px] w-[10px]' />
                    <h5 className='text-sm font-normal text-zinc-500'>Clothing</h5>
                    <Image src={arr} alt='' className='-rotate-90 h-[10px] w-[10px]' />
                    <h5 className='text-sm font-normal text-zinc-500'>Huishō Pijama</h5>
                </div>
                <div className='w-[550px] flex flex-col gap-3'>
                    <h1 className='text-5xl font-black tracking-wider'>Huishō Pijama</h1>
                    <h5 className='tracking-wider font-medium text-base text-zinc-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt et dolore</h5>
                </div>
                <div className='flex items-center justify-start gap-2'>
                    <div className='flex gap-1 items-center'>
                        <Image src={star} alt='' className='h-[25px] w-[25px]' />
                        <Image src={star} alt='' className='h-[25px] w-[25px]' />
                        <Image src={star} alt='' className='h-[25px] w-[25px]' />
                        <Image src={star} alt='' className='h-[25px] w-[25px]' />
                        <Image src={star} alt='' className='h-[25px] w-[25px]' />
                    </div>
                    <div>
                        <h5 className='text-base'>23 Reviews</h5>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <h5 className='font-bold text-2xl'>$86.00</h5>
                    <h5 className='line-through text-gray-600 text-lg'>
                        $104.00
                    </h5>
                </div>
                <div className='flex items-center gap-3'>
                    <Image src={eye} alt='' />
                    <h5 className='text-base tracking-wider font-medium'>32 people are looking at this product</h5>
                </div>
                <hr />
                <h5 className='text-sm text-gray-700'>Color</h5>
                <div class="radio-input">
                    <input value="color-1" name="color" id="color-1" type="radio" />
                    <label for="color-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
                        </span>
                    </label>

                    <input value="color-2" name="color" id="color-2" type="radio" />
                    <label for="color-2">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
                        </span>
                    </label>

                    <input value="color-3" name="color" id="color-3" type="radio" />
                    <label for="color-3">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
                        </span>
                    </label>

                    <input value="color-4" name="color" id="color-4" type="radio" />
                    <label for="color-4">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
                        </span>
                    </label>

                    <input value="color-5" name="color" id="color-5" type="radio" />
                    <label for="color-5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
                        </span>
                    </label>

                    <input value="color-6" name="color" id="color-6" type="radio" />
                    <label for="color-6">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
                        </span>
                    </label>
                </div>
                <div className='flex items-center justify-start gap-2 cursor-pointer'>
                    <Image src={cross} alt='' className='h-[20px] w-[20px]' />
                    <h5 className='text-sm text-gray-700'>Clear</h5>
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <h5 className='text-sm text-gray-700'>Size</h5>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <h5 className='h-[20px] w-[20px] border border-black text-center flex justify-center items-center p-6 text-lg font-medium cursor-pointer'>S</h5>
                        <h5 className='h-[20px] w-[20px] border border-black text-center flex justify-center items-center p-6 text-lg font-medium cursor-pointer'>M</h5>
                        <h5 className='h-[20px] w-[20px] border border-black text-center flex justify-center items-center p-6 text-lg font-medium cursor-pointer'>L</h5>
                        <h5 className='h-[20px] w-[20px] border border-black text-center flex justify-center items-center p-6 text-lg font-medium cursor-pointer'>Xl</h5>
                        <h5 className='h-[20px] w-[20px] border border-black text-center flex justify-center items-center p-6 text-lg font-medium cursor-pointer'>2XL</h5>
                    </div>
                </div>
                <div className='flex items-center justify-start gap-2 cursor-pointer'>
                    <Image src={cross} alt='' className='h-[20px] w-[20px]' />
                    <h5 className='text-sm text-gray-700'>Clear</h5>
                </div>
                <div className='flex justify-start items-center gap-3'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <Image src={scale} alt='' />
                        <h5>SIZE GUIDE</h5>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer '>
                        <Image src={tick} alt='' />
                        <h5>673 IN STOCK</h5>
                    </div>
                </div>
                <div className='flex justify-between w-full bg-gray-500 bg-opacity-20 px-4 py-3'>
                    <button className='text-2xl font-normal'>-</button>
                    <button className='text-2xl font-semibold'>1</button>
                    <button className='text-2xl font-normal'>+</button>
                </div>
                <button className='w-full px-3 py-[14px] font-semibold capitalize text-white text-base bg-black'>Add to Cart</button>
                <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-2'>
                        <Image src={heart} alt='' />
                        <h5>Wishlist</h5>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image src={question} alt='' />
                        <h5>Ask question</h5>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Image src={share} alt='' />
                        <h5>Share</h5>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-start items-center gap-8'>
                        <h5 className='w-[100px] text-sm text-gray-700'>SKU</h5>
                        <h5 className='w-full text-sm'>1162</h5>
                    </div>
                    <div className='flex justify-start items-center gap-8'>
                        <h5 className='w-[100px] text-sm text-gray-700'>CATEGORY</h5>
                        <h5 className='w-full text-sm'>Clothing</h5>
                    </div>
                    <div className='flex justify-start items-center gap-8'>
                        <h5 className='w-[100px] text-sm text-gray-700'>TAGS</h5>
                        <h5 className='w-full text-sm'>Loose, Modern, Pants, Sale</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToCart