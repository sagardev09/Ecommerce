"use client"
import React, { useState } from 'react'
import HomeProductGrid from './HomeProductGrid'
import Link from 'next/link'
import SaleGrid from './SaleGrid'
import NewArrivalGrid from './NewArrivalGrid'

const HomeProduct = () => {
    const [bestseller, setbestseller] = useState(true)
    const [newarrival, setnewarrival] = useState(false)
    const [sale, setsale] = useState(false)

    const handlebest = () => {
        setbestseller(true)
        setnewarrival(false);
        setsale(false);

    }
    const handlenew = () => {
        setbestseller(false)
        setnewarrival(true);
        setsale(false);
    }
    const handlesale = () => {
        setbestseller(false)
        setnewarrival(false);
        setsale(true);
    }



    return (
        <div className='flex flex-col gap-3'>
            <div className='flex justify-center items-center gap-8'>
                <h5 onClick={handlebest} className={bestseller ? "font-extrabold text-xl border-b-[2px] cursor-pointer border-b-black" : "text-xl cursor-pointer font-normal text-gray-600 border-b-[2px] border-b-white"}>Best Sellers</h5>
                <h5 onClick={handlenew} className={newarrival ? "font-extrabold cursor-pointer text-xl  border-b-[2px] border-b-black" : "text-xl font-normal cursor-pointer text-gray-600 border-b-[2px] border-b-white"}>New Arrivals</h5>
                <h5 onClick={handlesale} className={sale ? "font-extrabold text-xl cursor-pointer  border-b-[2px] border-b-black" : "text-xl font-normal cursor-pointer text-gray-600 border-b-[2px] border-b-white"}>Sale</h5>
            </div>
            <div>
                {
                    bestseller ? <HomeProductGrid /> : ""
                }
                {
                    newarrival ? <NewArrivalGrid /> : ""
                }
                {
                    sale ? <SaleGrid /> : ""
                }
            </div>
            <div className='flex justify-center items-center'>
                <Link href={"/product"}>
                    <button className='w-fit bg-black text-white lg:text-lg md:text-base md:px-8 md:py-2 capitalize lg:px-10 lg:py-3 sm:text-sm sm:px-8 sm:py-3 px-7 py-3 text-sm rounded-lg'>see all</button>
                </Link>
            </div>
        </div>
    )
}

export default HomeProduct