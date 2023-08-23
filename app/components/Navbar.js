"use client"
import Image from 'next/image'
import React, { useState } from 'react'
// import logo from "@/public/Pics"
import Search from "@/public/Svg/Search.svg"
import profile from "@/public/Svg/profile.svg"
import notification from "@/public/Svg/notification.svg"
import cart from "@/public/Svg/cart.svg"
import downarr from "@/public/Svg/downarr.svg"
import menu from "@/public/Svg/menu.svg"
import CategoryModal from './CategoryModal'
import MenuModal from './MenuModal'
import cross from "@/public/Svg/cross.svg"

const Navbar = () => {

    const [search, setsearch] = useState("")
    const [iscategory, setiscategory] = useState(false)
    const [ismenu, setismenu] = useState(false)
    const handlemenu = () => {
        setismenu(!ismenu)
        console.log(ismenu);
    }
    const handleSearch = () => {

    }
    return (
        <>
            <nav className='flex h-[7vh] justify-between items-center px-8 py-3 border-b-2 border-b-slate-300 relative'>
                <div>
                    {/* <Image src={logo} /> */}
                    <h1 className='font-black text-4xl capitalize'>logo</h1>
                </div>
                <div className='lg:flex justify-between items-center gap-8 hidden '>
                    <div className='flex justify-start items-center gap-2 '
                        onMouseEnter={() => setiscategory(true)}
                    >
                        <h5 className='text-base font-light tracking-wider capitalize cursor-pointer'>Category</h5>
                        <Image src={downarr} className='h-[20px] w-[12px] cursor-pointer' alt='' />
                        <div className='absolute bottom-[-342px] left-[0] z-[10000] bg-white'>
                            {iscategory && <CategoryModal setiscategory={setiscategory} />}
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-2 cursor-pointer'>
                        <h5 className='text-base font-light tracking-wider capitalize'>Shop</h5>
                        <Image src={downarr} className='h-[20px] w-[12px]' alt='' />
                    </div>
                    <div className='flex justify-start items-center gap-2 cursor-pointer'>
                        <h5 className='text-base font-light tracking-wider capitalize'>Product</h5>
                        <Image src={downarr} className='h-[20px] w-[12px]' alt='' />
                    </div>
                    <div className='flex justify-start items-center gap-2 cursor-pointer'>
                        <h5 className='text-base font-light tracking-wider capitalize'>Page</h5>
                        <Image src={downarr} className='h-[20px] w-[12px]' alt='' />
                    </div>
                </div>
                <div className='flex justify-between items-center gap-8'>
                    <div className='relative'>
                        <input type="text" name="" id="" placeholder='search' className='border-b-[1px] focus: outline-none pr-4 py-2 placeholder:text-base border-b-slate-600 w-[300px] sm:block hidden' value={search} onChange={(e) => setsearch(e.target.value)} />
                        <Image src={Search} className='absolute bottom-[10px] right-0 cursor-pointer' alt='icon' onClick={handleSearch} />
                    </div>
                    <div>
                        <Image src={profile} className='cursor-pointer' alt='' />
                    </div>
                    <div>
                        <Image src={cart} className='cursor-pointer' alt='' />
                    </div>
                    <div className='md:hidden flex cursor-pointer transition duration-1000' onClick={handlemenu}>
                        {
                            !ismenu ? (<Image src={menu} alt='' className='h-[22px] w-[20px]' />) : (<Image src={cross} alt='' />)
                        }
                    </div>
                </div>
            </nav>
            {ismenu &&
                <div className='md:hidden block transition duration-1000'>
                    <MenuModal />
                </div>
            }
        </>
    )
}

export default Navbar