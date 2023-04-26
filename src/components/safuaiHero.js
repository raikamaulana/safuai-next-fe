import Image from "next/image"

export const safuaiHero = () => {
    return (
        <>
            <div className="pt-32 lg:pt-40 pb-28 px-4 sm:px-8 md:px-12 lg:px-28 bg-customWhite dark:bg-customDark text-black dark:text-white transition-all duration-500">
                <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
                    <div className="w-full">
                        <p className="font-[Poppins] text-base font-medium leading-6">Provable Trust <span className="text-customPurple">For All.</span></p>
                        <h1 className="font-[Inter] font-semibold text-3xl mt-4 leading-10 md:max-w-2xl lg:w-auto">Detect threats and protect your data with a simple yet powerful audit</h1>
                        <p className="font-[Inter] font-medium text-base leading-7 mt-6">Protect your assets across any blockchain network <span className="block">with <span className="text-customPurple">SAFU.AI</span></span></p>
                        
                        <div className="mt-16">
                            <form>   
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center ml-4 mr-5 pointer-events-none text-customPurple dark:text-white">
                                        <svg width="18" height="18" className="fill-current" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.9748 0C12.3769 0 15.9496 3.57271 15.9496 7.9748C15.9496 12.3769 12.3769 15.9496 7.9748 15.9496C3.57271 15.9496 0 12.3769 0 7.9748C0 3.57271 3.57271 0 7.9748 0ZM7.9748 14.1774C11.4013 14.1774 14.1774 11.4013 14.1774 7.9748C14.1774 4.54741 11.4013 1.77218 7.9748 1.77218C4.54741 1.77218 1.77218 4.54741 1.77218 7.9748C1.77218 11.4013 4.54741 14.1774 7.9748 14.1774ZM15.4933 14.2403L18 16.7462L16.7462 18L14.2403 15.4933L15.4933 14.2403Z"/>
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="block w-full sm:w-[489px] p-4 pl-14 font-[Inter] font-normal text-base text-gray-900 rounded-xl focus:ring-2 focus:ring-customPurple focus:border-customPurple dark:bg-customDarkGrey bg-white placeholder-gray-600 border-none dark:border dark:border-customDarkGrey dark:placeholder-gray-600 dark:text-white dark:focus:ring-customPurple dark:focus:border-customPurple" placeholder="Search Project by Name/Token" required />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-20 lg:-mt-10 w-full flex items-start lg:justify-end">
                        <Image src='/images/safuaihero/safuaihero.svg' width="430" height="339" alt="safuai" className="block dark:hidden" />
                        <Image src='/images/safuaihero/safuaiherodark.svg' width="430" height="339" alt="safuai" className="hidden dark:block" />
                    </div>
                </div>

                <div className="w-full mt-16">
                    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                        <div className="rounded-xl bg-white dark:bg-customDarkGrey">
                            <div className="py-8 pl-7">
                                <p className="font-[Inter] font-semibold text-xl text-customPurple leading-6">220+</p>
                                <p className="mt-3 font-[Inter] text-base font-normal leading-5">Crypto Project
                                <br />
                                Audited</p>
                            </div>
                        </div>
                        <div className="rounded-xl bg-white dark:bg-customDarkGrey">
                            <div className="py-8 pl-7">
                                <p className="font-[Inter] font-semibold text-xl text-customPurple leading-6">400+</p>
                                <p className="mt-3 font-[Inter] text-base font-normal leading-5">Vulnerabilities fixed
                                <br />
                                in SAFU AI Audit</p>
                            </div>
                        </div>
                        <div className="rounded-xl bg-white dark:bg-customDarkGrey">
                            <div className="py-8 pl-7">
                                <p className="font-[Inter] font-semibold text-xl text-customPurple leading-6">300+</p>
                                <p className="mt-3 font-[Inter] text-base font-normal leading-5">Network
                                <br />
                                EVMSupport</p>
                            </div>
                        </div>
                        <div className="rounded-xl bg-white dark:bg-customDarkGrey">
                            <div className="py-8 pl-7">
                                <p className="font-[Inter] font-semibold text-xl text-customPurple leading-6">9+</p>
                                <p className="mt-3 font-[Inter] text-base font-normal leading-5">Audit Testing
                                <br />
                                Schema</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}