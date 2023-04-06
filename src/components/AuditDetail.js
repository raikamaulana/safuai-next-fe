import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const audits = [
  { id: 1, name: "Tax / Fee Information", link: "index" },
  { id: 3, name: "Overview Information" },
  { id: 2, name: "Audit Information" },
  { id: 4, name: "Manual Audit" },
  { id: 5, name: "Market Analytic" },
  { id: 6, name: "Contract Inheritance" },
  { id: 7, name: "Token Matric Information" },
  { id: 8, name: "Website Information" },
  { id: 9, name: "Token Holder & LP Information" },
  { id: 10, name: "SAFU AI Automatic Vulnerability Scan" },
  { id: 11, name: "Function Summary" },
];

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
    <div className="fixed top-20 left-10 w-72">
      <Combobox value={selected} onChange={setSelected} nullable>
        <div className="relative mt-1">
          <div className="relative w-full cursor-not-allowed overflow-hidden rounded-lg text-left shadow-md">
            <Combobox.Input
              className="w-full border-none py-2 pl-8 mr-20 text-sm leading-5 bg-[#2C3239] text-white focus:ring-0"
              displayValue={(audit) => audit?.name}
              onChange={(event) => setQuery(event.target.value)}
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
            <Combobox.Options className="absolute mt-1 max-h-screen w-full overflow-auto scrollbar-thin scrollbar-thumb-[#797B88] rounded-md bg-[#161C23] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {audit.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : ""
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
