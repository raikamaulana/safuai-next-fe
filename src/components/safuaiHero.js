import Image from "next/image"

export const safuaiHero = () => {
    return (
        <>
            <div className="pt-44 pb-28 px-4 sm:px-8 md:px-12 lg:px-28 bg-[#E8ECEF] dark:bg-[#1B1F28] text-black dark:text-white transition-all duration-500">
                <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
                    <div className="w-full">
                        <p className="font-[Poppins] text-[16px] font-normal dark:font-light leading-6 w-[169px] h-[24px] ">Provable Trust <span className="text-[#D171FF]">For All.</span></p>
                        <h1 className="font-[Inter] font-semibold text-[32px] mt-4 leading-[39px] md:w-[600px] lg:w-auto">Detect threats and protect your data with a simple yet powerful audit</h1>
                        <p className="font-[Inter] font-normal dark:font-light text-[16px] leading-7 mt-[23px] h-[48px]">Protect your assets across any blockchain network with <span className="text-[#D171FF]">SAFU.AI</span></p>
                        
                        <div className="mt-[69px]">
                            <form>   
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center ml-[17px] mr-[20px] pointer-events-none text-[#D171FF] dark:text-[#EAEAEA]">
                                        <svg width="18" height="18" className="fill-current" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.9748 0C12.3769 0 15.9496 3.57271 15.9496 7.9748C15.9496 12.3769 12.3769 15.9496 7.9748 15.9496C3.57271 15.9496 0 12.3769 0 7.9748C0 3.57271 3.57271 0 7.9748 0ZM7.9748 14.1774C11.4013 14.1774 14.1774 11.4013 14.1774 7.9748C14.1774 4.54741 11.4013 1.77218 7.9748 1.77218C4.54741 1.77218 1.77218 4.54741 1.77218 7.9748C1.77218 11.4013 4.54741 14.1774 7.9748 14.1774ZM15.4933 14.2403L18 16.7462L16.7462 18L14.2403 15.4933L15.4933 14.2403Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="block w-full sm:w-[489px] sm:h-[57px] p-4 pl-14 font-[Inter] font-normal text-base text-gray-900 rounded-[10px] focus:ring-2 focus:ring-[#D171FF] focus:border-[#D171FF] dark:bg-[#26293A] bg-white placeholder-gray-600 border-none dark:border dark:border-[#26293A] dark:placeholder-[#797B88] dark:text-white dark:focus:ring-[#D171FF] dark:focus:border-[#D171FF]" placeholder="Search Project by Name/Token" required />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-20 lg:mt-0 w-full flex justify-center items-end lg:justify-end">
                            <Image className="hidden dark:block" src='/images/safuaihero/safuaiherodark.svg' width="355" height="350" alt="safuai" />
                            <Image className="dark:hidden" src='/images/safuaihero/safuaiherolight.svg' width="500" height="335" alt="safuai" />
                    </div>
                </div>

                <div className="w-full py-6 mt-[69px] ">
                    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                        <div className="rounded-[10px] bg-white dark:bg-[#26293A]">
                            <div className="py-8 pl-7">
                                <p className="w-[52px] h-[24px] font-[Inter] font-semibold text-xl text-[#D171FF] leading-6">220+</p>
                                <p className="mt-[14px] w-[110px] h-[38px] font-[Inter] text-base font-normal leading-[19px]">Crypto Project Audited</p>
                            </div>
                        </div>
                        <div className="rounded-[10px] bg-white dark:bg-[#26293A]">
                            <div className="py-8 pl-7">
                                <p className="w-[52px] h-[24px] font-[Inter] font-semibold text-xl text-[#D171FF] leading-6">400+</p>
                                <p className="mt-[14px] w-[153px] h-[38px] font-[Inter] text-base font-normal leading-[19px]">Vulnerabilities fixed in SAFU AI Audit</p>
                            </div>
                        </div>
                        <div className="rounded-[10px] bg-white dark:bg-[#26293A]">
                            <div className="py-8 pl-7">
                                <p className="w-[52px] h-[24px] font-[Inter] font-semibold text-xl text-[#D171FF] leading-6">300+</p>
                                <p className="mt-[14px] w-[110px] h-[38px] font-[Inter] text-base font-normal leading-[19px]">Network EVMSupport</p>
                            </div>
                        </div>
                        <div className="rounded-[10px] bg-white dark:bg-[#26293A]">
                            <div className="py-8 pl-7">
                                <p className="w-[52px] h-[24px] font-[Inter] font-semibold text-xl text-[#D171FF] leading-6">9+</p>
                                <p className="mt-[14px] w-[110px] h-[38px] font-[Inter] text-base font-normal leading-[19px]">Audit Testing Schema</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}