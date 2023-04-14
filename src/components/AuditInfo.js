import React from "react";
import Image from "next/image";
import Link from "next/link";

const Auditinfo = [
  {
    number: "1",
    icon: "/images/auditinfo/ordinals.svg",
    name: "Ordinals Finance",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "localhost:3000",
  },
  {
    number: "2",
    icon: "/images/auditinfo/foxchain.svg",
    name: "Fox Chain",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "localhost:3000",
  },
  {
    number: "3",
    icon: "/images/auditinfo/tominu.svg",
    name: "Tom Inu",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "localhost:3000",
  },
  {
    number: "4",
    icon: "/images/auditinfo/trustgpt.svg",
    name: "Trust GPTAI",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "localhost:3000",
  },
  {
    number: "5",
    icon: "/images/auditinfo/capybara.svg",
    name: "Capybara Coin",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "localhost:3000",
  },
];

const Auditinfosecond = [
  {
    number: "1",
    icon: "/images/auditinfo/lizacoin.svg",
    name: "Ordinals Finance",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "localhost:3000",
  },
  {
    number: "2",
    icon: "/images/auditinfo/dogekaki.svg",
    name: "Fox Chain",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "localhost:3000",
  },
  {
    number: "3",
    icon: "/images/auditinfo/frogceo.svg",
    name: "Tom Inu",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "localhost:3000",
  },
  {
    number: "4",
    icon: "/images/auditinfo/smartfi.svg",
    name: "Trust GPTAI",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "localhost:3000",
  },
  {
    number: "5",
    icon: "/images/auditinfo/orphancoin.svg",
    name: "Capybara Coin",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "localhost:3000",
  },
];

export function AuditInfo() {
  return (
    <div className="dark:bg-[#1B1F28] bg-[#E8ECEF] min-h-screen overflow-hidden transition-all duration-500">
      <div className="pb-16">
        <div className="lg:flex flex justify-center">
          <div className="lg:block hidden">
            <Image
              src="/images/auditinfo/analysislight.svg"
              width="300"
              height="300"
              className="pt-20 -p-20 w-72 dark:hidden"
            />
            <Image
              src="/images/auditinfo/analysisdark.svg"
              width="342"
              height="342"
              className="pt-20 hidden dark:block"
            />
          </div>
          <div className="md:space-x-6 space-x-12 md:-translate-x-7 lg:translate-x-12 dark:lg:translate-x-6 dark:md:-translate-x-7 pl-7">
            <div className="flex md:ml-1 ml-36">
              <p className="dark:text-white text-black font-medium md:text-2xl text-xl pt-6 md:ml-8 md:-mr-4">
                Recently completed audit information
              </p>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="md:ml-32 mt-4 md:mt-0 ml-2 mr-40 md:-mr-20 mb-14"
              >
                <button className="dark:bg-gray-[#1B1F28]  dark:hover:bg-gray-800 outline dark:outline-gray-700 outline-gray-600 hover:bg-gray-400 duration-200 text-white text-sm md:px-8 p-1 mt-2 px-5 md:py-4 rounded-md md:-mr-20 -pl-10">
                  <p className="font-semibold dark:text-white text-base text-black">
                    View All
                  </p>
                </button>
              </a>
            </div>
            <div className="mx-auto mb-20">
              <div className="md:-mb-10 -mb-16 justify-center md:space-x-5 lg:space-x-8 space-x-2 md:mr-0 mr-14 flex">
                <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-14 pr-4">
                  No
                </p>
                <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-14 pr-4">
                  Name Project
                </p>
                <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-14 pr-4">
                  Score
                </p>
                <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-14 pr-4">
                  Finnish Date
                </p>
              </div>
            </div>
            <div className="md:pr-0 pr-40">
              {Auditinfo.map((audits, id) => (
                <div
                  key={id}
                  className="py-4 mt-3 pt-1 md:pr-5 pr-2 md:ml-0 ml-20 pl-10 md:pl-0 dark:bg-[#1B1F28] bg-white outline dark:outline-[#363D4C] outline-gray-600"
                >
                  <div className="-ml-8 md:-ml-0 mx-auto w-80 md:w-full">
                  <Link href={audits.link}>
                    <p className="dark:text-white font-medium text-black md:mt-3 md:ml-5 -mr-10 mt-2 md:text-lg text-base flex">
                      {" "}
                      {audits.number}
                    </p>
                    <Image
                      src={audits.icon}
                      width="28"
                      height="28"
                      className="md:-mt-8 md:ml-20 -mt-6 ml-9 md:w-9"
                    />
                    <p className="dark:text-white font-medium text-black md:-mt-8 md:ml-32 -mt-6 ml-[68px] absolute hover:text-blue-500 dark:hover:text-blue-500 duration-200 md:text-lg text-xs">
                      {audits.name}
                    </p>
                    <div>
                      <Image
                        src={audits.scorel}
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 dark:hidden -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                      <Image
                        src={audits.scored}
                        width="28"
                        height="28"
                        className="md:-mt-9 hidden dark:block md:ml-88 -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                    </div>
                    <p className="dark:text-white font-medium text-black md:-mt-8 md:ml-[490px] md:text-lg text-xs -mt-6 ml-60">
                      {audits.finnish}
                    </p>
                  </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pb-28 mx-auto">
        <div className="pt-36 flex justify-center">
          <div className="md:space-x-6 space-x-12 translate-x-0 md:-translate-x-7 dark:md:-translate-x-7 pl-7 lg:-translate-x-7 dark:lg:translate-x-3">
            <div className="flex md:ml-1 ml-36">
              <p className="dark:text-white text-black md:text-2xl text-xl pt-3 md:ml-8 md:mr-4">
                Review of onboarding project data
              </p>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="md:ml-32 mt-4 md:mt-0 ml-2 mr-40 md:-mr-20 mb-14"
              >
                <button className="dark:bg-gray-[#1B1F28] dark:hover:bg-gray-800 hover:bg-gray-400 outline dark:outline-gray-700 outline-gray-600 duration-200 text-white text-sm md:px-8 p-1 px-5 md:py-4 rounded-md md:-mr-20 -pl-10">
                  <p className="dark:text-white text-base text-black font-semibold">
                    View All
                  </p>
                </button>
              </a>
            </div>
            <div>
              <div className="md:-mb-10 -mb-16 justify-center md:space-x-5 lg:space-x-8 space-x-2 md:mr-0 mr-14 flex">
                <p className="dark:text-white text-black md:text-2xl text-base md:pr-14 pr-4">
                  No
                </p>
                <p className="dark:text-white text-black md:text-2xl text-base md:pr-14 pr-4">
                  Name Project
                </p>
                <p className="dark:text-white text-black md:text-2xl text-base md:pr-14 pr-4">
                  Score
                </p>
                <p className="dark:text-white text-black md:text-2xl text-base md:pr-14 pr-4">
                  Finnish Date
                </p>
              </div>
            </div>
            <div className="mt-20 md:pr-0 pr-40">
              {Auditinfosecond.map((auditsec, id) => (
                <div
                  key={id}
                  className="py-4 mt-3 pt-1 md:pr-5 pr-2 md:ml-0 ml-20 pl-10 md:pl-0  dark:bg-[#1B1F28] bg-[#FFFFFF] outline dark:outline-[#363D4C] outline-gray-600"
                >
                  <div className="-ml-8 md:-ml-0 mx-auto w-80 md:w-full">
                  <button>
                    <p className="dark:text-white font-medium text-black md:mt-3 md:ml-5 ml-3 mt-2 md:text-lg text-base flex">
                      {auditsec.number}
                    </p>
                    <Image
                      src={auditsec.icon}
                      width="28"
                      height="28"
                      className="md:-mt-8 md:ml-20 -mt-6 ml-9 md:w-9"
                    />
                    <p className="dark:text-white font-medium text-black md:-mt-8 md:ml-32 -mt-6 ml-[68px] absolute hover:text-blue-500 dark:hover:text-blue-500 duration-200 md:text-lg text-xs">
                      {auditsec.name}
                    </p>
                    <div>
                      <Image
                        src={auditsec.scorel}
                        width="28"
                        height="28"
                        className="md:-mt-9 md:ml-88 dark:hidden -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                      <Image
                        src={auditsec.scored}
                        width="28"
                        height="28"
                        className="md:-mt-9 hidden dark:block md:ml-88 -mt-7 md:w-9 ml-44"
                        alt="/"
                      />
                    </div>
                    <p className="dark:text-white font-medium text-black md:-mt-9 md:ml-[490px] md:text-lg text-xs -mt-6 ml-60">
                      {auditsec.finnish}
                    </p>
                  </button>
                </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:block hidden">
            <Image
              src="/images/auditinfo/reviewlight.svg"
              width="340"
              height="340"
              className="pt-40 mr-12 pl-16 md:w-96 w-0 dark:hidden"
            />
            <Image
              src="/images/auditinfo/reviewdark.svg"
              width="399"
              height="399"
              className="pt-40 ml-20 hidden dark:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
