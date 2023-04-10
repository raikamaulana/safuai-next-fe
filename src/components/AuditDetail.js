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
import MarketAnalytic from "@/pages/market-analytic";

const audits = [
  { id: 1, name: "Tax / Fee Information", link: "/" },
  { id: 3, name: "Overview Information", link: "/" },
  { id: 2, name: "Audit Information", link: "/" },
  { id: 4, name: "Manual Audit", link: "/" },
  { id: 5, name: "Market Analytic", link: "/market-analytic" },
  { id: 6, name: "Contract Inheritance", link: "/" },
  { id: 7, name: "Token Matric Information", link: "/" },
  { id: 8, name: "Website Information", link: "/" },
  { id: 9, name: "Token Holder & LP Information", link: "/" },
  { id: 10, name: "SAFU AI Automatic Vulnerability Scan", link: "/" },
  { id: 11, name: "Function Summary", link: "/" },
];

const empty = [{ id: 1, name: "" }];

export const AuditDetail = () => {
  const [selected, setSelected] = useState(audits[0]);
  const [query, setQuery] = useState("");

  const filteredAudits =
    query === ""
      ? audits
      : audits.filter((audit) =>
          audit.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="fixed top-10 left-28 w-72">
      <Combobox value={selected} onChange={setSelected} nullable>
        {({ open }) => (
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md">
              <Combobox.Input
                className="w-full border-none py-2 pl-8 mr-20 text-sm leading-5 bg-[#2C3239] text-white focus:ring-0"
                displayValue={(audit) => audit?.name}
                defaultValue={empty}
                placeholder="Search"
                onChange={(event) => setQuery(event.target.value)}
                onFocus={(e) => {
                  if (
                    e.relatedTarget?.id?.includes("headlessui-combobox-button")
                  )
                    return;
                  !open && e.target.nextSibling.click();
                }}
              />
              <Combobox.Button className="absolute inset-y-0 left-0 flex items-center pr-2 pl-2">
                <MagnifyingGlassIcon
                  className="h-5 w-4 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-screen w-full overflow-auto scrollbar-thin scrollbar-thumb-[#797B88] rounded-md bg-[#161C23] py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {filteredAudits.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-500">
                    Nothing found.
                  </div>
                ) : (
                  filteredAudits.map((audit) => (
                    <Combobox.Option
                      key={audit.id}
                      className={({ selected, active }) =>
                        `relative cursor-default select-none py-3.5 pl-4 pr-4 ${
                          selected
                            ? "bg-[#20262D] text-white border-l-8 border-[#D171FF]"
                            : "text-white"
                        } ${active ? "bg-[#20262D] text-white" : "text-white"}`
                      }
                      value={audit}
                    >
                      {({ selected, active }) => (
                        <>
                          <Tab.Group>
                            <Tab.List>
                              <Tab>{audit.name}</Tab>
                            </Tab.List>
                            <Tab.Panels>
                              <Tab.Panel>Content 1</Tab.Panel>
                              <Tab.Panel>Content 2</Tab.Panel>
                              <Tab.Panel>Content 3</Tab.Panel>
                            </Tab.Panels>
                          </Tab.Group>
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        )}
      </Combobox>
    </div>
  );
};
