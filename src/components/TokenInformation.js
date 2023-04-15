import Image from "next/image"

export const TokenInformation = () => {
    return (
        <div className="bg-[#E8ECEF] dark:bg-[#1B1F28] min-h-screen overflow-hidden">
            <div className="flex justify-center">
                    <div className="bg-white dark:bg-[#20262D] mt-14 mb-8 rounded-md p-6 mr-2">
                        <p className="text-[#D171FF] font-[Poppins] mb-5 text-xl mt-2 ml-4 font-semibold">Token Information</p>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Token Name :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">Virtual Robot CEO</p>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Token Symbol :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">AIRobotCEO</p>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Token Decimal :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">18</p>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Token Supply :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">1,000,000,000,000</p>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Holder Count :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">2</p>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] my-auto px-5'>Contract Address :</p>
                            <div className=" mx-3 rounded-md border-2 border-[#D171FF] dark:border-[#5B4C7C] flex p-1 my-1 shrink-0">
                                <Image src="/images/block-logo.png" alt="" width={25} height={25} className="my-auto ml-3" />
                                <p className="font-[Poppins] my-auto mx-4 dark:text-white">0xbE....d6A7</p>
                                <button>
                                <Image src="/images/popout-icon.png" alt="" width={18} height={18} className="my-auto" />
                                </button>
                                <button>
                                <Image src="/images/copy-icon.png" alt="" width={18} height={20} className="my-auto mx-3" />
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Contract Verified :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">Yes</p>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Contract Type :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">BEP20</p>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Compiler :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">v0.8.4+commit.c7e474f2</p>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Sol License :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">MIT License</p>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Contract Name :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">AIRobot</p>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Contract Create :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">Solidity</p>
                        </div>
                        <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] py-3 px-5'>Contract Language :</p>
                            <p className="dark:text-white font-[Poppins] py-3 px-5 text-right font-semibold">Available</p>
                        </div>
                    </div>

                    <div className="mt-14">
                    <div className="bg-white dark:bg-[#20262D] mb-4 rounded-md p-6 ml-2">
                    <p className="text-[#D171FF] font-[Poppins] mb-5 text-xl mt-2 ml-4 font-semibold">Owner & Deployer Information</p>
                    <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] my-auto px-5'>Owner Address :</p>
                            <div className=" mx-3 rounded-md border-2 border-[#D171FF] dark:border-[#5B4C7C] flex p-1 my-1 shrink-0">
                                <Image src="/images/block-logo.png" alt="" width={25} height={25} className="my-auto ml-3" />
                                <p className="font-[Poppins] my-auto mx-4 dark:text-white">0xbE....d6A7</p>
                                <button>
                                <Image src="/images/popout-icon.png" alt="" width={18} height={18} className="my-auto" />
                                </button>
                                <button>
                                <Image src="/images/copy-icon.png" alt="" width={18} height={20} className="my-auto mx-3" />
                                </button>
                            </div>
                        </div>
                    <div className='flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] mt-4 mx-auto rounded-lg p-1'>
                            <p className='dark:text-white font-[Poppins] my-auto px-5'>Deployer Addess :</p>
                            <div className=" mx-3 rounded-md border-2 border-[#D171FF] dark:border-[#5B4C7C] flex p-1 my-1 shrink-0">
                                <Image src="/images/block-logo.png" alt="" width={25} height={25} className="my-auto ml-3" />
                                <p className="font-[Poppins] my-auto mx-4 dark:text-white">0xbE....d6A7</p>
                                <button>
                                <Image src="/images/popout-icon.png" alt="" width={18} height={18} className="my-auto" />
                                </button>
                                <button>
                                <Image src="/images/copy-icon.png" alt="" width={18} height={20} className="my-auto mx-3" />
                                </button>
                            </div>
                    </div>
                    </div>

                    <div className="bg-white dark:bg-[#20262D] p-6 ml-2 rounded-md pb-8">
                        <div className="flex ">
                            <div className="ml-4 mr-16">
                                <p className="dark:text-white font-[Poppins] mt-2 mb-5 text-xl font-semibold" >Audit Link Share</p>
                                <div className="bg-white p-1 ml-1">
                                    <Image src="/images/qrcode-example.png" alt="" width={153} height={148} />
                                </div>
                            </div>

                            <div className="my-auto">
                            <p className="dark:text-white font-[Poppins] mb-3 text-xl font-semibold" >Presale Link</p>
                            <div className="flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] p-1 rounded-md mb-5">
                            <p className="dark:text-white font-[Poppins] my-auto mx-3">Go to Presale link</p>
                            <p className="dark:text-white text-2xl font-[Poppins] my-auto mr-3">&gt;</p>
                            </div>
                            <p className="dark:text-white font-[Poppins] mb-3 text-xl font-semibold" >Testnet Link</p>
                            <div className="flex justify-between border-2 border-[#E8ECEF] dark:border-none dark:bg-[#242A32] p-1 rounded-md">
                            <p className="dark:text-white font-[Poppins] my-auto mx-3">Go to Testnet link</p>
                            <p className="dark:text-white text-2xl font-[Poppins] my-auto mr-3">&gt;</p>
                            </div>
                            
                            </div>
                        </div>

                    </div>
                    </div>


            </div>
        </div>
    )
}