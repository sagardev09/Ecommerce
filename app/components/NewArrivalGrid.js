import React from 'react'
import NewArrivalCard from './NewArrivalCard'

const NewArrivalGrid = () => {

    return (
        <div className='flex justify-around  items-center lg:gap-8 md:gap-4 sm:gap-3 gap-2 flex-wrap py-4'>
            <NewArrivalCard />
        </div>
    )
}

export default NewArrivalGrid