import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Header = dynamic(
  () => import("@/components/bsafu-ui").then((mod) => mod.Header),
  {
    ssr: false,
  }
);
const Footer = dynamic(
  () => import("@/components/footer").then((mod) => mod.Footer),
  {
    ssr: false,
  }
);

const AuditList = [
  {
    icon: "/images/partnership/virtualrobot.svg",
    tokenname: "BSC",
    name: "Virtual Robot",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    launch: "Launch At",
    finnish: "2023-10-10",
    detail: "View Detail",
  },
  {
    icon: "/images/partnership/virtualrobot.svg",
    tokenname: "BSC",
    name: "CoinMatch AI",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    launch: "Launch At",
    finnish: "2023-10-10",
    detail: "View Detail",
  },
  {
    icon: "/images/partnership/virtualrobot.svg",
    tokenname: "ETH",
    name: "Ordinals Finance",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    launch: "Launch At",
    finnish: "2023-10-10",
    detail: "View Detail",
  },
  {
    icon: "/images/partnership/virtualrobot.svg",
    tokenname: "BSC",
    name: "Virtual Robot",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    launch: "Launch At",
    finnish: "2023-10-10",
    detail: "View Detail",
  },
  {
    icon: "/images/partnership/virtualrobot.svg",
    tokenname: "BSC",
    name: "CoinMatch AI",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    launch: "Launch At",
    finnish: "2023-10-10",
    detail: "View Detail",
  },
  {
    icon: "/images/partnership/virtualrobot.svg",
    tokenname: "ETH",
    name: "Ordinals Finance",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    launch: "Launch At",
    finnish: "2023-10-10",
    detail: "View Detail",
  },
  {
    icon: "/images/partnership/virtualrobot.svg",
    tokenname: "BSC",
    name: "Virtual Robot",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    launch: "Launch At",
    finnish: "2023-10-10",
    detail: "View Detail",
  },
  {
    icon: "/images/partnership/virtualrobot.svg",
    tokenname: "BSC",
    name: "CoinMatch AI",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    launch: "Launch At",
    finnish: "2023-10-10",
    detail: "View Detail",
  },
  {
    icon: "/images/partnership/virtualrobot.svg",
    tokenname: "ETH",
    name: "Ordinals Finance",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    launch: "Launch At",
    finnish: "2023-10-10",
    detail: "View Detail",
  },
];

export default function auditList() {
  return (
    <>
      <Header />
      <div className="bg-customWhite dark:bg-customDark transition-all duration-500 pt-32">
        <div className="px-4 sm:px-8 md:px-12 lg:px-28 xl:px-28 mx-auto">
          <h3 className="text-lg text-customFullBlack dark:text-white font-medium mb-4 md:mb-4 lg:mb-4 xl:mb-4">
            SAFU AI{" "}
            <span className="text-lg text-customPurple font-medium">
              Audit List
            </span>
          </h3>
          <form className="flex flex-col justify-start w-full gap-1 mb-4 md:gap-4 lg:gap-4 xl:gap-4 md:flex-col lg:flex-row xl:flex-row">
            <div className="flex w-full">
              <input
                type="search"
                id="default-search"
                className="w-full p-3 dark:bg-gradient-to-b dark:from-blue-850 dark:to-customDark rounded-lg text-customFullBlack dark:text-white focus:ring-1 focus:ring-purple-850 focus:border-purple-850 dark:bg-customDarkGrey placeholder-gray-600 border border-gray-450 dark:border-gray-800 dark:placeholder-gray-500 dark:focus:ring-purple-850 dark:focus:border-purple-850"
                placeholder="Search Project"
                required
              />
            </div>
            <select className="bg-white dark:bg-blue-825 rounded-lg text-customFullBlack dark:text-white border border-gray-450 dark:border-gray-800 focus:ring-1 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
              <option value="token_name">Token Name</option>
              <option value="token_symbol">Token Symbol</option>
              <option value="date_release">Date Release</option>
            </select>
            <select className="bg-white dark:bg-blue-825 rounded-lg text-customFullBlack dark:text-white border border-gray-450 dark:border-gray-800 focus:ring-1 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
              <option value="token_name">All Network</option>
              <option value="token_symbol">Binance Smart Chain</option>
              <option value="date_release">Ethereum</option>
              <option value="date_release">Polygon</option>
              <option value="date_release">Avalanche</option>
              <option value="date_release">Fantom</option>
              <option value="date_release">Cronos</option>
            </select>
            <select className="bg-white dark:bg-blue-825 rounded-lg text-customFullBlack dark:text-white border border-gray-450 dark:border-gray-800 focus:ring-1 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
              <option value="token_name">Ascending</option>
              <option value="token_symbol">Descending</option>
            </select>
            <select className="bg-white dark:bg-blue-825 rounded-lg text-customFullBlack dark:text-white border border-gray-450 dark:border-gray-800 focus:ring-1 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
              <option value="token_name">9</option>
              <option value="token_symbol">18</option>
              <option value="date_release">36</option>
              <option value="date_release">72</option>
            </select>
          </form>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AuditList.map((audits, id) => (
              <div
                key={id}
                className="relative flex items-center justify-between bg-white dark:bg-customDarkGrey rounded-xl p-4 ring-2 ring-purple-850"
              >
                <div className="w-auto">
                  <Image src={audits.icon} width="60" height="0" alt="" />
                  <h3 className="text-customFullBlack dark:text-white mt-4 text-xl font-medium">
                    {audits.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-2 text-customFullBlack dark:text-white">
                      <span className="flex w-3 h-3">
                        <span className="absolute inline-flex bg-gray-500 rounded-sm h-3 w-3 animate-ping"></span>
                        <span className="relative inline-flex bg-gray-500 rounded-sm h-3 w-3"></span>
                      </span>
                      {audits.one}
                    </div>
                    <div className="flex items-center gap-2 text-customFullBlack dark:text-white">
                      <span className="flex w-3 h-3">
                        <span className="absolute inline-flex bg-yellow-450 rounded-sm h-3 w-3 animate-ping"></span>
                        <span className="relative inline-flex bg-yellow-450 rounded-sm h-3 w-3"></span>
                      </span>
                      {audits.two}
                    </div>
                    <div className="flex items-center gap-2 text-customFullBlack dark:text-white">
                      <span className="flex w-3 h-3">
                        <span className="absolute inline-flex bg-orange-550 rounded-sm h-3 w-3 animate-ping"></span>
                        <span className="relative inline-flex bg-orange-550 rounded-sm h-3 w-3"></span>
                      </span>
                      {audits.three}
                    </div>
                    <div className="flex items-center gap-2 text-customFullBlack dark:text-white">
                      <span className="flex w-3 h-3">
                        <span className="absolute inline-flex bg-rose-550 rounded-sm h-3 w-3 animate-ping"></span>
                        <span className="relative inline-flex bg-rose-550 rounded-sm h-3 w-3"></span>
                      </span>
                      {audits.four}
                    </div>
                    <div className="flex items-center gap-2 text-customFullBlack dark:text-white">
                      <span className="flex w-3 h-3">
                        <span className="absolute inline-flex bg-customLightGreen rounded-sm h-3 w-3 animate-ping"></span>
                        <span className="relative inline-flex bg-customLightGreen rounded-sm h-3 w-3"></span>
                      </span>
                      {audits.five}
                    </div>
                  </div>
                  <h3 className="text-blue-250 font-medium mt-4">
                    {audits.launch}
                  </h3>
                  <h3 className="text-customFullBlack dark:text-white font-medium">
                    {audits.finnish}
                  </h3>
                </div>
                <h3 className="absolute top-4 right-4 text-customPurple font-medium">
                  {audits.tokenname}
                </h3>
                <Link
                  href="/"
                  className="absolute top-44 right-5 text-customFullBlack dark:text-white font-medium px-1 py-1 ring-2 ring-purple-850 rounded-md"
                >
                  {audits.detail}
                </Link>
              </div>
            ))}
          </div>
          <div className="flex items-center max-w-max mx-auto gap-2 mt-4">
            <button className="px-4 py-2 bg-white dark:bg-customDarkGrey rounded-lg text-customFullBlack dark:text-white font-normal border border-gray-450 dark:border-gray-800 focus:ring-1 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
              Previous
            </button>
            <button className="px-4 py-2 bg-white dark:bg-customDarkGrey rounded-lg text-customFullBlack dark:text-white font-normal border border-gray-450 dark:border-gray-800 focus:ring-1 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
              1
            </button>
            <button className="px-4 py-2 bg-white dark:bg-customDarkGrey rounded-lg text-customFullBlack dark:text-white font-normal border border-gray-450 dark:border-gray-800 focus:ring-1 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
              2
            </button>
            <button className="px-4 py-2 bg-white dark:bg-customDarkGrey rounded-lg text-customFullBlack dark:text-white font-normal border border-gray-450 dark:border-gray-800 focus:ring-1 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
              3
            </button>
            <button className="px-4 py-2 bg-white dark:bg-customDarkGrey rounded-lg text-customFullBlack dark:text-white font-normal border border-gray-450 dark:border-gray-800 focus:ring-1 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
