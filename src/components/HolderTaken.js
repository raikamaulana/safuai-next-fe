import React from "react";

export const HolderTaken = () => {
  return (
    <div className="dark:bg-[#1B1F28] min-h-screen lg:px-40 pt-36 py-10 flex transition-all duration-500 overflow-hidden">
      <div className="bg-[#2C3239] lg:mx-56 sm:mx-24 pt-3 pb-20">
        <div className="pb-10 pt-2 pl-7 text-2xl text-white">
          Search :
          <input
            className="bg-transparent pr-7 py-4 mt-1 mx-4 w-56"
            type="text"
          />
        </div>
        <div className="text-white grid lg:grid-cols-3 grid-cols-3 text-xl px-5 justify-between">
          <h1 className="py-3 px-3 ">#</h1>
          <h1 className="py-3 w-40 mr-8 lg:-ml-28 md:-ml-28 -ml-16 ">Contract Address</h1>
          <h1 className="py-3 ml-auto mr-3">Ballance</h1>
        </div>
        <div className="text-white text-lg grid grid-cols-3 px-1 mx-8 border justify-between mb-4">
          <p className="py-3 mr-auto ml-4">1</p>
          <p className="pr-88 py-3 lg:-ml-28 md:-ml-28 -ml-16">0x8f0.....6522c</p>
          <p className="py-3 ml-auto mr-3">1000</p>
        </div>
        <div className="text-white text-lg grid grid-cols-3 px-1 mx-8 border justify-between">
          <p className="py-3 mr-auto ml-4">1</p>
          <p className="pr-80 py-3 lg:-ml-28 md:-ml-28 -ml-16">0x8f0.....6522c</p>
          <p className="py-3 ml-auto mr-3">0</p>
        </div>
        <div className="text-white flex text-lg px-5 mb-10">
          <h1 className="px-3 py-3">Showing 0 to 0 of 0 entries</h1>
          <h1 className="py-3 ml-auto mr-6">Firts</h1>
          <h1 className="py-3 mr-3">Last</h1>
        </div>
        <div className="pb-10 pt-2 pl-7 text-2xl text-white">
          Search :
          <input
            className="bg-transparent pr-7 py-4 mt-1 mx-4 w-56"
            type="text"
          />
        </div>
        <div className="text-white grid grid-cols-3 text-xl px-5 justify-between">
          <h1 className="px-3 py-3">#</h1>
          <h1 className="py-3 mr-8 lg:-ml-28 -ml-16">Contract Address</h1>
          <h1 className="py-3 ml-auto mr-3">Ballance</h1>
        </div>
        <div className="text-white text-lg grid grid-cols-3 px-1 mx-8 border justify-between mb-4">
          <p className="py-3 mr-auto ml-4">1</p>
          <p className="pr-88 py-3 lg:-ml-28 -ml-16">0x8f0.....6522c</p>
          <p className="py-3 ml-auto mr-3">1000</p>
        </div>
        <div className="text-white text-lg grid grid-cols-3 px-1 mx-8 border justify-between">
          <p className="py-3 mr-auto ml-4">1</p>
          <p className="pr-80 py-3 lg:-ml-28 -ml-16">0x8f0.....6522c</p>
          <p className="py-3 ml-auto mr-3">0</p>
        </div>
        <div className="text-white flex text-lg px-5 justify-between">
          <h1 className="px-3 py-3">Showing 0 to 0 of 0 entries</h1>
          <h1 className="py-3 ml-auto mr-7">Firts</h1>
          <h1 className="py-3 mr-3">Last</h1>
        </div>
      </div>
    </div>
  );
};
