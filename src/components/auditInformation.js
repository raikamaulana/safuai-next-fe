import React from 'react'
import Image from 'next/image'

export const auditInformation = () => {
    return (
        <>
            <div className="bg-[#E8ECEF] dark:bg-customBlack text-black dark:text-white transition-all duration-500">
                {/* DIV 1 */}
                <div className='max-w-3xl font-[Poppins] font-normal'>
                    <h1 className='text-lg mb-3'>TOONSBOX TOKEN</h1>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
                        <div className='bg-[#2C3239] text-white text-center py-3'>Manual Review</div>
                        <div className='bg-[#2C3239] text-white text-center py-3'>Static Analysis</div>
                        <div className='bg-[#2C3239] text-white text-center py-3'>Dynamic Analysis</div>
                        <div className='bg-[#2C3239] text-white text-center py-3'>Symbolic Execution</div>
                        <div className='bg-[#2C3239] text-white text-center py-3'>SWC Check</div>
                    </div>
                </div>
                {/* DIV 2 */}
                <div className='max-w-3xl font-[Poppins] grid grid-cols-2 gap-10 mt-9 lg:grid-cols-4 lg:gap-20'>
                    <div className='flex flex-col text-center lg:text-left'>
                        <h2 className='font-normal text-sm sm:text-base'>Contract Name</h2>
                        <p className='font-semibold 
                        text-base sm:text-lg'>BEP20 Token</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <h2 className='font-normal text-sm sm:text-base'>Compiler</h2>
                        <p className='font-semibold 
                        text-xs sm:text-base md:text-lg lg:-ml-12'>v0.8.17+commit.8df45f5f</p>
                    </div>
                    <div className='flex flex-col text-center'>
                        <div className='lg:translate-x-6'>
                            <h2 className='font-normal text-sm sm:text-base'>Language</h2>
                            <p className='font-semibold 
                            text-base sm:text-lg'>Solidity</p>
                        </div>
                    </div>
                    <div className='flex flex-col text-center'>
                        <div className='lg:-mr-7'>
                            <h2 className='font-normal text-sm sm:text-base'>License</h2>
                            <p className='font-semibold 
                            text-base sm:text-lg'>MIT License</p>
                        </div>
                    </div>
                </div>
                {/* DIV 3 */}
                <div className='max-w-3xl mt-8 px-6 py-7 bg-white dark:bg-[#20262D]'>
                    <div className=''>
                        {/* DIV 3 #1 */}
                        <div className='max-w-lg h-10 flex font-[Poppins] font-medium text-lg text-white'>
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
                        <div className='w-full font-[Poppins] mt-10 font-medium text-lg'>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-14 mt-8 font-[Poppins] font-normal dark:font-light text-base">
                                <div className="text-center w-36">
                                    <svg className="mx-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="20" fill="#D171FF"/>
                                        <path d="M11.783 10.826L20 9L28.217 10.826C28.4391 10.8754 28.6377 10.999 28.78 11.1764C28.9224 11.3538 29 11.5745 29 11.802V21.789C28.9999 22.7767 28.756 23.7492 28.2899 24.62C27.8238 25.4908 27.1499 26.2331 26.328 26.781L20 31L13.672 26.781C12.8503 26.2332 12.1765 25.4911 11.7103 24.6205C11.2442 23.7498 11.0002 22.7776 11 21.79V11.802C11 11.5745 11.0776 11.3538 11.22 11.1764C11.3623 10.999 11.5609 10.8754 11.783 10.826ZM13 12.604V21.789C13 22.4475 13.1626 23.0957 13.4733 23.6763C13.7839 24.2568 14.2332 24.7517 14.781 25.117L20 28.597L25.219 25.117C25.7667 24.7518 26.2158 24.2571 26.5265 23.6767C26.8372 23.0964 26.9998 22.4483 27 21.79V12.604L20 11.05L13 12.604Z" fill="white"/>
                                    </svg>
                                    <p className="mt-2">Audit Request</p>
                                    <p>2023-10-21</p>
                                </div>
                                <div className="text-center w-36">
                                    <svg className="mx-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="20" fill="#D171FF"/>
                                        <path d="M17 15.078L23 29.078L26.659 20.539H31V18.539H25.341L23 24L17 10L13.341 18.539H9V20.539H14.659L17 15.078Z" fill="white"/>
                                    </svg>
                                    <p className="mt-2">Audit Onboard</p>
                                    <p>2023-10-25</p>
                                </div>
                                <div className="text-center w-36">
                                    <svg className="mx-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="20" fill="#D171FF"/>
                                        <path d="M28.5 9C28.7652 9 29.0196 9.10536 29.2071 9.29289C29.3946 9.48043 29.5 9.73478 29.5 10V15C29.5 15.2652 29.3946 15.5196 29.2071 15.7071C29.0196 15.8946 28.7652 16 28.5 16H23.5V29C23.5 29.2652 23.3946 29.5196 23.2071 29.7071C23.0196 29.8946 22.7652 30 22.5 30H18.5C18.2348 30 17.9804 29.8946 17.7929 29.7071C17.6054 29.5196 17.5 29.2652 17.5 29V16H12C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V12.618C11.0001 12.4323 11.0519 12.2504 11.1496 12.0925C11.2472 11.9346 11.3869 11.807 11.553 11.724L17 9H28.5ZM23.5 11H17.472L13 13.236V14H19.5V28H21.5V14H23.5V11ZM27.5 11H25.5V14H27.5V11Z" fill="white"/>
                                    </svg>
                                    <p className="mt-2">Revision At</p>
                                    <p>2023-10-26</p>
                                </div>
                                <div className="text-center w-36">
                                    <svg className="mx-auto" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20" r="20" fill="#D171FF"/>
                                        <path d="M12 18.4V12C12 11.7348 12.1054 11.4804 12.2929 11.2929C12.4804 11.1054 12.7348 11 13 11H18V9H22V11H27C27.2652 11 27.5196 11.1054 27.7071 11.2929C27.8946 11.4804 28 11.7348 28 12V18.4L29.086 18.726C29.3321 18.8001 29.5402 18.966 29.6672 19.1895C29.7942 19.4129 29.8303 19.6767 29.768 19.926L28.252 25.994C27.6064 26.0273 26.9604 25.935 26.35 25.722L27.6 20.37L20 18L12.4 20.37L13.65 25.721C13.0397 25.9343 12.3937 26.027 11.748 25.994L10.232 19.926C10.1697 19.6767 10.2058 19.4129 10.3328 19.1895C10.4598 18.966 10.6679 18.8001 10.914 18.726L12 18.4ZM14 17.8L20 16L26 17.8V13H14V17.8ZM12 28C13.4763 28.002 14.9011 27.4578 16 26.472C17.0989 27.4578 18.5237 28.002 20 28C21.4763 28.002 22.9011 27.4578 24 26.472C25.0989 27.4578 26.5237 28.002 28 28H30V30H28C26.5956 30.0023 25.2157 29.6331 24 28.93C22.7843 29.6331 21.4044 30.0023 20 30C18.5956 30.0023 17.2157 29.6331 16 28.93C14.7843 29.6331 13.4044 30.0023 12 30H10V28H12Z" fill="white"/>
                                    </svg>
                                    <p className="mt-2">Release At</p>
                                    <p>2023-10-27</p>
                                </div>
                            </div>
                        </div>
                        {/* DIV 3 #3 */}
                        <div className='max-w-lg mt-10'>
                            <div className='flex justify-between'>
                                <h1 className='font-[Poppins] font-semibold text-lg hidden md:block'>Issue Information</h1>
                                <h2 className='font-[Poppins] font-semibold text-lg hidden md:block'>Issue Tags</h2>
                            </div>
                            <div className='font-[Poppins] font-normal text-sm md:text-base bg-white border border-[#E8ECEF] dark:border-none dark:bg-[#2C3239] rounded-md mt-2 py-3 px-4 flex flex-col justify-between w-full md:flex-row'>
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
