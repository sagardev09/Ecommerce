"use client"
import React from 'react'
import LaptopCard from './LaptopCard'
import { Button, Pagination } from "@nextui-org/react";

const AllProduct = () => {
    return (
        <div>
            <div className='flex justify-around  items-center lg:gap-6 md:gap-4 sm:gap-3 gap-2 flex-wrap  w-full'>
                <LaptopCard />
            </div>
            <div className='flex justify-center items-center my-3'>
                <Pagination total={10} initialPage={1} />
            </div>
        </div>
    )
}

export default AllProduct