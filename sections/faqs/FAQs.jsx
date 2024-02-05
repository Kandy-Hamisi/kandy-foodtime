import { Button, FaqAccordion } from '@/components'
import { faqData } from '@/constants'
import React from 'react'
import { FaQ } from 'react-icons/fa6'

const FAQs = () => {
  return (
    <section className='max-container'>
        <div className='flex flex-col items-center justify-center gap-8'>
            <div>
                <h1 className='text-2xl font-bold xl:text-4xl text-center font-poppins'>Frequenty Asked Questions</h1>
            </div>
            <div className='flex items-center gap-4'>
                <Button text="General" type="background" color="primary" />
                <Button text="For Business" type="outline" color="primary" />
            </div>
        </div>
        {/* FAQ accordions section */}
        <div className='flex justify-center py-6 flex-wrap gap-8 '>
            {
                faqData.map((faq, index) => (
                    <FaqAccordion {...faq} key={index} index={index}  />
                ))
            }
        </div>
    </section>
  )
}

export default FAQs