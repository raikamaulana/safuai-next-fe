import React, { Fragment } from "react";
import dynamic from "next/dynamic";
import { Tab } from "@headlessui/react";
import Image from 'next/image';

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
              <Image
                width="20"
                height="20"
                className="absolute top-3 left-3"
                src="/images/Search-Icon.svg"
                />
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
