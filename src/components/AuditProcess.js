import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  RiApps2Line,
  RiArrowRightCircleFill,
  RiCodeLine,
  RiFileShield2Line,
  RiMoneyDollarCircleLine,
  RiUserSearchLine,
} from "react-icons/ri";

export const AuditProcess = () => {
  return (
    <section className="w-full">
      <div className="pb-12 bg-white dark:bg-gray-800">
        <div className="px-6 pt-8 pb-4 md:px-16 lg:px-28">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Our <span className="text-blue-500">Service</span>
          </h1>
          <p className="my-4 text-gray-700 dark:text-gray-200">
            Powerful blockchain solutions that keep your assets safe
          </p>
          <div className="mt-6">
            <div className="flex flex-col md:flex-row lg:flex-row">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
                <div className="p-8 bg-white border border-gray-500 dark:border-gray-700 dark:bg-gray-900 rounded-2xl">
                  <Image
                    width="64"
                    height="64"
                    className="absolute w-16 h-16 ml-60"
                    src="/images/pattern/star.webp"
                    alt=""
                  />
                  <div className="flex items-center justify-center text-white bg-blue-500 rounded-lg w-14 h-14">
                    <RiFileShield2Line className="w-6 h-6" />
                  </div>
                  <h1 className="mt-5 text-xl font-semibold tracking-wide text-blue-500">
                    Blocksafu <br /> Audit
                  </h1>
                  <p className="mt-5 tracking-wide text-gray-700 dark:text-gray-400">
                    Protect your blockchain assets with Solidity smart contract
                    auditing
                  </p>
                  <div className="flex flex-row items-center justify-between mt-6">
                    <Link
                      href="/request"
                      className="font-semibold text-gray-900"
                    >
                      Request Now
                    </Link>
                    <RiArrowRightCircleFill className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div className="p-8 bg-white border border-gray-500 dark:border-gray-700 dark:bg-gray-900 rounded-2xl">
                  <Image
                    width="64"
                    height="64"
                    className="absolute w-16 h-16 ml-60"
                    src="/images/pattern/star.webp"
                    alt=""
                  />
                  <div className="flex items-center justify-center text-white bg-blue-500 rounded-lg w-14 h-14">
                    <RiUserSearchLine className="w-6 h-6" />
                  </div>
                  <h1 className="mt-5 text-xl font-semibold tracking-wide text-blue-500">
                    Blocksafu <br /> KYC
                  </h1>
                  <p className="mt-5 tracking-wide text-gray-700 dark:text-gray-400">
                    Secure investor trust with our comprehensive KYC
                    verification process
                  </p>
                  <div className="flex flex-row items-center justify-between mt-6">
                    <Link
                      href="/request"
                      className="font-semibold text-gray-900"
                    >
                      Request Now
                    </Link>
                    <RiArrowRightCircleFill className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div className="hidden p-8 bg-white dark:bg-gray-800 md:block lg:block"></div>
                <div className="p-8 bg-white border border-gray-500 dark:border-gray-700 dark:bg-gray-900 rounded-2xl">
                  <Image
                    width="64"
                    height="64"
                    className="absolute w-16 h-16 ml-60"
                    src="/images/pattern/star.webp"
                    alt=""
                  />
                  <div className="flex items-center justify-center text-white bg-blue-500 rounded-lg w-14 h-14">
                    <RiMoneyDollarCircleLine className="w-6 h-6" />
                  </div>
                  <h1 className="mt-5 text-xl font-semibold tracking-wide text-blue-500">
                    Bounty <br /> Scammer
                  </h1>
                  <p className="mt-5 tracking-wide text-gray-700 dark:text-gray-400">
                    Empowering the <br /> community to trace crypto scammers
                  </p>
                  <div className="flex flex-row items-center justify-between mt-6">
                    <Link
                      href="/request"
                      className="font-semibold text-gray-900"
                    >
                      Request Now
                    </Link>
                    <RiArrowRightCircleFill className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div className="p-8 bg-white border border-gray-500 dark:border-gray-700 dark:bg-gray-900 rounded-2xl">
                  <Image
                    width="64"
                    height="64"
                    className="absolute w-16 h-16 ml-60"
                    src="/images/pattern/star.webp"
                    alt=""
                  />
                  <div className="flex items-center justify-center text-white bg-blue-500 rounded-lg w-14 h-14">
                    <RiCodeLine className="w-6 h-6" />
                  </div>
                  <h1 className="mt-5 text-xl font-semibold tracking-wide text-blue-500">
                    Smart Contract Generator
                  </h1>
                  <p className="mt-5 tracking-wide text-gray-700 dark:text-gray-400">
                    Transform your idea into reality with our Solidity contract
                    generator
                  </p>
                  <div className="flex flex-row items-center justify-between mt-6">
                    <Link
                      href="/request"
                      className="font-semibold text-gray-900"
                    >
                      Request Now
                    </Link>
                    <RiArrowRightCircleFill className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
                <div className="p-8 bg-white border border-gray-500 dark:border-gray-700 dark:bg-gray-900 rounded-2xl">
                  <Image
                    width="64"
                    height="64"
                    className="absolute w-16 h-16 ml-60"
                    src="/images/pattern/star.webp"
                    alt=""
                  />
                  <div className="flex items-center justify-center text-white bg-blue-500 rounded-lg w-14 h-14">
                    <RiApps2Line className="w-6 h-6" />
                  </div>
                  <h1 className="mt-5 text-xl font-semibold tracking-wide text-blue-500">
                    Create dApps <br /> Platform
                  </h1>
                  <p className="mt-5 tracking-wide text-gray-700 dark:text-gray-400">
                    Build your decentralized future with our powerful DApp
                    creation platform
                  </p>
                  <div className="flex flex-row items-center justify-between mt-6">
                    <Link
                      href="/request"
                      className="font-semibold text-gray-900"
                    >
                      Request Now
                    </Link>
                    <RiArrowRightCircleFill className="w-8 h-8 text-blue-500" />
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                <Image
                  width="449"
                  height="315"
                  src="/images/pattern/globe.webp"
                  className="absolute -ml-36"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="p-12 mt-16 bg-blue-500 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="relative w-full mb-24 lg:mb-0 md:mb-0">
                <div className="mb-10 text-2xl tracking-wider text-white">
                  Experience the highest level of security with our audit
                  service, powered by a comprehensive testing process, manual
                  review, and dynamic testing across multiple networks.
                </div>
                <Link
                  href="/request"
                  className="relative px-5 py-3 mt-4 font-semibold text-black bg-white rounded-lg"
                >
                  Request Audit
                </Link>
              </div>
              <div className="items-end ml-12 text-end">
                <Image
                  width="64"
                  height="64"
                  className="absolute w-48 h-auto -mt-16 ml-18 md:-mt-24 lg:-mt-24 md:ml-72 lg:ml-72 md:w-80 lg:w-80"
                  src="/images/pattern/cta.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
