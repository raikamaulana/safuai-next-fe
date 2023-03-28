export const getExplorerApiUrl = ({ chain, address }) => {
  // console.log('Chain Id get', chain);
  switch (chain) {
    case "1":
      return `https://api.etherscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=H74JNUTV7GG3MSJIJY9FVDS3QUV9M7W6S3`;
    case "56":
      return `https://api.bscscan.com/api?module=contract&action=getsourcecode&address=${address}&apikey=NA4XYPE4QGPI7KPFNJYCZMM5JUI2A64XQF`;
    case "97":
      return `https://api-testnet.bscscan.com/api?module=contract&action=getsourcecode&address=${address}&apikey=NA4XYPE4QGPI7KPFNJYCZMM5JUI2A64XQF`;
    case "137":
      return `https://api.polygonscan.com/api?module=contract&action=getsourcecode&address=${address}&apikey=WN7H195PU59BN1TIZTNSJ9ZVQS76ZPNXYI`;
    case "80001":
      return `https://api-testnet.polygonscan.com/api?module=contract&action=getsourcecode&address=${address}&apikey=WN7H195PU59BN1TIZTNSJ9ZVQS76ZPNXYI`;
    case "43114": // Avalanche Mainnet
      return `https://api.snowtrace.io/api?module=contract&action=getsourcecode&address=${address}&apikey=ZM3T8I43K82711MRKXR9EHTI9U6VYYDX1N`;
    case "43113": // Avalanche Fuji Testnet
      return `https://api-testnet.snowtrace.io//api?module=contract&action=getsourcecode&address=${address}&apikey=ZM3T8I43K82711MRKXR9EHTI9U6VYYDX1N`;
    case "250": // Fantom Mainnet
      return `https://api.ftmscan.com/api?module=contract&action=getsourcecode&address=${address}&apikey=5WE7EW4CXKP9HA6JUWPTMAZYV7WK4BAVXC`;
    case "4002": // Fantom Testnet
      return `https://api-testnet.ftmscan.com/api?module=contract&action=getsourcecode&address=${address}&apikey=5WE7EW4CXKP9HA6JUWPTMAZYV7WK4BAVXC`;
    case "42161": // Arbitrum Mainnet
      return `https://api.arbiscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=REBAMM9GXZTWT5416BB3JTNFKPSCCFP1T5`;
    case "42170": // Arbitrum Rinkeby Testnet
      return `https://api-goerli.arbiscan.io/api?module=contract&action=getsourcecode&address=${address}&apikey=REBAMM9GXZTWT5416BB3JTNFKPSCCFP1T5`;
    default:
      return `https://api.bscscan.com/api?module=contract&action=getsourcecode&address=${address}&apikey=NA4XYPE4QGPI7KPFNJYCZMM5JUI2A64XQF`;
  }
};
