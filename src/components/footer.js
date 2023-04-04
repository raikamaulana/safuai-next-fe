import React from "react";
import {FaEnvelope, } from "react-icons/fa";
import useDarkMode from "./useDarkMode";

import Image from "next/image";
export const Footer = () => {
    // const [colorTheme, setTheme] = useDarkMode();
    return (
        <>
            <section className="lg:px-0 lg:pt-10 md:pt-[60px] transition-all duration-500 bg-grey-100 dark:bg-customDark linear">
                <footer className="pt-24 pb-2 mx-auto lg:px-[88px] px-7 md:px-16">
                        <div className=" min-w-[110px] md:w-[400px] lg:w-[400px] mb-[49px]">
                            <div className="lg:flex gap-1 mb-3 lg:mb-0 md:flex ">
                                <div className="flex items-center">
                                    <Image src="/images/safuai-logo-dark.svg" width="60" height="60" alt="safuai" />
                                    <p className="font-semibold dark:text-white lg:ml-5 ml-3 text-2xl">SAFU AI</p>
                                </div>  
                                      <div className="lg:absolute md:absolute md:right-[110px] lg:right-[110px] mt-5 md:mt-3 lg:mt-0">
                                    <button className="bg-customGrey text-white w-[130px] h-[40px] lg:w-[187px] lg:h-[54px] rounded-lg font-semibold">Buy SAFUAI</button>
                                </div>
                            </div>
                                <div className="mt-[33px] block">
                                    <p className="dark:text-white text-lg">Protect your assets across any blockchain network with <span className="text-customPurple">SAFU.AI</span></p>
                                </div>
                        </div>
                    <div className="grid lg:grid-cols-5 sm:grid-cols-2 lg:gap-0 gap-y-6">
                        <div className="pl-1 lg:pl-0">
                            <h1 className="mb-[41px] text-2xl font-semibold text-black title-font dark:text-white">
                                Navigation
                            </h1>
                            <ul className="space-y-2 text-black dark:text-white">
                                <li>
                                    <a href="#" className="hover:underline">
                                        What is SAFU AI?
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Documents</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Teams</a>
                                </li>
                            </ul>
                        </div>
                        <div className="pl-1 md:pl-12 lg:pl-0">
                            <h2 className="mb-[41px] text-2xl font-semibold text-black title-font dark:text-white">
                                Services
                            </h2>
                            <ul className="space-y-2 text-black dark:text-white">
                                <li>
                                    <a href="#" className="hover:underline">Automated Audit</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Solidity AI Scan
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="pl-1 md:pl-0 lg:pl-0">
                            <h2 className="mb-[41px] text-2xl font-semibold text-black title-font dark:text-white">
                                Support SAFU AI
                            </h2>
                            <ul className="space-y-2 text-black dark:text-white">
                                <li>
                                    <a href="#" className="hover:underline">Telegram Group</a>
                                </li> 
                                <li>
                                    <a href="#" className="hover:underline">
                                        Telegram Channel
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className=" lg:absolute pl-1 md:pl-12 lg:right-[120px]">
                            <h2 className="mb-[41px] text-2xl font-semibold text-black title-font dark:text-white">
                                Keep in touch
                            </h2>
                            <ul className="space-y-5 text-black dark:text-white">
                                <li>
                                    <a href="#" className="inline-flex hover:underline">
                                        <FaEnvelope className="w-4 h-4 mr-2 mt-[28px] text-customPurple" /> For Support 
                                        <br />
                                        exemple@safuai.com
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex hover:underline">
                                        <FaEnvelope className="w-4 h-4 mr-2 mt-[28px] text-customPurple" /> Google Mail
                                        <br />
                                        safuai@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="lg:mt-32 md:mt-24 mt-16 w-full flex flex-col items-center lg:py-6 py-4 space-y-5 lg:flex-row lg:space-y-0 bg-customGrey lg:mr-0">
                    <nav className="flex lg:pl-[88px] flex-col items-center justify-center text-white lg:flex-row">
                    <p className="text-center px-2 lg:px-0">Copyright © 2022 Blocksafu. All rights reserved.</p>
                        <div className="lg:absolute mt-2 lg:mt-0 lg:right-[62px] px-2 lg:px-0 ">
                            <a href="#" className="lg:mr-[49px] mr-[20px] hover:underline">Term & Condition</a>
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </div>
                    
                    </nav>
                </div>
            </section>
        </>
    );
};
