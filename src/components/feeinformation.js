import React, {Fragment} from 'react'
import { Tab } from '@headlessui/react'

export const FeeInformation = () => {
  return (
    <section className="bg-[#0D1116] w-full lg:h-screen lg:pl-36 lg:pr-36 px-2 md:px-20 pb-9 pt-6 duration-500 transition-all">
      <div className='max-w-max bg-customDark lg:bg-transparent md:bg-transparent'>
          <Tab.Group>
              <Tab.List>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button className={selected ? 'bg-customDark text-customPurple lg:mr-5 lg:px-9 lg:pt-4 lg:pb-7  mr-4 pt-2 px-2 md:pb-4' : 'bg-customDark text-white lg:mr-5 lg:px-9 lg:pt-4 lg:pb-3  mr-4 pt-2 px-2 md:pb-2'}>
                      Buy Tax Information
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button className={selected ? 'bg-customDark text-customPurple lg:mr-5 lg:px-9 lg:pt-4 lg:pb-7  mr-4 pt-2 px-2 md:pb-4' : 'bg-customDark text-white lg:mr-5 lg:px-9 lg:pt-4 lg:pb-3  mr-4 pt-2 px-2 md:pb-2'}>
                      Sell Tax Information
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    /* Use the `selected` state to conditionally style the selected tab. */
                    <button className={selected ? 'bg-customDark text-customPurple lg:px-9 lg:pt-4 lg:pb-7 pt-2 px-2 md:pb-4 mr-0' : 'bg-customDark text-white lg:px-9 lg:pt-4 lg:pb-3 pt-2 px-2 md:pb-2 mr-0'}>
                      Transfer Tax Information
                    </button>
                  )}
                </Tab>
                {/* ...  */}
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className='bg-customDark h-[570px] py-8 pr-8 pl-5'>
                    <div className='grid grid-cols-3 pl-6 mb-4'>
                      <p className='text-[#9098A0] '>Name</p>
                      <p className='text-[#9098A0] '>RECEIVER</p>
                      <p className='text-[#9098A0] '>VALUE</p>
                    </div>
                    <div className='grid grid-cols-3 bg-[#242A32] py-3 pl-6 mb-6 rounded-lg'>
                      <p className='text-white truncate'>LIQUIDITY</p>
                      <p className='text-white truncate'>0X919...2131</p>
                      <p className='text-white'>4%</p>
                    </div>
                    <div className='grid grid-cols-3 bg-[#242A32] py-3 pl-6 mb-6 rounded-lg'>
                      <p className='text-white truncate'>MARKETING</p>
                      <p className='text-white truncate'>0X012...131</p>
                      <p className='text-white'>3%</p>
                    </div>
                    <div className='grid grid-cols-3 bg-[#242A32] py-3 pl-6 mb-6 rounded-lg'>
                      <p className='text-white truncate'>TOKEN REWARD</p>
                      <p className='text-white truncate'>0X131...123</p>
                      <p className='text-white'>3%</p>
                    </div>
                    <div className='grid grid-cols-3 bg-[#242A32] py-3 pl-6 mb-6 rounded-lg'>
                      <p className='text-white truncate'>TOTAL</p>
                      <p className='text-white'>11%</p>
                    </div>
                  </div>
                </Tab.Panel>
                {/* ... */}
              </Tab.Panels>
              <Tab.Panels>
                <Tab.Panel>
                <div className='bg-customDark h-[570px] py-8 pr-8 pl-5'>
                    <div className='grid grid-cols-3 pl-6 mb-4'>
                      <p className='text-[#9098A0] '>Name</p>
                      <p className='text-[#9098A0] '>RECEIVER</p>
                      <p className='text-[#9098A0] '>VALUE</p>
                    </div>
                    <div className='grid grid-cols-3 bg-[#242A32] py-3 pl-6 mb-6 rounded-lg'>
                      <p className='text-white truncate'>LIQUIDITY</p>
                      <p className='text-white truncate'>0X919...2131</p>
                      <p className='text-white'>4%</p>
                    </div>
                    <div className='grid grid-cols-3 bg-[#242A32] py-3 pl-6 mb-6 rounded-lg'>
                      <p className='text-white truncate'>MARKETING</p>
                      <p className='text-white truncate'>0X012...131</p>
                      <p className='text-white'>3%</p>
                    </div>
                    <div className='grid grid-cols-3 bg-[#242A32] py-3 pl-6 mb-6 rounded-lg'>
                      <p className='text-white truncate'>TOKEN REWARD</p>
                      <p className='text-white truncate'>0X131...123</p>
                      <p className='text-white'>3%</p>
                    </div>
                    <div className='grid grid-cols-3 bg-[#242A32] py-3 pl-6 mb-6 rounded-lg'>
                      <p className='text-white truncate'>TOTAL</p>
                      <p className='text-white'>11%</p>
                    </div>
                  </div>
                </Tab.Panel>
                {/* ... */}
              </Tab.Panels>
              <Tab.Panels>
                <Tab.Panel>
                <div className='bg-customDark h-[570px] py-8 pr-8 pl-5'>
                    <div className='grid grid-cols-3 gap-9 pl-6 mb-4'>
                      <p className='text-[#9098A0]'>Name</p>
                      <p className='text-[#9098A0]'>RECEIVER</p>
                      <p className='text-[#9098A0]'>VALUE</p>
                    </div>
                    <div className='grid grid-cols-3 bg-[#242A32] py-3 pl-6 mb-6 rounded-lg'>
                      <p className='text-white truncate sm:w-20 md:w-28 lg:w-full'>NO TAX IN THIS CONTRACT</p>
                      <p className='text-white'></p>
                      <p className='text-white'>%</p>
                    </div>
                    <div className='grid grid-cols-3 bg-[#242A32] py-3 pl-6 mb-6 rounded-lg'>
                      <p className='text-white'>MARKETING</p>
                      <p className='text-white'></p>
                      <p className='text-white'></p>
                    </div>
                    <div className='grid grid-cols-3 bg-[#242A32] py-3 pl-6 mb-6 rounded-lg'>
                      <p className='text-white '>TOTAL</p>
                      <p className='text-white'>0</p>
                    </div>
                  </div>
                </Tab.Panel>
                {/* ... */}
              </Tab.Panels>
        </Tab.Group>
        </div>
    </section>
  );
};