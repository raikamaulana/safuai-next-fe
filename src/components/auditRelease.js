import Image from "next/image"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export const auditRelease = () => {
    return (
        <>
            <div className="pt-44 pb-28 px-4 sm:px-8 md:px-12 lg:px-28 bg-[#E8ECEF] dark:bg-[#1B1F28] text-black dark:text-white transition-all duration-500">
                <div className="w-full">
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="min-w-max flex gap-4 items-center">
                            <div className="w-20 rounded-md bg-[#26293A] border border-[#575757] px-5 py-1">
                                    <p className="font-[Inter] font-light text-base text-white">Audit</p>
                            </div>
                            <span className="w-8 h-1 bg-black dark:bg-white" />
                            <div className="flex gap-2 items-center">
                                    <Image src="/images/auditrelease/virtualrobot.svg" width='40' height='40' />
                                    <p className="font-[Inter] font-semibold text-2xl text-black dark:text-white">Virtual Robot</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex-row gap-2 md:items-center">
                            <div className="flex gap-6 items-center">
                                    <p className="flex justify-center items-center w-20 h-9 font-semibold rounded-md border border-[#5B4C7C]">VR</p>
                                    <p className="w-20 h-9 flex justify-center items-center text-left rounded-md border border-[#5B4C7C] font-[Inter] text-base font-normal dark:font-light">
                                        <div className="flex justify-center gap-[6px]">
                                            <Image src="/images/auditrelease/bsc.svg" width="20" height="20" />
                                            <p>BSC</p>
                                        </div>
                                    </p>
                                    <p className="w-20 flex justify-center items-center h-9 rounded-md border border-[#5B4C7C] font-[Inter] text-base font-normal dark:font-light">DEFI</p>
                            </div>
                            <button className="w-24 h-9 text-left rounded-md border border-[#5B4C7C] font-[Inter] text-base font-normal dark:font-light md:mr-0 md:ml-auto">
                                <div className="flex justify-center gap-2">
                                    <Image src="/images/auditrelease/share.svg" width="19" height="20" />
                                    <span>Share</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mt-6">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-9">
                            <p className="w-48 h-9 flex items-center text-left pl-6 rounded-md border border-[#5B4C7C] font-[Inter] text-base font-normal dark:font-light">Audit Release #1</p>
                            <p className="w-52 h-9 flex justify-center items-center mt-0 rounded-md border border-[#5B4C7C] font-[Inter] text-base font-normal dark:font-light">Smart Contract Platform</p>
                        </div>
                        <Image src="/images/auditrelease/blocksafu.svg" width="138" height="40" />
                    </div>
                </div>
                <div className="w-full mt-5 rounded-md dark:bg-[#26293A] bg-white dark:border-none">
                    <div className="py-6 px-5 text-black dark:text-white">
                        <h2 className="font-[Inter] font-semibold text-xl">About Project</h2>
                        <p className="font-[Poppins] font-normal dark:font-light text-base leading-6 mt-3">It's not an ordinary meme token. Become a part of a powerful ecosystem and win more FROG CEO! Ecosystem Products: 🐸Apps, 🐸Game, 🐸Wallet, 🐸Swap, 🐸Chain, 🐸 AI, 🐸NFT, 🐸Browser, 🐸Pay, 🐸Clothing With the powerful Frog CEO, 6% of every transaction is automatically given to the owners in real time.</p>
                        <h3 className="font-[Inter] font-semibold text-xl mt-5">Audit Timeline</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 mt-8 font-[Poppins] font-normal dark:font-light text-base">
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
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 w-full">
                    <div className="w-full px-5 py-6 rounded-md dark:border-none bg-white dark:bg-[#26293A] flex justify-center gap-5">
                        <div className="w-full mt-2">
                            <p className="text-center font-[Inter] font-semibold text-lg leading-4">Content Score</p>
                            <Image src="/images/auditrelease/auditmeter.svg" width="100" height="100" className="mx-auto mt-5 sm:mt-4"/>
                            <p className="text-center font-[Inter] font-semibold text-lg"><span className="text-xl text-[#D171FF]">75</span>/100</p>
                            <p className="text-center text-sm sm:text-base font-[Inter] font-medium dark:font-light">You have a good score</p>
                        </div>
                        <div className="w-20 h-52 border border-[#5B4C7C] rounded-[5px]">
                                <div className="mx-5">
                                    <div className="flex mt-4 items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#D9D9D9" stroke="#D9D9D9" stroke-width="3"/>
                                        </svg>
                                        <p className="ml-2 font-semibold font-[Inter]">1</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#FFEE51" stroke="#FFEE51" stroke-width="3"/>
                                        </svg>
                                        <p  className="ml-2 font-semibold font-[Inter]">0</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#FB8F03" stroke="#FB8F03" stroke-width="3"/>
                                        </svg>
                                        <p  className="ml-2 font-semibold font-[Inter]">4</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#FE1A64" stroke="#FE1A64" stroke-width="3"/>
                                        </svg>
                                        <p  className="ml-2 font-semibold font-[Inter]">3</p>
                                    </div>
                                    <div className="flex mt-3 items-center">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.8" x="1.5" y="1.5" width="15" height="15" rx="3.5" fill="#38F982" stroke="#38F982" stroke-width="3"/>
                                        </svg>
                                        <p  className="ml-2 font-semibold font-[Inter]">5</p>
                                    </div>
                                </div>
                        </div>
                        <div className="w-full mt-2">
                            <p className="font-[Inter] sm:text-center lg:text-left font-semibold text-lg leading-4">Informations</p>
                            <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 w-full sm:w-52 lg:w-full mt-4 gap-5">
                                <button className="w-8 h-8 bg-[#E8ECEF] dark:bg-[#1B1F28] text-white flex justify-center items-center rounded-full">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20ZM6.89 11.17L4.392 10.391C3.852 10.226 3.849 9.854 4.513 9.587L14.246 5.827C14.811 5.597 15.131 5.888 14.948 6.617L13.291 14.437C13.175 14.994 12.84 15.127 12.375 14.87L9.824 12.982L8.635 14.13C8.513 14.248 8.414 14.349 8.226 14.374C8.039 14.4 7.885 14.344 7.772 14.034L6.902 11.163L6.89 11.17Z" fill="#D171FF"/>
                                    </svg>
                                </button>
                                <button className="w-8 h-8 bg-[#E8ECEF] dark:bg-[#1B1F28] flex justify-center items-center rounded-full">
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.905 11.0013C20.145 11.0012 19.4153 11.2994 18.8729 11.8319C18.3305 12.3643 18.0189 13.0884 18.005 13.8483L17.977 15.4233C17.9754 15.5079 17.9559 15.5911 17.9198 15.6676C17.8837 15.7441 17.8319 15.8121 17.7676 15.8672C17.7034 15.9222 17.6283 15.9631 17.5472 15.987C17.4661 16.011 17.3808 16.0176 17.297 16.0063L15.736 15.7943C13.682 15.5143 11.714 14.5683 9.826 12.9953C9.228 16.3053 10.396 18.5983 13.209 20.3673L14.956 21.4653C15.039 21.5175 15.108 21.5892 15.1568 21.6741C15.2057 21.7591 15.233 21.8548 15.2364 21.9528C15.2397 22.0507 15.219 22.1481 15.1761 22.2362C15.1331 22.3243 15.0692 22.4006 14.99 22.4583L13.398 23.6213C14.345 23.6803 15.244 23.6383 15.99 23.4903C20.708 22.5483 23.845 18.9983 23.845 13.1423C23.845 12.6643 22.833 11.0013 20.905 11.0013ZM16.005 13.8113C16.0225 12.8473 16.3239 11.91 16.8716 11.1165C17.4192 10.3231 18.1888 9.70881 19.0839 9.35065C19.979 8.9925 20.9599 8.90637 21.9037 9.10303C22.8476 9.2997 23.7124 9.77043 24.39 10.4563C25.101 10.4513 25.706 10.6313 27.059 9.81129C26.724 11.4513 26.559 12.1633 25.845 13.1423C25.845 20.7843 21.148 24.5003 16.382 25.4513C13.114 26.1033 8.362 25.0323 7 23.6103C7.694 23.5563 10.514 23.2533 12.144 22.0603C10.765 21.1513 5.276 17.9213 8.883 9.23729C10.576 11.2143 12.293 12.5603 14.033 13.2743C15.191 13.7493 15.475 13.7393 16.006 13.8123L16.005 13.8113Z" fill="#D171FF"/>
                                    </svg>
                                </button>
                                <button className="w-8 h-8 bg-[#E8ECEF] dark:bg-[#1B1F28] flex justify-center items-center rounded-full">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H1C0.44771 18 0 17.5523 0 17V1C0 0.44772 0.44771 0 1 0ZM2 2V16H16V2H2ZM14.3009 12.9403L15.255 13.8944V13.9446H10.3338V13.8944L11.3381 12.9403C11.4385 12.8399 11.4887 12.7394 11.4887 12.5888V6.6635C11.4887 6.41243 11.4887 6.06093 11.539 5.75964L8.22472 14.045H8.17442L4.75974 6.41243C4.70952 6.21157 4.65931 6.21157 4.60909 6.11114V11.1326C4.55887 11.4841 4.60909 11.7854 4.75974 12.0866L6.11559 13.8944V13.9446H2.5V13.8944L3.85584 12.0364C4.00649 11.7351 4.05671 11.3836 4.00649 11.0824V5.55879C4.00649 5.30771 3.95628 5.00643 3.75541 4.80557L2.85151 3.55021V3.5H6.36667L9.27922 9.9776L11.8403 3.5H15.255V3.55021L14.3009 4.65493C14.2004 4.75536 14.1502 4.906 14.1502 5.00643V12.639C14.1502 12.7394 14.2004 12.8901 14.3009 12.9403Z" fill="#D171FF"/>
                                    </svg>
                                </button>
                                <button className="w-8 h-8 bg-[#E8ECEF] dark:bg-[#1B1F28] flex justify-center items-center rounded-full">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM7.71002 17.6674C6.74743 15.6259 6.15732 13.3742 6.02731 11H2.06189C2.458 14.1765 4.71639 16.7747 7.71002 17.6674ZM8.0307 11C8.1811 13.4388 8.8778 15.7297 10 17.752C11.1222 15.7297 11.8189 13.4388 11.9693 11H8.0307ZM17.9381 11H13.9727C13.8427 13.3742 13.2526 15.6259 12.29 17.6674C15.2836 16.7747 17.542 14.1765 17.9381 11ZM2.06189 9H6.02731C6.15732 6.62577 6.74743 4.37407 7.71002 2.33256C4.71639 3.22533 2.458 5.8235 2.06189 9ZM8.0307 9H11.9693C11.8189 6.56122 11.1222 4.27025 10 2.24799C8.8778 4.27025 8.1811 6.56122 8.0307 9ZM12.29 2.33256C13.2526 4.37407 13.8427 6.62577 13.9727 9H17.9381C17.542 5.8235 15.2836 3.22533 12.29 2.33256Z" fill="#D171FF"/>
                                    </svg>
                                </button>
                                <button className="w-8 h-8 bg-[#E8ECEF] dark:bg-[#1B1F28] flex justify-center items-center rounded-full">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.04533 16.1552C2.74533 15.9552 2.48733 15.7002 2.18533 15.3392C2.02858 15.1474 1.87324 14.9544 1.71933 14.7602C1.25633 14.1852 0.964333 13.9202 0.662333 13.8112C0.412632 13.7216 0.208768 13.5364 0.0955903 13.2965C-0.0175879 13.0565 -0.0308096 12.7814 0.0588335 12.5317C0.148477 12.282 0.333642 12.0782 0.573595 11.965C0.813547 11.8518 1.08863 11.8386 1.33833 11.9282C2.09033 12.1982 2.59933 12.6632 3.28533 13.5162C3.19133 13.3992 3.62533 13.9432 3.71833 14.0552C3.90833 14.2822 4.04833 14.4202 4.15833 14.4932C4.36233 14.6302 4.74533 14.6892 5.30833 14.6332C5.33133 14.2512 5.40233 13.8802 5.51033 13.5382C2.54233 12.8122 0.862333 10.8982 0.862333 7.14222C0.862333 5.90222 1.23233 4.78622 1.92033 3.85022C1.70233 2.95622 1.73533 1.87522 2.22233 0.65822C2.2776 0.520555 2.3628 0.396911 2.47177 0.296249C2.58073 0.195587 2.71073 0.120428 2.85233 0.0762203C2.93333 0.0522203 2.97933 0.0412204 3.06033 0.0292204C3.86333 -0.0937796 4.99733 0.19922 6.47533 1.12522C7.35613 0.919303 8.25779 0.81595 9.16233 0.81722C10.0743 0.81722 10.9803 0.92122 11.8463 1.12522C13.3233 0.19222 14.4593 -0.10078 15.2683 0.0292204C15.3533 0.0422204 15.4253 0.0592203 15.4863 0.0792203C15.6252 0.124997 15.7523 0.200654 15.8587 0.300863C15.9651 0.401072 16.0483 0.523396 16.1023 0.65922C16.5893 1.87522 16.6223 2.95622 16.4043 3.84922C17.0953 4.78522 17.4623 5.89422 17.4623 7.14222C17.4623 10.8992 15.7883 12.8072 12.8203 13.5342C12.9453 13.9492 13.0103 14.4132 13.0103 14.9142C13.0104 15.8196 13.0064 16.7249 12.9983 17.6302C13.2229 17.6792 13.4238 17.8041 13.5671 17.9838C13.7104 18.1635 13.7874 18.3871 13.7852 18.6169C13.7829 18.8468 13.7016 19.0689 13.5548 19.2458C13.408 19.4227 13.2048 19.5436 12.9793 19.5882C11.8403 19.8162 10.9963 19.0562 10.9963 18.0632L10.9983 17.6172L11.0033 16.9122C11.0083 16.2042 11.0103 15.5742 11.0103 14.9142C11.0103 14.2172 10.8273 13.7622 10.5853 13.5542C9.92433 12.9842 10.2593 11.8992 11.1253 11.8022C14.0923 11.4692 15.4623 10.3202 15.4623 7.14222C15.4623 6.18722 15.1503 5.39822 14.5493 4.73822C14.4227 4.59946 14.3377 4.42785 14.3041 4.24303C14.2705 4.05821 14.2897 3.86767 14.3593 3.69322C14.5253 3.27922 14.5963 2.73622 14.4553 2.07922L14.4453 2.08222C13.9543 2.22122 13.3353 2.52222 12.5873 3.03122C12.4667 3.11308 12.3297 3.16757 12.1858 3.19089C12.0419 3.21421 11.8946 3.20579 11.7543 3.16622C10.9102 2.93251 10.0382 2.81509 9.16233 2.81722C8.27233 2.81722 7.39033 2.93622 6.57033 3.16722C6.43055 3.20648 6.2839 3.21483 6.14057 3.19168C5.99723 3.16854 5.86066 3.11447 5.74033 3.03322C4.98833 2.52622 4.36633 2.22622 3.87233 2.08622C3.72833 2.73922 3.79933 3.28022 3.96433 3.69322C4.03414 3.86758 4.05344 4.05807 4.02001 4.24288C3.98659 4.4277 3.90179 4.59936 3.77533 4.73822C3.17833 5.39222 2.86233 6.19622 2.86233 7.14222C2.86233 10.3142 4.23333 11.4702 7.18433 11.8022C8.04933 11.8992 8.38533 12.9792 7.72833 13.5502C7.53633 13.7182 7.29933 14.2822 7.29933 14.9142V18.0642C7.29933 19.0502 6.46433 19.7892 5.33933 19.5922C5.1111 19.5521 4.90387 19.4341 4.75305 19.2581C4.60223 19.0822 4.5172 18.8593 4.51248 18.6277C4.50775 18.396 4.58363 18.1699 4.72715 17.9879C4.87067 17.806 5.07292 17.6796 5.29933 17.6302V16.6402C4.38933 16.7012 3.63733 16.5522 3.04533 16.1552Z" fill="#D171FF"/>
                                    </svg>
                                </button>
                                <button className="w-8 h-8 bg-[#E8ECEF] dark:bg-[#1B1F28] flex justify-center items-center rounded-full">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 7C8.34262 7 7 8.3431 7 10C7 11.6573 8.34312 13 10 13C11.6573 13 13 11.6569 13 10C13 8.3427 11.6569 7 10 7ZM10 5C12.7604 5 15 7.2371 15 10C15 12.7605 12.7629 15 10 15C7.23953 15 5 12.7629 5 10C5 7.23953 7.2371 5 10 5ZM16.5 4.74915C16.5 5.43926 15.9392 5.99917 15.25 5.99917C14.5599 5.99917 14 5.4384 14 4.74915C14 4.0599 14.5607 3.5 15.25 3.5C15.9383 3.49913 16.5 4.0599 16.5 4.74915ZM10 2C7.52552 2 7.1222 2.00655 5.97129 2.0578C5.18717 2.09461 4.66155 2.20007 4.17318 2.38967C3.73918 2.55799 3.42611 2.75898 3.09254 3.09255C2.75769 3.4274 2.55706 3.73963 2.38942 4.17383C2.19938 4.66332 2.09395 5.18811 2.0578 5.97115C2.00605 7.0752 2 7.46105 2 10C2 12.4745 2.00655 12.8778 2.05779 14.0286C2.09462 14.8124 2.20022 15.3388 2.38936 15.826C2.55812 16.2606 2.75952 16.5744 3.09148 16.9064C3.42765 17.2421 3.74081 17.4434 4.17089 17.6094C4.66521 17.8005 5.1905 17.9061 5.97114 17.9422C7.0752 17.9939 7.46105 18 10 18C12.4745 18 12.8778 17.9934 14.0286 17.9422C14.8107 17.9055 15.3375 17.7996 15.826 17.6106C16.2594 17.4423 16.5742 17.2402 16.9064 16.9085C17.2426 16.5718 17.4435 16.2594 17.6097 15.8283C17.8003 15.3358 17.9061 14.8098 17.9422 14.0289C17.9939 12.9248 18 12.5389 18 10C18 7.52552 17.9934 7.12221 17.9422 5.97137C17.9054 5.18906 17.7995 4.66149 17.6103 4.17318C17.4424 3.74038 17.2407 3.42635 16.9074 3.09255C16.572 2.75715 16.2606 2.55693 15.8261 2.38942C15.337 2.19954 14.8114 2.09396 14.0288 2.05781C12.9248 2.00605 12.5389 2 10 2ZM10 0C12.7166 0 13.0558 0.00999994 14.1225 0.0599999C15.1866 0.10917 15.9125 0.2775 16.55 0.525C17.2091 0.77917 17.7658 1.1225 18.3216 1.67833C18.8766 2.23417 19.22 2.7925 19.475 3.45C19.7216 4.08667 19.89 4.81333 19.94 5.8775C19.9875 6.94417 20 7.28333 20 10C20 12.7167 19.99 13.0558 19.94 14.1225C19.8908 15.1867 19.7216 15.9125 19.475 16.55C19.2208 17.2092 18.8766 17.7658 18.3216 18.3217C17.7658 18.8767 17.2066 19.22 16.55 19.475C15.9125 19.7217 15.1866 19.89 14.1225 19.94C13.0558 19.9875 12.7166 20 10 20C7.28333 20 6.94416 19.99 5.8775 19.94C4.81333 19.8908 4.08833 19.7217 3.45 19.475C2.79166 19.2208 2.23416 18.8767 1.67833 18.3217C1.1225 17.7658 0.78 17.2067 0.525 16.55C0.2775 15.9125 0.11 15.1867 0.0600002 14.1225C0.0125002 13.0558 0 12.7167 0 10C0 7.28333 0.0100002 6.94417 0.0600002 5.8775C0.10916 4.8125 0.2775 4.0875 0.525 3.45C0.77916 2.79167 1.1225 2.23417 1.67833 1.67833C2.23416 1.1225 2.7925 0.78 3.45 0.525C4.0875 0.2775 4.8125 0.11 5.8775 0.0599999C6.94416 0.0124999 7.28333 0 10 0Z" fill="#D171FF"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-md dark:border-none lg:pl-10 mt-10 lg:mt-0 flex flex-col gap-6">
                        <h2 className="font-[Inter] text-lg font-semibold">Audit Link Share</h2>
                        <Image src="/images/auditrelease/bsafubarcode.svg" width="204" height="204"/>
                    </div>
                </div>
                {/* <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                    <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>What is your refund policy?</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            If you're unhappy with your purchase for any reason, email us
                            within 90 days and we'll refund you in full, no questions asked.
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Do you offer technical support?</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            No.
                        </Disclosure.Panel>
                        </>
                    )}
                    </Disclosure>
                </div>
                </div> */}
                <div className="w-full mt-9">
                    <div className="relative w-full font-normal text-lg font-[Inter] overflow-hidden">
                        <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-[84px] z-10 opacity-0 cursor-pointer rounded-lg" />
                        {/* Kolom depan */}
                        <div className="w-full bg-white peer-hover:bg-opacity-50 dark:bg-[#20262D] dark:peer-hover:bg-[#404449] rounded-lg pl-5 py-7 flex items-center justify-between pr-8">
                            <h1 className="text-lg font-normal">SAFU AI Certificate</h1>
                        </div>
                        <div className="absolute right-7 top-8 transition-all duration-500 rotate-0 peer-checked:rotate-180 peer-checked:scale-125 peer-checked:top-7">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        {/* Content */}
                        <div className="w-full mt-1 bg-white dark:bg-[#20262D] rounded-lg peer-checked:p-2 lg:peer-checked:p-5 overflow-hidden transition-decorate duration-500 max-h-0 peer-checked:max-h-[9999px]">
                            <div className="w-full bg-[#E8ECEF] dark:bg-[#262F39] py-1 rounded-lg">
                                <div className="w-full px-4 py-6 flex justify-between gap-2">
                                    <div className="w-88 md:w-2/3">
                                        <h2>Audit On SAFU AI</h2>
                                    </div>
                                    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2">
                                        <div className="md:w-1/4 lg:w-1/3 mr-[53px] ml-auto md:mr-0 md:ml-0">
                                            <h2>Network</h2>
                                            <p>BSC</p>
                                        </div>
                                        <div className="mr-0 ml-auto md:mr-0 md:ml-0">
                                            <h2>Order At</h2>
                                            <p>18 March 2021</p>
                                        </div>
                                        <div className="mr-0 ml-auto">
                                            <h2>Release At</h2>
                                            <p>21 March 2021</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <span className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-white dark:bg-[#20262D] z-[9999] transition-all duration-500"/>
                                    <hr className="dark:dashed-line-dark dashed-line"/>
                                    <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white dark:bg-[#20262D] z-[9999] transition-all duration-500" />
                                </div>
                                <div className="w-full px-4 py-6 flex justify-between gap-2">
                                    <div className="w-88 md:w-2/3">
                                        <h2>Contract Solidity</h2>
                                        <p>Solidity</p>
                                    </div>
                                    <div className="w-full flex flex-col md:flex-row gap-4 md:gap-2">
                                        <div className="md:w-1/4 lg:w-1/3 mr-9 ml-auto md:mr-0 md:ml-0">
                                            <h2>Category</h2>
                                            <p>DeFi</p>
                                        </div>
                                        <div className="mr-0 ml-auto md:mr-0 md:ml-0">
                                            <h2>Owner</h2>
                                            <p>0x000...0000</p>
                                        </div>
                                        <div className="mr-0 ml-auto">
                                            <h2>Release At</h2>
                                            <p>0x3233..Ease</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <span className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-white dark:bg-[#20262D] z-[9999] transition-all duration-500"/>
                                    <hr className="dark:dashed-line-dark dashed-line"/>
                                    <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white dark:bg-[#20262D] z-[9999] transition-all duration-500" />
                                </div>
                                <div className="w-full px-4 py-6 flex justify-between">
                                    <div className="flex items-center">
                                        <Image src="/images/auditrelease/virtualrobot.svg" width="30" height="30" className="mr-4"/>
                                        <h2 className="font-[Inter] text-lg font-normal mr-5">Virtual Robot</h2>
                                        <span className="w-32 py-1 font-[Inter] text-center text-lg font-normal border border-[#575757] rounded-lg">VR</span>
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