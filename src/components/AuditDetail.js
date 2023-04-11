import { Fragment, useState } from "react";
import { Combobox, Tab, Transition } from "@headlessui/react";
import {
  PauseIcon,
  ArrowDownIcon,
  ChevronDownIcon,
  CheckIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

// const audits = [
//   { id: 1, name: "Tax / Fee Information", link: "/" },
//   { id: 3, name: "Overview Information", link: "/" },
//   { id: 2, name: "Audit Information", link: "/" },
//   { id: 4, name: "Manual Audit", link: "/" },
//   { id: 5, name: "Market Analytic", link: "/market-analytic" },
//   { id: 6, name: "Contract Inheritance", link: "/" },
//   { id: 7, name: "Token Matric Information", link: "/" },
//   { id: 8, name: "Website Information", link: "/" },
//   { id: 9, name: "Token Holder & LP Information", link: "/" },
//   { id: 10, name: "SAFU AI Automatic Vulnerability Scan", link: "/" },
//   { id: 11, name: "Function Summary", link: "/" },
// ];

export const AuditDetail = () => {
  // const [selected, setSelected] = useState(audits[0]);
  // const [query, setQuery] = useState("");

  // const filteredAudits =
  //   query === ""
  //     ? audits
  //     : audits.filter((audit) =>
  //         audit.name
  //           .toLowerCase()
  //           .replace(/\s+/g, "")
  //           .includes(query.toLowerCase().replace(/\s+/g, ""))
  //       );

  return (
    // <div className="fixed top-10 left-28 w-72">
    //   <Combobox value={selected} onChange={setSelected} nullable>
    //     {({ open }) => (
    //       <div className="relative mt-1">
    //         <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md">
    //           <Combobox.Input
    //             className="w-full border-none py-2 pl-8 mr-20 text-sm leading-5 bg-[#2C3239] text-white focus:ring-0"
    //             displayValue={(audit) => audit?.name}
    //             defaultValue={empty}
    //             placeholder="Search"
    //             onChange={(event) => setQuery(event.target.value)}
    //             onFocus={(e) => {
    //               if (
    //                 e.relatedTarget?.id?.includes("headlessui-combobox-button")
    //               )
    //                 return;
    //               !open && e.target.nextSibling.click();
    //             }}
    //           />
    //           <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pr-2 pl-2">
    //             <MagnifyingGlassIcon
    //               className="h-5 w-4 text-gray-400"
    //               aria-hidden="true"
    //             />
    //           </Combobox.Button>
    //         </div>
    //         <Transition
    //           as={Fragment}
    //           leave="transition ease-in duration-100"
    //           leaveFrom="opacity-100"
    //           leaveTo="opacity-0"
    //           afterLeave={() => setQuery("")}
    //         >
    //           <Combobox.Options className="absolute mt-1 max-h-screen w-full overflow-auto scrollbar-thin scrollbar-thumb-[#797B88] rounded-md bg-[#161C23] py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //             {filteredAudits.length === 0 && query !== "" ? (
    //               <div className="relative cursor-default select-none py-2 px-4 text-gray-500">
    //                 Nothing found.
    //               </div>
    //             ) : (
    //               filteredAudits.map((audit) => (
    //                 <Combobox.Option
    //                   key={audit.id}
    //                   className={({ selected, active }) =>
    //                     `relative cursor-default select-none py-3.5 pl-4 pr-4 ${
    //                       selected
    //                         ? "bg-[#20262D] text-white border-l-8 border-[#D171FF]"
    //                         : "text-white"
    //                     } ${active ? "bg-[#20262D] text-white" : "text-white"}`
    //                   }
    //                   value={audit}
    //                 >
    //                   {({ selected, active }) => (
    //                     <>
    //                       <Tab.Group>
    //                         <Tab.List>
    //                           <Tab>{audit.name}</Tab>
    //                         </Tab.List>
    //                         <Tab.Panels>
    //                           <Tab.Panel>Content 1</Tab.Panel>
    //                           <Tab.Panel>Content 2</Tab.Panel>
    //                           <Tab.Panel>Content 3</Tab.Panel>
    //                         </Tab.Panels>
    //                       </Tab.Group>
    //                     </>
    //                   )}
    //                 </Combobox.Option>
    //               ))
    //             )}
    //           </Combobox.Options>
    //         </Transition>
    //       </div>
    //     )}
    //   </Combobox>
    // </div>
    <section className="dark:bg-[#0D1116] bg-[#E8ECEF] dark:text-white  w-full lg:pl-36 lg:pr-32 px-2 md:px-5 pb-9 pt-6 duration-500 transition-all">
      <div className="lg:flex md:flex text-xs font-normal">
        <Tab.Group vertical>
          <Tab.List className="flex lg:flex-col md:flex-col lg:max-w-max text-start overflow-x-scroll overflow-y-hidden lg:px-2 lg:mr-5 md:mr-5 lg:overflow-x-hidden md:overflow-x-hidden mb-6 md:mb-0 lg:mb-0">
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  border border-customPurple text-left lg:py-[7px] lg:px-[19px] lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-[7px] md:px-[19px] md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1"
                      : "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  text-left lg:py-2 lg:px-5 lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-5 md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                  }
                >
                  Functions that send Ether to arbitary detinations
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  border border-customPurple text-left lg:py-2 lg:px-[19px] lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-[19px] md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1"
                      : "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  text-left lg:py-2 lg:px-5 lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-5 md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                  }
                >
                  Reentrancy Vulnerabilities
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  border border-customPurple text-left lg:py-2 lg:px-[19px] lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-[19px] md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                      : "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  text-left lg:py-2 lg:px-5 lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-5 md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                  }
                >
                  Unesed Return
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  border border-customPurple text-left lg:py-2 lg:px-[19px] lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-[19px] md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                      : "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  text-left lg:py-2 lg:px-5 lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-5 md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                  }
                >
                  Local Variable Shadowing
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  border border-customPurple text-left lg:py-2 lg:px-[19px] lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-[19px] md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                      : "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  text-left lg:py-2 lg:px-5 lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-5 md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                  }
                >
                  Missing Event Arithmetic
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  border border-customPurple text-left lg:py-2 lg:px-[19px] lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-[19px] md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                      : "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  text-left lg:py-2 lg:px-5 lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-5 md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                  }
                >
                  Missing Zero Address Validation
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  border border-customPurple text-left lg:py-2 lg:px-[19px] lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-[19px] md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                      : "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  text-left lg:py-2 lg:px-5 lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-5 md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                  }
                >
                  Reentrancy Vulnerabilities
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  border border-customPurple text-left lg:py-2 lg:px-[19px] lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-[19px] md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                      : "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  text-left lg:py-2 lg:px-5 lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-5 md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                  }
                >
                  Reentrancy Vulnerabilities
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  border border-customPurple text-left lg:py-2 lg:px-[19px] lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-[19px] md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                      : "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  text-left lg:py-2 lg:px-5 lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-5 md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                  }
                >
                  Assembly Usage
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  border border-customPurple text-left lg:py-2 lg:px-[19px] lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-[19px] md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                      : "dark:bg-customDark bg-white rounded-lg duration-100 text-xs  text-left lg:py-2 lg:px-5 lg:w-60 lg:mr-0 lg:h-14 md:mr-0 md:py-2 md:px-5 md:w-60 md:h-14 leading-5 mb-4 px-4 min-w-max md:min-w-full lg:min-w-full h-12 mr-1 "
                  }
                >
                  Dead-Code
                </button>
              )}
            </Tab>
            {/* ...  */}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className=" md:px-0 lg:px-0">
                <div className="flex mb-3">
                  <p className=" mr-[105px]">Impact</p>
                  <p className="">Confidence</p>
                  <p className=" ml-auto mr-0">Detector</p>
                </div>
                <div className="flex mb-6">
                  <button className="bg-[#BB0000]  text-white rounded-lg duration-100 pb-3 pt-2.5 px-6 w-32 mr-3">
                    High
                  </button>
                  <button className="bg-[#DB7B35]  text-white rounded-lg duration-100 pb-3 pt-2.5 px-6 w-32 mr-3">
                    Medium
                  </button>
                  <button className="bg-customDark text-white rounded-lg duration-100 pb-3 pt-2.5 px-4 ml-auto mr-0">
                    Arbitrary-send-eth
                  </button>
                </div>
                <div>
                  <p className=" mb-3">Solidity Scanning Line</p>
                  <textarea className="dark:bg-customDark bg-white resize-none w-full lg:w-[529px] h-52 rounded-lg duration-100 border-none  text-sm mb-3"></textarea>
                  <p className=" mb-3">Case Description</p>
                  <textarea className="dark:bg-customDark bg-white resize-none w-full h-10 rounded-lg duration-100 border-none  text-sm mb-3"></textarea>
                  <p className=" mb-3">Exploit Scenario</p>
                  <textarea className="dark:bg-customDark bg-white resize-none w-full h-14 rounded-lg duration-100 border-none  text-sm mb-3"></textarea>
                  <p className=" mb-3">Exploit Explanation</p>
                  <textarea className="dark:bg-customDark bg-white resize-none w-full h-20 rounded-lg duration-100 border-none  text-sm mb-3"></textarea>
                  <p className=" mb-3">Recommendation</p>
                  <textarea className="dark:bg-customDark bg-white resize-none w-full h-20 rounded-lg duration-100 border-none  text-sm mb-3"></textarea>
                </div>
              </div>
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <div className="">
                <div className="flex mb-3">
                  <p className=" mr-[105px]">Impact</p>
                  <p className="">Confidence</p>
                  <p className=" ml-auto mr-0">Detector</p>
                </div>
                <div className="flex mb-6">
                  <button className="bg-[#BB0000]  rounded-lg duration-100 pb-3 pt-2.5 px-6 w-32 mr-3">
                    High
                  </button>
                  <button className="bg-[#DB7B35]  rounded-lg duration-100 pb-3 pt-2.5 px-6 w-32 mr-3">
                    Medium
                  </button>
                  <button className="dark:bg-customDark bg-white  rounded-lg duration-100 pb-3 pt-2.5 px-4 ml-auto mr-0">
                    Arbitrary-send-eth
                  </button>
                </div>
                <div>
                  <p className=" mb-3">Solidity Scanning Line</p>
                  <textarea className="dark:bg-customDark bg-white resize-none w-full lg:w-[529px] h-52 rounded-lg duration-100 border-none  mb-3"></textarea>
                  <p className=" mb-3">Case Description</p>
                  <textarea className="dark:bg-customDark bg-white resize-none w-full h-10 rounded-lg duration-100 border-none  text-[8px] mb-3">
                    {" "}
                    Detection of the reentrancy bug. Do not report reentrancies
                    that don't involve Ether (see reentrancy-no-eth)
                  </textarea>
                  <p className=" mb-3">Exploit Scenario</p>
                  <textarea className="dark:bg-customDark bg-white resize-none w-full h-14 rounded-lg duration-100 border-none  text-sm mb-3"></textarea>
                  <p className=" mb-3">Exploit Explanation</p>
                  <textarea className="dark:bg-customDark bg-white resize-none w-full h-20 rounded-lg duration-100 border-none  text-sm mb-3"></textarea>
                  <p className=" mb-3">Recommendation</p>
                  <textarea className="dark:bg-customDark bg-white resize-none w-full h-20 rounded-lg duration-100 border-none  text-sm mb-3"></textarea>
                </div>
              </div>
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel></Tab.Panel>
            {/* ... */}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
};
