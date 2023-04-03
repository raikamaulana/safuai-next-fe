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
const AuditDetail = dynamic(
  () => import("@/components/AuditDetail").then((mod) => mod.AuditDetail),
  {
    ssr: false,
  }
);

export default function auditList() {
  return (
    <>
      <Header />
      {/* <AuditDetail /> */}
      <div className="bg-[#1B1F28] pt-32">
        <div className="max-w-max mx-auto">
          <h3 className="text-lg text-white font-medium mb-4 md:mb-4 lg:mb-4 xl:mb-4">
            SAFU AI{" "}
            <span className="text-lg text-[#D171FF] font-medium">
              Audit List
            </span>
          </h3>
          <h3 className="inline-flex bg-gradient-to-b from-[#121F43] to-[#1B1F29] rounded-lg text-white mb-4 md:mb-4 lg:mb-8 xl:mb-8 pt-2 md:pt-2 lg:pt-3 xl:pt-3 pl-5 md:pl-5 lg:pl-5 xl:pl-5 h-10 md:h-10 lg:h-12 xl:h-12 w-64 md:w-64 lg:w-72 xl:w-88 ring-2 ring-[#5B4C7C]">
            Search Project
          </h3>
          <h3 className="md:inline-flex lg:inline-flex xl:inline-flex bg-gradient-to-b from-[#142044] to-[#1A2348] rounded-lg text-white mb-4 md:mb-0 lg:mb-0 xl:mb-0 ml-0 md:ml-1.5 lg:ml-3 xl:ml-3 pl-2 md:pl-2 lg:pl-2 xl:pl-2 py-2 md:py-2 lg:py-3 xl:py-3 w-64 md:w-36 lg:w-36 xl:w-36 ring-2 ring-[#5B4C7C]">
            Token Name
          </h3>
          <div className="lg:inline-flex xl:inline-flex md:grid md:grid-cols-4 md:mb-8">
            <h3 className="grid grid-cols-4 md:grid md:grid-cols-2 bg-gradient-to-b from-[#142044] to-[#1A2348] rounded-lg text-white mb-4 md:mb-0 lg:mb-0 xl:mb-0 ml-0 md:ml-0 lg:ml-3 xl:ml-3 pl-3 md:pl-3 lg:pl-3 xl:pl-3 py-2 md:py-2 lg:py-3 xl:py-3 w-64 md:w-36 lg:w-40 xl:w-44 ring-2 ring-[#5B4C7C]">
              Network
              <div className="lg:pl-4 xl:pl-4">
                <Image
                  src="/images/network/coinDigital.svg"
                  width="48"
                  height="10"
                  alt="Safu AI's Coin Digital Logo"
                />
              </div>
            </h3>
            <h3 className="inline-flex bg-gradient-to-b from-[#142044] to-[#1A2348] rounded-lg text-white ml-0 md:ml-1 lg:ml-3 xl:ml-3 pl-2 md:pl-2 lg:pl-2 xl:pl-2 py-2 md:py-2 lg:py-3 xl:py-3 w-36 md:w-36 lg:w-28 xl:w-36 ring-2 ring-[#5B4C7C]">
              Time
            </h3>
            <h3 className="inline-flex bg-gradient-to-b from-[#142044] to-[#1A2348] rounded-lg text-white mb-8 md:mb-0 lg:mb-0 xl:mb-0 ml-2 md:ml-2 lg:ml-3 xl:ml-3 pl-5 md:pl-5 lg:pl-6 xl:pl-7 py-2 md:py-2 lg:py-3 xl:py-3 w-12 md:w-12 lg:w-14 xl:w-16 ring-2 ring-[#5B4C7C]">
              9
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 md:gap-x-5 lg:gap-x-5 xl:gap-x-20 gap-y-5 md:gap-y-5 lg:gap-y-5 xl:gap-y-10 mb-4 md:mb-4 lg:mb-4 xl:mb-4">
            <div className="bg-[#26293A] rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-[#5B4C7C]">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-[#D171FF] font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-white text-xl font-medium mb-2">
                Virtual Robot
              </h3>
              <div className="bg-[#37384D] rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <div className="inline-block bg-[#D9D9D9] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">1</h3>
                <div className="inline-block bg-[#FFEE51] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">2</h3>
                <div className="inline-block bg-[#FB8F03] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">3</h3>
                <div className="inline-block bg-[#FE1A64] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium lg:pr-3 xl:pr-3">
                  4
                </h3>
                <div className="inline-block bg-[#38F982] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">5</h3>
              </div>
              <h3 className="text-[#7894EA] font-medium">Launch At</h3>
              <h3 className="inline-block text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-[#5B4C7C] rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-[#26293A] rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-[#5B4C7C]">
              <div className="inline-block">
                <Image
                  src="/images/partnership/coinmatch-ai.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-[#D171FF] font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-white text-xl font-medium mb-2">
                CoinMatch AI
              </h3>
              <div className="bg-[#37384D] rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <div className="inline-block bg-[#D9D9D9] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">1</h3>
                <div className="inline-block bg-[#FFEE51] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">2</h3>
                <div className="inline-block bg-[#FB8F03] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">3</h3>
                <div className="inline-block bg-[#FE1A64] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium lg:pr-3 xl:pr-3">
                  4
                </h3>
                <div className="inline-block bg-[#38F982] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">5</h3>
              </div>
              <h3 className="text-[#7894EA] font-medium">Launch At</h3>
              <h3 className="inline-block text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-[#5B4C7C] rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-[#26293A] rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-[#5B4C7C]">
              <div className="inline-block">
                <Image
                  src="/images/partnership/ordinals-finance.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-[#D171FF] font-medium -translate-y-11 pl-32 mb-2">
                ETH
              </h3>
              <h3 className="text-white text-xl font-medium mb-2">
                Ordinals Finance
              </h3>
              <div className="bg-[#37384D] rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <div className="inline-block bg-[#D9D9D9] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">1</h3>
                <div className="inline-block bg-[#FFEE51] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">2</h3>
                <div className="inline-block bg-[#FB8F03] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">3</h3>
                <div className="inline-block bg-[#FE1A64] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium lg:pr-3 xl:pr-3">
                  4
                </h3>
                <div className="inline-block bg-[#38F982] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">5</h3>
              </div>
              <h3 className="text-[#7894EA] font-medium">Launch At</h3>
              <h3 className="inline-block text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-[#5B4C7C] rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-[#26293A] rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-[#5B4C7C]">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-[#D171FF] font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-white text-xl font-medium mb-2">
                Virtual Robot
              </h3>
              <div className="bg-[#37384D] rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <div className="inline-block bg-[#D9D9D9] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">1</h3>
                <div className="inline-block bg-[#FFEE51] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">2</h3>
                <div className="inline-block bg-[#FB8F03] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">3</h3>
                <div className="inline-block bg-[#FE1A64] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium lg:pr-3 xl:pr-3">
                  4
                </h3>
                <div className="inline-block bg-[#38F982] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">5</h3>
              </div>
              <h3 className="text-[#7894EA] font-medium">Launch At</h3>
              <h3 className="inline-block text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-[#5B4C7C] rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-[#26293A] rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-[#5B4C7C]">
              <div className="inline-block">
                <Image
                  src="/images/partnership/coinmatch-ai.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-[#D171FF] font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-white text-xl font-medium mb-2">
                CoinMatch AI
              </h3>
              <div className="bg-[#37384D] rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <div className="inline-block bg-[#D9D9D9] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">1</h3>
                <div className="inline-block bg-[#FFEE51] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">2</h3>
                <div className="inline-block bg-[#FB8F03] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">3</h3>
                <div className="inline-block bg-[#FE1A64] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium lg:pr-3 xl:pr-3">
                  4
                </h3>
                <div className="inline-block bg-[#38F982] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">5</h3>
              </div>
              <h3 className="text-[#7894EA] font-medium">Launch At</h3>
              <h3 className="inline-block text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-[#5B4C7C] rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-[#26293A] rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-[#5B4C7C]">
              <div className="inline-block">
                <Image
                  src="/images/partnership/ordinals-finance.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-[#D171FF] font-medium -translate-y-11 pl-32 mb-2">
                ETH
              </h3>
              <h3 className="text-white text-xl font-medium mb-2">
                Ordinals Finance
              </h3>
              <div className="bg-[#37384D] rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <div className="inline-block bg-[#D9D9D9] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">1</h3>
                <div className="inline-block bg-[#FFEE51] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">2</h3>
                <div className="inline-block bg-[#FB8F03] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">3</h3>
                <div className="inline-block bg-[#FE1A64] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium lg:pr-3 xl:pr-3">
                  4
                </h3>
                <div className="inline-block bg-[#38F982] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">5</h3>
              </div>
              <h3 className="text-[#7894EA] font-medium">Launch At</h3>
              <h3 className="inline-block text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-[#5B4C7C] rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-[#26293A] rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-[#5B4C7C]">
              <div className="inline-block">
                <Image
                  src="/images/partnership/virtualrobot.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-[#D171FF] font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-white text-xl font-medium mb-2">
                Virtual Robot
              </h3>
              <div className="bg-[#37384D] rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <div className="inline-block bg-[#D9D9D9] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">1</h3>
                <div className="inline-block bg-[#FFEE51] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">2</h3>
                <div className="inline-block bg-[#FB8F03] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">3</h3>
                <div className="inline-block bg-[#FE1A64] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium lg:pr-3 xl:pr-3">
                  4
                </h3>
                <div className="inline-block bg-[#38F982] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">5</h3>
              </div>
              <h3 className="text-[#7894EA] font-medium">Launch At</h3>
              <h3 className="inline-block text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-[#5B4C7C] rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-[#26293A] rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-[#5B4C7C]">
              <div className="inline-block">
                <Image
                  src="/images/partnership/coinmatch-ai.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-[#D171FF] font-medium -translate-y-11 pl-32 mb-2">
                BSC
              </h3>
              <h3 className="text-white text-xl font-medium mb-2">
                CoinMatch AI
              </h3>
              <div className="bg-[#37384D] rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <div className="inline-block bg-[#D9D9D9] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">1</h3>
                <div className="inline-block bg-[#FFEE51] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">2</h3>
                <div className="inline-block bg-[#FB8F03] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">3</h3>
                <div className="inline-block bg-[#FE1A64] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium lg:pr-3 xl:pr-3">
                  4
                </h3>
                <div className="inline-block bg-[#38F982] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">5</h3>
              </div>
              <h3 className="text-[#7894EA] font-medium">Launch At</h3>
              <h3 className="inline-block text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-[#5B4C7C] rounded-md"
              >
                View Detail
              </Link>
            </div>
            <div className="bg-[#26293A] rounded-xl h-64 w-64 px-4 py-6 ring-2 ring-[#5B4C7C]">
              <div className="inline-block">
                <Image
                  src="/images/partnership/ordinals-finance.svg"
                  width="60"
                  height="0"
                  alt="Virtual Robot Logo"
                />
              </div>
              <h3 className="inline-block text-[#D171FF] font-medium -translate-y-11 pl-32 mb-2">
                ETH
              </h3>
              <h3 className="text-white text-xl font-medium mb-2">
                Ordinals Finance
              </h3>
              <div className="bg-[#37384D] rounded-md h-8 pl-3.5 pr-0 py-1 mb-4">
                <div className="inline-block bg-[#D9D9D9] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">1</h3>
                <div className="inline-block bg-[#FFEE51] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">2</h3>
                <div className="inline-block bg-[#FB8F03] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">3</h3>
                <div className="inline-block bg-[#FE1A64] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium lg:pr-3 xl:pr-3">
                  4
                </h3>
                <div className="inline-block bg-[#38F982] rounded-sm py-1.5 px-1.5 mx-1" />
                <h3 className="inline-block text-white font-medium pr-3">5</h3>
              </div>
              <h3 className="text-[#7894EA] font-medium">Launch At</h3>
              <h3 className="inline-block text-white font-medium">
                2023-10-10
              </h3>
              <Link
                href="/"
                className="inline-block text-white font-medium px-1 py-1 ml-32 -translate-y-10 ring-2 ring-[#5B4C7C] rounded-md"
              >
                View Detail
              </Link>
            </div>
          </div>
          <div className="inline-flex gap-x-2 md:gap-x-2 lg:gap-x-2 xl:gap-x-2 -ml-3.5 md:ml-36 lg:ml-64 xl:ml-80 mb-4 md:mb-4 lg:mb-4 xl:mb-4">
            <Link
              href="/"
              className="bg-[#26293A] rounded-lg text-white font-normal h-10 w-12 px-5 py-2 ring-2 ring-[#5B4C7C]"
            >
              1
            </Link>
            <Link
              href="/"
              className="bg-[#26293A] rounded-lg text-white font-normal h-10 w-12 px-5 py-2 ring-2 ring-[#5B4C7C]"
            >
              2
            </Link>
            <Link
              href="/"
              className="bg-[#26293A] rounded-lg text-white font-normal h-10 w-12 px-5 py-2 ring-2 ring-[#5B4C7C]"
            >
              3
            </Link>
            <Link
              href="/"
              className="bg-[#26293A] rounded-lg text-white font-normal h-10 px-11 py-2 ring-2 ring-[#5B4C7C]"
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
