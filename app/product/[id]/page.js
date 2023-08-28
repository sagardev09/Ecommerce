"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img from "@/public/Pics/laptop2.webp";
import img1 from "@/public/Pics/prodimg1.jpg";
import img2 from "@/public/Pics/prodimg2.jpg";
import img3 from "@/public/Pics/prodimg3.jpg";
import img4 from "@/public/Pics/prodimg4.jpg";
import img5 from "@/public/Pics/prodimg5.jpg";
import dot from "@/public/Svg/dot.svg"
import star from "@/public/Svg/star.svg"

const Page = () => {
    const imagesarray = [img, img1, img2, img3, img4, img5];
    const [mainimage, setmainimage] = useState(imagesarray[0]);
    const [desc, setdesc] = useState(true)
    const [info, setinfo] = useState(false)
    const [reviews, setreviews] = useState(false)
    const [questions, setquestions] = useState(false)



    const Description = () => (
        <div className='flex flex-col gap-4 py-4'>
            <div>
                <h5 className='w-[750px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint non providen.</h5>
            </div>
            <div className='flex flex-col gap-4'>
                <div>
                    <h4 className='capitalize font-semibold text-lg'>Information</h4>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-3 items-center'>
                        <Image src={dot} alt='' />
                        <h5> Fabric: Denim</h5>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <Image src={dot} alt='' />
                        <h5>Fit type: Loose fit</h5>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <Image src={dot} alt='' />
                        <h5>Feature: Adjustable straps</h5>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <Image src={dot} alt='' />
                        <h5>Front and back pockets</h5>
                    </div>
                </div>
            </div>
        </div>
    )
    const Information = () => (
        <div className='flex flex-col gap-8 py-4'>
            <div className='flex justify-start items-center gap-20'>
                <h2 className='w-[100px]'>SIZE</h2>
                <h2 className='w-[full]'>XSS, XS, S, M, L, XL, 2XL, 3XL</h2>
            </div>
            <div className='flex justify-start items-center gap-20'>
                <h2 className='w-[100px]'>COLOR</h2>
                <h2 className='w-[full]'>Red, Green, Blue</h2>
            </div>
            <div className='flex justify-start items-center gap-20'>
                <h2 className='w-[100px]'>WEIGHT</h2>
                <h2 className='w-[full]'>1.5lb, 0.68kg</h2>
            </div>
        </div>
    )
    const Reviews = () => (
        <div className='py-4 flex flex-col gap-6'>
            <div>
                <h1 className='uppercase text-3xl font-extrabold tracking-wider'>Customer reviews</h1>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center justify-start gap-2'>
                    <Image src={star} alt='' />
                    <Image src={star} alt='' />
                    <Image src={star} alt='' />
                    <Image src={star} alt='' />
                    <Image src={star} alt='' />
                </div>
                <div>
                    <button className='px-6 w-fit p-2 border border-black font-semibold'>Write review</button>
                </div>
            </div>
            <div>
                <h5 className='text-gray-500'>There are no reviews yet.</h5>
            </div>
        </div>
    )
    const Questions = () => (
        <div className='py-4 flex flex-col gap-6'>
            <div>
                <h1 className='uppercase text-3xl font-extrabold tracking-wider'>Customers questions</h1>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center justify-start gap-2'>
                    <h5 className='text-sm text-gray-500'>12 total questions</h5>
                </div>
                <div>
                    <button className='px-6 w-fit p-2 border border-black font-semibold'>Ask a question</button>
                </div>
            </div>
            <div className='flex flex-col gap-8 overflow-y-scroll h-[360px]'>
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'>
                            <h5>Question</h5>
                        </div>
                        <div>
                            <h5>What type of material is it and what are the wash care instructions (machine washable)?</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'>
                            <h5>Answer</h5>
                        </div>
                        <div>
                            <h5>Machine wash, cold water. Dry flat. Light weight cotton polyester blend. Looks good and is well made</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'></div>
                        <div>
                            <h5>By Natalie Foster on March 2023</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'></div>
                        <div>
                            <h5>See more answers (4)</h5>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'>
                            <h5>Question</h5>
                        </div>
                        <div>
                            <h5>What type of material is it and what are the wash care instructions (machine washable)?</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'>
                            <h5>Answer</h5>
                        </div>
                        <div>
                            <h5>Machine wash, cold water. Dry flat. Light weight cotton polyester blend. Looks good and is well made</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'></div>
                        <div>
                            <h5>By Natalie Foster on March 2023</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'></div>
                        <div>
                            <h5>See more answers (4)</h5>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'>
                            <h5>Question</h5>
                        </div>
                        <div>
                            <h5>What type of material is it and what are the wash care instructions (machine washable)?</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'>
                            <h5>Answer</h5>
                        </div>
                        <div>
                            <h5>Machine wash, cold water. Dry flat. Light weight cotton polyester blend. Looks good and is well made</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'></div>
                        <div>
                            <h5>By Natalie Foster on March 2023</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'></div>
                        <div>
                            <h5>See more answers (4)</h5>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex flex-col gap-2'>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'>
                            <h5>Question</h5>
                        </div>
                        <div>
                            <h5>What type of material is it and what are the wash care instructions (machine washable)?</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'>
                            <h5>Answer</h5>
                        </div>
                        <div>
                            <h5>Machine wash, cold water. Dry flat. Light weight cotton polyester blend. Looks good and is well made</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'></div>
                        <div>
                            <h5>By Natalie Foster on March 2023</h5>
                        </div>
                    </div>
                    <div className='flex justify-start items-center gap-6'>
                        <div className='w-[80px]'></div>
                        <div>
                            <h5>See more answers (4)</h5>
                        </div>
                    </div>
                </div>
                <hr />
            </div >

        </div >
    )


    const handledesc = () => {
        setdesc(true)
        setinfo(false)
        setreviews(false)
        setquestions(false)
    }

    const handleinfo = () => {
        setdesc(false)
        setinfo(true)
        setreviews(false)
        setquestions(false)
    }

    const handlereviews = () => {
        setdesc(false)
        setinfo(false)
        setreviews(true)
        setquestions(false)
    }

    const handleques = () => {
        setdesc(false)
        setinfo(false)
        setreviews(false)
        setquestions(true)
    }


    const Thumbnail = ({ src, onClick }) => (
        <Image
            src={src}
            className='h-[55px] w-[60px] bg-slate-50 rounded-xl p-2 cursor-pointer'
            onClick={onClick}
            alt=''
        />
    );

    const handleThumbnailClick = (image) => {
        setmainimage(image);
    };

    return (
        <div className='flex justify-start items-start gap-16 px-6 py-12'>
            <div className='flex flex-col justify-start gap-12'>
                <div className='flex justify-start gap-12 items-center'>
                    <div className='flex flex-col gap-3'>
                        {imagesarray.map((image, index) => (
                            <Thumbnail
                                key={index}
                                src={image}
                                onClick={() => handleThumbnailClick(image)}
                            />
                        ))}
                    </div>
                    <div className='h-[500px] w-[500px] flex justify-center items-center'>
                        <Image
                            id='toggleimage'
                            src={mainimage}
                            className='object-contain'
                            alt=''
                        />
                    </div>
                </div>
                <div className='flex justify-start items-center gap-6'>
                    <Link href={"/addtocart"}>
                        <button className='px-6 w-fit p-2 border border-black font-semibold capitalize bg-black text-white'>add to cart</button>
                    </Link>
                    <button className='px-6 w-fit p-2 border border-black font-semibold capitalize bg-black text-white'>add to wishlist</button>
                </div>
            </div>

            <div className='px-4 py-10 flex flex-col gap-4'>
                <div className='flex justify-start items-center gap-12 border-b-1 border-b-gray-500 w-[1000px] pt-2'>
                    <div className={desc ? 'w-fit border-b-[3px] border-b-black cursor-pointer text-black font-semibold' : "w-fit cursor-pointer border-b-[3px] border-b-white  text-gray-500"} onClick={handledesc}>
                        <h5 className='py-2 capitalize tracking-widest'>Description</h5>
                    </div>
                    <div className={info ? 'w-fit border-b-[3px]  text-black font-semibold border-b-black cursor-pointer' : "w-fit cursor-pointer border-b-[3px] border-b-white text-gray-500 "} onClick={handleinfo}>
                        <h5 className='py-2 capitalize tracking-widest'>Additional Info</h5>
                    </div>
                    <div className={reviews ? 'w-fit  text-black font-semibold border-b-[3px] border-b-black cursor-pointer' : "w-fit cursor-pointer border-b-[3px] border-b-white text-gray-500 "} onClick={handlereviews}>
                        <h5 className='py-2 capitalize tracking-widest'>Reviews (23)</h5>
                    </div>
                    <div className={questions ? 'w-fit  text-black font-semibold border-b-[3px] border-b-black cursor-pointer' : "w-fit cursor-pointer border-b-[3px] border-b-white text-gray-500  "} onClick={handleques}>
                        <h5 className='py-2 capitalize tracking-widest'>Questions</h5>
                    </div>
                </div>
                <div className='h-[500px]'>
                    {
                        desc ? <Description /> : ""
                    }
                    {
                        info ? <Information /> : ""
                    }
                    {
                        reviews ? <Reviews /> : ""
                    }
                    {
                        questions ? <Questions /> : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default Page;
