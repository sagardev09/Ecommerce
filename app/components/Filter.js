"use client"
import React from 'react'
import arr from "@/public/Svg/smarrow.svg"
import Image from 'next/image'

const Filter = () => {
    return (
        <div className='py-4 '>
            <h1 className='text-center font-semibold text-xl capitalize'>filters</h1>
            <div className='flex flex-col gap-2'>
                <div>
                    <h1 className='font-bold text-lg'>Brand</h1>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>ASUS</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>Lenovo</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>Acer</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>Dell</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>MSI</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>Mi</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>Samsung</h5>
                </div>
                <div className='flex gap-3 justify-start items-center cursor-pointer'>
                    <h5 className='capitalize font-medium text-base'>see more</h5>
                    <Image src={arr} className='rotate-180 h-12 w-6' alt='' />
                </div>
            </div>
            <div className='flex flex-col gap-2 py-2'>
                <div>
                    <h1 className='font-bold text-lg'>Price</h1>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <h5>$0.00 - $1,000.00</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <h5>$1,000.00 - $2,000.00</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <h5>$2,000.00 - $3,000.00</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <h5>$3,000.00 - $4,000.00</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <h5>$4,000.00 - $5,000.00</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <h5>$5,000.00 - $6,000.00 </h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <h5>$6,000.00 And Above</h5>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div>
                    <h1 className='font-bold text-lg'>Laptop CPU Manufacturer</h1>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>AMD</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>Apple</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>Arm</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>Intel</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>Media Tek</h5>
                </div>
                <div className='flex gap-3 justify-start items-center cursor-pointer'>
                    <h5 className='capitalize font-medium text-base'>see more</h5>
                    <Image src={arr} className='rotate-180 h-10 w-6' alt='' />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div>
                    <h1 className='font-bold text-lg'>Laptop Weight</h1>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>Up to 0.9 kg</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>1.0 to 1.4 kg</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>1.5 to 1.9 kg</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>2.0 to 2.4 kg</h5>
                </div>
                <div className='flex gap-3 justify-start items-center '>
                    <input type="checkbox" name="" id="" className='h-[20px] w-[20px] cursor-pointer' />
                    <h5>2.5 kg & above</h5>
                </div>
            </div>
            <div className='flex flex-col gap-2 py-2'>
                <div>
                    <h1 className='font-bold text-lg'>Color</h1>
                </div>
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


                    <input value="color-7" name="color" id="color-7" type="radio" />
                    <label for="color-7">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
                        </span>
                    </label>

                    <input value="color-8" name="color" id="color-8" type="radio" />
                    <label for="color-8">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#ffffff" d="M6 12L10.2426 16.2426L18.727 7.75732" id="Vector"></path> </g> </g></svg>
                        </span>
                    </label>


                </div>
            </div>
            <div className='py-4'>
                <button className='bg-blue-600 w-full text-white capitalize font-normal text-base p-3 rounded-lg'>Apply filters (2)</button>
            </div>
        </div>
    )
}

export default Filter