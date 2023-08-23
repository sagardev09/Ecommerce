"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import arr from "@/public/Svg/Sliderarr.svg"

const ElectronicsCategory = () => {

    return (
        <div className=''>
            <div className='flex justify-between items-center'>
                <div className='border-b-2 border-b-slate-600'>
                    <h5 className='font-bold lg:text-2xl md:text-xl sm:text-lg text-base'>Shop From Top Categories</h5>
                </div>
                <div className='flex justify-between items-center gap-2 cursor-pointer'>
                    <h5 className='lg:text-lg md:text-base sm:text-sm  font-light'>View All</h5>
                    <Image src={arr} alt='' className="transform scale-x-[-1]" />
                </div>
            </div>
            {/* <div className='grid grid-cols-6 gap-4 py-4 overflow-x-scroll overflow-y-hidden w-full'>
                <div className='bg-slate-700 rounded-xl xl:col-span-2 sm:col-span-3 col-span-6  lg:h-[300px] md:h-[250px] sm:h-[200px] h-[180px]'></div>
                <div className='bg-slate-700 rounded-xl xl:col-span-2 sm:col-span-3 col-span-6 lg:h-[300px] md:h-[250px] sm:h-[200px] h-[180px] '></div>
                <div className='bg-slate-700 rounded-xl xl:col-span-2 sm:col-span-3 col-span-6 lg:h-[300px] md:h-[250px] sm:h-[200px] h-[180px]'></div>
                <div className='bg-slate-700 rounded-xl xl:col-span-2 sm:col-span-3 col-span-6 lg:h-[300px] md:h-[250px] sm:h-[200px] h-[180px]'></div>
                <div className='bg-slate-700 rounded-xl xl:col-span-2 sm:col-span-3 col-span-6 lg:h-[300px] md:h-[250px] sm:h-[200px] h-[180px]'></div>
                <div className='bg-slate-700 rounded-xl xl:col-span-2 sm:col-span-3 col-span-6 lg:h-[300px] md:h-[250px] sm:h-[200px] h-[180px]'></div>
            </div> */}

            <div className='flex gap-4  overflow-x-scroll border-8 border-red-800 max-w-fit' >
                <div className='bg-black h-[300px] w-[500px] text-white'>hi</div>
                <div className='bg-black h-[300px] w-[500px] text-white'>hi</div>
                <div className='bg-black h-[300px] w-[500px] text-white'>hi</div>
                <div className='bg-black h-[300px] w-[500px] text-white'>hi</div>
                <div className='bg-black h-[300px] w-[500px] text-white'>hi</div>
            </div>
        </div>

    )
}

export default ElectronicsCategory