import Image from 'next/image'
import ImageCarousel from './components/AdsCarousel'
import ShopByCategory from './components/ShopByCategory'
import ElectronicsCategory from './components/ElectronicsCategory'
import HomeProduct from './components/HomeProduct'

export default function Home() {
  return (
    <main className=''>
      <div className='lg:px-14  sm:px-8 px-6 my-6 overflow-hidden '>
        <ImageCarousel />
      </div>
      <div className='lg:px-14  sm:px-8 px-6 py-8'>
        <ShopByCategory />
      </div>
      <div className='lg:px-14  sm:px-8 px-6 pb-8'>
        <ElectronicsCategory />
      </div>
      <div className='lg:px-14  sm:px-8 px-6 py-4'>
        <HomeProduct />
      </div>
    </main>
  )
}
