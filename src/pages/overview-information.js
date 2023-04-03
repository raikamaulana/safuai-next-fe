import Image from "next/image"

export default function OverviewInformation() {
    return (
        <div className="bg-[#0D1116] min-h-screen overflow-hidden">
            <div className="flex justify-center">
            <div className="bg-[#20262D] max-w-4xl p-5 rounded-sm my-10">
                <div className="relative overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="font-[Poppins] text-[#D171FF] uppercase">
                        <tr>
                        <th className="px-7 py-3">Notes</th>
                        <th className="px-7 py-3">Name</th>
                        <th className="px-7 py-3">Analysis</th>
                        </tr>
                    </thead>
                    <tbody className="text-white font-[Poppins]">
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-green.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Minting</td>
                            <td className="px-7 py-3">No mint function found</td>
                        </tr>
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-green.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Honeypot</td>
                            <td className="px-7 py-3">Liquidity has not been added</td>
                        </tr>
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-green.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Modify Fees Buy</td>
                            <td className="px-7 py-3">The Owner can't set buy fees</td>
                        </tr>
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-green.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Proxy</td>
                            <td className="px-7 py-3">Proxy Contract Not Detected</td>
                        </tr>
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-green.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Anti Whale</td>
                            <td className="px-7 py-3">Not Detected</td>
                        </tr>
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-green.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Trading Couldown</td>
                            <td className="px-7 py-3">The owner can not set time selling interval</td>
                        </tr>
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-green.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Owner Change Balance</td>
                            <td className="px-7 py-3">The owner can not change balance address</td>
                        </tr>
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-green.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Cannot Sell All</td>
                            <td className="px-7 py-3">Liquidity has not been added</td>
                        </tr>
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-green.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Self Destruct</td>
                            <td className="px-7 py-3">Not Detected</td>
                        </tr>
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-green.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Anti Bot</td>
                            <td className="px-7 py-3">Not Detected</td>
                        </tr>
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-red.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Blacklist</td>
                            <td className="px-7 py-3">The owner can not set blacklist</td>
                        </tr>
                        <tr className="bg-[#242A32] border-b-8 border-[#20262D] rounded-lg mb-3">
                            <td className="px-7 py-3"><Image src="/images/ellipse-green.png" alt="" width={17} height={17} className="mx-auto" /></td>
                            <td className="px-7 py-3">Can Take Back Ownership</td>
                            <td className="px-7 py-3">The owner can not take back ownership</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>

            </div>
        </div>
    )
}