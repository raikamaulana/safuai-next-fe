import Head from "next/head";
import axios from "axios";
import dynamic from "next/dynamic";

const Header = dynamic(
  () => import("@/components/bsafu-ui").then((mod) => mod.Header),
  {
    ssr: false,
  }
);

const SafuAiHero = dynamic(
  () => import("@/components/safuaiHero").then((mod) => mod.safuaiHero),
  {
    ssr: false,
  }
);

const Collaborator = dynamic(
  () => import("@/components/Collaborator").then((mod) => mod.Collaborator),
  {
    ssr: false,
  }
);

const AuditInfo = dynamic(
  () => import("@/components/AuditInfo").then((mod) => mod.AuditInfo),
  {
    ssr: false,
  }
);

const HowWork = dynamic(
  () => import("@/components/HowWork").then((mod) => mod.HowWork),
  {
    ssr: false,
  }
);

const ServiceProducts = dynamic(
  () =>
    import("@/components/ServiceProducts").then((mod) => mod.ServiceProducts),
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
const VulnerabilityScan = dynamic(
  () =>
    import("@/components/vulnerabilityScan").then(
      (mod) => mod.VulnerabilityScan
    ),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Blocksafu is a platform that offers high-quality security products and services for blockchain networks that support multiple networks. Our services include auditing smart contracts written in Solidity, KYC, bounty hunting for scammers, token scanning, and vulnerability scanning to ensure the security of your blockchain network."
        />
        <meta
          name="keywords"
          content="audit smart contract solidity, kyc, bounty scammer, token scanner, vulnerability scanner, blockchain security, next.js website"
        />
        <meta name="author" content="Blocksafu" />
        <meta name="robots" content="index, follow" />
        <meta name="canonical" href="https://www.blocksafu.com" />
        <meta
          property="og:title"
          content="Blocksafu - Audit Smart Contract Solidity, KYC, Bounty Scammer, Token Scanner, and Vulnerability Scanner Platform"
        />
        <meta
          property="og:description"
          content="Blocksafu offers high-quality security products and services for blockchain networks that support multiple networks. Our services include auditing smart contracts written in Solidity, KYC, bounty hunting for scammers, token scanning, and vulnerability scanning to ensure the security of your blockchain network."
        />
        <meta property="og:image" content="images/hero.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.blocksafu.com" />
        <meta property="og:site_name" content="Blocksafu" />
        <meta
          name="twitter:title"
          content="Blocksafu - Audit Smart Contract Solidity, KYC, Bounty Scammer, Token Scanner, and Vulnerability Scanner Platform"
        />
        <meta
          name="twitter:description"
          content="Blocksafu offers high-quality security products and services for blockchain networks that support multiple networks. Our services include auditing smart contracts written in Solidity, KYC, bounty hunting for scammers, token scanning, and vulnerability scanning to ensure the security of your blockchain network."
        />
        <meta name="twitter:image" content="images/hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Blocksafu" />
        <meta name="twitter:creator" content="@Blocksafu" />
        <meta name="application-name" content="Blocksafu" />
        <meta name="apple-mobile-web-app-title" content="Blocksafu" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="icons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <title>
          Blocksafu - Audit Smart Contract Solidity, KYC, Bounty Scammer, Token
          Scanner, and Vulnerability Scanner Platform
        </title>
      </Head>
      {/* <Header /> */}
      <AuditDetail />
      {/* <OurSquad /> */}
      {/* <Footer /> */}
    </>
  );
}
