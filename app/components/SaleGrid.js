import React from 'react'
import SaleCard from './SaleCard'

const SaleGrid = () => {

    return (
        <div className='flex justify-around  items-center lg:gap-8 md:gap-4 sm:gap-3 gap-2 flex-wrap py-4'>
            <SaleCard />
        </div>
    )
}

export default SaleGrid