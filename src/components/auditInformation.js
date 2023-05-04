import React from "react";
import Image from "next/image";

export const auditInformation = () => {
  return (
    <>
      <div className="bg-customWhite dark:bg-customBlack text-black dark:text-white transition-all duration-500">
        {/* DIV 1 */}
        <div className="max-w-3xl font-poppins font-normal">
          <h1 className="text-lg mb-3">TOONSBOX TOKEN</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-customSecondGray text-white text-center py-3">
              Manual Review
            </div>
            <div className="bg-customSecondGray text-white text-center py-3">
              Static Analysis
            </div>
            <div className="bg-customSecondGray text-white text-center py-3">
              Dynamic Analysis
            </div>
            <div className="bg-customSecondGray text-white text-center py-3">
              Symbolic Execution
            </div>
            <div className="bg-customSecondGray text-white text-center py-3">
              SWC Check
            </div>
          </div>
        </div>
        {/* DIV 2 */}
        <div className="max-w-3xl font-poppins grid grid-cols-2 gap-10 mt-9 lg:grid-cols-4 lg:gap-20">
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="font-normal text-sm sm:text-base">Contract Name</h2>
            <p
              className="font-semibold 
                        text-base sm:text-lg"
            >
              BEP20 Token
            </p>
          </div>
          <div className="flex flex-col text-center">
            <h2 className="font-normal text-sm sm:text-base">Compiler</h2>
            <p
              className="font-semibold 
                        text-xs sm:text-base md:text-lg lg:-ml-12"
            >
              v0.8.17+commit.8df45f5f
            </p>
          </div>
          <div className="flex flex-col text-center">
            <div className="lg:translate-x-6">
              <h2 className="font-normal text-sm sm:text-base">Language</h2>
              <p
                className="font-semibold 
                            text-base sm:text-lg"
              >
                Solidity
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="lg:-mr-7">
              <h2 className="font-normal text-sm sm:text-base">License</h2>
              <p
                className="font-semibold 
                            text-base sm:text-lg"
              >
                MIT License
              </p>
            </div>
          </div>
        </div>
        {/* DIV 3 */}
        <div className="max-w-3xl mt-8 px-6 py-7 bg-white dark:bg-customDarkComp">
          <div className="">
            {/* DIV 3 #1 */}
            <div className="max-w-lg h-10 flex font-poppins font-medium text-lg text-white">
              <div className="flex items-center justify-center w-72 bg-green-700">
                <p>50,0%</p>
              </div>
              <div className="flex items-center justify-center w-36 bg-yellow-700">
                <p>25%</p>
              </div>
              <div className="flex items-center justify-center w-36 bg-gray-600">
                <p>25%</p>
              </div>
            </div>
            {/* DIV 3 #2 */}
            <div className="w-full font-poppins mt-10 font-medium text-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-14 mt-8 font-poppins font-normal dark:font-light text-base">
                <div className="text-center w-36">
                  <Image
                    src="/images/auditinformation/auditrequest.svg"
                    width="40"
                    height="40"
                    alt="auditrequest"
                    className="mx-auto"
                  />
                  <p className="mt-2">Audit Request</p>
                  <p>2023-10-21</p>
                </div>
                <div className="text-center w-36">
                  <Image
                    src="/images/auditinformation/auditonboard.svg"
                    width="40"
                    height="40"
                    alt="auditrequest"
                    className="mx-auto"
                  />
                  <p className="mt-2">Audit Onboard</p>
                  <p>2023-10-25</p>
                </div>
                <div className="text-center w-36">
                  <Image
                    src="/images/auditinformation/revisionat.svg"
                    width="40"
                    height="40"
                    alt="auditrequest"
                    className="mx-auto"
                  />
                  <p className="mt-2">Revision At</p>
                  <p>2023-10-26</p>
                </div>
                <div className="text-center w-36">
                  <Image
                    src="/images/auditinformation/releaseat.svg"
                    width="40"
                    height="40"
                    alt="auditrequest"
                    className="mx-auto"
                  />
                  <p className="mt-2">Release At</p>
                  <p>2023-10-27</p>
                </div>
              </div>
            </div>
            {/* DIV 3 #3 */}
            <div className="max-w-lg mt-10">
              <div className="flex justify-between">
                <h1 className="font-poppins font-semibold text-lg hidden md:block">
                  Issue Information
                </h1>
                <h2 className="font-poppins font-semibold text-lg hidden md:block">
                  Issue Tags
                </h2>
              </div>
              <div className="font-poppins font-normal text-sm md:text-base bg-white border border-customWhite dark:border-none dark:bg-customSecondGray rounded-md mt-2 py-3 px-4 flex flex-col justify-between w-full md:flex-row">
                <div className="w-full md:w-full">
                  <h1 className="font-poppins mb-3 md:mb-0 font-medium text-lg block md:hidden">
                    Issue Information
                  </h1>
                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col w-11/12 gap-3">
                      <div className="flex items-center gap-4 whitespace-nowrap">
                        <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
                        <p className="">Critical Count</p>
                      </div>
                      <div className="flex items-center gap-4 whitespace-nowrap">
                        <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                        <p className="">Major Count</p>
                      </div>
                      <div className="flex items-center gap-4 whitespace-nowrap">
                        <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
                        <p className="">Medium Count</p>
                      </div>
                      <div className="flex items-center gap-4 whitespace-nowrap">
                        <div className="w-4 h-4 bg-green-700 rounded-full"></div>
                        <p className="">Minor Count</p>
                      </div>
                      <div className="flex items-center gap-4 whitespace-nowrap">
                        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                        <p className="">Information Count</p>
                      </div>
                    </div>
                    <div className="flex flex-col w-2/12 md:w-6/12 gap-3 text-center">
                      <span className="text-rose-500">0</span>
                      <span className="text-orange-400">3</span>
                      <span className="text-orange-300">0</span>
                      <span className="text-green-700">2</span>
                      <span className="text-gray-400">0</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 mt-6 md:mt-0">
                  <div className="flex flex-col w-full gap-3 text-end">
                    <h2 className="font-poppins font-medium text-lg block md:hidden">
                      Issue Tags
                    </h2>
                    <div className="flex justify-end items-center gap-4 flex-nowrap md:flex-wrap lg:flex-wrap">
                      <p>No Tags</p>
                    </div>
                    <div className="flex justify-end items-center gap-4 flex-nowrap md:flex-wrap lg:flex-wrap">
                      <p>Max Tx</p>
                    </div>
                    <div className="flex justify-end items-center gap-4 flex-nowrap md:flex-wrap lg:flex-wrap">
                      <p>Add Liquidity</p>
                    </div>
                    <div className="flex justify-end items-center gap-4 flex-nowrap md:flex-wrap lg:flex-wrap">
                      <p>Safemath</p>
                    </div>
                    <div className="flex justify-end items-center gap-4 flex-nowrap md:flex-wrap lg:flex-wrap">
                      <p>Set Fees</p>
                      <p>Set Fee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
