import React from 'react'
import Image from 'next/image'

export const auditInformation = () => {
    return (
        <>
            <div className="pt-44 pb-28 px-4 sm:px-8 md:px-12 lg:px-28 bg-[#E8ECEF] dark:bg-[#0D1116] text-black dark:text-white transition-all duration-500">
                {/* DIV 1 */}
                <div className='max-w-3xl font-[Poppins] font-light'>
                    <h1 className='text-lg mb-3'>TOONSBOX TOKEN</h1>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
                        <div className='bg-white dark:bg-[#2C3239] text-center py-3'>Manual Review</div>
                        <div className='bg-white dark:bg-[#2C3239] text-center py-3'>Static Analysis</div>
                        <div className='bg-white dark:bg-[#2C3239] text-center py-3'>Dynamic Analysis</div>
                        <div className='bg-white dark:bg-[#2C3239] text-center py-3'>Symbolic Execution</div>
                        <div className='bg-white dark:bg-[#2C3239] text-center py-3'>SWC Check</div>
                    </div>
                </div>
                {/* DIV 2 */}
                <div className='max-w-3xl font-[Poppins] grid grid-cols-2 gap-10 mt-9 lg:grid-cols-4 lg:gap-20'>
                    <div className='flex flex-col text-center lg:text-left'>
                        <h2 className='font-light text-sm sm:text-base'>Contract Name</h2>
                        <p className='font-medium text-base sm:text-lg'>BEP20 Token</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <h2 className='font-light text-sm sm:text-base'>Compiler</h2>
                        <p className='font-medium text-xs sm:text-base md:text-lg lg:-ml-12'>v0.8.17+commit.8df45f5f</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <h2 className='font-light text-sm sm:text-base'>Language</h2>
                        <p className='font-medium text-base sm:text-lg'>Solidity</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <div className='lg:-mr-7'>
                            <h2 className='font-light text-sm sm:text-base'>License</h2>
                            <p className='font-medium text-base sm:text-lg'>MIT License</p>
                        </div>
                    </div>
                </div>
                {/* DIV 3 */}
                <div className='max-w-3xl mt-8 px-6 py-7 bg-white dark:bg-[#20262D]'>
                    <div className='max-w-lg'>
                        {/* DIV 3 #1 */}
                        <div className='h-10 flex font-[Poppins] font-medium text-lg text-white'>
                            <div className='flex items-center justify-center w-72 bg-[#349D48]'>
                                <p>50,0%</p>
                            </div>
                            <div className='flex items-center justify-center w-36 bg-[#B0753E]'>
                                <p>25%</p>
                            </div>
                            <div className='flex items-center justify-center w-36 bg-[#888888]'>
                                <p>25%</p>
                            </div>
                        </div>
                        {/* DIV 3 #2 */}
                        <div className='font-[Poppins] mt-10 font-medium text-lg'>
                            <h1>Audit Timeline</h1>
                            <div className='mt-11'>
                                <div className='h-1 bg-black dark:bg-white'></div>
                                <div className='flex justify-center sm:gap-2 md:gap-8 mt-2 text-sm md:text-lg'>
                                    <p>Request</p>
                                    <p className='-translate-y-10 md:-translate-y-12 '>Onboard</p>
                                    <p>Release At</p>
                                    <p className='-translate-y-10 md:-translate-y-12'>Revision At</p>
                                </div>
                            </div>
                        </div>
                        {/* DIV 3 #3 */}
                        <div className='mt-10'>
                            <div className='flex justify-between'>
                                <h1 className='font-[Poppins] font-medium text-lg hidden md:block'>Issue Information</h1>
                                <h2 className='font-[Poppins] font-medium text-lg hidden md:block'>Issue Tags</h2>
                            </div>
                            <div className='font-[Poppins] font-light text-sm md:text-base bg-[#F0F0F0] dark:bg-[#2C3239] rounded-md mt-2 py-3 px-4 flex flex-col justify-between w-full md:flex-row'>
                                <div className='w-full md:w-full'>
                                    <h1 className='font-[Poppins] mb-3 md:mb-0 font-medium text-lg block md:hidden'>Issue Information</h1>
                                    <div className='flex items-start justify-between w-full'>
                                        <div className='flex flex-col w-11/12 gap-3'>
                                            <div className='flex items-center gap-4 whitespace-nowrap'>
                                                <div className='w-4 h-4 bg-[#FF4040] rounded-full'></div>
                                                <p className=''>Critical Count</p>
                                            </div>
                                            <div className='flex items-center gap-4 whitespace-nowrap'>
                                                <div className='w-4 h-4 bg-[#B0753E] rounded-full'></div>
                                                <p className=''>Major Count</p>
                                            </div>
                                            <div className='flex items-center gap-4 whitespace-nowrap'>
                                                <div className='w-4 h-4 bg-[#BC9067] rounded-full' ></div>
                                                <p className=''>Medium Count</p>
                                            </div>
                                            <div className='flex items-center gap-4 whitespace-nowrap'>
                                                <div className='w-4 h-4 bg-[#39A844] rounded-full'></div>
                                                <p className=''>Minor Count</p>
                                            </div>
                                            <div className='flex items-center gap-4 whitespace-nowrap'>
                                                <div className='w-4 h-4 bg-[#D9D9D9] rounded-full'></div>
                                                <p className=''>Information Count</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col w-2/12 md:w-6/12 gap-3 text-center'>
                                            <span className='text-[#FF4040]'>0</span>
                                            <span className='text-[#B0753E]'>3</span>
                                            <span className='text-[#BC9067]'>0</span>
                                            <span className='text-[#39A844]'>2</span>
                                            <span className='text-[#D9D9D9]'>0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full md:w-6/12 mt-6 md:mt-0'>
                                    <div className='flex flex-col w-full gap-3 text-end'>
                                        <h2 className='font-[Poppins] font-medium text-lg block md:hidden'>Issue Tags</h2>
                                        <div className='flex justify-end items-center gap-4 flex-nowrap md:flex-wrap lg:flex-wrap'>
                                            <p>No Tags</p>
                                        </div>
                                        <div className='flex justify-end items-center gap-4 flex-nowrap md:flex-wrap lg:flex-wrap'>
                                            <p>Max Tx</p>
                                        </div>
                                        <div className='flex justify-end items-center gap-4 flex-nowrap md:flex-wrap lg:flex-wrap'>
                                            <p>Add Liquidity</p>
                                        </div>
                                        <div className='flex justify-end items-center gap-4 flex-nowrap md:flex-wrap lg:flex-wrap'>
                                            <p>Safemath</p>
                                        </div>
                                        <div className='flex justify-end items-center gap-4 flex-nowrap md:flex-wrap lg:flex-wrap'>
                                            <p>Set Fees</p>
                                            <p>Set Fee</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
