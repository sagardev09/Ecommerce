"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import arr from "@/public/Svg/Sliderarr.svg"
import { images } from '@/data/CatImages'

const ShopByCategory = () => {
    const [catData, setcatData] = useState(images)
    const [catModal, setcatModal] = useState(false)

    const handleclick = () => {
        setcatModal(!catModal)
    }
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='border-b-2 border-b-slate-600'>
                    <h5 className='font-bold lg:text-2xl md:text-xl sm:text-lg text-base'>Shop From Top Categories</h5>
                </div>
                <div className='flex justify-between items-center gap-2 cursor-pointer' onClick={handleclick}>
                    <h5 className='lg:text-lg md:text-base sm:text-sm  font-light'>View All</h5>
                    <Image src={arr} alt='' className={`${catModal ? "-rotate-90 transition-all duration-500" : "transform scale-x-[-1] transition-all duration-500"}`} />
                </div>
            </div>
            <div className={`flex justify-around items-center lg:gap-12 md:gap-10 sm:gap-6 flex-wrap  my-8  cursor-pointer  ${!catModal ? "lg:max-h-[250px] md:max-h-[420px] sm:max-h-[300px] max-h-[270px]   " : "h-[100%]  "} overflow-hidden`}>
                {catData.map((item, index) => (
                    <div key={index} className='flex flex-col justify-center items-center gap-4 '>
                        <div className='rounded-full bg-slate-500 bg-opacity-30 lg:h-[180px] lg:w-[180px] md:h-[150px] md:w-[150px] sm:h-[100px] sm:w-[100px] h-[100px] w-[100px] flex items-center justify-center'>
                            <Image src={item.img} className='mix-blend-multiply ' alt='' />
                        </div>
                        <div>
                            <h5 className='lg:text-lg md:text-base text-sm font-normal capitalize'>{item.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopByCategory