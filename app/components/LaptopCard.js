"use client"
import Image from 'next/image'
import React from 'react'
import { data } from '@/data/LaptopData'
import { useRouter } from 'next/navigation'

const LaptopCard = () => {
    const router = useRouter()
    const handleclick = (product) => {
        console.log(product);
        router.push("product/3")
    }

    return (
        <>
            {
                data.map((item, index) => (
                    <div key={item.id} className='bg-gray-400 p-4 lg:w-[250px] md:w-[220px] sm:w-[200px] w-[160px] flex flex-col gap-2 rounded-md bg-opacity-10 cursor-pointer' onClick={handleclick} >
                        <Image className='lg:h-[250px] md:h-[220px] sm:h-[200px] h-[140px] w-full mix-blend-multiply object-contain' src={item.img} alt='' />
                        <h4>⭐️⭐️⭐️⭐️⭐️</h4>
                        <h5 className='font-normal text-sm capitalize'>{item.name}</h5>
                        <div className='flex justify-start items-center sm:gap-3 gap-2'>
                            <h5 className='font-semibold'>${item.price}.00</h5>
                            <h5 className='text-slate-600 line-through'>${item.saleprice}.00</h5>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default LaptopCard