import Head from 'next/head'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import  Main  from '../components/Home'

export default function Home() {
  
  const style = {
    wrapper: 'flex h-screen items-center justify-center',
    connectWalletButton: 'rounded-lg border border-black px-10 py-5 transition-a hover:bg-black hover:text-white',
    icons: "flex red"
  }

  const connectWithMetamask = useMetamask();
  const address = useAddress();
 

  const Auth = () => {
    return(
      <div className={style.wrapper}>
        <Head>
        <title>OpenSea-CryptoPunk</title>
        <link rel="icon" href="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png" />
      </Head>
        <button onClick={connectWithMetamask}
        className={style.connectWalletButton}  
        >Connect     
        Metamask</button>
      </div>
    )
  }

  return<>{address ? <Main /> : Auth()}</>

}
