import React, {
  Fragment,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaGithub,
  FaTelegram,
  FaTimes,
  FaTwitter,
  FaHome,
  FaBullhorn,
  FaHandHolding,
  FaBars,
  FaAngleDown,
  FaArrowRight,
  FaEnvelope,
  FaUserPlus,
  FaArrowCircleUp,
  FaExternalLinkAlt,
  FaBell,
  FaIdCard,
  FaClipboardList,
  FaSearchLocation,
  FaShieldAlt,
  FaWordpress,
  FaQuestion,
  FaInfo,
  FaUsers,
  FaUserCog,
  FaLock,
  FaDollarSign,
} from "react-icons/fa";
import { Popover, Transition, Menu } from "@headlessui/react";
import { Context } from "../Store";
import { useWeb3React, useDispatch } from "@web3-react/core";
import { injected, walletconnect } from "../libs/ConnectorWeb3";
import { useEagerConnect, useInactiveListener } from "../hooks/hooks";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import { getAppByChainId, getEnv } from "../libs/Env";
import useDarkMode from "./useDarkMode";
import { BigNumber } from "bignumber.js";
import { IoWallet } from "react-icons/io5";
import {
  RiFileCopy2Line,
  RiFilePdfFill,
  RiFilePdfLine,
  RiGalleryFill,
} from "react-icons/ri";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Image from "next/image";
import WalletLink from "walletlink";
import { providers, utils } from "ethers";

const solutions = [
  {
    name: "Home",
    description: "Farm Homepage.",
    href: "/",
    icon: FaHome,
  },
  {
    name: "Pricing",
    description: "List Bounty Scammer.",
    href: "/pricing",
    icon: FaDollarSign,
  },
  {
    name: "Token Scanner",
    description: "List Bounty Scammer.",
    href: "/token-scanner",
    icon: FaSearchLocation,
  },
  {
    name: "NFT Scanner",
    description: "List Bounty Scammer.",
    href: "/nft-scanner",
    icon: RiGalleryFill,
  },
  {
    name: "Audit List",
    description: "List Audit.",
    href: "/audit-list",
    icon: RiFilePdfFill,
  },
];
const resources = [
  {
    name: "Telegram Chat",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "https://t.me/BlockSAFUofficial",
    icon: FaTelegram,
  },
  {
    name: "Telegram Channel",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "https://t.me/BlockSAFUannouncement",
    icon: FaBullhorn,
  },
  {
    name: "Twitter",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "https://twitter.com/blocksafu",
    icon: FaTwitter,
  },
  {
    name: "Github",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "https://github.com/blocksafu111",
    icon: FaGithub,
  },
];

const earn = [
  {
    name: "Staking",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "https://earn.blocksafu.com/",
    icon: FaHandHolding,
  },
  {
    name: "Registering Referral",
    description: "Register Referral Program",
    href: "https://earn.blocksafu.com/referral",
    icon: FaUserPlus,
  },
];

const knowledge = [
  {
    name: "Security Audit",
    description:
      "Get all of your questions answered in our forums or contact support.",
    // href: "/register-bounty",
    href: "/security-audit",
    icon: FaShieldAlt,
  },
  {
    name: "KYC",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/bounty-scammers",
    icon: FaIdCard,
  },
  {
    name: "Blog",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/bounty-scammers",
    icon: FaWordpress,
  },
  {
    name: "How To Use",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/bounty-scammers",
    icon: FaQuestion,
  },
];

const products = [
  {
    name: "Pricing",
    description:
      "Get all of your questions answered in our forums or contact support.",
    // href: "/register-bounty",
    href: "/pricing",
    icon: FaDollarSign,
  },
  {
    name: "Audit List",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/audit-list",
    icon: FaClipboardList,
  },
  {
    name: "KYC List",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/kyc-list",
    icon: FaIdCard,
  },
  {
    name: "Bounty Scammer",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/bounty-scammers",
    icon: FaSearchLocation,
  },
  {
    name: "Token Scanner",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/token-scanner",
    icon: FaShieldAlt,
  },
  {
    name: "NFT Scanner",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/nft-scanner",
    icon: RiGalleryFill,
  },
];

const company = [
  {
    name: "About",
    description:
      "Get all of your questions answered in our forums or contact support.",
    // href: "/register-bounty",
    href: "/about",
    icon: FaInfo,
  },
  {
    name: "Team",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/team",
    icon: FaUsers,
  },
  {
    name: "Disclaimer",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/disclaimer",
    icon: FaLock,
  },
  {
    name: "Privacy Policy",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/privacy-policy",
    icon: FaUserCog,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const INFURA_ID = "c6b754e60c1c47fba1e01316a010b17c";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: INFURA_ID,
    },
  },
  "custom-walletlink": {
    display: {
      logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
      name: "Coinbase",
      description: "Connect to Coinbase Wallet (not Coinbase App)",
    },
    options: {
      appName: "Coinbase",
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};

function WalletConnectButton({ onConnect, onDisconnect }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [web3Provider, setWeb3Provider] = useState(null);
  const [address, setAddress] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [balance, setBalance] = useState(null);

  const web3Modal = useMemo(() => {
    return new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
      providerOptions,
    });
  }, []);

  useEffect(() => {
    if (web3Provider) {
      const fetchData = async () => {
        const signer = web3Provider.getSigner();
        setAddress(await signer.getAddress());
        const network = await web3Provider.getNetwork();
        setChainId(network.chainId);
        const balanceWei = await signer.getBalance();
        setBalance(utils.formatEther(balanceWei));
      };
      fetchData();
      onConnect && onConnect(web3Provider);
    } else {
      setAddress(null);
      setChainId(null);
      setBalance(null);
      onDisconnect && onDisconnect();
    }
  }, [web3Provider]);

  const connect = async () => {
    const provider = await web3Modal.connect();
    const ethersProvider = new providers.Web3Provider(provider);
    setWeb3Provider(ethersProvider);
  };

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    if (web3Provider.disconnect) {
      await web3Provider.disconnect();
    }
    setWeb3Provider(null);
  };

  const getSimpleAddress = (str) => {
    return str.substr(0, 6) + "..." + str.substr(str.length - 3, str.length);
  };

  return (
    <div>
      {web3Provider ? (
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={
            "rounded-lg text-white bg-[#D171FF] border-2 border-[#D171FF] px-1 py-1 md:px-3 md:py-2 lg:px-3 lg:py-2"
          }
        >
          {getSimpleAddress(address ? address : "")} ({chainId})
        </button>
      ) : (
        <button
          onClick={connect}
          className={
            "rounded-lg text-[#26293A] bg-[#D171FF] border-2 border-[#D171FF] px-1 py-1 md:px-3 md:py-2 lg:px-3 lg:py-2"
          }
        >
          Connect Wallet
        </button>
      )}

      {dropdownOpen && (
        <div className="absolute p-6 mt-2 bg-white rounded-md shadow-lg w-max">
          <p className="mb-2 text-sm text-gray-600">
            Address: {getSimpleAddress(address ? address : "")}
          </p>
          <p className="mb-2 text-sm text-gray-600">
            Chain ID: {chainId === 1 ? "Ethereum" : "Binance Smart Chain"}
          </p>
          <p className="mb-2 text-sm text-gray-600">
            Balance: {balance} {chainId === 1 ? "ETH" : "BNB"}
          </p>
          <button
            className="block w-full px-4 py-2 mt-3 text-white bg-red-600 rounded-md"
            onClick={() => {
              disconnect();
              setDropdownOpen(false);
            }}
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}

export default WalletConnectButton;

export function Header() {
  // const [state, dispatch] = useContext(Context);
  const [colorTheme, setTheme] = useDarkMode();
  const [balanceWeboo, setBalanceWeboo] = useState(0);
  const [balanceBNB, setBalanceBNB] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // useEffect(()=>{
  //   const button = document.querySelector('#menu-button');
  //   const menu = document.querySelector('#menu');
  //   button.addEventListener('click', () => {
  //     menu.classList.toggle('hidden');
  //   });
  // },[])

  // useEffect(async () => {
  //     if (state.web3 && state.account) {
  //         const bnb = await state.web3.eth.getBalance(state.account);
  //         const newBNB = new BigNumber(state.web3.utils.fromWei(bnb));
  //         setBalanceBNB(newBNB.toFormat(4));

  //         const token = await new state.web3.eth.Contract(
  //             getAppByChainId(state.chainId).ERC20_ABI,
  //             state.web3.utils.toHex(getAppByChainId(state.chainId).TOKEN_ADDRESS)
  //         );
  //         const weboo = await token.methods
  //             .balanceOf(state.web3.utils.toHex(state.account))
  //             .call();
  //         const newWeboo = new BigNumber(state.web3.utils.fromWei(weboo));
  //         setBalanceWeboo(newWeboo.toFormat(4));
  //     }
  // }, [state]);

  const doLogout = async () => {
    dispatch({
      type: "LOGOUT_WALLET_CONNECT",
      payload: true,
    });
  };

  const router = useRouter();
  let pathname = router.pathname;
  useEffect(() => {
    pathname = router.pathname;
  }, [router.pathname]);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activ = usePathname();

  return (
    <>
      <Popover className="fixed z-20 w-full bg-white backdrop-blur dark:bg-[#26293A] ">
        <div className="px-4 sm:px-8 md:px-12 lg:px-28 py-2.5 md:py-2.5 lg:py-2 xl:py-2 transition-all duration-500">
          <div className="flex items-center justify-between md:justify-between md:space-x-4 lg:mx-auto">
            <div className="flex items-center justify-start gap-2">
              <Link
                href="/"
                className={
                  activ === "/"
                    ? "text-[#D171FF] font-medium flex items-center gap-1"
                    : "text-gray-900 dark:text-white font-medium flex items-center gap-1"
                }
                aria-label="logo this"
              >
                {colorTheme === "dark" ? (
                  <Image
                    src="/images/safuai-logo-dark.svg"
                    width="60"
                    height="15"
                    alt=""
                  />
                ) : (
                  <Image
                    src="/images/safuai-logo-white.svg"
                    width="60"
                    height="15"
                    alt=""
                  />
                )}
                {colorTheme === "dark" ? (
                  <h1 className="text-xl text-[#000000] duration-500 font-bold">
                    SAFU.AI
                  </h1>
                ) : (
                  <h1 className="text-xl text-white duration-500 font-bold">
                    SAFU.AI
                  </h1>
                )}
              </Link>
            </div>
            <div className="flex items-center gap-2 -mr-2 lg:hidden">
              <Menu
                as="div"
                className="relative inline-block py-2 text-left md:p-2"
              >
                {/* <Menu.Button as="div">
                                    <BtnWalletConnect>
                                        <button
                                            className={
                                                "rounded-lg text-white bg-blue-600 border-2 border-blue-500 px-1 py-1 md:px-3 md:py-2 lg:px-3 lg:py-1"
                                            }
                                        >
                                            {getSimpleAddress(state.account ? state.account : "")}
                                        </button>
                                    </BtnWalletConnect>
                                </Menu.Button> */}
                {/* <Menu.Items className="absolute left-0 w-56 px-4 py-4 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:divide-gray-800 dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <>
                                                <div className="pb-2 text-sm font-bold text-black dark:text-white">
                                                    Balance
                                                </div>
                                                <div className="flex items-center justify-start gap-2 py-2 border-0">
                                                    <img
                                                        src="./images/icon-reward/weboo.svg"
                                                        className="w-5 h-5"
                                                        alt=""
                                                    />
                                                    <span className="text-sm text-black dark:text-white">
                                                        {balanceWeboo} WEBOO
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-start gap-2 py-2 border-0">
                                                    <img
                                                        src="./images/icon-reward/bnb.svg"
                                                        className="w-5 h-5"
                                                        alt=""
                                                    />
                                                    <span className="text-sm text-black dark:text-white">
                                                        {balanceBNB} BNB
                                                    </span>
                                                </div>
                                                <div className="flex pt-3">
                                                    <button
                                                        className="flex items-center gap-2 text-sm font-bold text-blue-500"
                                                        type="button"
                                                        onClick={() => doLogout()}
                                                    >
                                                        <FaArrowRight className="w-3 h-3" /> Disconnect
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </Menu.Item>
                                </Menu.Items> */}
              </Menu>
              {colorTheme === "light" ? (
                <div className="p-2 text-black bg-white rounded-lg dark:bg-[#26293A] dark:text-[#D171FF] duration-500 ring-2 ring-[#D171FF]">
                  <Image
                    onClick={() => setTheme("light")}
                    src="/images/lightmodelogomobile.svg"
                    width="24"
                    height="24"
                    alt="Light Mode Logo"
                    className="fill-current"
                  />
                </div>
              ) : (
                <div className="p-2 text-[#D171FF] ring-2 ring-[#D171FF] bg-white duration-500 rounded-lg">
                  <Image
                    onClick={() => setTheme("dark")}
                    src="/images/darkmodelogodesktop.svg"
                    width="24"
                    height="24"
                    alt="Dark Mode Logo"
                  />
                </div>
              )}

              <Popover.Button className="relative inline-flex items-center justify-center p-2 text-[#D171FF] bg-white rounded-md dark:bg-gray-800 duration-500 hover:black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D171FF]">
                <span className="sr-only">Open menu</span>
                <FaBars className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-8 lg:flex">
              <Link
                href="/"
                className={
                  activ === "/"
                    ? "text-[#D171FF] font-medium py-5 ml-20"
                    : "dark:text-white text-gray-900 duration-500 font-medium py-5 ml-20"
                }
              >
                Home
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? "text-gray-900 dark:text-white duration-500 font-medium py-5"
                          : "dark:text-white duration-500 black py-5",
                        "group rounded-md inline-flex items-center text-base font-medium ml-5",
                        pathname.match("/request") ||
                          pathname.match("/audit-list") ||
                          pathname.match("/kyc-list") ||
                          pathname.match("/bounty-scammers") ||
                          pathname.match("/token-scanner") ||
                          pathname.match("/nft-scanner")
                          ? ""
                          : ""
                      )}
                    >
                      <span>Services</span>
                      <FaAngleDown
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-1 h-5 w-5 group-hover:black"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-20 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 px-5 py-6 bg-white dark:bg-gray-900 sm:gap-8 sm:p-8">
                            {products.map((item, productIndex) => (
                              <Link
                                href={item.href}
                                key={productIndex}
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 text-[#D171FF]"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? "text-gray-900 dark:text-white duration-500 py-5"
                          : "dark:text-white duration-500 black py-5",
                        "group rounded-md inline-flex items-center text-base font-medium ml-1 mr-5",
                        pathname.match("/about") ||
                          pathname.match("/team") ||
                          pathname.match("/disclaimer") ||
                          pathname.match("/privacy-policy")
                          ? ""
                          : ""
                      )}
                    >
                      <span>Company</span>
                      <FaAngleDown
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-1 h-5 w-5 group-hover:black"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-20 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 px-5 py-6 bg-white dark:bg-gray-900 sm:gap-8 sm:p-8">
                            {company.map((item, companyIndex) => (
                              <Link
                                key={companyIndex}
                                href={item.href}
                                // href={item.href}
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 text-[#D171FF]"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="https://token.blocksafu.com"
                className="my-5 font-medium text-gray-900 dark:text-white duration-500"
              >
                Presale
              </a>
            </Popover.Group>
            <div className="items-center justify-end hidden gap-2 md:hidden lg:flex md:flex-1 lg:w-0">
              <div className="py-2 md:p-2">
                <WalletConnectButton />
              </div>

              <div className="">
                {colorTheme === "light" ? (
                  <div className="px-2.5 py-2 text-black bg-white rounded-lg dark:bg-[#26293A] dark:text-[#D171FF] duration-500 ring-2 ring-[#D171FF]">
                    <Image 
                    onClick={() => setTheme("light")}
                    src="/images/light-theme-icon.svg"
                    width={24}
                    height={24}
                    alt=""
                     />
                  </div>
                ) : (
                  <div className="px-2.5 py-2 text-[#D171FF] bg-white duration-500 ring-2 ring-[#D171FF] rounded-lg">
                    <Image
                    onClick={() => setTheme("dark")}
                    src="/images/dark-theme-icon.svg"
                    width={24}
                    height={24}
                    alt=""
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="relative inset-x-0 top-0 p-2 transition origin-top-right transform lg:hidden"
          >
            <div className="z-20 bg-white divide-y-2 rounded-lg shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 divide-gray-50 dark:divide-gray-900">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image src="/images/logo-safu-ai.svg" width={30} height={30} alt="" />
                    <Image src="/images/logo-blocksafu.svg" width={101} height={25} alt="" />
                    
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md dark:bg-gray-900 hover:black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <FaTimes className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item, solutionsIndex) => (
                      <Link key={solutionsIndex} href={item.href}>
                        <div className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                          <item.icon
                            className="flex-shrink-0 w-6 h-6 text-blue-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-400">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {resources.map((item, resourcesIndex) => (
                    <a
                      key={resourcesIndex}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <div className="py-2 md:p-2">
                    {/*<ModalWallet />*/}
                    {/*<ModalWeb3 />*/}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <WalletConnectButton />
                    {colorTheme === "light" ? (
                      <div className="px-2 py-2 text-black bg-white border-2 border-gray-800 rounded-lg dark:bg-gray-800 dark:text-white">\
                    <Image 
                    onClick={() => setTheme("light")}
                    src="/images/light-theme-icon.svg"
                    width={24}
                    height={24}
                    alt=""
                     />
                      </div>
                    ) : (
                      <div className="px-2 py-2 text-white bg-gray-900 border-2 border-gray-800 rounded-lg">
                        <Image
                        onClick={() => setTheme("dark")}
                        src="/images/dark-theme-icon.svg"
                        width={24}
                        height={24}
                        alt="" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      {/* <ModalWeb3 /> */}
    </>
  );
}

export function HeaderFixed() {
  // const [state, dispatch] = useContext(Context);
  const [colorTheme, setTheme] = useDarkMode();
  const [balanceWeboo, setBalanceWeboo] = useState(0);
  const [balanceBNB, setBalanceBNB] = useState(0);

  // useEffect(()=>{
  //   const button = document.querySelector('#menu-button');
  //   const menu = document.querySelector('#menu');
  //   button.addEventListener('click', () => {
  //     menu.classList.toggle('hidden');
  //   });
  // },[])

  // useEffect(async () => {
  //     if (state.web3 && state.account) {
  //         const bnb = await state.web3.eth.getBalance(state.account);
  //         const newBNB = new BigNumber(state.web3.utils.fromWei(bnb));
  //         setBalanceBNB(newBNB.toFormat(4));

  //         const token = await new state.web3.eth.Contract(
  //             getAppByChainId(state.chainId).ERC20_ABI,
  //             state.web3.utils.toHex(getAppByChainId(state.chainId).TOKEN_ADDRESS)
  //         );
  //         const weboo = await token.methods
  //             .balanceOf(state.web3.utils.toHex(state.account))
  //             .call();
  //         const newWeboo = new BigNumber(state.web3.utils.fromWei(weboo));
  //         setBalanceWeboo(newWeboo.toFormat(4));
  //     }
  // }, [state]);
  const getSimpleAddress = (str) => {
    return str.substr(0, 6) + "..." + str.substr(str.length - 3, str.length);
  };

  const doLogout = async () => {
    dispatch({
      type: "LOGOUT_WALLET_CONNECT",
      payload: true,
    });
  };

  const router = useRouter();
  let pathname = router.pathname;
  useEffect(() => {
    pathname = router.pathname;
  }, [router.pathname]);

  const activ = usePathname();

  const { asPath } = router;
  const dynamicId = asPath.split("#")[1];

  return (
    <div className="fixed z-10 w-full bg-white shadow-lg -mt-28 dark:bg-gray-900 md:-mt-32 lg:-mt-32 shadow-gray-400/30 dark:shadow-gray-900">
      <Popover className="relative bg-white dark:bg-gray-900">
        <div className="px-4 py-2 mx-auto lg:px-28 md:px-8 sm:px-8 md:py-0 lg:py-0 xl:py-1">
          <div className="flex items-center justify-between py-1 dark:border-gray-900 md:justify-start md:space-x-4">
            <div className="flex items-center justify-start gap-2">
              <Link
                href="/"
                className={
                  activ
                    ? "text-blue-500 font-medium mr-6 flex items-center gap-1 border-b-2 border-gray-600"
                    : "text-gray-900 dark:text-white font-medium flex items-center gap-1"
                }
              >
                {colorTheme === "dark" ? (
                  <Image
                    src="/images/logo-dark.svg"
                    width="140"
                    height="39"
                    alt=""
                  />
                ) : (
                  <Image
                    src="/images/logo-white.svg"
                    width="140"
                    height="39"
                    alt=""
                  />
                )}
              </Link>
            </div>
            <div className="flex items-center gap-2 -my-2 -mr-2 md:hidden">
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button as="div">
                  {/* <BtnWalletConnect>
                                        <button
                                            className={
                                                "rounded-lg text-white bg-blue-600 border-2 border-blue-500 px-1 py-1 md:px-3 md:py-2 lg:px-3 lg:py-2"
                                            }
                                        >
                                            {getSimpleAddress(state.account ? state.account : "")}
                                        </button>
                                    </BtnWalletConnect> */}
                </Menu.Button>
                <Menu.Items className="absolute left-0 w-56 px-4 py-4 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:divide-gray-800 dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {/* <Menu.Item>
                                        {({ active }) => (
                                            <>
                                                <div className="pb-2 text-sm font-bold text-black dark:text-white">
                                                    Balance
                                                </div>
                                                <div className="flex items-center justify-start gap-2 py-2 border-0">
                                                    <img
                                                        src="./images/icon-reward/weboo.svg"
                                                        className="w-5 h-5"
                                                        alt=""
                                                    />
                                                    <span className="text-sm text-black dark:text-white">
                                                        {balanceWeboo} WEBOO
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-start gap-2 py-2 border-0">
                                                    <img
                                                        src="./images/icon-reward/bnb.svg"
                                                        className="w-5 h-5"
                                                        alt=""
                                                    />
                                                    <span className="text-sm text-black dark:text-white">
                                                        {balanceBNB} BNB
                                                    </span>
                                                </div>
                                                <div className="flex pt-3">
                                                    <button
                                                        className="flex items-center gap-2 text-sm font-bold text-blue-500"
                                                        type="button"
                                                        onClick={() => doLogout()}
                                                    >
                                                        <FaArrowRight className="w-3 h-3" /> Disconnect
                                                    </button>
                                                </div>
                                            </>
                                        )}
                                    </Menu.Item> */}
                </Menu.Items>
              </Menu>
              {colorTheme === "light" ? (
                <div className="p-2 text-black bg-white rounded-lg dark:bg-gray-800 dark:text-white">
                  <Image 
                  onClick={() => setTheme("light")}
                  src="/images/light-theme-icon.svg" 
                  width={20} 
                  height={20} 
                  alt="" />
                </div>
              ) : (
                <div className="p-2 text-white bg-gray-900 rounded-lg">
                  <Image 
                  onClick={() => setTheme("dark")}
                  src="/images/dark-theme-icon.svg" 
                  width={20} 
                  height={20} 
                  alt="" />
                </div>
              )}

              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-lg dark:bg-gray-800 hover:black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <FaBars className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-8 lg:flex">
              <Link
                href="/"
                className={
                  activ
                    ? "text-blue-500 font-medium"
                    : "dark:text-white text-gray-900 font-medium"
                }
              >
                Home
              </Link>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? "text-gray-900 dark:text-blue-500"
                          : "dark:text-white black",
                        "group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-900"
                      )}
                    >
                      <span>Products</span>
                      <FaAngleDown
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-1 h-5 w-5 group-hover:black"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-20 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 px-5 py-6 bg-white dark:bg-gray-900 sm:gap-8 sm:p-8">
                            {products.map((item, productIndex) => (
                              <Link
                                href={item.href}
                                key={productIndex}
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? "text-gray-900 dark:text-blue-500"
                          : "dark:text-white black",
                        "group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-900"
                      )}
                    >
                      <span>Knowledge</span>
                      <FaAngleDown
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-1 h-5 w-5 group-hover:black"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-20 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 px-5 py-6 bg-white dark:bg-gray-900 sm:gap-8 sm:p-8">
                            {knowledge.map((item, knowledgeIndex) => (
                              <Link
                                href={item.href}
                                key={knowledgeIndex}
                                // href={item.href}
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? "text-gray-900 dark:text-blue-500"
                          : "dark:text-white black",
                        "group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-900"
                      )}
                    >
                      <span>Company</span>
                      <FaAngleDown
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-1 h-5 w-5 group-hover:black"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-20 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 px-5 py-6 bg-white dark:bg-gray-900 sm:gap-8 sm:p-8">
                            {company.map((item, companyIndex) => (
                              <Link
                                key={companyIndex}
                                href={item.href}
                                // href={item.href}
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? "text-gray-900 dark:text-blue-500"
                          : "dark:text-white black",
                        "group bg-white dark:bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-900"
                      )}
                    >
                      <span>Earn</span>
                      <FaAngleDown
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-1 h-5 w-5 group-hover:black"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-20 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6 px-5 py-6 bg-white dark:bg-gray-900 sm:gap-8 sm:p-8">
                            {earn.map((item, earnIndex) => (
                              <a
                                key={earnIndex}
                                href={item.href}
                                // href={item.href}
                                className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900 dark:text-white">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="https://token.blocksafu.com"
                className="font-medium text-gray-900 dark:text-white"
              >
                Token
              </a>
            </Popover.Group>
            <div className="items-center justify-end hidden gap-2 md:flex md:flex-1 lg:w-0">
              <div className="py-2 md:p-2">
                <WalletConnectButton />
              </div>

              <div className="">
                {colorTheme === "light" ? (
                  <div className="px-2.5 py-2.5 text-black bg-white border-2 border-gray-800 rounded-lg dark:bg-gray-800 dark:text-white">
                    <svg
                      onClick={() => setTheme("light")}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="px-2.5 py-2.5 text-white bg-gray-900 border-2 border-gray-800 rounded-lg">
                    <svg
                      onClick={() => setTheme("dark")}
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-lg lg:hidden dark:bg-gray-800 hover:black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <FaBars className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="relative inset-x-0 top-0 p-2 transition origin-top-right transform lg:hidden"
          >
            <div className="z-20 bg-white divide-y-2 rounded-lg shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5 divide-gray-50 dark:divide-gray-900">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g fill="#0d3b6f">
                        <path d="M16.68 26.89c-.05 0-.11-.03-.22-.1C7.51 21.44 5.41 14.74 5.41 3.41c4.44-.47 7.47-1.3 11.27-3.41 3.8 2.11 6.83 2.94 11.27 3.41 0 11.33-2.1 18.03-11.05 23.38-.11.07-.17.1-.22.11v-.01h0z" />
                        <path d="M16.68 26.89c-.05 0-.11-.03-.22-.1C7.51 21.44 5.41 14.74 5.41 3.41c4.44-.47 7.47-1.3 11.27-3.41v26.89z" />
                      </g>
                      <g fill="#07203d">
                        <path d="M16.68 26.9c.05-.01.11-.04.22-.11 8.95-5.35 11.05-12.05 11.05-23.38-4.44-.47-7.47-1.3-11.27-3.41v26.9z" />
                        <path d="M9.78 16.36l13.76-7.9 3.74 3.74-10.6 11.06-6.9-6.9z" />
                      </g>
                      <path
                        d="M23.1 16.14l-3.21 1.91-3.22 1.92-3.2-1.83-3.21-1.83.01-3.74.01-3.74 3.22-1.91 3.21-1.91 3.2 1.82 3.21 1.83-.01 3.74-.01 3.74z"
                        fill="#fefefe"
                      />
                      <path
                        d="M29.95 29.93c.47-2.47-2.59-8.12-5.22-8.91-1.32-.4-14.81-1.55-14.52 1.81.3 3.46 5.68 1.4 7.74 2.13-.09 1.24-1.75.97-2.43.96-1.79-.03-7.22.46-5.99-3.82-1.68-1.74-3.44-3.46-5.15-5.17-2.49-2.49-4.31-.5-4.38.96-.08 1.58 8.66 10.58 10.99 11.48 2.45.94 15.66.54 18.96.56h0z"
                        fill="#ecc5b0"
                      />
                      <path
                        d="M21.601 9.698v2.972l.586-.307.013-2.994-.6.329z"
                        fill="#f76200"
                      />
                      <path
                        d="M12.487 8.182c.189-.21 2.952-1.663 3.507-2.017.296-.188.175-.519.743-.449.217.027.479.179.317.424-.126.191-.384.102-.629.195-.764.289-2.423 1.392-3.21 1.846.182.303.462.202.797.316.377.128.251.499-.155.536-.604.054-.444-.231-.69-.418-.154-.118-.6-.262-.681-.434h0zm-2.437.572l.68.389c.148-.114.88-.503 1.075-.577.283.062.468.255.731.368.341.146.698-.022.724.418-.111.203-.277.265-.559.227-.473-.063-.491-.746-1.008-.548-.142.054-.499.24-.585.329l1.565.894 2.588-1.512c-.443-.364-.967-.192-1.014-.508.062-.42.72-.434.913-.11.259.436.5.286.821.618-.077.118-.009.04-.132.126l-2.827 1.585 2.518 1.44c.283-.141 1.548-.786 1.661-.965-.143-.114-1.392-.829-1.489-.835-.088-.005-.291.099-.37.156-.214.154-.09.202-.269.346-.454.364-1.387-.33-.338-.501.219-.036.326-.097.504-.202.65-.384.449-.229 1.829.519l.867.579-1.948 1.157.661.377 2.622-1.489c-.173-.179-1.114-.675-1.411-.844l-1.494-.89c.11-.199.647-.42.864-.545.297-.172.623-.379.926-.5-.166-.386-.692-.252-1.003-.46l-.005-.295c.395-.191.707-.266.937.127.162.277.57.337.787.555-.075.154-.702.463-.88.563-.218.122-.783.398-.91.555.062.081 2.348 1.43 2.573 1.516l.612-.348c-.086-.148-1.408-.839-1.693-.884-.905-.143-.32-.754.245-.547.263.097.144.268.5.475l1.295.759.622-.353c-.115-.142-1.42-.827-1.563-.862-.368-.09-.281.056-.597-.204-.009-.338.229-.441.591-.387.418.062.218.26.587.479l1.349.752.6-.329c-.391-.299-2.453-1.365-3.086-1.742l-1.498-.832c-.092-.007-1.334.704-1.514.828.287.48.838.076 1.013.559-.097.393-.701.423-.919.087-.137-.212-.115-.196-.384-.333-.182-.093-.37-.165-.442-.313.151-.129.68-.406.864-.506 1.75-.951.962-.988 2.726.001l3.606 2.047.68-.39L16.695 5 10.05 8.754h0z"
                        fill="#f9c309"
                      />
                      <path
                        d="M21.596 16.424l-2.157 1.223-1.082.61c-.196.118-.374.191-.491.328-.177.208-.179.384-.558.319-.108-.191-.109-.354.034-.58.192-.305.259-.165.616-.26l3.273-1.843c.015-.139.036-.33.011-.467-.049-.271-.126-.127-.154-.359-.03-.257.204-.582.412-.609.474-.062.194.49.144.658-.072.239-.001.682-.048.98h0zm-1.413-.29c-.022-.032-.03-.019-.052-.102-.047-.173.004-.237.068-.38.116-.258.077-.306.07-.609-.016-.618.071-.53.536-.777.353-.188 1.473-.909 1.768-.957l.004 1.839c.03.336.315.258.098.708-.248.513-.826.4-.558-.192.171-.379.107-1.302.078-1.732-.132.015-1.387.714-1.476.815-.287.324.112.622.093.9-.02.29-.305.646-.629.488h0zm-.632-2.709c-.309.05-.287-.049-.541.086l-1.247.749-.012 2.8c.151-.03 1.424-.741 1.546-.885.157-.533-.178-.519-.137-.872.069-.586.812-.712.662-.129-.035.135-.101.183-.127.335-.194 1.105.539.633-1.153 1.559-.24.131-.946.596-1.149.598l-.013-3.62c.243-.217 1.22-.704 1.597-.921.354-.205.357-.595.693-.508.181.047.193.238.14.412-.056.184-.166.245-.259.397h0zm3.018-4.261l-.025 3.401-1.31.714.001-3.361-.622.353c-.067.559.123 3.145 0 3.376-.167.235-1.557.892-1.888 1.151-.093.809.273.484.125.988-.098.332-.367.49-.634.307-.096-.404.1-.366.132-.694.068-.684-.187-.743.284-.991l.688-.388.952-.553-.006-2.999-.612.347.001 1.2c-.034.103-1.035.629-1.216.729-.197.11-.47.248-.586.388s-.268.463-.526.277c-.227-.171-.069-.51.087-.662.258-.25.334-.006.697-.227l1.158-.711v-.776l-2.622 1.489-.017 7.475 6.655-3.736c.092-.485.022-1.768.021-2.338l-.017-2.389-.041-2.763-.68.39h0z"
                        fill="#f76200"
                      />
                      <path
                        d="M12.065 16.216l2.509 1.372v-1.68c-.436-.417-.505-.164-.805-.314-.197-.099-.468-.51-.219-.763.354-.161.455.252.641.401s.534.289.739.432l.01 2.54c-.332-.013-2.695-1.552-3.245-1.776-.096-.794.101-1.736-.096-2.198-.302-.709.397-.653.577-.16.131.359-.049.354-.106.579-.039.153-.027 1.364-.005 1.568h0zm-.965-.775c.027.181.105.216.137.378.087.438-.327.401-.514.189-.346-.394-.085-.512-.018-.775.073-.291-.049-2.393.033-3.023.16.031 2.115 1.149 2.284 1.283l.019 2.16c.435.359.573.145.825.303a.6.6 0 0 1 .199.755c-.462.087-.442-.258-.715-.448-.919-.641-.696.216-.715-2.599l-1.536-.84.002 2.615h0zm3.963-.38c-.445.146-.46-.225-.735-.424-.205-.148-.655-.271-.704-.516l-.006-2.432c.339.003.533.38.983.388.394.007.586.409.475.804-.644.153-.288-.343-1.086-.592l.028 1.738c.432.351.504.137.795.28.262.128.333.468.25.754h0zM10 16.279l6.63 3.722.017-7.475-.66-.377-.062 6.092c.074.292.245.346.053.664-.327.048-.494-.136-.579-.396-.12-.369.134-.285.14-.716v-5.899l-2.519-1.44v2.291l-2.288-1.271-.003-2.329-.68-.389-.05 7.524h0zm2.667-4.13l.004-1.896-1.565-.894-.001 1.91 1.561.88z"
                        fill="#fd8c0a"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="101"
                      height="25"
                      shapeRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                      fillRule="nonzero"
                    >
                      <path
                        d="M9.75 12.3c0 3.06-2.48 4.29-5.21 4.29H.63c-.49 0-.74-.34-.74-.81V2.44c0-.46.25-.8.74-.8h3.4c2.58 0 4.78.84 4.78 3.77 0 1.42-.67 2.61-1.99 3.18 1.83.35 2.93 1.88 2.93 3.71zM6.77 5.61c0-1.85-1.17-2.36-2.84-2.36H1.88V8.1h2.26c1.6 0 2.63-.85 2.63-2.49zm.9 6.81c0-2.12-1.54-2.74-3.42-2.74H1.88v5.28h2.88c1.6 0 2.91-.8 2.91-2.54zm6.79 3.88c0 .13-.08.22-.2.27-.31.12-1.21.12-1.52 0-.13-.06-.2-.13-.2-.27V.87c0-.54 1.92-.52 1.92 0V16.3zm13.17-5.32c0 3.36-1.77 5.82-5.31 5.82-3.55 0-5.08-2.26-5.08-5.61 0-3.38 1.73-5.82 5.3-5.82 3.53 0 5.09 2.26 5.09 5.61zm-1.99.12c0-2.15-.68-4.14-3.18-4.14-2.42 0-3.23 1.96-3.23 4.09 0 2.16.68 4.14 3.19 4.14 2.44 0 3.22-1.96 3.22-4.09zm12.16 4.36c-.48.86-2.52 1.34-3.45 1.34-3.38 0-4.63-2.52-4.63-5.57 0-2.24.67-4.61 2.94-5.49 1.37-.52 4.14-.48 5.08.9.21.36.25 1.6-.22 1.6-.36 0-1.37-1.23-2.97-1.23-2.31 0-2.85 2.21-2.85 4.11 0 1.96.57 4.02 2.89 4.02 1.58 0 2.69-1.32 3.03-1.32.43 0 .34 1.34.18 1.64zm11.15.99c-.2.29-1.83.39-2.2-.16l-4.38-5.76v5.77c0 .51-1.92.52-1.92 0V.87c0-.54 1.92-.52 1.92 0v9.4l3.91-4.32c.43-.52 1.95-.55 2.24-.23.18.22-.12.61-.28.77l-3.74 3.77 4.22 5.48c.12.18.38.49.23.71zm10.99-4.35c0 3.25-2.63 4.75-5.54 4.75-1.12 0-3.1-.35-3.95-1.17-.42-.44-.45-2.52.16-2.52.37 0 2.01 1.23 3.81 1.23 1.21 0 2.37-.52 2.37-1.89 0-2.71-6.36-1.89-6.36-6.82 0-2.93 2.32-4.3 5.01-4.3.79 0 3.09.33 3.5 1.09.15.29.33 2.29-.27 2.29-.34 0-1.77-1.02-3.19-1.02-1.03 0-1.98.46-1.98 1.61 0 2.62 6.44 2 6.44 6.75zm14.35 4.38c-.28.26-2.75.29-3.01-.05-.18-.23-.94-2.77-1.09-3.25h-5.64l-1.07 3.2c-.24.38-2.5.38-2.76.08-.43-.5 4.18-12.81 4.7-14.3.31-.92 3.86-.95 4.16.04.51 1.44 5.15 13.84 4.71 14.28zm-6.95-12h-.01l-2.08 6.36h4.2l-2.11-6.36zm16.91-.36h-4.9v4.02h4.59c.66 0 .63 2.44 0 2.44h-4.59v5.57c0 .72-3.05.72-3.05 0V2.59c0-.58.3-.95.9-.95h7.05c.64 0 .62 2.48 0 2.48zm15.09 6.9c0 3.89-2.43 5.83-6.19 5.83-3.74 0-6.02-1.85-6.02-5.71V2.05c0-.69 3.03-.68 3.03 0v8.83c0 1.99.91 3.48 3.11 3.48 2.04 0 3.07-1.35 3.07-3.3V2.05c0-.69 3-.69 3 0v8.97z"
                        fill="#07203d"
                      />
                      <path
                        d="M84.02 22.84h-3.41c0 1.16.44 1.89 1.69 1.89.71 0 1.44-.39 1.71-.39.23 0 .19.6.06.74-.27.27-1.5.42-1.86.42-1.83 0-2.6-1.09-2.6-2.83 0-1.57.79-2.88 2.5-2.88 1.52 0 2.28 1.01 2.28 2.46 0 .28 0 .59-.37.59zm-.59-.7c.02-.92-.38-1.61-1.37-1.61-.92 0-1.43.75-1.45 1.61h2.82zm6.34 3.12c0 .24-.82.25-.82 0v-.52c-1.13 1.2-3.45 1-3.45-.82 0-1.77 2.07-1.73 3.32-1.73 0-.92-.01-1.63-1.19-1.63-.76 0-1.5.54-1.68.54-.27 0-.22-.61-.07-.75.37-.36 1.34-.56 1.84-.56 1.37 0 2.05.56 2.05 1.96v3.51zm-.95-2.38c-.77 0-2.34-.17-2.34.99 0 1.38 1.61.93 2.34.11v-1.1zm5.59-2.04a.26.26 0 0 1-.11-.03c-.27-.1-.57-.18-.84-.06-.4.17-.76.73-.98 1.08v3.42c0 .26-.96.26-.96 0v-5.2c0-.26.86-.26.86 0v.76c.25-.37.64-.85 1.09-.98.24-.06.81-.05 1.01.11.11.09.15.9-.07.9zm5.7 4.41c0 .26-.95.26-.95 0v-3.04c0-.75-.18-1.59-1.1-1.59-.6 0-1.12.57-1.46 1v3.63c0 .26-.96.26-.96 0v-5.2c0-.26.87-.26.87 0v.69c.45-.51 1.03-.95 1.75-.95 1.43 0 1.85 1.03 1.85 2.29v3.17z"
                        fill="#fd8c0a"
                      />
                    </svg>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md dark:bg-gray-900 hover:black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <FaTimes className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item, solutionsIndex) => (
                      <Link key={solutionsIndex} href={item.href}>
                        <div className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50">
                          <item.icon
                            className="flex-shrink-0 w-6 h-6 text-blue-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-400">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="px-5 py-6 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {resources.map((item, resourcesIndex) => (
                    <a
                      key={resourcesIndex}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-400"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <div className="py-2 md:p-2">
                    {/*<ModalWallet />*/}
                    {/*<ModalWeb3 />*/}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    {/* <WalletConnectButton /> */}
                    {colorTheme === "light" ? (
                      <div className="px-2 py-2 text-black bg-white border-2 border-gray-800 rounded-lg dark:bg-gray-800 dark:text-white">
                        <svg
                          onClick={() => setTheme("light")}
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="px-2 py-2 text-white bg-gray-900 border-2 border-gray-800 rounded-lg">
                        <svg
                          onClick={() => setTheme("dark")}
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className="relative overflow-x-scroll bg-white dark:bg-gray-900">
        <div className="px-4 md:px-8 lg:px-24">
          <div className="flex items-center w-full gap-2 px-0 py-2 md:px-3 lg:px-3 whitespace-nowrap">
            <Link
              className={
                dynamicId === "safetyScore"
                  ? "bg-gray-300 dark:bg-gray-800 dark:text-gray-400 py-2 px-4 rounded-md text-gray-900 font-semibold"
                  : "bg-white py-2 dark:bg-gray-900 px-4 rounded-md text-gray-600 dark:text-gray-500 font-semibold"
              }
              scroll={true}
              href="#safetyScore"
            >
              Safety Score
            </Link>
            <Link
              className={
                dynamicId === "taxInformation"
                  ? "bg-gray-300 dark:bg-gray-800 dark:text-gray-400 py-2 px-4 rounded-md text-gray-900 font-semibold"
                  : "bg-white py-2 dark:bg-gray-900 px-4 rounded-md text-gray-600 dark:text-gray-500 font-semibold"
              }
              scroll={true}
              href="#taxInformation"
            >
              Tax Information
            </Link>
            <Link
              className={
                dynamicId === "overviewInformation"
                  ? "bg-gray-300 dark:bg-gray-800 dark:text-gray-400 py-2 px-4 rounded-md text-gray-900 font-semibold"
                  : "bg-white py-2 dark:bg-gray-900 px-4 rounded-md text-gray-600 dark:text-gray-500 font-semibold"
              }
              scroll={true}
              href="#overviewInformation"
            >
              Security Overview
            </Link>
            <Link
              className={
                dynamicId === "auditInformation"
                  ? "bg-gray-300 dark:bg-gray-800 dark:text-gray-400 py-2 px-4 rounded-md text-gray-900 font-semibold"
                  : "bg-white py-2 dark:bg-gray-900 px-4 rounded-md text-gray-600 dark:text-gray-500 font-semibold"
              }
              scroll={true}
              href="#auditInformation"
            >
              Audit Overview
            </Link>
            <Link
              className={
                dynamicId === "manualInformation"
                  ? "bg-gray-300 dark:bg-gray-800 dark:text-gray-400 py-2 px-4 rounded-md text-gray-900 font-semibold"
                  : "bg-white py-2 dark:bg-gray-900 px-4 rounded-md text-gray-600 dark:text-gray-500 font-semibold"
              }
              scroll={true}
              href="#manualInformation"
            >
              Manual Analysis
            </Link>
            <Link
              className={
                dynamicId === "marketInformation"
                  ? "bg-gray-300 dark:bg-gray-800 dark:text-gray-400 py-2 px-4 rounded-md text-gray-900 font-semibold"
                  : "bg-white py-2 dark:bg-gray-900 px-4 rounded-md text-gray-600 dark:text-gray-500 font-semibold"
              }
              scroll={true}
              href="#marketInformation"
            >
              Market Information
            </Link>
            <Link
              className={
                dynamicId === "contractInformation"
                  ? "bg-gray-300 dark:bg-gray-800 dark:text-gray-400 py-2 px-4 rounded-md text-gray-900 font-semibold"
                  : "bg-white py-2 dark:bg-gray-900 px-4 rounded-md text-gray-600 dark:text-gray-500 font-semibold"
              }
              scroll={true}
              href="#contractInformation"
            >
              Contract Inheritance
            </Link>
            <Link
              className={
                dynamicId === "websiteInformation"
                  ? "bg-gray-300 dark:bg-gray-800 dark:text-gray-400 py-2 px-4 rounded-md text-gray-900 font-semibold"
                  : "bg-white py-2 dark:bg-gray-900 px-4 rounded-md text-gray-600 dark:text-gray-500 font-semibold"
              }
              scroll={true}
              href="#websiteInformation"
            >
              Website Information
            </Link>
            <Link
              className={
                dynamicId === "liquidityInformation"
                  ? "bg-gray-300 dark:bg-gray-800 dark:text-gray-400 py-2 px-4 rounded-md text-gray-900 font-semibold"
                  : "bg-white py-2 dark:bg-gray-900 px-4 rounded-md text-gray-600 dark:text-gray-500 font-semibold"
              }
              scroll={true}
              href="#liquidityInformation"
            >
              Liquidity & Holder
            </Link>
            <Link
              className={
                dynamicId === "autoInformation"
                  ? "bg-gray-300 dark:bg-gray-800 dark:text-gray-400 py-2 px-4 rounded-md text-gray-900 font-semibold"
                  : "bg-white py-2 dark:bg-gray-900 px-4 rounded-md text-gray-600 dark:text-gray-500 font-semibold"
              }
              scroll={true}
              href="#autoInformation"
            >
              Automatic Vulnerability Scan
            </Link>
            <div className="px-4 py-2 text-gray-900 bg-white rounded-md"></div>
            <div className="px-4 py-2 text-gray-900 bg-white rounded-md"></div>
            <div className="px-4 py-2 text-gray-900 bg-white rounded-md"></div>
          </div>
        </div>
      </div>
      {/* <ModalWeb3 /> */}
    </div>
  );
}

export const Modal = ({
  title = "",
  children,
  isOpen = false,
  onClose = (e) => {},
}) => {
  return (
    <>
      {isOpen ? (
        <>
          <div className="fixed inset-0 z-50 flex justify-center pt-20 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-full mx-auto my-6 md:w-1/3 lg:w-1/3 lg:max-w-3xl">
              <div className="relative flex flex-col w-full bg-white border-0 shadow-lg outline-none rounded-3xl focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {title}
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-lg font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                    onClick={() => onClose(false)}
                  >
                    <FaTimes color={"black"} />
                  </button>
                </div>

                <div className="relative flex-auto p-6">{children}</div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25" />
        </>
      ) : null}
    </>
  );
};

export const Toast = ({
  title = "",
  children,
  isOpen = false,
  onClose = (e) => {},
  duration = 60000,
}) => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (!showToast) return;
    setTimeout(() => {
      setShowToast(false);
      onClose(true);
    }, duration);
  }, [showToast]);

  return (
    <>
      {showToast ? (
        <>
          <div className="fixed inset-0 z-50 flex justify-center pt-5 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-full px-4 mx-auto md:w-2/4 lg:w-2/4">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 bg-green-600 border-b border-green-600 border-solid rounded-t">
                  <h3 className="flex items-center text-sm font-bold text-white rounded-lg">
                    <FaBell className="w-4 h-4 mr-1" /> {title}
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-sm font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-2 focus:outline-none"
                    onClick={() => {
                      setShowToast(false);
                      onClose(false);
                    }}
                  >
                    <FaTimes className="text-white" />
                  </button>
                </div>

                <div className="relative flex-auto p-3 text-xs">{children}</div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export const CopyAddress = ({ addr }) => {
  const [address, setAddress] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);

  const getSimpleAddress = (str) => {
    return str.substr(0, 6) + "..." + str.substr(str.length - 3, str.length);
  };

  useEffect(() => {
    setAddress(getSimpleAddress(addr));
  }, [addr]);

  const onCopy = () => {
    var TempText = document.createElement("input");
    TempText.value = addr;
    document.body.appendChild(TempText);
    TempText.select();

    document.execCommand("copy");
    document.body.removeChild(TempText);
    // if ('clipboard' in navigator) {
    //   navigator.clipboard.writeText(addr)
    // } else {
    //   document.execCommand('copy', true, addr);
    // }

    setIsToastOpen(true);
  };

  return (
    <div className="flex flex-row items-center justify-content-center">
      <a href={"https://bscscan.com/address/" + addr}>{address}</a>
      &nbsp;
      <a
        href="#"
        className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-200 border border-gray-400 rounded-full dark:text-white dark:border-gray-800 dark:bg-gray-800"
        onClick={(e) => {
          e.preventDefault();
          onCopy();
        }}
      >
        Copy
      </a>
      <Toast
        title="Success"
        isOpen={isToastOpen}
        onClose={(e) => {
          setIsToastOpen(false);
        }}
      >
        Copied to Clipboard
      </Toast>
    </div>
  );
};

export const CopyButton = ({ text }) => {
  const [address, setAddress] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);

  const getSimpleAddress = (str) => {
    return str.substr(0, 6) + "..." + str.substr(str.length - 3, str.length);
  };

  useEffect(() => {
    setAddress(getSimpleAddress(text));
  }, [text]);

  const onCopy = () => {
    var TempText = document.createElement("input");
    TempText.value = text;
    document.body.appendChild(TempText);
    TempText.select();

    document.execCommand("copy");
    document.body.removeChild(TempText);
    // if ('clipboard' in navigator) {
    //   navigator.clipboard.writeText(addr)
    // } else {
    //   document.execCommand('copy', true, addr);
    // }
    toast.success("Successfully Copied!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // setIsToastOpen(true)
  };

  return (
    <div className="flex flex-row items-center justify-content-center">
      &nbsp;
      <a
        href="#"
        className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-200 border border-gray-400 rounded-full dark:text-white dark:border-gray-800 dark:bg-gray-800"
        onClick={(e) => {
          e.preventDefault();
          onCopy();
        }}
      >
        <RiFileCopy2Line /> Copy
      </a>
      <Toast
        title="Success"
        isOpen={isToastOpen}
        onClose={(e) => {
          setIsToastOpen(false);
        }}
      >
        Copied to Clipboard
      </Toast>
    </div>
  );
};

export const CopyButton2 = ({ text }) => {
  const [address, setAddress] = useState("");
  const [isToastOpen, setIsToastOpen] = useState(false);

  const getSimpleAddress = (str) => {
    return str.substr(0, 6) + "..." + str.substr(str.length - 3, str.length);
  };

  useEffect(() => {
    setAddress(getSimpleAddress(text));
  }, [text]);

  const onCopy = () => {
    var TempText = document.createElement("input");
    TempText.value = text;
    document.body.appendChild(TempText);
    TempText.select();

    document.execCommand("copy");
    document.body.removeChild(TempText);
    // if ('clipboard' in navigator) {
    //   navigator.clipboard.writeText(addr)
    // } else {
    //   document.execCommand('copy', true, addr);
    // }
    toast.success("Successfully Copied!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // setIsToastOpen(true)
  };

  return (
    <div className="flex flex-row items-center justify-content-center">
      &nbsp;
      <button
        className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-200 border border-gray-400 rounded-full dark:text-white dark:border-gray-800 dark:bg-gray-800"
        onClick={(e) => {
          e.preventDefault();
          onCopy();
        }}
      >
        <RiFileCopy2Line />
      </button>
      <Toast
        title="Success"
        isOpen={isToastOpen}
        onClose={(e) => {
          setIsToastOpen(false);
        }}
      >
        Copied to Clipboard
      </Toast>
    </div>
  );
};

/** Bugs wallet connect */
export const ModalWallet = () => {
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = useWeb3React();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState();
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  const [isSelectWalletOpen, setIsSelectWalletOpen] = useState(false);
  const onClick = (p) => {
    try {
      activate(p, undefined, true);
    } catch (ex) {
      console.log(ex);
    }
  };
  const getSimpleAddress = (str) => {
    return str.substr(0, 6) + "..." + str.substr(str.length - 3, str.length);
  };
  useEffect(() => {
    setIsSelectWalletOpen(false);
  }, [active]);

  const logout = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Do you want to Log Out?")) {
      deactivate();
    }
  };
  return (
    <>
      {!active ? (
        <button
          onClick={() => setIsSelectWalletOpen(true)}
          className={"rounded-lg text-white bg-blue-600 px-3 py-2"}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          onClick={() => logout()}
          className={"rounded-full text-white bg-blue-600 px-3 py-2"}
        >
          {getSimpleAddress(account)}
        </button>
      )}
      <Modal
        title={"Select Wallet"}
        isOpen={isSelectWalletOpen}
        onClose={(e) => setIsSelectWalletOpen(e)}
      >
        <div className={"grid grid-cols-2 gap-y-4 gap-x-2"}>
          <CardWebooWallet onClick={(p) => onClick(p)} />
          <CardMetamask onClick={(p) => onClick(p)} />
          <CardWalletConnect onClick={(p) => onClick(p)} />
        </div>
      </Modal>
    </>
  );
};

export const ModalWeb3 = () => {
  const [isSelectWalletOpen, setIsSelectWalletOpen] = useState(false);
  const [state, dispatch] = useContext(Context);

  useEffect(async () => {
    setIsSelectWalletOpen(state.isTriggerConnectWallet);
    if (state.web3) {
      const chainId = await state.web3.eth.getChainId();
    }
    if (state.web3Logout) doLogout();
  }, [state]);

  // useEffect(async () => {
  //   try {
  //     await onClickMetamask();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, []);

  const onClickMetamask = async () => {
    const providerOptions = {
      /* See Provider Options Section */
      injected: {
        display: {
          logo: "https://cdn.webooswap.com/storage/file/file_202201221104014935_1642849441.png",
          name: "Injected",
          description: "Connect with the provider in your Browser",
        },
        package: null,
      },
    };
    const web3Modal = new Web3Modal({
      // network: "mainnet", // optional
      cacheProvider: false, // optional
      providerOptions, // required
      theme: "dark",
    });
    const provider = await web3Modal.connectTo("injected");
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const chainId = await web3.eth.getChainId();
    await validateChain(chainId);
    providerEvent(provider, web3);
    dispatch({
      type: "SET_WEB3",
      payload: {
        web3: web3,
        web3modal: web3Modal,
      },
    });
    dispatch({ type: "SET_ACCOUNT", payload: accounts[0] });
  };

  const onClickWC = async () => {
    const providerOptions = {
      /* See Provider Options Section */
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            56: "https://bsc-dataseed1.defibit.io",
          },
        },
      },
    };
    const web3Modal = new Web3Modal({
      // network: "mainnet", // optional
      cacheProvider: false, // optional
      providerOptions, // required
      theme: "dark",
    });
    const provider = await web3Modal.connectTo("walletconnect");
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const chainId = await web3.eth.getChainId();
    await validateChain(chainId);
    providerEvent(provider, web3);
    dispatch({
      type: "SET_WEB3",
      payload: {
        web3: web3,
        web3modal: web3Modal,
      },
    });
    dispatch({ type: "SET_ACCOUNT", payload: accounts[0] });
  };

  const providerEvent = (provider, web3) => {
    provider.on("accountsChanged", (accounts) => {
      dispatch({ type: "SET_ACCOUNT", payload: accounts[0] });
    });

    provider.on("chainChanged", async (chainId) => {
      let chain_id = chainId;
      if (web3.utils.isHex(chainId)) chain_id = web3.utils.hexToNumber(chainId);
      await validateChain(chain_id);
    });

    provider.on("connect", (info) => {
      console.log(info);
    });

    provider.on("disconnect", (error) => {
      console.log(error);
      dispatch({ type: "SET_ACCOUNT", payload: null });
    });

    setTimeout(async () => {
      dispatch({ type: "STOREHASH" });
    }, [2000]);
  };

  const validateChain = async (chainId) => {
    const chain_id = chainId;
    // if(state.web3.utils.isHex(chain_id)) chain_id = state.web3.utils.hexToNumber(chain_id)
    // alert(state.web3.utils.isHex(chain_id))
    if (!getEnv().ALLOWED_CHAIN_ID.includes(chain_id)) {
      alert("Wrong Network");
      console.log(chainId);
      dispatch({ type: "LOGOUT_WALLET_CONNECT", payload: false });
    }

    dispatch({ type: "SET_CHAIN_ID", payload: chainId });
  };

  const doLogout = async () => {
    // await state.web3modal.clearCachedProvider();
    dispatch({
      type: "SET_WEB3",
      payload: {
        web3: null,
        web3modal: null,
      },
    });
    dispatch({ type: "SET_CHAIN_ID", payload: null });
    dispatch({ type: "LOGOUT_WALLET_CONNECT", payload: false });

    setTimeout(async () => {
      dispatch({ type: "STOREHASH" });
    }, [2000]);
  };

  return (
    <>
      <Modal
        title={"Select Wallet"}
        isOpen={isSelectWalletOpen}
        onClose={(e) => setIsSelectWalletOpen(e)}
      >
        <div className={"flex flex-col gap-y-3"}>
          <CardWebooWallet onClick={(p) => onClickMetamask()} />
          <CardMetamask onClick={(p) => onClickMetamask()} />
          <CardWalletConnect onClick={(p) => onClickWC()} />
        </div>
      </Modal>
    </>
  );
};

export const ModalWeb3Test = () => {
  const onConnect = async () => {
    const providerOptions = {
      /* See Provider Options Section */
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            97: "https://data-seed-prebsc-1-s1.binance.org:8545",
          },
        },
      },
    };

    const web3Modal = new Web3Modal({
      // network: "mainnet", // optional
      cacheProvider: false, // optional
      providerOptions, // required
      theme: "dark",
    });

    const instance = await web3Modal.connectTo("walletconnect");

    const provider = new ethers.providers.Web3Provider(instance);
    // const signer = provider.getSigner();
    // alert("tes")
  };
  return (
    <button
      onClick={() => onConnect()}
      className={"rounded-lg text-white bg-blue-600 px-3 py-2"}
    >
      Connect Wallet
    </button>
  );
};

export const CardMetamask = ({ onClick = (e) => {} }) => {
  return (
    <button
      className={
        "items-center border-2 rounded-full text-center flex flex-row justify-between py-2 hover:border-3 hover:border-red-600 px-8 gap-y-2"
      }
      onClick={() => onClick(injected)}
    >
      <div className={"text-sm font-bold"}>Metamask</div>
      <img
        alt={"Metamask"}
        src={
          "https://cdn.webooswap.com/storage/file/file_202201250651457307_1643093505.svg"
        }
        style={{
          width: 30,
          height: 30,
        }}
      />
    </button>
  );
};

export const CardWebooWallet = ({ onClick = (e) => {} }) => {
  return (
    <button
      className={
        "items-center border-2 rounded-full text-center flex flex-row justify-between py-2 hover:border-3 hover:border-red-600 px-8 gap-y-2"
      }
      onClick={() => onClick(injected)}
    >
      <div className={"text-sm font-bold"}>Weboo Wallet</div>
      <img
        alt={"WebooWallet"}
        src={
          "https://cdn.webooswap.com/storage/file/file_202201221439036521_1642862343.svg"
        }
        style={{
          width: 30,
          height: 30,
        }}
      />
    </button>
  );
};

export const CardWalletConnect = ({ onClick = (p) => {} }) => {
  return (
    <button
      className={
        "items-center border-2 rounded-full text-center flex flex-row justify-between py-2 hover:border-3 hover:border-red-600 px-8 gap-y-2"
      }
      onClick={() => onClick(walletconnect)}
    >
      <div className={"text-sm font-bold"}>Wallet Connect</div>
      <img
        alt={"Wallet Connect"}
        src={
          "https://cdn.webooswap.com/storage/file/file_202201250659526827_1643093992.png"
        }
        style={{
          width: 30,
          height: 30,
        }}
        loading="lazy"
      />
    </button>
  );
};

export const LoadingWeboo = () => {
  return (
    <div className={"flex flex-col items-center justify-center animate-pulse"}>
      <img
        src={"/images/logo-dark.svg"}
        style={{
          width: 300,
          height: 100,
        }}
        className={"mr-2"}
        alt={"Dex Name"}
      />
      Loading...
    </div>
  );
};

export const NotFound = () => {
  return (
    <div className={"flex flex-col"}>
      <img
        src={
          "https://cdn.webooswap.com/storage/file/file_202201221439036521_1642862343.svg"
        }
        style={{
          width: 100,
          height: 100,
        }}
        className={"mr-2"}
        alt={"Dex Name"}
      />
      Not Found.
    </div>
  );
};

export const ChainIconCircle = ({
  icon1,
  icon2,
  size = 80,
  borderWidth = 3,
}) => {
  return (
    <div className={"flex flex-row items-center justify-center"}>
      <img
        src={icon1}
        style={{
          width: size,
          height: size,
        }}
        className={"rounded-full p-0.5 border-red-600 border-" + borderWidth}
        alt={"Weboo"}
      />
      <span
        className={"rounded-full p-1 bg-blue-600"}
        style={{
          position: "absolute",
          borderWidth: borderWidth,
        }}
      />
      <img
        src={icon2}
        style={{
          width: size,
          height: size,
        }}
        className={"rounded-full p-0.5 border-red-600 border-" + borderWidth}
        alt={"Weboo"}
      />
    </div>
  );
};

export const BtnWalletConnect = ({ children }) => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    if (!state.web3) {
      // dispatch({
      //   type: "CONNECT_WALLET",
      //   payload: true,
      // });
    }
  }, []);

  const onConnectWallet = () => {
    dispatch({
      type: "CONNECT_WALLET",
      payload: true,
    });
  };

  return (
    <>
      {!state.isConnectWallet ? (
        <button
          onClick={() => onConnectWallet()}
          className={
            "flex items-center justify-center w-full gap-2 py-2.5 px-2.5 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          }
        >
          <IoWallet />
          <span className="hidden lg:block md:block">Connect Wallet</span>
        </button>
      ) : (
        children
      )}
    </>
  );
};

export const CircleLoading = ({ size }) => {
  return (
    <div className={"animate-pulse"}>
      <div className={`bg-red-300 rounded-full w-${size} h-${size}`} />
    </div>
  );
};

export const ModalTxHash = ({
  txHash = null,
  isReceipt = false,
  onReceiptClose = () => {},
}) => {
  const [state, dispatch] = useContext(Context);
  const [storeHash, setStoreHash] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [showReceipt, setShowReceipt] = useState(false);
  const [urlExplorer, setUrlExplorer] = useState("https://bscscan.com");

  useState(async () => {
    if (state && state.web3) {
      // setUrlExplorer(getAppByChainId(state.chainId).URL_EXPLORER);
      // setUrlExplorer("https://bscscan.com");
      setStoreHash(state.web3.storeHash);
    }
  }, [state]);

  useEffect(() => {
    if (!txHash) return setShowModal(false);
    else {
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
    }
  }, [txHash]);

  useEffect(() => {
    if (!isReceipt) return;
    setShowReceipt(true);
  }, []);

  return (
    <>
      {showModal ? (
        <>
          <Modal
            title={"Transaction Submitted"}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          >
            <div className={"flex flex-col items-center gap-y-3"}>
              <FaArrowCircleUp size={100} />
              <a
                href={urlExplorer + "/tx/" + txHash}
                target={"_blank"}
                rel={"noreferrer"}
                className={
                  "no-underline font-bold flex flex-row gap-x-3 justify-center items-center text-black dark:text-white"
                }
              >
                <span>View On Explorer</span>
                <FaExternalLinkAlt />
              </a>
            </div>
          </Modal>
        </>
      ) : null}
      {/*<Toast isOpen={showReceipt} title={"Transaction Receipt"} onClose={()=>{setShowReceipt(false);onReceiptClose()}}>*/}
      {/*  <a href={urlExplorer+"/tx/"+txHash} target={"_blank"} rel={"noreferrer"} className={"underline font-bold flex text-sm flex-row gap-x-3"}>*/}
      {/*    <span>View On Explorer</span>*/}
      {/*    <FaExternalLinkAlt />*/}
      {/*  </a>*/}
      {/*</Toast>*/}
    </>
  );
};

export const Empty = ({ text }) => {
  return (
    <div
      className={
        "w-full text-3xl flex items-center text-center align-center flex-col"
      }
    >
      <span>{text}</span>
    </div>
  );
};
