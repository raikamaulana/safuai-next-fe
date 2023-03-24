import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Link from "next/link";
import Image from "next/image";

const HalfSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings} className="w-fit">
      <Link href="/security-audit">
        <Image width="608" height="235" src="/images/banner/banner-audit.webp" alt="security-audit" />
      </Link>
      <Link href="/kyc">
        <Image width="608" height="235" src="/images/banner/banner-kyc.webp" alt="kyc" />
      </Link>
      <Link href="/bounty-scammers">
        <Image width="608" height="235" src="/images/banner/banner-bounty.webp" alt="bounty-scammers" />
      </Link>
      <Link href="/smart-contract-generator">
        <Image width="608" height="235" src="/images/banner/banner-sc-generator.webp" alt="smart-contract-generator" />
      </Link>
    </Slider>
  );
}

export function Banner() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="px-6 py-16 pt-48 md:px-16 lg:px-28">
        <div className="grid items-center w-full grid-col-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="w-full" style={{ maxWidth: '95vw' }}>
            <img width="547" height="528" src="/images/pattern/circle-pattern.webp" className="absolute -mt-48 -ml-28 md:-mt-96 lg:-mt-96" alt="" />
            <div className="absolute -mt-10 md:-mt-32 lg:-mt-32">
              <div className="mb-6 text-blue-500">
                Don't give a chance for scammer
              </div>
              <h1 className="w-10/12 mb-6 text-2xl font-bold tracking-wide text-black whitespace-normal dark:text-white md:w-8/12 lg:w-7/12">
                Secure your blockchain ecosystem
                with all in one security solutions
              </h1>
              <p className="w-10/12 mb-8 text-gray-700 dark:text-gray-500 md:w-8/12 lg:w-7/12">Protect your assets across any blockchain network  <br />
                with our multi-chain support and advanced security features.</p>
              <div className="flex flex-row gap-3">
                <a href="https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0x32bFd701655EDF95809EaA5e525F0024ea571267" target="_blank" rel="noreferrer" className="px-6 py-2.5 text-white bg-blue-500 border border-blue-500 rounded-md">Buy BSAFU</a>
                <Link href="/request" className="px-6 py-2.5 text-gray-900 dark:text-white dark:bg-gray-900 dark:border-gray-800 bg-white border border-gray-300 rounded-md">Products</Link>
              </div>
            </div>
          </div>

          {/* For Banner Section */}
          <div className="w-full mt-80 lg:mt-0 md:mt-0" style={{ width: '100%', maxWidth: '88vw' }}>
            <HalfSlider />
          </div>
        </div>

        <div className="overflow-x-scroll">
          <div className="flex justify-between w-full gap-6 mt-16 flex-nowrap">
            <a aria-label="pinksale" href="https://www.pinksale.finance/launchpad/0xa4E500A143877F10Ac20973d02f0ECc7853eD4cd?chain=BSC">
              <Image width="134" height="32" src="/images/partnership/pinksale.png" alt="pinksale" />
            </a>
            <a aria-label="dexview" href="https://www.dexview.com/bsc/0x32bFd701655EDF95809EaA5e525F0024ea571267">
              <Image width="136" height="32" src="/images/partnership/dexview.png" alt="dexview" />
            </a>
            <a aria-label="coinmarketcap" href="https://coinmarketcap.com/currencies/blocksafu/">
              <Image width="187" height="32" src="/images/partnership/coinmarketcap.png" alt="blocksafu" />
            </a>
            <a aria-label="coingecko" href="https://www.coingecko.com/en/coins/blocksafu">
              <Image width="138" height="32" src="/images/partnership/coingecko.png" alt="coingecko" />
            </a>
            <a aria-label="dinodapps" href="https://dinodapps.com/">
              <Image width="146" height="32" src="/images/partnership/dinodapps.png" alt="dinodapps" />
            </a>
            <a aria-label="webooswap" href="https://webooswap.com">
              <Image width="140" height="32" src="/images/partnership/webooswap.png" alt="webooswap" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
