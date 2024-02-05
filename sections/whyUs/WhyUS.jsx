import { UniqueCard } from '@/components'
import { uniqueServices } from '@/constants'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const WhyUS = () => {
  return (
    <section className='max-container min-h-screen '>
        <div className='flex flex-wrap xl:flex-nowrap gap-8'>
            {
                uniqueServices.map((service) => (
                    <UniqueCard key={service.id} {...service} />
                ))
            }
        </div>

        <div className='rounded-3xl chef-background padding mt-10 flex justify-center items-end'>
            <div className='flex flex-col items-center gap-8 text-center'>
                <div>
                    <h1 className='text-3xl text-white font-bold font-palanquin'>Want to be part of Foodtime?</h1>
                </div>
                <div>
                    <p className='font-poppins text-white text-md'>List your restaurant or shop on foodtime</p>
                </div>
                <div>
                    <button className='bg-orange-secondary flex text-sm items-center gap-2 text-white p-2 rounded-full'>
                        <span>Get Started</span>
                        <span><FaArrowRight /></span>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyUS