// 'use client'
import Image from 'next/image'
import React from 'react'

const UniqueCard = ({ title, desc, icon, id }) => {
  return (
    <div className={`flex flex-col gap-4 ${id === 1 && 'bg-[#F5F8F2]'} hover:bg-[#F5F8F2] transition-all duration-300 ease-in-out padding rounded-2xl text-center xl:text-left`}>
        <div className='mb-2 flex justify-center lg:justify-start'>
            <Image src={icon} alt="title" height={55} width={55} className="object-contain" />
        </div>
        <div className='mb-2'>
            <h3 className='font-bold font-poppins text-xl'>{title}</h3>
        </div>
        <div>
            <p className='text-paragraph leading-8'>{desc}</p>
        </div>
    </div>
  )
}

export default UniqueCard