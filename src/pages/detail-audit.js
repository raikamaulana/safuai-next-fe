import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import { Tab } from "@headlessui/react";

const Header = dynamic(
  () => import("@/components/bsafu-ui").then((mod) => mod.Header),
  {
    ssr: false,
  }
);
const FeeInformation = dynamic(
  () => import("@/components/feeinformation").then((mod) => mod.FeeInformation),
  {
    ssr: false,
  }
);
const OverviewInformation = dynamic(
  () =>
    import("@/components/OverviewInformation").then(
      (mod) => mod.OverviewInformation
    ),
  {
    ssr: false,
  }
);
const AuditInformation = dynamic(
  () =>
    import("@/components/auditInformation").then((mod) => mod.auditInformation),
  {
    ssr: false,
  }
);
const ManualAudit = dynamic(
  () => import("@/components/manualAudit").then((mod) => mod.ManualAudit),
  {
    ssr: false,
  }
);
const MarketAnalytic = dynamic(
  () => import("@/components/marketAnalytic").then((mod) => mod.MarketAnalytic),
  {
    ssr: false,
  }
);
const ContractInheritance = dynamic(
  () =>
    import("@/components/contractinheritance").then(
      (mod) => mod.ContractInheritance
    ),
  {
    ssr: false,
  }
);
const ToonsBox = dynamic(
  () => import("@/components/toonsbox").then((mod) => mod.ToonsBox),
  {
    ssr: false,
  }
);
const HolderTaken = dynamic(
  () => import("@/components/HolderTaken").then((mod) => mod.HolderTaken),
  {
    ssr: false,
  }
);
const WebsiteInformation = dynamic(
  () =>
    import("@/components/WebsiteInformation").then(
      (mod) => mod.WebsiteInformation
    ),
  {
    ssr: false,
  }
);
const FunctionSummary = dynamic(
  () =>
    import("@/components/FunctionSummary").then((mod) => mod.FunctionSummary),
  {
    ssr: false,
  }
);
const VulnerabilityScan = dynamic(
  () =>
    import("@/components/vulnerabilityScan").then(
      (mod) => mod.VulnerabilityScan
    ),
  {
    ssr: false,
  }
);

export default function DetailAudit() {
  return (
    <section className="bg-customWhite dark:bg-customBlack duration-500 transition-all">
      <Header />
      <div className="flex lg:pl-28 pl-2 pb-9 pt-24">
        <Tab.Group vertical>
          <Tab.List className="flex flex-col bg-white dark:text-white dark:bg-customDark2 text-left w-80  mr-5 px-3 pt-4 min-h-max">
            <div className="relative flex">
              <input
                type="text"
                className="border w-full border-customWhite bg-white dark:bg-customGrey2 dark:border-none rounded-lg mb-3 placeholder:text-gray-600 pl-11"
                placeholder="Search"
              />
              <svg
                width="20"
                height="20"
                className="absolute top-3 left-3"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.86088 0C13.7521 0 17.7218 3.96968 17.7218 8.86088C17.7218 13.7521 13.7521 17.7218 8.86088 17.7218C3.96968 17.7218 0 13.7521 0 8.86088C0 3.96968 3.96968 0 8.86088 0ZM8.86088 15.7527C12.6681 15.7527 15.7527 12.6681 15.7527 8.86088C15.7527 5.05267 12.6681 1.96909 8.86088 1.96909C5.05267 1.96909 1.96909 5.05267 1.96909 8.86088C1.96909 12.6681 5.05267 15.7527 8.86088 15.7527ZM17.2147 15.8226L20 18.6069L18.6069 20L15.8226 17.2147L17.2147 15.8226Z"
                  fill="#9098A0"
                />
              </svg>
            </div>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-left h-12 pl-1 pr-5 bg-customWhite dark:bg-customGrey2 border-l-8 border-customPurple"
                      : "text-left h-12 pl-3 pr-5"
                  }
                >
                  Tax / Fee Information
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-left h-12 pl-1 pr-5 bg-customWhite dark:bg-customGrey2 border-l-8 border-customPurple"
                      : "text-left h-12 pl-3 pr-5"
                  }
                >
                  Overview Information
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-left h-12 pl-1 pr-5 bg-customWhite dark:bg-customGrey2 border-l-8 border-customPurple"
                      : "text-left h-12 pl-3 pr-5"
                  }
                >
                  Audit Information
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-left h-12 pl-1 pr-5 bg-customWhite dark:bg-customGrey2 border-l-8 border-customPurple"
                      : "text-left h-12 pl-3 pr-5"
                  }
                >
                  Manual Audit
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-left h-12 pl-1 pr-5 bg-customWhite dark:bg-customGrey2 border-l-8 border-customPurple"
                      : "text-left h-12 pl-3 pr-5"
                  }
                >
                  Market Analytic
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-left h-12 pl-1 pr-5 bg-customWhite dark:bg-customGrey2 border-l-8 border-customPurple"
                      : "text-left h-12 pl-3 pr-5"
                  }
                >
                  Contract Inheritance
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-left h-12 pl-1 pr-5 bg-customWhite dark:bg-customGrey2 border-l-8 border-customPurple"
                      : "text-left h-12 pl-3 pr-5"
                  }
                >
                  Token Matric Information
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-left h-12 pl-1 pr-5 bg-customWhite dark:bg-customGrey2 border-l-8 border-customPurple"
                      : "text-left h-12 pl-3 pr-5"
                  }
                >
                  Website Information
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-left h-12 pl-1 pr-5 bg-customWhite dark:bg-customGrey2 border-l-8 border-customPurple"
                      : "text-left h-12 pl-3 pr-5"
                  }
                >
                  Token Holder & LP Information
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-left h-12 pl-1 pr-5 bg-customWhite dark:bg-customGrey2 border-l-8 border-customPurple"
                      : "text-left h-12 pl-3 pr-5"
                  }
                >
                  FU AI Automatic Vulnerability Scan
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <button
                  className={
                    selected
                      ? "text-left h-12 pl-1 pr-5 bg-customWhite dark:bg-customGrey2 border-l-8 border-customPurple"
                      : "text-left h-12 pl-3 pr-5"
                  }
                >
                  Function Summary
                </button>
              )}
            </Tab>
            {/* ...  */}
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <FeeInformation />
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <OverviewInformation />
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <AuditInformation />
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <ManualAudit />
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <MarketAnalytic />
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <ContractInheritance />
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <ToonsBox />
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <WebsiteInformation />
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <HolderTaken />
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <VulnerabilityScan />
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
          <Tab.Panels>
            <Tab.Panel>
              <FunctionSummary />
            </Tab.Panel>
            {/* ... */}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
