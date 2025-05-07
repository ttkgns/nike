import React from 'react'
import { shoe8 } from '../assets/images'
import Button from '../components/Button'
const SuperQuality = () => {
  return (
    <section id='about-us' className='max-container flex justify-between items-center max-lg:flex-col gap-10 w-full'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched 
          quality, innovation, and a touch of elegance.</p>
        <p className='info-text lg:max-w-lg mt-6 '>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-11'>
          <Button label={'View details'}/>
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt="shoe" width={570} height={522} className='object-contain'/>
      </div>
    </section>
  )
}

export default SuperQuality