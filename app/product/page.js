import React from 'react'
import Image from 'next/image'
import banner from "@/public/Pics/banner.png"
import arrow from "@/public/Svg/smarrow.svg"
import box from "@/public/Svg/bbox.svg"
import burger from "@/public/Svg/halfburger.svg"
import Filter from '../components/Filter'
import AllProduct from '../components/AllProduct'
import cross from "@/public/Svg/redcross.svg"

const page = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-center '>
                <Image src={banner} className='object-contain w-[1730px]' alt='' />
            </div>
            <div className='px-8 py-4'>
                <h1 className='text-3xl font-extrabold tracking-wider'>MSI PS Series (20)</h1>
            </div>
            <div className='flex justify-between items-center px-8 py-3'>
                <div className='w-[320px] px-3 py-2'>
                    <div className='flex justify-center items-center gap-2'>
                        <Image src={arrow} className='-rotate-90' alt='' />
                        <h5>Back</h5>
                    </div>
                </div>
                <div className='flex justify-between items-center w-full px-4'>
                    <div>
                        <h5 className='text-zinc-500'>Items 1-35 of 61</h5>
                    </div>
                    <div className='flex justify-center items-center gap-6'>
                        <div className='flex justify-center items-center gap-2'>
                            <div className='flex justify-center items-center gap-1 border-2 border-gray-500 px-3 py-2'>
                                <h5>Sort By: </h5>
                                <h5>Position</h5>
                                <Image src={arrow} alt='' className='rotate-180' />
                            </div>
                            <div className='flex justify-center items-center gap-1 border-2 border-gray-500 px-3 py-2'>
                                <h5>Show: </h5>
                                <h5>35 per page</h5>
                                <Image src={arrow} alt='' className='rotate-180' />
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <Image src={box} alt='' />
                            <Image src={burger} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex px-8 pb-6'>
                <div className='w-[320px] px-3 bg-[#F5F7FF] rounded-sm h-fit '>
                    <Filter />
                </div>
                <div className='w-full'>
                    <div className='flex justify-start items-center gap-6 px-[14px] pb-4'>
                        <div className=' flex justify-center items-center capitalize w-fit px-6 py-2 border-[2px] border-slate-500 gap-2 rounded '>
                            <h5 className='text-sm font-bold'>CUSTOM PCS (24)</h5>
                            <Image src={cross} alt='' className='cursor-pointer' />
                        </div>
                        <div className='flex justify-center items-center capitalize w-fit px-6 py-2 border-[2px] border-slate-500 gap-2 rounded'>
                            <h5 className='text-sm font-bold'>HP/COMPAQ PCS (24)</h5>
                            <Image src={cross} alt='' className='cursor-pointer' />
                        </div>
                        <div>
                            <button className='capitalize w-fit px-8 py-2 border-[2px] border-slate-500 rounded'>clear all</button>
                        </div>
                    </div>
                    <AllProduct />
                </div>
            </div>
        </div>
    )
}

export default page