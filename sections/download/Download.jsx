import { mockup } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { FaGooglePlay } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa6'

const Download = () => {
  return (
    <section className="max-container flex gap-8 items-center justify-center">
        {/* left */}
        <div className=''>
            <div className='mb-4'>
                <h1 className='font-bold text-primary text-3xl font-poppins'>Put us in your pocket</h1>
            </div>
            <div className='mb-4 max-w-[20em]'>
                <p className='text-paragraph text-md'>Download our app from goole play or app store and you dont have to worry about your food anymore.</p>
            </div>
            <div className="flex flex-col xl:flex-row gap-8">
                <div className='bg-black rounded-xl flex items-center gap-2 p-2 w-[200px]'>
                    <div>
                        {/* <Image src='/apple.png' alt='logo' width={40} height={40} /> */}
                        <FaApple className='text-white h-[40px] w-[40px]'  />
                    </div>
                    <div className='text-white'>
                        <span className='text-[12px] font-bold'>Download on the</span>
                        <h4 className='font-bold text-xl font-poppins'>App Store</h4>
                    </div>
                </div>
                <div className='bg-black rounded-xl flex items-center gap-3 p-2 w-[200px]'>
                    <div>
                        {/* <Image src='/google-play.png' alt='logo' width={40} height={40} /> */}
                        <FaGooglePlay className='h-[40px] w-[40px] text-white' />
                    </div>
                    <div className='text-white'>
                        <span className='text-[12px] uppercase'>Get it on</span>
                        <h4 className='font-bold text-xl font-poppins'>Google Play</h4>
                    </div>
                </div>
            </div>
        </div>
        {/* right */}
        <div className='flex flex-1 justify-end'>
            <div>
                <Image src={mockup} alt="mockup foodtime" height={300} width={650} className="object-cover rounded-xl" />
            </div>
        </div>
    </section>
  )
}

export default Download