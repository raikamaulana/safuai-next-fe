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
  },
  {
    number: "2",
    icon: "/images/auditinfo/foxchain.svg",
    name: "Fox Chain",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
  },
  {
    number: "3",
    icon: "/images/auditinfo/tominu.svg",
    name: "Tom Inu",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
  },
  {
    number: "4",
    icon: "/images/auditinfo/trustgpt.svg",
    name: "Trust GPTAI",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "/privacyPolicy"
  },
  {
    number: "5",
    icon: "/images/auditinfo/capybara.svg",
    name: "Capybara Coin",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
    link: "/safuaiHero"
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
  },
  {
    number: "2",
    icon: "/images/auditinfo/dogekaki.svg",
    name: "Fox Chain",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
  },
  {
    number: "3",
    icon: "/images/auditinfo/frogceo.svg",
    name: "Tom Inu",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
  },
  {
    number: "4",
    icon: "/images/auditinfo/smartfi.svg",
    name: "Trust GPTAI",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
  },
  {
    number: "5",
    icon: "/images/auditinfo/orphancoin.svg",
    name: "Capybara Coin",
    scorel: "/images/auditinfo/score100light.svg",
    scored: "/images/auditinfo/score100dark.svg",
    finnish: "2023-01-19",
  },
];

export function AuditInfo() {
  return (
    <div className="dark:bg-customDark bg-customWhite min-h-screen overflow-hidden transition-all duration-500">
      <div className="lg:max-w-max lg:mx-auto">
        <div className="pb-5">
        <div className="lg:-mt-96 md:mt-10 lg:-translate-x-30">
          <div className="pt-0 flex lg:inline-flex justify-center lg:translate-x-56">
            <div className="md:space-x-6 space-x-12 md:-translate-x-7 lg:dark:ml-0 lg:ml-8 lg:translate-y-2 lg:dark:translate-y-0 lg:translate-x-96 dark:lg:translate-x-96 dark:md:-translate-x-7 pl-7">
              <div className="flex md:-ml-1 ml-36">
                <p className="dark:text-white text-black font-medium md:text-2xl text-xl pt-4 md:ml-8 lg:ml-2 md:-mr-16 lg:-mr-20">
                  Recently completed audit information
                </p>
                <Link
                  href="/audit-list"
                  className="md:ml-32 mt-4 md:mt-0 ml-2 mr-40 md:-mr-20 lg:ml-28 mb-14"
                >
                  <button className="dark:bg-gray-customDark dark:hover:bg-gray-800 hover:bg-gray-500 outline dark:outline-gray-700 outline-gray-600 duration-200 text-white text-sm md:px-8 p-1 px-5 md:py-4 rounded-md md:mr-0 lg:mr-0 -pl-10">
                    <p className="dark:text-white text-base text-black font-semibold">
                      View All
                    </p>
                  </button>
                </Link>
              </div>
              <div>
                <div className="mb-20">
                  <div className="md:-mb-10 -mb-16 justify-center md:space-x-5 lg:space-x-12 space-x-2 lg:mr-0 md:mr-0 mr-14 flex">
                    <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 lg:pr-3 pr-4">
                      No
                    </p>
                    <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 lg:pr-3 pr-4">
                      Name Project
                    </p>
                    <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 lg:pr-0 pr-4">
                      Score
                    </p>
                    <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 lg:pr-3 pr-4">
                      Finnish Date
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-20 lg:px-0 md:px-0 pr-40">
                {Auditinfo.map((audits, id) => (
                  <div
                    key={id}
                    className="py-4 mt-3 pt-1 md:pr-0 lg:-pl-2 lg:px-10 lg:pr-6 pr-2 md:ml-0 ml-20 pl-10 md:pl-0 dark:bg-customDark bg-white outline dark:outline-customGrey outline-gray-600"
                  >
                    <div className="-ml-8 lg:mr-2 lg:-ml-16 md:-ml-0 w-80 md:w-full">
                      <button>
                        <p className="dark:text-white font-medium text-black md:mt-3 md:ml-5 lg:ml-10 lg:-mr-44 -mr-0 ml-1 mt-2 md:text-lg text-base flex">
                          {audits.number}
                        </p>
                        <Image
                          src={audits.icon}
                          width="28"
                          height="28"
                          className="md:-mt-8 md:ml-20 lg:ml-24 -mt-6 ml-8 md:w-9"
                        />
                        <Link href="/audit-list" className="dark:text-white font-medium text-black md:-mt-8 md:-ml-36 lg:-ml-14 -mt-6 -ml-22 absolute hover:text-blue-500 dark:hover:text-blue-500 duration-200 md:text-lg text-xs">
                          {audits.name}
                        </Link>
                        <div>
                          <Image
                            src={audits.scorel}
                            width="28"
                            height="28"
                            className="md:-mt-9 md:ml-80 dark:hidden -mt-7 md:w-9 ml-44"
                            alt="/"
                          />
                          <Image
                            src={audits.scored}
                            width="28"
                            height="28"
                            className="md:-mt-9 hidden dark:block md:ml-80 lg:ml-88 -mt-7 md:w-9 ml-44"
                            alt="/"
                          />
                        </div>
                        <div className="md:ml-16">
                        <p className="dark:text-white font-medium text-black md:-mt-9 md:ml-96 lg:-mr-40 lg:ml-96 md:text-lg text-xs -mt-6 ml-60">
                          {audits.finnish}
                        </p>
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:inline-flex lg:translate-y-96 lg:-translate-x-96 hidden">
            <Image
              src="/images/auditinfo/analysislight.svg"
              width="340"
              height="340"
              className="pt-40 mr-14 pl-30 md:w-455 w-0 dark:hidden lg:translate-y-16 lg:-translate-x-52"
            />
            <Image
              src="/images/auditinfo/analysisdark.svg"
              width="399"
              height="399"
              className="pt-40 ml-20 hidden dark:ml-20 dark:block lg:translate-y-16 lg:-translate-x-50"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="lg:-mt-48 mt-16 pb-5">
          <div className="pt-5 flex lg:inline-flex justify-center lg:-translate-x-30">
            <div className="md:space-x-6 space-x-12 md:-translate-x-7 lg:translate-x-28 dark:lg:translate-x-20 dark:md:-translate-x-7 pl-7">
              <div className="flex md:ml-1 ml-36">
                <p className="dark:text-white text-black font-medium md:text-2xl text-xl pt-4 md:ml-8 lg:ml-2 md:-mr-10 lg:-mr-20">
                  Review of onboarding project data
                </p>
                <Link
                  href="/audit-list"
                  className="md:ml-32 mt-4 md:mt-0 ml-2 mr-40 md:-mr-20 lg:ml-36 mb-14"
                >
                  <button className="dark:bg-customDark dark:hover:bg-gray-800 hover:bg-gray-500 outline dark:outline-gray-700 outline-gray-600 duration-200 text-white text-sm md:px-8 p-1 px-5 md:py-4 rounded-md md:mr-0 lg:mr-0 -pl-10">
                    <p className="dark:text-white text-base text-black font-semibold">
                      View All
                    </p>
                  </button>
                </Link>
              </div>
              <div>
                <div className="mb-20">
                  <div className="md:-mb-10 -mb-16 justify-center md:space-x-5 lg:space-x-12 space-x-2 lg:mr-0 md:mr-0 mr-14 flex">
                    <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 lg:pr-3 pr-4">
                      No
                    </p>
                    <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 lg:pr-3 pr-4">
                      Name Project
                    </p>
                    <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 lg:pr-0 pr-4">
                      Score
                    </p>
                    <p className="dark:text-white text-black font-medium md:text-2xl text-base md:pr-10 lg:pr-3 pr-4">
                      Finnish Date
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-20 lg:px-0 md:px-0 pr-40">
                {Auditinfosecond.map((auditsec, id) => (
                  <div
                    key={id}
                    className="py-4 mt-3 pt-1 md:pr-0 lg:-pl-2 lg:px-10 lg:pr-6 pr-2 md:ml-0 ml-20 pl-10 md:pl-0 dark:bg-customDark bg-white outline dark:outline-customGrey outline-gray-600"
                  >
                    <div className="-ml-8 lg:mr-2 lg:-ml-16 md:-ml-0 w-80 md:w-full">
                      <button>
                        <p className="dark:text-white font-medium text-black md:mt-3 md:ml-5 lg:ml-10 lg:-mr-44 -mr-0 ml-1 mt-2 md:text-lg text-base flex">
                          {auditsec.number}
                        </p>
                        <Image
                          src={auditsec.icon}
                          width="28"
                          height="28"
                          className="md:-mt-8 md:ml-20 lg:ml-24 -mt-6 ml-8 md:w-9"
                        />
                        <Link href="/audit-list" className="dark:text-white font-medium text-black md:-mt-8 lg:-ml-14 md:-ml-36 -mt-6 -ml-22 absolute hover:text-blue-500 dark:hover:text-blue-500 duration-200 md:text-lg text-xs">
                          {auditsec.name}
                        </Link>
                        <div>
                          <Image
                            src={auditsec.scorel}
                            width="28"
                            height="28"
                            className="md:-mt-9 md:ml-80 dark:hidden -mt-7 md:w-9 ml-44"
                            alt="/"
                          />
                          <Image
                            src={auditsec.scored}
                            width="28"
                            height="28"
                            className="md:-mt-9 hidden dark:block md:ml-80 lg:ml-88 -mt-7 md:w-9 ml-44"
                            alt="/"
                          />
                        </div>
                        <div className="md:ml-16">
                        <p className="dark:text-white font-medium text-black md:-mt-9 md:ml-96 lg:-mr-40 lg:ml-96 md:text-lg text-xs -mt-6 ml-60">
                          {auditsec.finnish}
                        </p>
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:inline-flex lg:translate-y-96 lg:translate-x-10 hidden">
            <Image
              src="/images/auditinfo/reviewlight.svg"
              width="340"
              height="340"
              className="pt-40 mr-14 pl-30 md:w-455 w-0 dark:hidden lg:translate-y-14"
            />
            <Image
              src="/images/auditinfo/reviewdark.svg"
              width="399"
              height="399"
              className="pt-40 ml-20 hidden dark:ml-20 dark:block lg:translate-y-14"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
