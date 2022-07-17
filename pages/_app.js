import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return(
    <ThirdwebProvider
      desiredChainId = {ChainId.Rinkeby}
      chainRpc={{
        [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3/1f0786e9d8984d8d8bf9d049114b67f0'
      }}
      >
      <ThemeProvider>
       <Component {...pageProps} />
      </ThemeProvider>
   </ThirdwebProvider>
  ) 
}

export default MyApp
