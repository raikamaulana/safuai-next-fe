import React, { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// const [ count, setCount ] = useState(0);

// const handleClick = () => {
//   setCount(count + 1);
// };

// const handleBlur = () => {
//   if (count > 0){
//     setCount(0);
//   }
// };

export const manualAudit = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };
  
  return (
    <>
      <div className="pt-44 pb-28 px-4 sm:px-8 md:px-12 lg:px-28 bg-[#E8ECEF] dark:bg-[#0D1116] text-black dark:text-white transition-all duration-500">
        <div className='max-w-3xl min-h-[800px] bg-white dark:bg-[#20262D] py-4 px-4 font-[Poppins] font-light'>
          <Tab.Group defaultIndex={0}>
            <Tab.List className='gap-4 overflow-x-scroll lg:overflow-hidden grid grid-flow-col w-full'>
              <Tab className={({ selected }) =>
                classNames(
                  'w-32 bg-[#E8ECEF] dark:bg-[#2C3239] py-3 text-base',
                  'focus:outline-none',
                  selected
                    ? 'dark:border border-2 border-[#D171FF] shadow'
                    : 'dark:hover:border hover:border-2 hover:border-[#D171FF] hover:bg-[#fbfcfd] hover:text-black dark:hover:bg-white/[0.2] dark:hover:text-white'
                )
              }>MINOR (1)</Tab>
              <Tab className={({ selected }) =>
                classNames(
                  'w-36 lg:w-32 bg-[#E8ECEF] dark:bg-[#2C3239] py-3 text-base',
                  'focus:outline-none',
                  selected
                    ? 'dark:border border-2 border-[#D171FF] shadow'
                    : 'dark:hover:border hover:border-2 hover:border-[#D171FF] hover:bg-[#fbfcfd] hover:text-black dark:hover:bg-white/[0.2] dark:hover:text-white'
                )
              }>MEDIUM (1)</Tab>
              <Tab className={({ selected }) =>
                classNames(
                  'w-28 bg-[#E8ECEF] dark:bg-[#2C3239] py-3 text-base',
                  'focus:outline-none',
                  selected
                    ? 'dark:border border-2 border-[#D171FF] shadow'
                    : 'dark:hover:border hover:border-2 hover:border-[#D171FF] hover:bg-[#fbfcfd] hover:text-black dark:hover:bg-white/[0.2] dark:hover:text-white'
                )
              }>MAJOR (0)</Tab>
              <Tab className={({ selected }) =>
                classNames(
                  'w-32 bg-[#E8ECEF] dark:bg-[#2C3239] py-3 text-base',
                  'focus:outline-none',
                  selected
                    ? 'dark:border border-2 border-[#D171FF] shadow'
                    : 'dark:hover:border hover:border-2 hover:border-[#D171FF] hover:bg-[#fbfcfd] hover:text-black dark:hover:bg-white/[0.2] dark:hover:text-white'
                )
              }>CRITICAL (0)</Tab>
              <Tab className={({ selected }) =>
                classNames(
                  'w-44 bg-[#E8ECEF] dark:bg-[#2C3239] py-3 text-base',
                  'focus:outline-none',
                  selected
                    ? 'dark:border border-2 border-[#D171FF] shadow'
                    : 'dark:hover:border hover:border-2 hover:border-[#D171FF] hover:bg-[#fbfcfd] hover:text-black dark:hover:bg-white/[0.2] dark:hover:text-white'
                )
              }>INFORMATIONAL (2)</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className='max-w-3xl min-h-[688px] text-base mt-4 px-6 py-4 bg-white dark:bg-[#2C3239]'>
                  <h1>Minor - Could be fixed, will not bring problems</h1>
                  <div className='mt-2'>
                    <h2 className='mb-1'>1. safe math</h2>
                    <p>Risk Recommendation: Don't use safe math after solc version 0.8.0</p>
                  </div>
                  <div className='min-h-[556px] px-5 py-4 mt-5 border border-white rounded-lg overflow-x-scroll'>
                    <div className='w-[630px]'>
                      <p>library SafeMath &#123;</p>
                      <p>2 &nbsp;&nbsp;/**</p>
                      <p>3 &nbsp;&nbsp;&nbsp;*@dev Returns the addition of two unsigned integers, with an overflow flag.</p>
                      <p>4 &nbsp;&nbsp;&nbsp;*</p>
                      <p>5 &nbsp;&nbsp;&nbsp;*_Available since v3.4._</p>
                      <p>6 &nbsp;&nbsp;&nbsp;*/</p>
                      <p>7 &nbsp;&nbsp;function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) &#123;</p>
                      <p>8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unchecked &#123;</p>
                      <p>9 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uint256 c = a + b;</p>
                      <p>10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (c &gt; a) return (false, 0);</p>
                      <p>11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (true, c);</p>
                      <p>12 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
                      <p>13 &nbsp;&nbsp;&#125;</p>
                      <p>14</p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='max-w-3xl min-h-[688px] text-base mt-4 px-6 py-4 bg-white dark:bg-[#2C3239]'>
                  <h1>Medium - Should be fixed, could bring problems.</h1>
                  <div className='mt-2'>
                    <h2 className='mb-1 font-medium'>1. <span className='text-[#D171FF]'>Add Liquidity</span></h2>
                    <p className='mt-3'>Risk Scenario: Add liquidity not to burn address</p>
                    <p className='mt-3'>Risk Recommendation: Please make it liquidity function with auto burn lp<span className='inline-block'>(send it to 0xdead) 1</span></p>
                  </div>
                  <div className='min-h-[475px] px-5 py-4 mt-5 border border-white rounded-lg overflow-x-scroll'>
                    <div className='w-[630px]'>
                      <p>function addLiquidity(uint256 tokenAmount, uint256 ethAmount) private &#123;</p>
                      <p>2 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// approve token transfer to cover all possible scenarios</p>
                      <p>3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _approve(address(this), address(uniswapV2Router), tokenAmount);</p>
                      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // add the liquidity</p>
                      <p>4 &nbsp;&nbsp;&nbsp;&nbsp; uniswapV2Router.addLiquidityETH&#123;value: ethAmount&#125;</p>
                      <p>5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; address(this),</p>
                      <p>6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; tokenAmount,</p>
                      <p>7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0, // slippage is unavoidable</p>
                      <p>8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0, // slippage is unavoidable</p>
                      <p>9 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; owner(),</p>
                      <p>10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; block.timestamp</p>
                      <p>11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;;</p>
                      <p>12 &nbsp; &#125;</p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='max-w-3xl min-h-[688px] text-base mt-4 px-6 py-4 bg-white dark:bg-[#2C3239]'>
                  <h1>Major - Must be fixed, and will bring problems.</h1>
                  <div className='min-h-[605px] px-5 py-4 mt-5 border border-white rounded-lg overflow-x-scroll'>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='max-w-3xl min-h-[688px] text-base mt-4 px-6 py-4 bg-white dark:bg-[#2C3239]'>
                  <h1>Critical - Really need to  be fixed, and will bring big problems and honeypod.</h1>
                  <div className='min-h-[605px] px-5 py-4 mt-5 border border-white rounded-lg overflow-x-scroll'>
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className='max-w-3xl min-h-[688px] text-base mt-4 px-6 py-4 bg-white dark:bg-[#2C3239]'>
                  <div className=''>
                    <h1><span className='text-[#D171FF]'>1. Informational</span> - No need fixed, and will not bring problems.</h1>
                    <p className='mt-4'>Risk Scenario: The owner can set fees up to 100%</p>
                    <p className='mt-4'>Risk Recommendation: Contract Already Renounce 1</p>
                  </div>
                  <div className='min-h-[183px] px-5 py-4 mt-5 border border-white rounded-lg overflow-x-scroll'>
                  </div>
                  <div className='mt-8'>
                    <h1 className='text-[#D171FF]'>2. Max Tx</h1>
                    <p className='mt-3'>Risk Scenario: The owner can set max tx amount with zero value <span className='inline-block'>(but already renounce)</span></p>
                    <p className='mt-4'>Risk Recommendation: Contract Already Renounce</p>
                  </div>
                  <div className='min-h-[183px] px-5 py-4 mt-5 border border-white rounded-lg overflow-x-scroll'>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  )
}
