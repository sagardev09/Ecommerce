import React from 'react'
import HomeProductCard from './HomeProductCard'

const HomeProductGrid = () => {

    return (
        <div className='flex justify-around  items-center lg:gap-8 md:gap-4 sm:gap-3 gap-2 flex-wrap py-4'>
            <HomeProductCard />
        </div>
    )
}

export default HomeProductGrid