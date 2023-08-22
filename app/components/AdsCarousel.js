"use client"
import React, { useState } from 'react';
import img1 from "@/public/Pics/iwatch.png"
import img2 from "@/public/Pics/shoe.png"
import img3 from "@/public/Pics/skincare.png"
import img4 from "@/public/Pics/watch.png"
import img5 from "@/public/Pics/laptop.png"
import img6 from "@/public/Pics/tshirt.png"
import Image from 'next/image';
import arr from "@/public/Svg/Sliderarr.svg"

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeDotIndex, setActiveDotIndex] = useState(0);

    const slides = [
        {
            heading: 'Best Deal Online on smart watches',
            title1: 'SMART WEARABLE.',
            title2: 'UP to 80% OFF',
            image: img1,
        },
        {
            heading: 'Huge Discounts on Men\'s Fashion',
            title1: 'Men\'s T-Shirt',
            title2: 'Up to 50% OFF',
            image: img2,
        },
        {
            heading: 'Great Offers on Home Appliances',
            title1: 'Skincare Set',
            title2: 'Up to 40% OFF',
            image: img3,
        },
        {
            heading: 'Unbeatable Discounts on Sports Gear',
            title1: 'Running Shoes',
            title2: 'Up to 60% OFF',
            image: img4,
        },
        {
            heading: 'Exclusive Tech Deals: Laptops & Accessories',
            title1: 'Laptop Model XYZ',
            title2: 'Up to 25% OFF',
            image: img5,
        },
        {
            heading: 'Luxury Watches Showcase',
            title1: 'Elegant Watch Collection',
            title2: 'Up to 35% OFF',
            image: img6,
        },

    ];


    const handleDotClick = (index) => {
        setCurrentIndex(index);
        setActiveDotIndex(index);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
        setActiveDotIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        setActiveDotIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="flex  lg:h-[400px] md:h-[300px] sm:h-[250px] h-[200px] relative sm:px-11 px-6 bg-[#212844] rounded-xl  ">
            <button className="absolute md:left-[-35px] sm:left-[-22px] left-[-20px] top-1/2  transform -translate-y-1/2 lg:px-8 lg:py-8 md:px-5 md:py-5 sm:px-3 sm:py-3   bg-[#F3F9FB] text-white rounded-full border-[7px] border-white" onClick={handlePrev}>
                <Image src={arr} className='object-contain' alt='' />
            </button>
            <div className='absolute bg-[#2C3454] bg-opacity-50 rounded-full sm:h-[200px] h-[100px] w-[100px] sm:w-[200px] outline outline-offset-[15px] outline-[#3C466B] bottom-[-120px] lg:right-48 md:right-[160px] sm:right-28 sm:bottom-[-130px]  '>
                <div className='absolute bg-[#2C3454] bg-opacity-50 rounded-[75%] md:h-[400px] md:w-[450px] sm:h-[200px] sm:w-[250px] h-[160px] w-[150px] outline outline-offset-[15px] outline-[#3C466B] sm:top-[-540px] sm:right-[-170px] top-[-300px] right-[-210px]
                 '></div>

            </div>
            <div className="flex md:px-16 sm:px-6 px-2 lg:py-12 md:py-8 sm:py-4 py-3 justify-between w-full ">
                <div className='flex flex-col lg:gap-8 md:gap-4 sm:gap-3 gap-3 text-white'>
                    <h1 className="lg:text-4xl lg:w-[550px] md:w-[300px] sm:w-[280px] z-50  sm:text-xl text-sm font-bold tracking-wider ">{slides[currentIndex].heading}</h1>
                    <h2 className="lg:text-6xl sm:text-2xl text-xl font-extrabold z-50 tracking-widest uppercase">{slides[currentIndex].title1}</h2>
                    <h2 className="lg:text-4xl sm:text-xl text-sm font-bold z-50 tracking-wider">{slides[currentIndex].title2}</h2>
                </div>
                <div className='z-[100]'>
                    <Image
                        src={slides[currentIndex].image}
                        alt=''
                        className="lg:h-[320px] lg:w-[330px] md:h-[250px] md:w-[250px] sm:h-[220px] sm:w-[220px] h-[160px] w-[160px]"
                        style={{ transition: 'transform 0.3s ease-in-out' }}
                    />
                </div>
            </div>
            <div className="flex lg:mt-4 md:mt-8  absolute bottom-10 lg:left-24 md:left-28 sm:left-16 left-8 ">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full ${activeDotIndex === index ? 'bg-white md:w-6 sm:w-4 w-3 transform scale-125' : 'bg-gray-400 transform scale-100 hover:scale-125'
                            }`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
            <button className="absolute flex justify-center items-center md:right-[-35px] sm:right-[-22px] right-[-20px] top-1/2 transform -translate-y-1/2 scale-x-[-1] lg:px-8 lg:py-8 md:px-5 md:py-5 bg-[#F3F9FB] sm:px-3 sm:py-3  text-white rounded-full border-[7px] border-white" onClick={handleNext}>
                <Image src={arr} className='object-contain' alt='' />
            </button>
        </div>
    );
};

export default ImageCarousel;
