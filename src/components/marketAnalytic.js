export const MarketAnalytic = () => {
  return (
    <>
      <div className="dark:bg-customBlack dark:text-white bg-customWhite min-h-screen overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="dark:bg-customDarkComp bg-white max-w-4xl p-5 rounded-sm my-">
            <div className="dark:bg-customSecondGray bg-white w-full border p-2 border-customWhite rounded-md">
              <p className="font-poppins  ml-5 mt-3">Market Information</p>
              <button className="bg-customPurple text-white py-2 px-6 font-poppins text-center rounded-lg ml-5 mt-2 mb-4">
                Swap GPT-4
              </button>
              <div className="flex justify-between">
                <div className="mx-5">
                  <div className="mb-4 font-poppins">
                    <p>Buy Gas</p>
                    <p>0 Gwei (0.0000 BNB / $0.00)</p>
                  </div>
                  <div className="mb-4 font-poppins">
                    <p>Sell Gas</p>
                    <p>0 Gwei (0.0000 BNB / $0.00)</p>
                  </div>
                  <div className="mb-4 font-poppins">
                    <p>Price</p>
                    <p>0.01094006 (6.739%)</p>
                  </div>
                </div>
                <div className="mx-5">
                  <div className="mb-4 font-poppins">
                    <p>Volume</p>
                    <p>$367476.72</p>
                  </div>
                  <div className="mb-4 font-poppins">
                    <p>Liquidity</p>
                    <p>$51,282 (30 BNB)</p>
                  </div>
                  <div className="mb-4 font-poppins">
                    <p>Tx Count</p>
                    <p>717 (0.32%)</p>
                  </div>
                </div>
                <div className="mb-4 font-poppins mx-5">
                  <p>Marketcap</p>
                  <p>$1,094,005 (0.000%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
