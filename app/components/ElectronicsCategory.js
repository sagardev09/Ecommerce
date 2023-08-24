"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import arr from "@/public/Svg/Sliderarr.svg"
import { catData } from '@/data/CategoriesData'

const ElectronicsCategory = () => {
    const [list, setList] = useState(catData);

    return (
        <div className=' flex flex-col gap-7'>
            <div className='flex justify-between items-center'>
                <div className='border-b-2 border-b-slate-600'>
                    <h5 className='font-bold lg:text-2xl md:text-xl sm:text-lg text-base'>Shop From Top Categories</h5>
                </div>
                <div className='flex justify-between items-center gap-2 cursor-pointer'>
                    <h5 className='lg:text-lg md:text-base sm:text-sm  font-light'>View All</h5>
                    <Image src={arr} alt='' className="transform scale-x-[-1]" />
                </div>
            </div>

            <div className='flex overflow-x-auto py-3  w-full overflow-y-hidden'>
                <div className='flex gap-6' style={{ minWidth: 'fit-content' }}>
                    {
                        list.map((item, index) => {
                            return (
                                <div key={index} className={`relative lg:w-[540px] lg:h-[250px] md:w-[450px] md:h-[200px] sm:w-[328px] flex justify-between  lg:px-12 lg:py-6 lg:gap-8 md:px-4 md:py-2 md:gap-6 sm:px-3 sm:py-4 sm:gap-4 px-6 py-3 sm:h-[180px] h-[150px] w-[90vw]  rounded-xl overflow-hidden `} style={{
                                    backgroundColor: item.primarycolor,
                                }} >
                                    <div className='absolute  bg-opacity-50 rounded-[75%] md:h-[200px] w-md:[200px] sm:h-[180px] sm:w-[180px] h-[150px] w-[150px] outline outline-offset-[10px] top-[-40px] right-[-10px]  z-[10] '
                                        style={{
                                            backgroundColor: item.secondarycolor,
                                            outlineColor: item.secondarycolor
                                        }}
                                    ></div>
                                    <div className='flex flex-col lg:gap-5 md:gap-3 sm:gap-4 gap-2'>
                                        <h4 className="md:px-6 md:py-2 sm:px-4 sm:py-1 px-3 py-[2px] w-fit rounded-lg text-center " style={{
                                            backgroundColor: item.secondarycolor,
                                            color: item.color
                                        }}>
                                            {item.title}
                                        </h4>
                                        <div >
                                            <Image className='lg:h-[60px] lg:w-[100px] md:h-[70px] md:w-[70px] sm:h-[50px] sm-[50px] h-[60px] w-[60px]' src={item.svgimg} alt='' />
                                        </div>

                                        <h3 className='lg:text-2xl font-black md:text-xl' style={{
                                            color: item.color
                                        }}>UP to 80% OFF</h3>
                                    </div>
                                    <div className='z-[1000]'>
                                        <Image className='lg:h-[320px]  lg:w-[200px] md:h-[300px] md:w-[190px] sm:h-[250px] sm:w-[150px] h-[190px] w-[130px]' src={item.image} alt='' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default ElectronicsCategory