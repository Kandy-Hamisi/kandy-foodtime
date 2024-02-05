'use client'
import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

const FaqAccordion = ({ question, answer, index }) => {
    const [isOpen, setIsOpen ] = useState(false);
    const [ openIndex, setOpenIndex ] = useState(null);


    // handleToggle
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
        setIsOpen(!isOpen);
    }
  return (
    <div className='w-full md:w-[300px]' onClick={() => handleToggle(index)}>
        <div className='flex flex-col gap-3 border-paragraph border p-3 rounded-md'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold font-poppins text-md '>{question}</h2>
                <span className="cursor-pointer">
                    {
                        isOpen ? <FaMinusCircle /> : <FaPlusCircle />
                    }
                </span>
            </div>
            <div>
                {isOpen && <p className='text-paragraph text-sm'>{answer}</p>}
            </div>
        </div>
    </div>
  )
}

export default FaqAccordion