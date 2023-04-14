import React, {Fragment, useState} from 'react'
import Image from "next/image"

export const WebsiteInformation = () => {
    // const [changePage, setChangePage]= useState(false)
    // const changePages = () => {
    //     setChangePage(!changePage)
    // }
    return (
        // <div className={changePage ? "dark:bg-[#0D1116] bg-transparent overflow-hidden hidden" : "dark:bg-[#0D1116] bg-transparent overflow-hidden "}>
        <div className="dark:bg-[#0D1116] bg-transparent overflow-hidden ">
            <div className="flex dark:text-white">
            <div className="min-w-max">
            <div className="font-[Poppins]">
                <p className="font-semibold text-xl mb-6">https://www.toonsbox.io</p>
                <table className="w-full text-center mb-14">
                    <thead>
                        <tr>
                        <th className="text-left py-2">SSL Secure</th>
                        <th className="px-7 py-2">Website Domain</th>
                        <th className="px-7 py-2">Web Status</th>
                        <th className="px-7 py-2">SSL Provider</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl font-semibold">
                        <tr>
                        <td className="text-left py-2">Secured</td>
                        <td className="px-7 py-2">.io</td>
                        <td className="px-7 py-2">Not Active</td>
                        <td className="px-7 py-2">Let’s Encrypt</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="dark:bg-[#20262D] bg-white flex justify-between font-[Poppins] pb-7 rounded-sm">
                <div>
                    <p className="my-5 ml-9 font-semibold">Website Stats Chart</p>
                    {/* <button onClick={changePages}> */}
                    <Image src="/images/website-stats-chart.png" alt="" width={368} height={276} className="ml-8 hidden dark:block" />
                    <Image src="/images/website-stats-chart-black.png" alt="" width={368} height={276} className="ml-8 dark:hidden" />
                    {/* </button> */}
                    <p className="mt-11 ml-9 mb-1 font-semibold">Information</p>
                    <div className="flex">
                    <div>
                    <div className="flex ml-9 mb-4">
                        <Image src="/images/seo.png" alt="" width={22} height={17} />
                        <p className="ml-5">SEO</p>
                    </div>
                    <div className="flex ml-9 mb-4">
                        <Image src="/images/performance.png" alt="" width={22} height={17} />
                        <p className="ml-5">Performance</p>
                    </div>
                    <div className="flex ml-9 mb-4">
                        <Image src="/images/best-practice.png" alt="" width={22} height={17} />
                        <p className="ml-5">Best Practice</p>
                    </div>
                    </div>
                    <div>
                    <div className="flex ml-9">
                        <Image src="/images/accessibility.png" alt="" width={22} height={17} />
                        <p className="ml-5">Accesibility</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="mr-20">
                <p className="mt-5 mb-3 font-semibold">Speed Information :</p>
                <p className="mb-3">First Contentful Paint</p>
                <p>Full Loaded Time</p>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}