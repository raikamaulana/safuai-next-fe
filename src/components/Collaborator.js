import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Collaborator = () => {
  return (
    <div className="dark:bg-[#1B1F28] bg-[#E8ECEF] transition-all duration-500 flex justify-center overflow-hidden">
      <div>
        <div className="pt-5 mb-48 mx-auto">
          <Image
            src="/images/collaborator/connectlight.svg"
            width="480"
            height="480"
            className="dark:hidden w-72 md:w-96 mx-auto"
            alt=""
          />
          <Image 
          src="/images/collaborator/connectdark.svg"
          width="480"
          height="480"
          className="dark:block w-72 md:w-96 hidden mx-auto"
          alt="" />
        </div>
        <div className="m-14 md:p-14 -mt-40 grid lg:grid-cols-4 lg:gap-5 grid-cols-2 gap-5">
          <Link href="/" className="mx-auto lg:ml-24 md:ml-0 ml-0">
            <Image
              src="/images/collaborator/coingeckolight.svg"
              width="200"
              height="200"
              className="dark:hidden w-88 md:w-48 md:-ml-1 lg:w-full"
              alt=""
            />
            <Image
              src="/images/collaborator/coingeckodark.svg"
              width="200"
              height="200"
              className="dark:block w-72 md:w-48 lg:w-full hidden"
              alt=""
            />
          </Link>
          <Link href="/" className="mx-auto">
            <Image
              src="/images/collaborator/dexviewlight.svg"
              width="200"
              height="200"
              className="dark:hidden w-72 md:w-48 lg:w-40"
              alt=""
            />
            <Image
              src="/images/collaborator/dexviewdark.svg"
              width="200"
              height="200"
              className="hidden w-72 md:w-48 lg:w-40 dark:block"
              alt=""
            />
          </Link>
          <Link href="/" className="mx-auto lg:mr-10 mr-0">
            <Image
              src="/images/collaborator/coinmarketlight.svg"
              width="300"
              height="300"
              className="dark:hidden w-96 md:w-72 md:-ml-2 lg:w-56"
              alt=""
            />
            <Image
              src="/images/collaborator/coinmarketdark.svg"
              width="300"
              height="300"
              className="hidden w-96 md:w-72 lg:w-56 dark:block"
              alt=""
            />
          </Link>
          <Link href="/" className="mx-auto lg:mr-20 md:mr-14 ">
            <Image
              src="/images/collaborator/pinksalelight.svg"
              width="200"
              height="200"
              className="dark:hidden w-36 md:w-40 lg:w-48 lg:-ml-10 lg:-mt-2 -ml-5 md:mr-10 -mt-2 md:mt-1"
              alt=""
            />
            <Image
              src="/images/collaborator/pinksaledark.svg"
              width="200"
              height="200"
              className="hidden dark:block w-96 md:w-48 lg:w-48 lg:-ml-5 lg:-mt-1 -ml-0 md:-mr-2 -mt-2 md:mt-1"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
