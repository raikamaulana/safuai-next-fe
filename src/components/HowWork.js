import Image from 'next/image'
import React from 'react'

export const HowWork = () => {
  return (
    <div className='bg-[#E8ECEF] dark:bg-[#1b1f28] transition-all duration-500 px-6 pt-32 md:pb-14 lg:pb-10 pb-[750px]'>
      <div className='lg:absolute lg:p-10 '>
        <Image src='/images/howWork/heading.svg' 
        width='200' 
        height='200' 
        className='mb-4 md:mb-4 xl:mx-20 mt-10'/>
        
    <p className='font-semibold dark:text-white text-2xl mb-20 xl:mx-20 lg:w-88'>Get Udited by SAFU AI within 1-2Days</p>
    
    <Image src='/images/howWork/blockicon.svg'
    width='400'
    height='400'
    className='xl:mx-28 max-w-xs mx-auto'/>
      
      </div>
      <div className='py-10 md:w-64 max-w-xl md:h-80 h-72 lg:mx-auto md:mx-[130px] mx-auto mt-[200px] rounded-md bg-[#ffffff] dark:bg-[#282B3C]'>
      <Image src='/images/howWork/pricingicon.svg' 
      width='57' 
      height='57' 
      className='-m-7 ml-3'/>

    <h1 className='lg:ml-4 md:ml-4 ml-4  mt-10 text-xl text-left font-semibold dark:text-white'>Get a pricing quote</h1>
    <p className='pr-3 mt-4 ml-4 text-md dark:text-[#ffffff]'>Obtain an audit scope,
    timeline, and pricing 
    estimate by submitting the
    necessary paperwork</p>

    <div className='flex relative w-full'>
    <h2 className='mt-5 ml-4 text-lg font-semibold dark:text-white'>Request Now</h2>
    <button className='absolute right-8 -bottom-3'>
    <Image src='/images/howWork/buttonarrow.svg' 
    width='27' 
    height='27' 
    className='ml-48 -mt-10'/>
    </button>
        </div>
      <div className='py-10 pr-12 md:w-64 md:h-[395px] mx-auto md:ml-88 md:-mt-96 mt-[410px] rounded-md bg-[#ffffff] dark:bg-[#282B3C]'>
      <Image src='/images/howWork/inspecticon.svg' 
      width='57' 
      height='57' 
      className='-m-7 ml-3'/>

    <h1 className='lg:text-center md:text-center lg:ml-0 md:ml-0 ml-4 mt-10 text-xl text-left font-semibold dark:text-white'>Inspection report</h1>
    <p className='mt-4 ml-4 text-md dark:text-[#ffffff]'>Upon completion of preliminary testing, our specialists will provide you with a report detailing any detected vulnerabilities along with recommendations for addressing them</p>

    <div className='flex relative w-full'>
    <h2 className='mt-5 ml-4 text-lg font-semibold dark:text-white'>Request Now</h2>
    <button className='absolute right-0 -bottom-3'>
    <Image src='/images/howWork/buttonarrow.svg' 
    width='27' 
    height='27' 
    className='ml-48 -mt-10'/>
    </button>
        </div>
      </div>
      </div>
      <div className='py-10 md:w-64 max-w-xl md:h-96 h-80 md:mt-16 mt-6 lg:mx-auto mx-auto md:mx-[130px] rounded-md bg-[#ffffff] dark:bg-[#282B3C]'>
      <Image src='/images/howWork/corectionicon.svg' 
      width='57' 
      height='57' 
      className='-m-7 ml-3'/>

    <h1 className='lg:ml-4 md:ml-0 ml-4 mt-10 text-xl lg:max-w-min font-semibold dark:text-white'>Correction assessment</h1>
<p className='mt-4 ml-4 text-md pr-4 dark:text-[#ffffff]'>Once you implement the 
fixes, our team conducts
a validation check (1 check
is covered in the cost) to
verify that all modifications
are accurate.</p>

<div className='flex relative w-full'>
    <h2 className='mt-5 ml-4 text-lg font-semibold dark:text-white'>Request Now</h2>
    <button className='absolute right-8 -bottom-3'>
    <Image src='/images/howWork/buttonarrow.svg' 
    width='27' 
    height='27' 
    className='ml-48 -mt-10'/>
    </button>
        </div>
      <div className='py-10 md:w-64 md:h-[395px] h-80 mx-auto md:-mt-96 mt-[450px] md:ml-88 rounded-md bg-[#ffffff] dark:bg-[#282B3C]'>
      <Image src='/images/howWork/accreditation.svg'
      width='57'
      height='57'
      className='-m-7 ml-3'/>

    <h1 className='lg:ml-4 lg:mb-4 md:ml-4 md:mb-4 ml-4 mt-10 text-xl text-left font-semibold dark:text-white'>Accreditation and advertising</h1>
    <p className='mt-2 ml-4 pr-3 text-md dark:text-[#ffffff]'>Incorporate a Hacken audit onto your website and have it featured on CER.live, CMC, and CoinGecko. Your audit will also be highlighted on media platforms owned by Hacken and its partners.</p>

    <div className='flex relative w-full'>
    <h2 className='mt-5 ml-4 text-lg font-semibold dark:text-white'>Request Now</h2>
    <button className='absolute right-8 -bottom-3'>
    <Image src='/images/howWork/buttonarrow.svg' 
    width='27' 
    height='27' 
    className='ml-48 -mt-10'/>
    </button>
    </div>
    </div>
    </div>
    </div>
  )
}
