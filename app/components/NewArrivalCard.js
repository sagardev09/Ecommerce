import Image from 'next/image'
import React from 'react'
import { newdata } from '@/data/HomeCardData'

const NewArrivalCard = () => {
    const data = newdata
    return (
        <>
            {
                data.map((item, index) => (
                    <div key={item.id} className='bg-gray-400 p-4 lg:w-[300px] md:w-[280px] sm:w-[250px] w-[160px] flex flex-col gap-2 rounded-md bg-opacity-10'>
                        <Image className='lg:h-[320px] md:h-[280px] sm:h-[250px] h-[140px] w-full mix-blend-multiply object-contain' src={item.img} alt='' />
                        <h4>⭐️⭐️⭐️⭐️⭐️</h4>
                        <h5 className='font-semibold capitalize'>{item.name}</h5>
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

export default NewArrivalCard