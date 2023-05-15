import Image from "next/image";
import React from "react";

export const HowWork = () => {
  return (
    <>
      <div className="pt-32 lg:pt-40 pb-28 px-4 sm:px-8 md:px-12 lg:px-28 bg-customWhite dark:bg-customDark text-black dark:text-white transition-all duration-500 lg:flex">
        <div className="lg:w-5/6 xl:w-3/4">
          <h1 className="uppercase font-semibold text-lg text-gray-600 mb-4">
            how does it <span className="text-customPurple">work?</span>
          </h1>
          <h2 className="font-inter text-2xl font-semibold mb-15 lg:mb-28">
            Get Audited by SAFU AI within
            <span className="block sm:inline lg:block"> 1-2 Days</span>
          </h2>
          <Image
            src="/images/howWork/blockicon.svg"
            width="400"
            height="400"
            className="mx-auto lg:mx-0"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-15 lg:gap-0 lg:grid-cols-1 xl:grid-cols-2 w-full mt-24 lg:mt-0">
          <div className="w-full lg:max-w-285 lg:mb-10 xl:mb-0 lg:max-h-84 p-6 mx-auto xl:mx-0 rounded-md bg-white dark:bg-gray-850 sm:relative">
            <Image
              src="/images/howWork/pricingicon.svg"
              width="57"
              height="57"
              className="mb-4 hidden dark:block"
            />
            <Image
              src="/images/howWork/pricingiconlight.svg"
              width="57"
              height="57"
              className="mb-4 dark:hidden"
            />

            <h1 className="text-xl text-left mb-5 font-semibold dark:text-white">
              Get a pricing quote
            </h1>

            <p className="text-md mb-8 dark:text-white">
              Obtain an audit scope, timeline, and pricing estimate by
              submitting the necessary paperwork
            </p>

            <div className="flex justify-between">
              <h2 className="sm:absolute sm:bottom-8 lg:static text-lg font-semibold dark:text-white">
                Request Now
              </h2>
              <button className="sm:absolute sm:bottom-8 lg:static sm:right-7">
                <Image
                  src="/images/howWork/buttonarrow.svg"
                  width="27"
                  height="27"
                />
              </button>
            </div>
          </div>
          <div className="lg:max-w-285 lg:mb-10 xl:mb-0 p-6 mx-auto xl:mx-0 rounded-md xl:-translate-y-28 xl:mr-0 xl:ml-auto bg-white dark:bg-gray-850">
            <Image
              src="/images/howWork/inspecticon.svg"
              width="57"
              height="57"
              className="mb-4 hidden dark:block"
            />
            <Image
              src="/images/howWork/inspecticonlight.svg"
              width="57"
              height="57"
              className="mb-4 block dark:hidden"
            />

            <h1 className="text-xl text-left mb-5 font-semibold dark:text-white">
              Inspection report
            </h1>

            <p className="text-md mb-8 dark:text-white">
              Upon completion of preliminary testing, our specialists will
              provide you with a report detailing any detected vulnerabilities
              along with recommendations for addressing them
            </p>

            <div className="flex justify-between w-full mb-2">
              <h2 className="text-lg font-semibold dark:text-white">
                Request Now
              </h2>
              <button>
                <Image
                  src="/images/howWork/buttonarrow.svg"
                  width="27"
                  height="27"
                />
              </button>
            </div>
          </div>
          <div className="lg:max-w-285 lg:mb-10 xl:mb-12 p-6 mx-auto xl:mx-0 rounded-md bg-white dark:bg-gray-850 sm:relative">
            <Image
              src="/images/howWork/corectionicon.svg"
              width="57"
              height="57"
              className="mb-4 hidden dark:block"
            />
            <Image
              src="/images/howWork/correctioniconlight.svg"
              width="57"
              height="57"
              className="mb-4 block dark:hidden"
            />

            <h1 className="text-xl text-left mb-5 font-semibold dark:text-white">
              Correction
              <span className="lg:block"> assessment</span>
            </h1>

            <p className="text-md mb-8 dark:text-white">
              Once you implement the fixes, our team conducts a validation check
              (1 check is covered in the cost) to verify that all modifications
              are accurate.
            </p>

            <div className="flex justify-between w-full">
              <h2 className="sm:absolute sm:bottom-8 lg:static text-lg font-semibold dark:text-white">
                Request Now
              </h2>
              <button className="sm:absolute sm:bottom-8 lg:static sm:right-7">
                <Image
                  src="/images/howWork/buttonarrow.svg"
                  width="27"
                  height="27"
                />
              </button>
            </div>
          </div>
          <div className="lg:max-w-285 p-6 mx-auto xl:mx-0 rounded-md xl:-translate-y-20 xl:mr-0 xl:ml-auto bg-white dark:bg-gray-850">
            <Image
              src="/images/howWork/accreditation.svg"
              width="57"
              height="57"
              className="mb-4 hidden dark:block"
            />
            <Image
              src="/images/howWork/accreditationlight.svg"
              width="57"
              height="57"
              className="mb-4 block dark:hidden"
            />

            <h1 className="text-xl text-left mb-5 font-semibold dark:text-white">
              Accreditation and advertising
            </h1>

            <p className="text-md mb-8 dark:text-white">
              Incorporate a Hacken audit onto your website and have it featured
              on CER.live, CMC, and CoinGecko. Your audit will also be
              highlighted on media platforms owned by Hacken and its partners.
            </p>

            <div className="flex justify-between w-full mb-2">
              <h2 className="text-lg font-semibold dark:text-white">
                Request Now
              </h2>
              <button>
                <Image
                  src="/images/howWork/buttonarrow.svg"
                  width="27"
                  height="27"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
