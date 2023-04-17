import React from 'react'
import Image from 'next/image';

export const ToonsBox = () => {
  return (
    <>
      <section className="dark:bg-customBlack bg-customWhite duration-500 transition-all lg:min-w-[700px]">
        <div className='dark:text-white'> 
          <div className='lg:flex md:flex mb-6 lg:relative md:relative block'>
            <p className='text-2xl font-semibold lg:mb-0 md:mb-0 mb-4'>TOONSBOX TOKEN</p>
            <button className='border dark:border-white border-customPurple  py-2 px-4 lg:absolute md:absolute flex right-0 '>
              <Image src="/images/PinkSale-Icon.svg" width="18" height="20" className='mr-3 my-auto' />
              View On PinkSale
            </button>
          </div>
          <div className='dark:bg-customDark bg-white w-full h-[650px] rounded-lg lg:px-11 md:px-11 py-14'>
              <div className='w-52 h-52 rounded-full bg-customWhite flex items-center relative mb-10 lg:mx-0 md:mx-0 mx-auto'>
                <svg width="130" height="130" className='mx-auto hidden dark:block '>
                  <ellipse cx="65" cy="65" rx="65" ry="65" fill="#20262D" className=''/>
                </svg>
                <svg width="130" height="130" className='mx-auto dark:hidden '>
                  <ellipse cx="65" cy="65" rx="65" ry="65" fill="white" className=''/>
                </svg>
                  <p className=' absolute left-14'>AIRobotCEO</p>
              </div>
              <ul className='ml-7'>
                <li className='flex mb-7 '>
                <svg width="15" height="15" className='my-auto mr-7'>
                  <ellipse cx="7" cy="7" rx="7" ry="7" fill="#FF4040" />
                </svg>
                <p className=''>Presale</p>
                </li>
                <li className='flex mb-7'>
                <svg width="15" height="15" className='my-auto mr-7'>
                  <ellipse cx="7" cy="7" rx="7" ry="7" fill="#7894EA" />
                </svg>
                <p className=''>Liquidity</p>
                </li>
                <li className='flex mb-7'>
                <svg width="15" height="15" className='my-auto mr-7'>
                  <ellipse cx="7" cy="7" rx="7" ry="7" fill="#FFEE51" />
                </svg>
                <p className=''>Unlocked</p>
                </li>
                <li className='flex mb-7'>
                <svg width="15" height="15" className='my-auto mr-7'>
                  <ellipse cx="7" cy="7" rx="7" ry="7" fill="#D9D9D9" />
                </svg>
                <p className=''>Burn</p>
                </li>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};
