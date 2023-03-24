import { InjectedConnector } from '@web3-react/injected-connector'
// import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector, URI_AVAILABLE } from '@web3-react/walletconnect-connector'
// import { WalletLinkConnector } from '@web3-react/walletlink-connector'
// import { LedgerConnector } from '@web3-react/ledger-connector'
// import { TrezorConnector } from '@web3-react/trezor-connector'
// import { FrameConnector } from '@web3-react/frame-connector'
// import { AuthereumConnector } from '@web3-react/authereum-connector'
// import { FortmaticConnector } from '@web3-react/fortmatic-connector'
// import { MagicConnector } from '@web3-react/magic-connector'
// import { PortisConnector } from '@web3-react/portis-connector'
// import { SquarelinkConnector } from '@web3-react/squarelink-connector'
// import { TorusConnector } from '@web3-react/torus-connector'
// import { OneWalletConnector } from '@harmony-react/onewallet-connector'
// import { MathWalletConnector } from '@harmony-react/mathwallet-connector'

const POLLING_INTERVAL = 12000

export const injected = new InjectedConnector({ supportedChainIds: [56,97] })

// export const network = new NetworkConnector({
//     urls: {
//         56: 'https://bsc-dataseed.binance.org',
//         97: 'https://data-seed-prebsc-1-s1.binance.org:8545'
//     },
//     defaultChainId: 56
// })

export const walletconnect = new WalletConnectConnector({
    rpc: {
        97: "https://data-seed-prebsc-1-s1.binance.org:8545"
    },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    connected: false,
    pollingInterval: POLLING_INTERVAL
})
//
// export const walletlink = new WalletLinkConnector({
//     url: RPC_URLS[1],
//     appName: 'web3-react example'
// })
//
// export const ledger = new LedgerConnector({ chainId: 1, url: RPC_URLS[1], pollingInterval: POLLING_INTERVAL })
//
// export const trezor = new TrezorConnector({
//     chainId: 1,
//     url: RPC_URLS[1],
//     pollingInterval: POLLING_INTERVAL,
//     manifestEmail: 'dummy@abc.xyz',
//     manifestAppUrl: 'http://localhost:1234'
// })
//
// export const frame = new FrameConnector({ supportedChainIds: [1] })
//
// export const authereum = new AuthereumConnector({ chainId: 42 })
//
// export const fortmatic = new FortmaticConnector({ apiKey: process.env.FORTMATIC_API_KEY as string, chainId: 4 })
//
// export const magic = new MagicConnector({
//     apiKey: process.env.MAGIC_API_KEY as string,
//     chainId: 4,
//     email: 'hello@example.org'
// })
//
// export const portis = new PortisConnector({ dAppId: process.env.PORTIS_DAPP_ID as string, networks: [1, 100] })
//
// export const squarelink = new SquarelinkConnector({
//     clientId: process.env.SQUARELINK_CLIENT_ID as string,
//     networks: [1, 100]
// })
//
// export const torus = new TorusConnector({ chainId: 1 })
//
// export const onewallet = new OneWalletConnector({ chainId: 1 })
//
// export const mathwallet = new MathWalletConnector({ chainId: 1 })
