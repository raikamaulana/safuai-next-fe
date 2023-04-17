import Image from 'next/image'

export const ServiceProducts = () => {
    return (
        <div className="bg-customLight dark:bg-customDark px-4 sm:px-8 md:px-12 lg:px-28 pb-36 min-h-screen overflow-hidden transition-all duration-500">
            <p className="text-2xl text-center text-customBlack dark:text-white my-16 font-semibold">Products</p>
            <div className="lg:flex lg:justify-center">
                <div className='lg:mr-4 mb-11 lg:mb-0'>
                    <div className="bg-white dark:bg-gray-800 max-w-md mx-auto lg:mx-0 mb-11 rounded-lg flex">
                        <div className="text-customBlack dark:text-white">
                        <p className="text-2xl font-semibold ml-8 pt-7">Investigations</p>
                        <p className=" mt-3 ml-8">Smart audit and similarity analysis for a contract.</p>
                        <button className="bg-customPurple font-semibold hover:bg-customHoverPurple text-white mt-6 rounded-lg py-2 mb-10 px-3 ml-8">Launch</button>
                        </div>
                        <div className="shrink-0 w-5/12 flex items-center justify-center sm:w-auto sm:flex-none">
                            <Image src='/images/investigations-logo.png' className='mt-14 ml-6 sm:ml-12 mr-6 mb-5' alt="" width={130} height={136} />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 max-w-md mx-auto lg:mx-0 rounded-lg flex">
                        <div className="text-customBlack dark:text-white">
                        <p className="text-2xl font-semibold ml-8 pt-7">Stakeout</p>
                        <p className="mt-3 ml-8">Similarityscan detection of an adress of source code.</p>
                        <button className="bg-customPurple font-semibold hover:bg-customHoverPurple text-white mt-6 rounded-lg py-2 mb-10 px-3 ml-8">Launch</button>
                        </div>
                        <div className="shrink-0 w-5/12 flex items-center justify-center sm:w-auto sm:flex-none">
                            <Image src='/images/stakeout-logo.png' className='mt-14 ml-6 sm:ml-12 mr-6 mb-5' alt="" width={130} height={136} />
                        </div>
                    </div>
                </div>
                <div className='lg:ml-4'>
                    <div className="bg-white dark:bg-gray-800 max-w-md mx-auto lg:mx-0 mb-11 rounded-lg flex">
                        <div className="text-customBlack dark:text-white">
                        <p className="text-2xl font-semibold ml-8 pt-7">Suspect</p>
                        <p className="mt-3 ml-8">Anti-money laundering and KYC analysis sor an address</p>
                        <button className="bg-customPurple font-semibold hover:bg-customHoverPurple text-white mt-6 rounded-lg py-2 mb-10 px-3 ml-8">Launch</button>
                        </div>
                        <div className="shrink-0 w-5/12 flex items-center justify-center sm:flex-none">
                            <Image src='/images/suspect-logo.png' className='mt-14 ml-6 sm:ml-12 mr-6 mb-5' alt="" width={130} height={136} />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 max-w-md mx-auto lg:mx-0 rounded-lg flex">
                        <div className="text-customBlack dark:text-white">
                        <p className="text-2xl font-semibold ml-8 pt-7">Surveillance</p>
                        <p className="mt-3 ml-8">Search for event, error, and function signatures.</p>
                        <button className="bg-customPurple font-semibold hover:bg-customHoverPurple text-white mt-6 rounded-lg py-2 mb-10 px-3 ml-8">Launch</button>
                        </div>
                        <div className="shrink-0 w-5/12 flex items-center justify-center sm:w-auto sm:flex-none">
                            <Image src='/images/surveillance-logo.png' className='mt-14 ml-6 sm:ml-12 mr-6 mb-5' alt="" width={130} height={136} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}