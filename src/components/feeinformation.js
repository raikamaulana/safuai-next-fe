import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";

export const FeeInformation = () => {
  return (
    <section className=" dark:bg-customBlack bg-customWhite w-full duration-500 transition-all">
      <div className="max-w-max dark:bg-customDark bg-white dark:lg:bg-transparent lg:bg-transparent dark:md:bg-transparent md:bg-transparent">
        <Tab.Group>
          <Tab.List>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white text-customPurple lg:mr-5 dark:lg:px-9 lg:px-9  dark:lg:pt-4 lg:pt-4 lg:pb-7  mr-4 pt-2 px-2 md:pb-4"
                      : "dark:bg-customDark  dark:text-white lg:border md:border lg:border-customPurple md:border-customPurple  dark:border-none  lg:mr-5 lg:px-9 lg:pt-4 lg:pb-3  mr-4 pt-2 px-2 md:pb-2"
                  }
                >
                  Buy Tax Information
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white text-customPurple lg:mr-5 dark:lg:px-9 lg:px-9 dark:lg:pt-4 lg:pt-4 lg:pb-7  mr-4 pt-2 px-2 md:pb-4"
                      : "dark:bg-customDark  dark:text-white lg:border md:border lg:border-customPurple md:border-customPurple  dark:border-none  lg:mr-5 lg:px-9 lg:pt-4 lg:pb-3  mr-4 pt-2 px-2 md:pb-2"
                  }
                >
                  Sell Tax Information
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white text-customPurple dark:lg:px-9 lg:px-9 dark:lg:pt-4 lg:pt-4 lg:pb-7 pt-2 px-2 md:pb-4 mr-0"
                      : "dark:bg-customDark  dark:text-white lg:border md:border lg:border-customPurple md:border-customPurple  dark:border-none  lg:px-9 lg:pt-4 lg:pb-3 pt-2 px-2 md:pb-2 mr-0"
                  }
                >
                  Transfer Tax Information
                </button>
              )}
            </Tab>
            {/* ...  */}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="dark:bg-customDark bg-white dark:text-white h-162.5 py-8 pr-8 pl-5">
                <div className="grid grid-cols-3 pl-6 mb-4">
                  <p className="text-gray-500 ">Name</p>
                  <p className="text-gray-500 ">RECEIVER</p>
                  <p className="text-gray-500 ">VALUE</p>
                </div>
                <div className="grid grid-cols-3 dark:bg-customGrey2 dark:border-none border border-customWhite py-3 pl-6 mb-6 rounded-lg">
                  <p className=" truncate">LIQUIDITY</p>
                  <p className=" truncate">0X919...2131</p>
                  <p className="">4%</p>
                </div>
                <div className="grid grid-cols-3 dark:bg-customGrey2 dark:border-none border border-customWhite py-3 pl-6 mb-6 rounded-lg">
                  <p className=" truncate">MARKETING</p>
                  <p className=" truncate">0X012...131</p>
                  <p className="">3%</p>
                </div>
                <div className="grid grid-cols-3 dark:bg-customGrey2 dark:border-none border border-customWhite py-3 pl-6 mb-6 rounded-lg">
                  <p className=" truncate">TOKEN REWARD</p>
                  <p className=" truncate">0X131...123</p>
                  <p className="">3%</p>
                </div>
                <div className="grid grid-cols-3 dark:bg-customGrey2 dark:border-none border border-customWhite py-3 pl-6 mb-6 rounded-lg">
                  <p className=" truncate">TOTAL</p>
                  <p className="">11%</p>
                </div>
              </div>
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <div className="dark:bg-customDark bg-white dark:text-white h-162.5 py-8 pr-8 pl-5">
                <div className="grid grid-cols-3 pl-6 mb-4">
                  <p className="text-gray-500 ">Name</p>
                  <p className="text-gray-500 ">RECEIVER</p>
                  <p className="text-gray-500 ">VALUE</p>
                </div>
                <div className="grid grid-cols-3 dark:bg-customGrey2 dark:border-none border border-customWhite py-3 pl-6 mb-6 rounded-lg">
                  <p className=" truncate">LIQUIDITY</p>
                  <p className=" truncate">0X919...2131</p>
                  <p className="">4%</p>
                </div>
                <div className="grid grid-cols-3 dark:bg-customGrey2 dark:border-none border border-customWhite py-3 pl-6 mb-6 rounded-lg">
                  <p className=" truncate">MARKETING</p>
                  <p className=" truncate">0X012...131</p>
                  <p className="">3%</p>
                </div>
                <div className="grid grid-cols-3 dark:bg-customGrey2 dark:border-none border border-customWhite py-3 pl-6 mb-6 rounded-lg">
                  <p className=" truncate">TOKEN REWARD</p>
                  <p className=" truncate">0X131...123</p>
                  <p className="">3%</p>
                </div>
                <div className="grid grid-cols-3 dark:bg-customGrey2 dark:border-none border border-customWhite py-3 pl-6 mb-6 rounded-lg">
                  <p className=" truncate">TOTAL</p>
                  <p className="">11%</p>
                </div>
              </div>
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <div className="dark:bg-customDark bg-white dark:text-white h-162.5 py-8 pr-8 pl-5">
                <div className="grid grid-cols-3 gap-9 pl-6 mb-4">
                  <p className="text-gray-500">Name</p>
                  <p className="text-gray-500 ml-auto mr-0">RECEIVER</p>
                  <p className="text-gray-500 ml-auto mr-5">VALUE</p>
                </div>
                <div className="grid grid-cols-3 dark:bg-customGrey2 dark:border-none border border-customWhite py-3 pl-6 mb-6 rounded-lg">
                  <p className=" truncate sm:w-20 md:w-28 lg:w-full">
                    NO TAX IN THIS CONTRACT
                  </p>
                  <p className=""></p>
                  <p className="ml-auto mr-10">%</p>
                </div>
                <div className="grid grid-cols-3 dark:bg-customGrey2 dark:border-none border border-customWhite py-3 pl-6 mb-6 rounded-lg">
                  <p className="">MARKETING</p>
                  <p className=""></p>
                  <p className=""></p>
                </div>
                <div className="grid grid-cols-3 dark:bg-customGrey2 dark:border-none border border-customWhite py-3 pl-6 mb-6 rounded-lg">
                  <p className=" ">TOTAL</p>
                  <p className="ml-auto mr-10">0</p>
                </div>
              </div>
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};
