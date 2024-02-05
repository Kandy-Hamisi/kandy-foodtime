import { logoGreen } from '@/assets'
import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCaretDown, FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <header className='padding-x py-2 xl:py-8 absolute z-10 w-full'>
        <div className='flex items-center justify-between max-container'>
            {/* left */}
            <div className=''>
                <div className='xl:h-[100px] h-[75px] w-[100px] relative'>
                    <Image src={logoGreen} alt="foodtime logo" className='object-contain' fill/>
                </div>
            </div>
            {/* center */}
            <div className='xl:flex w-[1000px] p-2 hidden'>
                <nav className='flex items-center justify-end gap-12 flex-1 p-4'>
                    <ul className='flex-1 flex items-center justify-end w-full'>
                        {
                            navLinks.map((navItem) => (
                                <Link key={navItem.title} href={navItem.link} className='font-poppins mr-12'>{navItem.title}</Link>
                            ))
                        }
                    </ul>
                    <div className='flex items-center cursor-pointer justify-end'>
                        <span>EN</span>
                        <span><FaCaretDown /></span>
                    </div>
                </nav>
                <div className='flex-1 flex items-center justify-end gap-5 p-4'>
                    <div className='w-[100px]'>
                        <button className='bg-primary text-white font-poppins rounded-full p-2 text-base w-full'>Login</button>
                    </div>
                    <div className='flex items-center bg-primary rounded-full p-2 relative text-white'>
                        <span>
                            <FaShoppingCart className='text-xl' />
                        </span>
                        <div className='absolute w-[20px] h-[20px] flex items-center justify-center -top-[5px] -right-[10px] bg-orange-secondary text-white rounded-full p-1 text-xs font-semibold'>
                            <span>3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar