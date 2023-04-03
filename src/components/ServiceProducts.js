import Image from 'next/image'

export const ServiceProducts = () => {
    return (
        <div className="bg-[#E8ECEF] dark:bg-[#1B1F28] min-h-screen overflow-hidden">
            <p className="text-2xl text-center text-[#20262D] dark:text-white my-12 font-semibold">Products</p>
            <div className="flex justify-center">
                <div className='mr-4'>
                <div className="bg-white dark:bg-[#363D4C] max-w-md h-52 mb-11 rounded-lg flex">
                    <div className="text-[#20262D] dark:text-white">
                    <p className="text-2xl font-semibold ml-8 pt-7">Investigations</p>
                    <p className=" mt-3 ml-8">Smart audit and similarity analysis for a contract.</p>
                    <button className="bg-[#D171FF] font-semibold hover:bg-[#bf61eb] text-white mt-6 rounded-lg py-2 mb-10 px-3 ml-8">Launch</button>
                    </div>
                    <div className="shrink-0">
                        <Image src='/images/investigations-logo.png' className='mt-14 ml-12 mr-6 mb-5' alt="" width={130} height={136} />
                    </div>
                </div>
                <div className="bg-white dark:bg-[#363D4C] max-w-md h-52  rounded-lg flex">
                    <div className="text-[#20262D] dark:text-white">
                    <p className="text-2xl font-semibold ml-8 pt-7">Stakeout</p>
                    <p className="mt-3 ml-8">Similarityscan detection of an adress of source code.</p>
                    <button className="bg-[#D171FF] font-semibold hover:bg-[#bf61eb] text-white mt-6 rounded-lg py-2 mb-10 px-3 ml-8">Launch</button>
                    </div>
                    <div className="shrink-0">
                        <Image src='/images/stakeout-logo.png' className='mt-14 ml-12 mr-6 mb-5' alt="" width={130} height={136} />
                    </div>
                </div>
               </div>
               <div className='ml-4'>
                <div className="bg-white dark:bg-[#363D4C] max-w-md h-52 mb-11 rounded-lg flex">
                    <div className="text-[#20262D] dark:text-white">
                    <p className="text-2xl font-semibold ml-8 pt-7">Suspect</p>
                    <p className="mt-3 ml-8">Anti-money laundering and KYC analysis sor an address</p>
                    <button className="bg-[#D171FF] font-semibold hover:bg-[#bf61eb] text-white mt-6 rounded-lg py-2 mb-10 px-3 ml-8">Launch</button>
                    </div>
                    <div className="shrink-0">
                        <Image src='/images/suspect-logo.png' className='mt-14 ml-12 mr-6 mb-5' alt="" width={130} height={136} />
                    </div>
                </div>
                <div className="bg-white dark:bg-[#363D4C] max-w-md h-52  rounded-lg flex">
                    <div className="text-[#20262D] dark:text-white">
                    <p className="text-2xl font-semibold ml-8 pt-7">Surveillance</p>
                    <p className="mt-3 ml-8">Search for event, error, and function signatures.</p>
                    <button className="bg-[#D171FF] font-semibold hover:bg-[#bf61eb] text-white mt-6 rounded-lg py-2 mb-10 px-3 ml-8">Launch</button>
                    </div>
                    <div className="shrink-0">
                        <Image src='/images/surveillance-logo.png' className='mt-14 ml-12 mr-6 mb-5' alt="" width={130} height={136} />
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}