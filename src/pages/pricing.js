import React from "react";
import dynamic from "next/dynamic";
// import Footer from "../components/footer"
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

const hrStyle = {
  color: "#535353",
  background: "#535353",
};

export default function pricing() {
  return (
    <>
      <Header />
      <section className="dark:bg-customDark bg-customWhite w-full transition-all duration-500 linear">
        <div className="pt-30 md:px-12 lg:px-24 pl-0 pb-3">
          <div className="mb-12">
            <p className="font-semibold text-lg dark:text-white text-center mb-3">
              Our <span className="text-customPurple">Pricing</span>
            </p>
            <p className="text-center px-4 dark:text-white">
              Best price for high quality service, audit, kyc, etc
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3 md:gap-16 gap-9 mx-6 lg:mx-0">
            <div className="mx-auto col-span-1 row-span-1 md:col-span-1 md:row-span-1 md:mx-auto md:mr-0 max-w-[285px] max-h-[470px] lg:ml-auto lg:mr-0">
              <div className="p-4 duration-500 border rounded-lg dark:border-customPurple border-white dark:bg-transparent bg-white">
                <p className="dark:text-white w-32 leading-5">Audit Token</p>
                <p className="dark:text-white leading-5">
                  {" "}
                  - Pinksale Generated Contract
                </p>
                <p className="text-4xl mb-3 dark:text-white">$50</p>
                <div className="flex mb-3">
                  <svg width="11" height="11" className="animate-ping">
                    <ellipse cx="5" cy="5" rx="5" ry="5" fill="#D171FF" />
                  </svg>
                  <svg width="10" height="10" className="absolute">
                    <ellipse
                      cx="4.5"
                      cy="4.5"
                      rx="4.5"
                      ry="4.5"
                      fill="#D171FF"
                    />
                  </svg>
                  <p className="absolute dark:text-white -mt-2 ml-7">
                    Discount From <span className="text-customRed">$100</span>
                  </p>
                </div>
                <div className="flex mb-5">
                  <svg
                    width="10"
                    height="10"
                    className="mt-4 mr-5 animate-ping"
                  >
                    <rect x="0" y="0" width="10" height="10" fill="#D171FF" />
                  </svg>
                  <svg width="20" height="20" className="mt-4 mr-5 absolute">
                    <rect x="0" y="0" width="9" height="9" fill="#D171FF" />
                  </svg>
                  <p className="dark:text-white  w-16">Fast Request</p>
                  <p className="dark:text-white w-16 ml-5">Click Here</p>
                  <p className="dark:text-white my-auto">@safu.ai</p>
                </div>
                <p className="mb-4 dark:text-white leading-5">
                  Pricing (if using Pinksale Generated Contract)
                </p>
                <div className="bg-customGrey h-px mb-4">
                  <hr className="text-red-400 hidden my-4" />
                </div>
                <ul className="mb-6">
                  <li className="dark:text-white">High Quality Audit</li>
                  <li className="dark:text-white">Free AMA</li>
                  <li className="dark:text-white">
                    Free Token Launch Consulting
                  </li>
                  <li className="dark:text-white">Audit Badge On Pinksale</li>
                </ul>
                <div className="flex">
                  <button className="w-40 px-0 py-0 font-normal border border-customPurple dark:text-white rounded-lg mr-4">
                    Request Audit
                  </button>
                  <button className="px-4 py-3.5 font-normal border border-customPurple dark:text-white rounded-lg">
                    Info
                  </button>
                </div>
              </div>
            </div>
            <div className="duration-500 border rounded-lg dark:border-customPurple border-white dark:bg-transparent bg-white mx-auto col-span-1 row-span-1 md:col-span-1 md:row-span-1 w-72 md:mx-auto md:ml-0 lg:mx-auto">
              <div className="p-4">
                <p className="dark:text-white w-32 leading-5">Audit Token</p>
                <p className="dark:text-white leading-5">- Custom Contract</p>
                <p className="text-4xl mb-3 dark:text-white">$100</p>
                <div className="flex mb-3">
                  <svg width="11" height="11" className="animate-ping">
                    <ellipse cx="5" cy="5" rx="5" ry="5" fill="#D171FF" />
                  </svg>
                  <svg width="10" height="10" className="absolute">
                    <ellipse
                      cx="4.5"
                      cy="4.5"
                      rx="4.5"
                      ry="4.5"
                      fill="#D171FF"
                    />
                  </svg>
                  <p className="absolute dark:text-white -mt-2 ml-7">
                    Discount From <span className="text-customRed">$150</span>
                  </p>
                </div>
                <div className="flex mb-5 relative">
                  <svg
                    width="10"
                    height="10"
                    className="mt-4 mr-5 animate-ping"
                  >
                    <rect x="0" y="0" width="10" height="10" fill="#D171FF" />
                  </svg>
                  <svg width="20" height="20" className="mt-4 mr-5 absolute">
                    <rect x="0" y="0" width="9" height="9" fill="#D171FF" />
                  </svg>
                  <p className="dark:text-white  w-16">Fast Request</p>
                  <p className="dark:text-white w-16 ml-5">Click Here</p>
                  <p className="dark:text-white my-auto">@safu.ai</p>
                </div>
                <p className="mb-8 dark:text-white">
                  Pricing (if using Custom Contract)
                </p>
                <div className="bg-customGrey h-px mb-4">
                  <hr className="text-red-400 hidden my-4" />
                </div>
                <ul className="mb-6">
                  <li className="dark:text-white">High Quality Audit</li>
                  <li className="dark:text-white">Free AMA</li>
                  <li className="dark:text-white">
                    Free Token Launch Consulting
                  </li>
                  <li className="dark:text-white">Audit Badge On Pinksale</li>
                  <li className="dark:text-white">Free 2X appeal</li>
                </ul>
                <div className="flex">
                  <button className="w-40 px-0 py-0 font-normal border border-customPurple dark:text-white rounded-lg mr-4">
                    Request Audit
                  </button>
                  <button className="px-4 py-3.5 font-normal border border-customPurple dark:text-white rounded-lg">
                    Info
                  </button>
                </div>
              </div>
            </div>
            <div className="mx-auto lg:col-span-1 lg:row-span-1 md:col-span-2 md:row-span-1 md:mx-auto lg:mx-3 w-72 ">
              <div className="p-4 duration-500 border rounded-lg dark:border-customPurple border-white dark:bg-transparent bg-white">
                <p className="dark:text-white w-32 leading-5">Write Contract</p>
                <p className="dark:text-white leading-5">- Request Contract</p>
                <p className="text-4xl mb-3 dark:text-white">$150</p>
                <div className="flex mb-3">
                  <svg width="11" height="11" className="animate-ping">
                    <ellipse cx="5" cy="5" rx="5" ry="5" fill="#D171FF" />
                  </svg>
                  <svg width="10" height="10" className="absolute">
                    <ellipse
                      cx="4.5"
                      cy="4.5"
                      rx="4.5"
                      ry="4.5"
                      fill="#D171FF"
                    />
                  </svg>
                  <p className="absolute dark:text-white -mt-2 ml-7">
                    Discount From <span className="text-customRed">$200</span>
                  </p>
                </div>
                <div className="flex mb-5">
                  <svg
                    width="10"
                    height="10"
                    className="mt-4 mr-5 animate-ping"
                  >
                    <rect x="0" y="0" width="10" height="10" fill="#D171FF" />
                  </svg>
                  <svg width="20" height="20" className="mt-4 mr-5 absolute">
                    <rect x="0" y="0" width="9" height="9" fill="#D171FF" />
                  </svg>
                  <p className="dark:text-white  w-16">Fast Request</p>
                  <p className="dark:text-white w-16 ml-5">Click Here</p>
                  <p className="dark:text-white my-auto">@safu.ai</p>
                </div>
                <p className="mb-9 dark:text-white">
                  Pricing (if using Custom Contract)
                </p>
                <div className="bg-customGrey h-px mb-4">
                  <hr className="text-red-400 hidden my-4" />
                </div>
                <ul className="mb-6">
                  <li className="dark:text-white">Free AMA</li>
                  <li className="dark:text-white">
                    Free Token Launch Consulting
                  </li>
                  <li className="dark:text-white">Audit Badge On Pinksale</li>
                  <li className="dark:text-white">Free 2X appeal</li>
                </ul>
                <div className="flex">
                  <button className="w-40 px-0 py-0 font-normal border border-customPurple dark:text-white rounded-lg mr-4">
                    Request Audit
                  </button>
                  <button className="px-4 py-3.5 font-normal border border-customPurple dark:text-white rounded-lg">
                    Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
