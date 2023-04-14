import dynamic from "next/dynamic";

// export default function MarketAnalytic() {
  export const MarketAnalytic = () => {
  return (
    <>
      <div className="dark:bg-[#0D1116] dark:text-white bg-white min-h-[750px] overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="dark:bg-[#20262D] bg-white max-w-4xl p-5 rounded-sm my-">
            <div className="dark:bg-[#2C3239] bg-white  w-full border p-2 border-[#F5F5F5] rounded-md">
              <p className="font-[Poppins]  ml-5 mt-3">
                Market Information
              </p>
              <button className="bg-[#D171FF] text-white py-2 px-6 font-[Poppins] text-center rounded-lg ml-5 mt-2 mb-4">
                Swap GPT-4
              </button>
              <div className="flex justify-between">
                <div className="mx-5">
                    <div className="mb-4">
                        <p className="text-[#D171FF] font-[Poppins]">Buy Gas</p>
                        <p className=" font-[Poppins]">0 Gwei (0.0000 BNB / $0.00)</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-[#D171FF] font-[Poppins]">Sell Gas</p>
                        <p className=" font-[Poppins]">0 Gwei (0.0000 BNB / $0.00)</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-[#D171FF] font-[Poppins]">Price</p>
                        <p className=" font-[Poppins]">0.01094006 (6.739%)</p>
                    </div>
                </div>
                <div className="mx-5">
                    <div className="mb-4">
                        <p className="text-[#D171FF] font-[Poppins]">Volume</p>
                        <p className=" font-[Poppins]">$367476.72</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-[#D171FF] font-[Poppins]">Liquidity</p>
                        <p className=" font-[Poppins]">$51,282 (30 BNB)</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-[#D171FF] font-[Poppins]">Tx Count</p>
                        <p className=" font-[Poppins]">717 (0.32%)</p>
                    </div>
                </div>
                    <div className="mb-4 mx-5">
                        <p className="text-[#D171FF] font-[Poppins]">Marketcap</p>
                        <p className=" font-[Poppins]">$1,094,005 (0.000%)</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
