import Image from 'next/image'
import ImageCarousel from './components/AdsCarousel'

export default function Home() {
  return (
    <main className=''>
      <div className='lg:px-14  sm:px-8 px-6 my-6 overflow-hidden '>
        <ImageCarousel />
      </div>
    </main>
  )
}
