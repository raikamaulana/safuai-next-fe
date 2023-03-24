import '../styles/globals.css'
import Web3Provider from '../web3-provider'

export default function App({ Component, pageProps }) {
  return (
    <Web3Provider>
      <Component {...pageProps} />
    </Web3Provider>
  )
}
