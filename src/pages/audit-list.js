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
  () => import("@/components/bsafu-ui").then((mod) => mod.Footer),
  {
    ssr: false,
  }
);

export default function auditList() {
  return (
    <>
      <Header />
      <div className="bg-customWhite dark:bg-customDark transition-all duration-500 pt-32">
        <div className="max-w-max mx-auto">
          <h3 className="text-lg text-customFullBlack dark:text-white font-medium mb-4 md:mb-4 lg:mb-4 xl:mb-4">
            SAFU AI{" "}
            <span className="text-lg text-customPurple font-medium">
              Audit List
            </span>
          </h3>
          <input
            type="search"
            id="default-search"
            className="block lg:inline-flex xl:inline-flex dark:bg-gradient-to-b dark:from-blue-850 dark:to-customDark rounded-lg text-customFullBlack dark:text-white mb-4 md:mb-4 lg:mb-8 xl:mb-8 lg:mr-0 xl:mr-0 pl-4 md:pl-4 lg:pl-3 xl:pl-3 py-2 md:py-2 lg:py-3 xl:py-3 w-64 md:w-full lg:w-56 xl:w-68 focus:ring-2 focus:ring-purple-850 focus:border-purple-850 dark:bg-customDarkGrey placeholder-gray-600 border-none dark:border dark:border-customDarkGrey dark:placeholder-gray-500 dark:focus:ring-purple-850 dark:focus:border-purple-850"
            placeholder="Search Project"
            required
          />
          <select className="lg:inline-flex xl:inline-flex bg-white dark:bg-blue-825 rounded-lg text-customFullBlack dark:text-white mb-4 md:mb-4 lg:mb-0 xl:mb-0 ml-0 md:ml-0 lg:ml-3 xl:ml-3 pl-4 md:pl-4 lg:pl-3 xl:pl-3 py-2 md:py-2 lg:py-3 xl:py-3 w-64 md:w-full lg:w-40 xl:w-40 border-none dark:border-none focus:ring-2 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
            <option value="token_name">Token Name</option>
            <option value="token_symbol">Token Symbol</option>
            <option value="date_release">Date Release</option>
          </select>
          <div className="lg:inline-flex xl:inline-flex mb-8 md:mb-8 lg:mb-0 xl:mb-0">
            <div className="relative">
              <Image
                src="/images/network/coinDigital.svg"
                width="48"
                height="10"
                alt="Safu AI's Coin Digital Logo"
                className="absolute top-2 md:top-2 lg:top-3 xl:top-3 left-auto right-13 md:right-8 lg:right-8 xl:right-8"
              />
              <select className="lg:inline-flex xl:inline-flex bg-white dark:bg-blue-825 rounded-lg text-customFullBlack dark:text-white mb-4 md:mb-4 lg:mb-0 xl:mb-0 ml-0 md:ml-0 lg:ml-3 xl:ml-3 pl-4 md:pl-4 lg:pl-3 xl:pl-3 py-2 md:py-2 lg:py-3 xl:py-3 w-64 md:w-full lg:w-64 xl:w-64 border-none dark:border-none focus:ring-2 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
                <option value="token_name">All Network</option>
                <option value="token_symbol">Binance Smart Chain</option>
                <option value="date_release">Ethereum</option>
                <option value="date_release">Polygon</option>
                <option value="date_release">Avalanche</option>
                <option value="date_release">Fantom</option>
                <option value="date_release">Cronos</option>
              </select>
            </div>
            <select className="block bg-white dark:bg-blue-825 rounded-lg text-customFullBlack dark:text-white mb-4 md:mb-4 lg:mb-0 xl:mb-0 ml-0 md:ml-0 lg:ml-3 xl:ml-3 pl-4 md:pl-4 lg:pl-3 xl:pl-3 py-2 md:py-2 lg:py-3 xl:py-3 w-64 md:w-full lg:w-36 xl:w-36 border-none dark:border-none focus:ring-2 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
              <option value="token_name">Ascending</option>
              <option value="token_symbol">Descending</option>
            </select>
            <select className="bg-white dark:bg-blue-825 rounded-lg text-customFullBlack dark:text-white mb-0 md:mb-0 lg:mb-0 xl:mb-0 ml-0 md:ml-0 lg:ml-3 xl:ml-3 pl-4 md:pl-4 lg:pl-3 xl:pl-3 py-2 md:py-2 lg:py-3 xl:py-3 w-64 md:w-full lg:w-20 xl:w-20 border-none dark:border-none focus:ring-2 focus:ring-purple-850 focus:border-purple-850 dark:focus:ring-purple-850 dark:focus:border-purple-850">
              <option value="token_name">9</option>
              <option value="token_symbol">18</option>
              <option value="date_release">36</option>
              <option value="date_release">72</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 md:gap-x-16 lg:gap-x-18.5 xl:gap-x-24 gap-y-5 md:gap-y-5 lg:gap-y-5 xl:gap-y-10 mb-4 md:mb-4 lg:mb-4 xl:mb-4">
            <div className="bg-white dark:bg-customDarkGrey rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-purple-850">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-customPurple font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-customFullBlack dark:text-white text-xl font-medium mb-2">
                Virtual Robot
              </h3>
              <div className="bg-gray-350 dark:bg-gray-750 rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <span className="inline-flex">
                  <span className="absolute inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  1
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  2
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  3
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  4
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  5
                </h3>
              </div>
              <h3 className="text-blue-250 font-medium">Launch At</h3>
              <h3 className="inline-block text-customFullBlack dark:text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-customFullBlack dark:text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-purple-850 rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-white dark:bg-customDarkGrey rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-purple-850">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-customPurple font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-customFullBlack dark:text-white text-xl font-medium mb-2">
                CoinMatch AI
              </h3>
              <div className="bg-gray-350 dark:bg-gray-750 rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <span className="inline-flex">
                  <span className="absolute inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  1
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  2
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  3
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  4
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  5
                </h3>
              </div>
              <h3 className="text-blue-250 font-medium">Launch At</h3>
              <h3 className="inline-block text-customFullBlack dark:text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-customFullBlack dark:text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-purple-850 rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-white dark:bg-customDarkGrey rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-purple-850">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-customPurple font-medium -translate-y-11 pl-32 mb-2">
                ETH
              </h3>
              <h3 className="text-customFullBlack dark:text-white text-xl font-medium mb-2">
                Ordinals Finance
              </h3>
              <div className="bg-gray-350 dark:bg-gray-750 rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <span className="inline-flex">
                  <span className="absolute inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  1
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  2
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  3
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  4
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  5
                </h3>
              </div>
              <h3 className="text-blue-250 font-medium">Launch At</h3>
              <h3 className="inline-block text-customFullBlack dark:text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-customFullBlack dark:text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-purple-850 rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-white dark:bg-customDarkGrey rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-purple-850">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-customPurple font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-customFullBlack dark:text-white text-xl font-medium mb-2">
                Virtual Robot
              </h3>
              <div className="bg-gray-350 dark:bg-gray-750 rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <span className="inline-flex">
                  <span className="absolute inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  1
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  2
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  3
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  4
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  5
                </h3>
              </div>
              <h3 className="text-blue-250 font-medium">Launch At</h3>
              <h3 className="inline-block text-customFullBlack dark:text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-customFullBlack dark:text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-purple-850 rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-white dark:bg-customDarkGrey rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-purple-850">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-customPurple font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-customFullBlack dark:text-white text-xl font-medium mb-2">
                CoinMatch AI
              </h3>
              <div className="bg-gray-350 dark:bg-gray-750 rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <span className="inline-flex">
                  <span className="absolute inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  1
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  2
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  3
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  4
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  5
                </h3>
              </div>
              <h3 className="text-blue-250 font-medium">Launch At</h3>
              <h3 className="inline-block text-customFullBlack dark:text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-customFullBlack dark:text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-purple-850 rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-white dark:bg-customDarkGrey rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-purple-850">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-customPurple font-medium -translate-y-11 pl-32 mb-2">
                ETH
              </h3>
              <h3 className="text-customFullBlack dark:text-white text-xl font-medium mb-2">
                Ordinals Finance
              </h3>
              <div className="bg-gray-350 dark:bg-gray-750 rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <span className="inline-flex">
                  <span className="absolute inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  1
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  2
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  3
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  4
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  5
                </h3>
              </div>
              <h3 className="text-blue-250 font-medium">Launch At</h3>
              <h3 className="inline-block text-customFullBlack dark:text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-customFullBlack dark:text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-purple-850 rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-white dark:bg-customDarkGrey rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-purple-850">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-customPurple font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-customFullBlack dark:text-white text-xl font-medium mb-2">
                Virtual Robot
              </h3>
              <div className="bg-gray-350 dark:bg-gray-750 rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <span className="inline-flex">
                  <span className="absolute inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  1
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  2
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  3
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  4
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  5
                </h3>
              </div>
              <h3 className="text-blue-250 font-medium">Launch At</h3>
              <h3 className="inline-block text-customFullBlack dark:text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-customFullBlack dark:text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-purple-850 rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-white dark:bg-customDarkGrey rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-purple-850">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-customPurple font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-customFullBlack dark:text-white text-xl font-medium mb-2">
                CoinMatch AI
              </h3>
              <div className="bg-gray-350 dark:bg-gray-750 rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <span className="inline-flex">
                  <span className="absolute inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  1
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  2
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  3
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  4
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  5
                </h3>
              </div>
              <h3 className="text-blue-250 font-medium">Launch At</h3>
              <h3 className="inline-block text-customFullBlack dark:text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-customFullBlack dark:text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-purple-850 rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-white dark:bg-customDarkGrey rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-purple-850">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-customPurple font-medium -translate-y-11 pl-32 mb-2">
                ETH
              </h3>
              <h3 className="text-customFullBlack dark:text-white text-xl font-medium mb-2">
                Ordinals Finance
              </h3>
              <div className="bg-gray-350 dark:bg-gray-750 rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <span className="inline-flex">
                  <span className="absolute inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-gray-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  1
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-yellow-450 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  2
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-orange-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  3
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-rose-550 rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  4
                </h3>
                <span className="inline-flex">
                  <span className="absolute inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1 animate-ping" />
                  <span className="relative inline-block bg-customLightGreen rounded-sm py-1.5 px-1.5 mx-1" />
                </span>
                <h3 className="inline-block text-customFullBlack dark:text-white font-medium pr-3">
                  5
                </h3>
              </div>
              <h3 className="text-blue-250 font-medium">Launch At</h3>
              <h3 className="inline-block text-customFullBlack dark:text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-customFullBlack dark:text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-purple-850 rounded-md"
              >
                View Detail
              </Link>
            </div>
          </div>
          <div className="inline-flex gap-x-2 md:gap-x-2 lg:gap-x-2 xl:gap-x-2 -ml-3.5 md:ml-36 lg:ml-78 xl:ml-84 mb-4 md:mb-4 lg:mb-4 xl:mb-4">
            <Link
              href="/"
              className="bg-white dark:bg-customDarkGrey rounded-lg text-customFullBlack dark:text-white font-normal h-10 w-12 px-5 py-2 focus:ring-2 focus:ring-purple-850 focus:border-purple-850"
            >
              1
            </Link>
            <Link
              href="/"
              className="bg-white dark:bg-customDarkGrey rounded-lg text-customFullBlack dark:text-white font-normal h-10 w-12 px-5 py-2 focus:ring-2 focus:ring-purple-850 focus:border-purple-850"
            >
              2
            </Link>
            <Link
              href="/"
              className="bg-white dark:bg-customDarkGrey rounded-lg text-customFullBlack dark:text-white font-normal h-10 w-12 px-5 py-2 focus:ring-2 focus:ring-purple-850 focus:border-purple-850"
            >
              3
            </Link>
            <Link
              href="/audit-list"
              className="bg-white dark:bg-customDarkGrey rounded-lg text-customFullBlack dark:text-white font-normal h-10 px-11 py-2 focus:ring-2 focus:ring-purple-850 focus:border-purple-850"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
