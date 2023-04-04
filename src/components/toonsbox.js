import React from 'react'

export const ToonsBox = () => {
  return (
    <>
      <section className="dark:bg-[#0D1116] bg-[#E8ECEF] w-full lg:pl-36 lg:pr-36 px-2 md:px-20 pb-9 duration-500 transition-all">
        <div className='dark:text-white'> 
          <div className='lg:flex md:flex w-full pt-8 mb-6 lg:relative md:relative block'>
            <p className='text-2xl font-semibold  lg:mb-0 md:mb-0 mb-4'>TOONSBOX TOKEN</p>

            <button className='border dark:border-white border-customPurple  py-2 px-4 lg:absolute md:absolute flex right-0 '><svg width="18" className='mr-3 my-auto' height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7V2H2V18H8.056C8.384 18.417 8.78 18.785 9.236 19.085L10.626 20H0.993C0.729813 20 0.477391 19.8955 0.291196 19.7095C0.105001 19.5235 0.000265042 19.2712 0 19.008V0.992C0 0.455 0.449 0 1.002 0H11.997L18 6V7H11ZM9 9H18V14.949C18 15.939 17.499 16.865 16.664 17.414L13.5 19.498L10.336 17.414C9.92663 17.1461 9.59023 16.7807 9.35703 16.3506C9.12383 15.9205 9.00115 15.4392 9 14.95V9ZM11 14.949C11 15.265 11.162 15.563 11.436 15.744L13.5 17.104L15.564 15.744C15.6969 15.6581 15.8064 15.5404 15.8825 15.4016C15.9586 15.2628 15.999 15.1073 16 14.949V11H11V14.949Z" fill="url(#paint0_linear_301_469)"/>
              <defs>
                <linearGradient id="paint0_linear_301_469" x1="9" y1="0" x2="9" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#EFBAD3"/>
                  <stop offset="1" stop-color="#D171FF"/>
                </linearGradient>
              </defs>
            </svg>
              View On PinkSale
            </button>
          </div>
          <div className='dark:bg-customDark bg-white w-full h-[650px] rounded-lg lg:px-11 md:px-11  py-14'>
              <div className='w-52 h-52 rounded-full bg-[#D9D9D9] flex items-center relative mb-10 lg:mx-0 md:mx-0 mx-auto'>
                <svg width="130" height="130" className='mx-auto hidden dark:block '>
                  <ellipse cx="65" cy="65" rx="65" ry="65" fill="#20262D" className=''/>
                </svg>
                <svg width="130" height="130" className='mx-auto dark:hidden '>
                  <ellipse cx="65" cy="65" rx="65" ry="65" fill="white" className=''/>
                </svg>
                  <p className=' absolute left-[60px]'>AIRobotCEO</p>
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
