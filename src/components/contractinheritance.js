import React from 'react'

export const ContractInheritance = () => {
  return (
    <>
    <section className="bg-[#0D1116] w-full lg:pl-36 lg:pr-36 px-3 md:px-20 py-10">
            <div className='bg-customDark h-[650px] rounded-lg lg:px-11 md:px-11  py-14'>
                <div>
                <div className='border border-customPurple text-white max-w-min mx-auto lg:px-20 lg:py-5 md:px-20 md:py-5 px-6 py-3 rounded-lg text-lg lg:mb-1 md:mb-1 mb-2'>
                    BEP20Token
                </div>
                <div className='flex max-w-min mx-auto'>
                    <svg width="88" height="94" className='lg:rotate-0 md:rotate-0 -rotate-12 lg:mr-16 md:mr-16 ' viewBox="0 0 88 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.500885 92.0517C0.529436 92.8796 1.22375 93.5277 2.05169 93.4991L15.5437 93.0339C16.3716 93.0053 17.0196 92.311 16.9911 91.4831C16.9625 90.6551 16.2682 90.0071 15.4403 90.0356L3.44741 90.4492L3.03387 78.4563C3.00532 77.6284 2.311 76.9804 1.48306 77.0089C0.655124 77.0375 0.00709594 77.7318 0.0356467 78.5597L0.500885 92.0517ZM84.9034 0.976523L0.903412 90.9765L3.09658 93.0235L87.0966 3.02348L84.9034 0.976523Z" fill="#D171FF"/>
                    </svg>
                    <svg width="135" height="101" className='lg:rotate-0 md:rotate-0 rotate-45 mb-2 h-20 lg:h-auto md:h-auto mt-6 lg:mt-0 md:mt-0' viewBox="0 0 135 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M133.241 98.4805C134.059 98.3472 134.614 97.5763 134.48 96.7587L132.309 83.4345C132.175 82.6169 131.405 82.0621 130.587 82.1954C129.769 82.3286 129.214 83.0995 129.348 83.9171L131.278 95.7608L119.435 97.6913C118.617 97.8246 118.062 98.5955 118.195 99.4131C118.329 100.231 119.099 100.786 119.917 100.652L133.241 98.4805ZM0.123786 3.21748L132.124 98.2175L133.876 95.7825L1.87621 0.782524L0.123786 3.21748Z" fill="#D171FF"/>
                    </svg>
                </div>
                </div>
                <div className='flex max-w-min mx-auto'>
                    <div className='border border-customPurple text-white max-w-min mr-16 lg:px-20 lg:py-5 md:px-20 md:py-5 px-6 py-3 rounded-lg text-lg mb-5 lg:mb-1 md:mb-1'>
                        IBEP20
                    </div>
                    <div className='border border-customPurple text-white max-w-min mx-auto lg:px-20 lg:py-5 md:px-20 md:py-5 px-6 py-3 rounded-lg text-lg mb-1 mt-5 lg:mt-0 md:mt-0'>
                        Ownable
                    </div>
                </div>


            </div>
      </section>
    </>
  )
}