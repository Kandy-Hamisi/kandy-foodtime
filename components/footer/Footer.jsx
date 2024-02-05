import { logoWhite } from '@/assets'
import { footerLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='padding-x flex flex-col xl:flex-row gap-8'>
        <div className='flex flex-col xl:w-[40%]'>
            <div className='mb-8'>
                <Image src={logoWhite} alt='logo' className='' width={200} height={100} />
            </div>
            <div>
                <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aut aperiam porro eum aliquam magnam saepe illo ipsa cupiditate minus, laudantium velit repellendus tenetur ad!</p>
            </div>
        </div>
        <div className='flex flex-wrap gap-12 justify-between xl:w-[60%]'>
            {
                footerLinks.map((footerCategory, index) => (
                    <div key={index} className='mb-8 text-white'>
                        <h4 className='font-bold text-3xl font-palanquin mb-4'>{footerCategory.category}</h4>
                        <div className='flex flex-col space-y-4'>
                            {
                                footerCategory.links.map((footerLink, index) => (
                                    <div key={index} className='flex text-slate-gray items-center space-x-4'>
                                        <a href={footerLink.url} className='font-bold'>{footerLink.text}</a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </footer>
  )
}

export default Footer