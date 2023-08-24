"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import arr from "@/public/Svg/Sliderarr.svg"
import { catData } from '@/data/CategoriesData'

const ElectronicsCategory = () => {
    const [list, setList] = useState(catData);

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

            <div className='flex overflow-x-auto p-3 bg-blue-100 w-full'>
                <div className='flex gap-5' style={{ minWidth: 'fit-content' }}>
                    {
                        list.map((item, index) => {
                            return (
                                <div key={index} className='w-[420px] h-[200px] bg-pink-300'>
                                    {item.title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>







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