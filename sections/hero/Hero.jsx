import { plate } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaCircleCheck } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className='w-full max-container padding-t flex xl:flex-row flex-col items-center xl:min-h-screen gap-10 justify-start xl:justify-center'>
        {/* left */}
        <div className='xl:flex-1 flex-col items-center'>
            <div className='mb-5 xl:text-left text-center flex justify-center'>
                <h1 className='text-4xl xl:text-6xl leading-[60px] xl:leading-[80px] max-w-[10em] font-bold text-primary font-merienda'>Order food online from your favourite local restaurants.</h1>
            </div>
            <div className='my-4'>
                <p className='font-bold font-poppins text-center xl:text-left text-xl text-paragraph'>Freshly made food delivered to your door.</p>
            </div>
            <div className='relative flex mt-5 items-center border border-paragraph rounded-full gap-2'>
                <span className='p-1.5 xl:p-3.5 rounded-full bg-orange-secondary'>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 9.54545C11.9864 9.54545 9.54545 11.9864 9.54545 15C9.54545 18.0136 11.9864 20.4545 15 20.4545C18.0136 20.4545 20.4545 18.0136 20.4545 15C20.4545 11.9864 18.0136 9.54545 15 9.54545ZM27.1909 13.6364C26.5636 7.95 22.05 3.43636 16.3636 2.80909V1.36364C16.3636 0.613636 15.75 0 15 0C14.25 0 13.6364 0.613636 13.6364 1.36364V2.80909C7.94999 3.43636 3.43636 7.95 2.80909 13.6364H1.36364C0.613636 13.6364 0 14.25 0 15C0 15.75 0.613636 16.3636 1.36364 16.3636H2.80909C3.43636 22.05 7.94999 26.5636 13.6364 27.1909V28.6364C13.6364 29.3864 14.25 30 15 30C15.75 30 16.3636 29.3864 16.3636 28.6364V27.1909C22.05 26.5636 26.5636 22.05 27.1909 16.3636H28.6363C29.3863 16.3636 30 15.75 30 15C30 14.25 29.3863 13.6364 28.6363 13.6364H27.1909ZM15 24.5455C9.72272 24.5455 5.45454 20.2773 5.45454 15C5.45454 9.72273 9.72272 5.45455 15 5.45455C20.2773 5.45455 24.5454 9.72273 24.5454 15C24.5454 20.2773 20.2773 24.5455 15 24.5455Z" fill="white"/>
                    </svg>
                </span>
                <span className='flex-1'>
                    <input type="text" className='p-1.5 xl:p-2 outline-none bg-transparent placeholder:text-paragraph placeholder:text-md placeholder:text-sm font-poppins w-full' placeholder="Enter Your location" name="" id="" />
                </span>
                <span className='bg-primary p-3 xl:p-5 flex justify-center w-[120px] xl:w-[200px] text-sm rounded-full text-white cursor-pointer'>
                    <button className='flex items-center justify-center gap-2'>
                        <span><FaSearch /></span>
                        <span>Search</span>
                    </button>
                </span>
            </div>
        </div>

        {/* right */}
        <div className='xl:flex-1 flex xl:justify-end relative'>
            <div className='h-[300px] xl:h-[600px] w-[300px] xl:w-[600px] relative'>
                <Image src={plate} alt="big plate" className='object-contain' fill />
            </div>

            <div  className='absolute xl:-top-32 top-[65%] xl:right-20 -right-[5%] border w-[200px] xl:w-[300px] border-white glass-morphism'>
                <span className='flex items-center gap-2 text-orange-secondary'>
                    <FaCircleCheck className='text-md xl:text-3xl' />
                    <span className='text-sm xl:text-3xl font-bold'>200k+</span>
                </span>
                <span className='text-sm xl:text-2xl font-bold font-poppins text-paragraph'>People Delivered</span>
            </div>
        </div>
    </section>
  )
}

export default Hero