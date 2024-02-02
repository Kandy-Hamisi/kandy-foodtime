import { bikeCity } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Explore = () => {
  return (
    <section className='max-container min-h-[40vh] flex items-center gap-12'>
        {/* left */}
        <div className='flex-1'>
            <h1 className='text-6xl font-merienda font-bold text-primary my-4'>Explore your <br/> favorite city's food.</h1>
            <p className='my-4 font-poppins text-paragraph leading-[28px] max-w-[35em]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus quae at quidem veniam similique et officiis, expedita debitis? Minus dolor, ullam facilis commodi laudantium explicabo!</p>
            <button className='bg-primary p-2 rounded-md text-white flex items-center justify-center gap-2'>
                <span>Explore</span>
                <span><FaArrowRight className='text-xs' /></span>
            </button>
        </div>

        {/* right */}
        <div className='flex-1'>
            <div className='h-[500px] w-full relative'>
                <Image src={bikeCity} alt='delivery man' className='object-contain' fill />
            </div>
        </div>
    </section>
  )
}

export default Explore