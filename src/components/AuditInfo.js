import React from "react";
import Image from "next/image";

export const AuditInfo = () => {
  return (
    <div className="dark:bg-[#1B1F28] bg-[#E8ECEF] min-h-screen overflow-hidden">
      <div className="pb-28">
        <div className="pt-40 lg:flex flex justify-center">
          <div className="lg:block hidden">
            <Image src ="/images/auditinfo/analysislight.svg" width="300" height="300" className="pt-20 ml-10 dark:hidden" />
            <Image src ="/images/auditinfo/analysisdark.svg" width="350" height="350" className="pt-20 ml-10 hidden dark:block" />
          </div>
          <div className="md:space-x-6 space-x-10 md:translate-x-16 lg:-translate-x- pr-32">
            <div className="flex md:ml-1 ml-36">
              <p className="dark:text-white text-black font-medium md:text-2xl text-xl pt-2 md:ml-8 md:mr-2">
                Recently completed audit information
              </p>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="md:ml-32 mt-4 md:mt-0 ml-7 mr-40 md:-mr-20 mb-14"
              >
                <button className="dark:bg-gray-700 bg-[#FFFFFF] hover:bg-gray-400 text-white text-sm md:px-8 p-1 px-5 md:py-4 rounded-md md:-mr-20 -pl-10">
                  <p className="font-semibold dark:text-white text-base text-black">
                    View All
                  </p>
                </button>
              </a>
            </div>
            <div className="mx-auto">
              <div className="md:-mb-10 -mb-16 justify-center md:space-x-10 space-x-2 md:mr-0 mr-14 flex">
                <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 pr-4">
                  No
                </p>
                <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 pr-4">
                  Name Project
                </p>
                <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 pr-4">
                  Score
                </p>
                <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 pr-4">
                  Finnish Date
                </p>
              </div>
            </div>
            <div className="flex justify-center md:pr-0 pr-40">
              <div className="mt-20 py-4 md:pr-5 pr-2 md:ml-0 ml-20 pl-10 md:pl-0 rounded-xl dark:bg-[#1B1F28] bg-[#FFFFFF] border dark:border-[#26293A] border-[#FFFFFF]">
                <div className="md:w-[650px] w-80 md:h-14 h-12 rounded-md dark:bg-[#363D4D] bg-[#E8ECEF] mx-auto py-1 md:ml-4 -ml-8">
                  <button>
                    <p className="dark:text-white font-medium text-black md:mt-2 md:ml-5 ml-3 mt-2 md:text-lg text-base flex">
                      1
                    </p>
                    <Image
                      src="/images/auditinfo/ordinals.svg"
                      width="28"
                      height="28"
                      className="md:-mt-7 md:ml-20 -mt-6 ml-9 md:w-9"
                    />
                    <p className="dark:text-white font-medium text-black md:-mt-8 md:ml-32 -mt-6 ml-[68px] absolute hover:text-blue-500 md:text-lg text-xs">
                      Ordinals Finance
                    </p> 
                    <div>
                    <Image
                        src="/images/auditinfo/score50light.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 dark:hidden -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                      <Image
                        src="/images/auditinfo/score50dark.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 hidden dark:block md:ml-88 -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                    </div>
                    <p className="dark:text-white font-medium text-black md:-mt-9 md:ml-[490px] md:text-lg text-xs -mt-6 ml-60">
                      2023-01-19
                    </p>
                  </button>
                </div>
                <div className="md:w-[650px] w-80 md:h-14 h-12 rounded-md dark:bg-[#363D4D] bg-[#E8ECEF] mx-auto py-1 mt-3 md:ml-4 -ml-8">
                  <button>
                    <p className="dark:text-white font-medium text-black md:mt-2 md:ml-5 ml-3 mt-2 md:text-lg text-base flex">
                      2
                    </p>
                    <Image
                      src="/images/auditinfo/equilibrium.svg"
                      width="28"
                      height="28"
                      className="md:-mt-7 md:ml-20 -mt-6 ml-9 md:w-9"
                    />
                    <p className="dark:text-white font-medium text-black md:-mt-8 md:ml-32 -mt-6 ml-[68px] absolute hover:text-blue-500 md:text-lg text-xs">
                      Equilibrium
                    </p>
                    <div>
                      <Image
                        src="/images/auditinfo/score100light.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 dark:hidden -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                      <Image
                        src="/images/auditinfo/score100dark.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 hidden dark:block -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                    </div>
                    <p className="dark:text-white font-medium text-black md:-mt-9 md:ml-[490px] md:text-lg text-xs -mt-6 ml-60">
                      2023-01-19
                    </p>
                  </button>
                </div>
                <div className="md:w-[650px] w-80 md:h-14 h-12 rounded-md dark:bg-[#363D4D] bg-[#E8ECEF] mx-auto py-1 mt-3 md:ml-4 -ml-8">
                  <button>
                    <p className="dark:text-white font-medium text-black md:mt-2 md:ml-5 ml-3 mt-2 md:text-lg text-base flex">
                      3
                    </p>
                    <Image
                      src="/images/auditinfo/twitterdoge.svg"
                      width="28"
                      height="28"
                      className="md:-mt-7 md:ml-20 -mt-6 ml-9 md:w-9"
                    />
                    <p className="dark:text-white font-medium text-black md:-mt-8 md:ml-32 -mt-6 ml-[68px] absolute hover:text-blue-500 md:text-lg text-xs">
                      Twitter Doge
                    </p>
                    <div>
                    <Image
                        src="/images/auditinfo/score100light.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 dark:hidden -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                      <Image
                        src="/images/auditinfo/score100dark.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 hidden dark:block -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                    </div>
                    <p className="dark:text-white font-medium text-black md:-mt-9 md:ml-[490px] md:text-lg text-xs -mt-6 ml-60">
                      2023-01-19
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-28 mx-auto">
        <div className="pt-36 flex justify-center">
          <div className="md:space-x-10 space-x-10 md:translate-x-16 lg:-translate-x- pr-32">
            <div className="flex md:ml-10 ml-10">
              <p className="dark:text-white text-black md:text-2xl text-xl pt-2 md:ml-4 ml-44 md:mr-10">
                Review of onboarding project data
              </p>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="md:ml-32 mt-4 md:mt-0 ml-7 mr-20 md:-mr-20 mb-14"
              >
                <button className="dark:bg-gray-700 bg-[#FFFFFF] hover:bg-gray-400 text-white text-sm md:px-8 p-1 px-5 md:py-4 rounded-md md:-mr-20 -pl-10">
                  <p className="dark:text-white text-base text-black font-semibold">
                    View All
                  </p>
                </button>
              </a>
            </div>
            <div>
              <div className="md:-mb-10 -mb-16 justify-center md:space-x-10 space-x-2 md:mr-0 mr-5 md:ml-0 ml-32 flex">
                <p className="dark:text-white text-black md:text-2xl text-base md:pr-10 pr-4">
                  No
                </p>
                <p className="dark:text-white text-black md:text-2xl text-base md:pr-10 pr-4">
                  Name Project
                </p>
                <p className="dark:text-white text-black md:text-2xl text-base md:pr-10 pr-4">
                  Score
                </p>
                <p className="dark:text-white text-black md:text-2xl text-base md:pr-10 pr-4">
                  Finnish Date
                </p>
              </div>
            </div>
            <div className="mx-auto md:pr-0 pr-20">
              <div className="py-4 mt-20 md:pr-5 pr-2 md:ml-0 ml-40 pl-10 md:pl-0 rounded-xl dark:bg-[#1B1F28] bg-[#FFFFFF] border dark:border-[#26293A] border-[#FFFFFF]">
                <div className="md:w-[650px] w-80 md:h-14 h-12 rounded-md dark:bg-[#363D4D] bg-[#E8ECEF] mx-auto py-1 md:ml-4 -ml-8">
                  <button>
                    <p className="dark:text-white font-medium text-black md:mt-2 md:ml-5 ml-3 mt-2 md:text-lg text-base flex">
                      1
                    </p>
                    <Image
                      src="/images/auditinfo/ordinals.svg"
                      width="28"
                      height="28"
                      className="md:-mt-7 md:ml-20 -mt-6 ml-9 md:w-9"
                    />
                    <p className="dark:text-white font-medium text-black md:-mt-8 md:ml-32 -mt-6 ml-[68px] absolute hover:text-blue-500 md:text-lg text-xs">
                      Ordinals Finance
                    </p>
                    <div>
                      <Image
                        src="/images/auditinfo/score50light.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 dark:hidden -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                      <Image
                        src="/images/auditinfo/score50dark.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 hidden dark:block md:ml-88 -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                    </div>
                    <p className="dark:text-white font-medium text-black md:-mt-9 md:ml-[490px] md:text-lg text-xs -mt-6 ml-60">
                      2023-01-19
                    </p>
                  </button>
                </div>
                <div className="md:w-[650px]  w-80 md:h-14 h-12 rounded-md dark:bg-[#363D4D] bg-[#E8ECEF] mx-auto py-1 mt-3 md:ml-4 -ml-8">
                  <button>
                    <p className="dark:text-white font-medium text-black md:mt-2 md:ml-5 ml-3 mt-2 md:text-lg text-base flex">
                      2
                    </p>
                    <Image
                      src="/images/auditinfo/equilibrium.svg"
                      width="28"
                      height="28"
                      className="md:-mt-7 md:ml-20 -mt-6 ml-9 md:w-9"
                    />
                    <p className="dark:text-white font-medium text-black md:-mt-8 md:ml-32 -mt-6 ml-[68px] absolute hover:text-blue-500 md:text-lg text-xs">
                      Equilibrium
                    </p>
                    <div>
                    <Image
                        src="/images/auditinfo/score100light.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 dark:hidden -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                      <Image
                        src="/images/auditinfo/score100dark.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 hidden dark:block -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                    </div>
                    <p className="dark:text-white font-medium text-black md:-mt-9 md:ml-[490px] md:text-lg text-xs -mt-6 ml-60">
                      2023-01-19
                    </p>
                  </button>
                </div>
                <div className="md:w-[650px] w-80 md:h-14 h-12 rounded-md dark:bg-[#363D4D] bg-[#E8ECEF] mx-auto py-1 mt-3 md:ml-4 -ml-8 ">
                  <button>
                    <p className="dark:text-white font-medium text-black md:mt-2 md:ml-5 ml-3 mt-2 md:text-lg text-base flex">
                      3
                    </p>
                    <Image
                      src="/images/auditinfo/twitterdoge.svg"
                      width="28"
                      height="28"
                      className="md:-mt-7 md:ml-20 -mt-6 ml-9 md:w-9"
                    />
                    <p className="dark:text-white font-medium text-black md:-mt-8 md:ml-32 -mt-6 ml-[68px] absolute hover:text-blue-500 md:text-lg text-xs">
                      Twitter Doge
                    </p>
                    <div>
                    <Image
                        src="/images/auditinfo/score100light.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 dark:hidden -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                      <Image
                        src="/images/auditinfo/score100dark.svg"
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 hidden dark:block -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                    </div>
                    <p className="dark:text-white font-medium text-black md:-mt-9 md:ml-[490px] md:text-lg text-xs -mt-6 ml-60">
                      2023-01-19
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
          <Image src ="/images/auditinfo/reviewlight.svg" width="330" height="330" className="pt-20 mr-20 dark:hidden" />
          <Image src ="/images/auditinfo/reviewdark.svg" width="390" height="390" className="pt-20 mr-20 hidden dark:block" />
          </div>
        </div>
      </div>
    </div>
  );
};
