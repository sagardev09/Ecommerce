import React from 'react'
import Image from 'next/image'
import img1 from "@/public/Pics/cat1.png"
import img2 from "@/public/Pics/cat2.png"

const CategoryModal = ({ setiscategory }) => {
    return (
        <div className='flex justify-between items-center px-8 py-6  w-[100vw] bg-slate-300 bg-opacity-20' onMouseEnter={() => setiscategory(true)} onMouseLeave={() => setiscategory(false)}>
            <div className='flex flex-col gap-8'>
                <h5 className='cursor-pointer text-base text-black capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Electronics</h5>
                <h5 className='cursor-pointer text-base capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Clothing & Accessories</h5>
                <h5 className='cursor-pointer text-base capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Books</h5>
                <h5 className='cursor-pointer text-base capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Home & Kitchen</h5>
                <h5 className='cursor-pointer text-base capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Beauty & Personal Care</h5>
            </div>
            <div className='flex flex-col gap-8'>
                <h5 className='cursor-pointer text-base text-black capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Toys & Games</h5>
                <h5 className='cursor-pointer text-base text-black capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Sports & Outdoors</h5>
                <h5 className='cursor-pointer text-base text-black capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Health & Household</h5>
                <h5 className='cursor-pointer text-base text-black capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Automotive</h5>
                <h5 className='cursor-pointer text-base text-black capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Grocery & Gourmet Food</h5>
            </div>
            <div className='flex flex-col gap-8'>
                <h5 className='cursor-pointer text-base text-black capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Tools & Home Improvement</h5>
                <h5 className='cursor-pointer text-base text-black capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Movies & TV Shows</h5>
                <h5 className='cursor-pointer text-base text-black capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Pet Supplies</h5>
                <h5 className='cursor-pointer text-base text-black capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Arts, Crafts & Sewing</h5>
                <h5 className='cursor-pointer text-base text-black capitalize hover:border-b-[1px] hover:border-b-black font-medium tracking-wider'>Industrial & Scientific</h5>
            </div>
            <div className='flex justify-between items-center gap-4 '>
                <div className='relative'>
                    <Image src={img1} alt='' />
                    <button className='bg-white text-black text-sm px-4  py-3 rounded-md absolute top-[40%] left-[20%] tracking-wider capitalize w-fit font-semibold'>winter collection</button>
                </div>
                <div className='relative'>
                    <Image src={img2} alt='' />
                    <button className='bg-white text-black text-sm px-8  py-3 rounded-md absolute top-[40%] left-[20%] tracking-wider capitalize w-fit font-semibold'>new arrivals</button>
                </div>
            </div>
        </div>
    )
}

export default CategoryModal