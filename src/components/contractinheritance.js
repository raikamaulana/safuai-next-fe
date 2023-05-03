import React from 'react'
import Image from 'next/image';


export const ContractInheritance = () => {
  return (
    <>
    <section className="dark:bg-customBlack bg-customWhite w-full duration-500 transition-all">
            <div className='dark:bg-customDark bg-white h-162.5 rounded-lg lg:px-11 md:px-11  py-14'>
                <div>
                <div className='border border-customPurple dark:text-white max-w-min mx-auto lg:px-20 lg:py-5 md:px-20 md:py-5 px-6 py-3 rounded-lg text-lg lg:mb-1 md:mb-1 mb-2'>
                    BEP20Token
                </div>
                    <div className='flex'>
                        <Image width="88" height="94" className='lg:rotate-0 md:rotate-0 -rotate-12 lg:mr-16 md:mr-16 mx-auto' src="/images/Arrow 1.svg"/>

                        <Image width="135" height="101" className='lg:rotate-0 md:rotate-0 rotate-45 mb-2 h-20 lg:h-auto md:h-auto mt-6 lg:mt-0 md:mt-0 mx-auto' src="/images/Arrow 2.svg"/>

                    </div>
                </div>
                <div className='flex max-w-min mx-auto'>
                    <div className='border border-customPurple dark:text-white max-w-min mr-16 lg:px-20 lg:py-5 md:px-20 md:py-5 px-6 py-3 rounded-lg text-lg mb-5 lg:mb-1 md:mb-1'>
                        IBEP20
                    </div>
                    <div className='border border-customPurple dark:text-white max-w-min mx-auto lg:px-20 lg:py-5 md:px-20 md:py-5 px-6 py-3 rounded-lg text-lg mb-1 mt-5 lg:mt-0 md:mt-0'>
                        Ownable
                    </div>
                </div>


            </div>
      </section>
    </>
  )
}