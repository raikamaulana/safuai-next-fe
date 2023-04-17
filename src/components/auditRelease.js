import Image from "next/image"

export const auditRelease = () => {
    return (
        <>
            <div className="pt-44 pb-28 px-4 sm:px-8 md:px-12 lg:px-28 bg-customLight dark:bg-customDark text-black dark:text-white transition-all duration-500">
                <div className="w-full">
                    <div className="flex flex-col gap-4 lg:flex-row">
                        <div className="min-w-max flex gap-4 items-center">
                            <div className="w-20 rounded-md bg-customDarkGray border border-gray-700 px-5 py-1">
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
                                    <p className="flex justify-center items-center w-20 h-9 font-semibold rounded-md border border-customGraySemiPurple">VR</p>
                                    <p className="w-20 h-9 flex justify-center items-center text-left rounded-md border border-customGraySemiPurple font-[Inter] text-base font-normal dark:font-light">
                                        <div className="flex justify-center gap-[6px]">
                                            <Image src="/images/auditrelease/bsc.svg" width="20" height="20" />
                                            <p>BSC</p>
                                        </div>
                                    </p>
                                    <p className="w-20 flex justify-center items-center h-9 rounded-md border border-customGraySemiPurple font-[Inter] text-base font-normal dark:font-light">DEFI</p>
                            </div>
                            <button className="w-24 h-9 text-left rounded-md border border-customGraySemiPurple font-[Inter] text-base font-normal dark:font-light md:mr-0 md:ml-auto">
                                <div className="flex justify-center gap-2">
                                    <Image src="/images/auditrelease/share.svg" width="19" height="20" />
                                    <span>Share</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mt-6">
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-9">
                            <p className="w-48 h-9 flex items-center text-left pl-6 rounded-md border border-customGraySemiPurple font-[Inter] text-base font-normal dark:font-light">Audit Release #1</p>
                            <p className="w-52 h-9 flex justify-center items-center mt-0 rounded-md border border-customGraySemiPurple font-[Inter] text-base font-normal dark:font-light">Smart Contract Platform</p>
                        </div>
                        <Image src="/images/auditrelease/blocksafu.svg" width="138" height="40" />
                    </div>
                </div>
                <div className="w-full mt-5 rounded-md dark:bg-customDarkGray bg-white dark:border-none">
                    <div className="py-6 px-5 text-black dark:text-white">
                        <h2 className="font-[Inter] font-semibold text-xl">About Project</h2>
                        <p className="font-[Poppins] font-normal dark:font-light text-base leading-6 mt-3">It's not an ordinary meme token. Become a part of a powerful ecosystem and win more FROG CEO! Ecosystem Products: 🐸Apps, 🐸Game, 🐸Wallet, 🐸Swap, 🐸Chain, 🐸 AI, 🐸NFT, 🐸Browser, 🐸Pay, 🐸Clothing With the powerful Frog CEO, 6% of every transaction is automatically given to the owners in real time.</p>
                        <h3 className="font-[Inter] font-semibold text-xl mt-5">Audit Timeline</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 mt-8 font-[Poppins] font-normal dark:font-light text-base">
                            <div className="text-center w-36">
                                <Image src="/images/auditinformation/auditrequest.svg" width="40" height="40" alt="Audit Request" className="mx-auto" />
                                <p className="mt-2">Audit Request</p>
                                <p>2023-10-21</p>
                            </div>
                            <div className="text-center w-36">
                                <Image src="/images/auditinformation/auditonboard.svg" width="40" height="40" alt="Audit Onboard" className="mx-auto" />
                                <p className="mt-2">Audit Onboard</p>
                                <p>2023-10-25</p>
                            </div>
                            <div className="text-center w-36">
                                <Image src="/images/auditinformation/revisionat.svg" width="40" height="40" alt="Revision At" className="mx-auto" />
                                <p className="mt-2">Revision At</p>
                                <p>2023-10-26</p>
                            </div>
                            <div className="text-center w-36">
                                <Image src="/images/auditinformation/releaseat.svg" width="40" height="40" alt="Release At" className="mx-auto" />
                                <p className="mt-2">Release At</p>
                                <p>2023-10-27</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 w-full">
                    <div className="w-full px-5 py-6 rounded-md dark:border-none bg-white dark:bg-customDarkGray flex justify-center gap-5">
                        <div className="w-full mt-2">
                            <p className="text-center font-[Inter] font-semibold text-lg leading-4">Content Score</p>
                            <Image src="/images/auditrelease/auditmeter.svg" width="100" height="100" className="mx-auto mt-5 sm:mt-4" alt="auditmeter"/>
                            <p className="text-center font-[Inter] font-semibold text-lg"><span className="text-xl text-customPurple">75</span>/100</p>
                            <p className="text-center text-sm sm:text-base font-[Inter] font-medium dark:font-light">You have a good score</p>
                        </div>
                        <div className="w-44 h-52 border border-customGraySemiPurple rounded-[5px] flex justify-center">
                            <div>
                                <div className="flex mt-4 items-center">
                                    <Image src="/images/auditrelease/graysquare.svg" width="18" height="18" alt="grayscore" aria-hidden="true" />
                                    <p className="ml-2 font-semibold font-[Inter]">1</p>
                                </div>
                                <div className="flex mt-3 items-center">
                                    <Image src="/images/auditrelease/yellowsquare.svg" width="18" height="18" alt="yellowscore" aria-hidden="true" />
                                    <p className="ml-2 font-semibold font-[Inter]">0</p>
                                </div>
                                <div className="flex mt-3 items-center">
                                    <Image src="/images/auditrelease/orangesquare.svg" width="18" height="18" alt="orangescore" aria-hidden="true" />
                                    <p className="ml-2 font-semibold font-[Inter]">4</p>
                                </div>
                                <div className="flex mt-3 items-center">
                                    <Image src="/images/auditrelease/redsquare.svg" width="18" height="18" alt="redscore" aria-hidden="true" />
                                    <p className="ml-2 font-semibold font-[Inter]">3</p>
                                </div>
                                <div className="flex mt-3 items-center">
                                    <Image src="/images/auditrelease/greensquare.svg" width="18" height="18" alt="greenscore" aria-hidden="true" />
                                    <p className="ml-2 font-semibold font-[Inter]">5</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mt-2">
                            <p className="font-[Inter] sm:text-center lg:text-left font-semibold text-lg leading-4">Informations</p>
                            <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 w-full sm:w-52 lg:w-full mt-4 gap-5">
                                <button className="w-8 h-8 bg-customLight dark:bg-customDark text-white flex justify-center items-center rounded-full">
                                    <Image src="/images/auditrelease/telegram.svg" width="22" height="22" alt="Telegram" aria-hidden="true" />
                                </button>
                                <button className="w-8 h-8 bg-customLight dark:bg-customDark flex justify-center items-center rounded-full">
                                    <Image src="/images/auditrelease/twitter.svg" width="40" height="40" alt="Twitter" aria-hidden="true" />
                                </button>
                                <button className="w-8 h-8 bg-customLight dark:bg-customDark flex justify-center items-center rounded-full">
                                    <Image src="/images/auditrelease/medium.svg" width="18" height="18" alt="Medium" aria-hidden="true" />
                                </button>
                                <button className="w-8 h-8 bg-customLight dark:bg-customDark flex justify-center items-center rounded-full">
                                    <Image src="/images/auditrelease/browser.svg" width="18" height="18" alt="Browser" aria-hidden="true" />
                                </button>
                                <button className="w-8 h-8 bg-customLight dark:bg-customDark flex justify-center items-center rounded-full">
                                    <Image src="/images/auditrelease/github.svg" width="18" height="18" alt="Github" aria-hidden="true" />
                                </button>
                                <button className="w-8 h-8 bg-customLight dark:bg-customDark flex justify-center items-center rounded-full">
                                    <Image src="/images/auditrelease/instagram.svg" width="20" height="20" alt="Instagram" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-md dark:border-none lg:pl-10 mt-10 lg:mt-0 flex flex-col gap-6">
                        <h2 className="font-[Inter] text-lg font-semibold">Audit Link Share</h2>
                        <Image src="/images/auditrelease/bsafubarcode.svg" width="204" height="204" alt="bsafubarcode" aria-hidden="true" />
                    </div>
                </div>
                <div className="w-full mt-9">
                    <div className="relative w-full font-normal text-lg font-[Inter] overflow-hidden">
                        <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-[84px] z-10 opacity-0 cursor-pointer rounded-lg" />
                        {/* Kolom depan */}
                        <div className="w-full bg-white peer-hover:bg-opacity-50 dark:bg-customBlack dark:peer-hover:bg-customGrey rounded-lg pl-5 py-7 flex items-center justify-between pr-8">
                            <h1 className="text-lg font-normal">SAFU AI Certificate</h1>
                        </div>
                        <div className="absolute right-7 top-8 transition-all duration-500 rotate-0 peer-checked:rotate-180 peer-checked:scale-125 peer-checked:top-7">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        {/* Content */}
                        <div className="w-full mt-1 bg-white dark:bg-customBlack rounded-lg peer-checked:p-2 lg:peer-checked:p-5 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-[9999px]">
                            <div className="w-full bg-customLight dark:bg-gray-800 py-1 rounded-lg">
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
                                    <span className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-white dark:bg-customBlack z-[9999] transition-all duration-500"/>
                                    <hr className="dark:dashed-line-dark dashed-line"/>
                                    <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white dark:bg-customBlack z-[9999] transition-all duration-500" />
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
                                    <span className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-white dark:bg-customBlack z-[9999] transition-all duration-500"/>
                                    <hr className="dark:dashed-line-dark dashed-line"/>
                                    <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white dark:bg-customBlack z-[9999] transition-all duration-500" />
                                </div>
                                <div className="w-full px-4 py-6 flex justify-between">
                                    <div className="flex items-center">
                                        <Image src="/images/auditrelease/virtualrobot.svg" width="30" height="30" className="mr-4"/>
                                        <h2 className="font-[Inter] text-lg font-normal mr-5">Virtual Robot</h2>
                                        <span className="w-32 py-1 font-[Inter] text-center text-lg font-normal border border-gray-600 rounded-lg">VR</span>
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