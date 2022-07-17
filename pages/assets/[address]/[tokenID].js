 import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAddress, useMarketplace } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'
import NFTImage from '../../../components/NFTDetails/NFTImage'
import TopNavbarLayout from '../../../layouts/TopNavbarLayout'
import NFTSalesInfo from '../../../components/NFTDetails/NFTSalesInfo'
import NFTDetails from '../../../components/NFTDetails/NFTDetails'
import NFTBasicInfo from '../../../components/NFTDetails/NFTBasicInfo'

const style = {
    wrapper: 'flex h-[100vh] mx-auto max-w-2xl flex-col space-y-4 py-4 dark:bg-[#202226] lg:max-w-none lg:py-8 lg:px-24',
    nftContainer: 'flex flex-col lg:flex-row lg:space-x-4',
  leftContainer: 'flex flex-col space-y-4',
  leftElement: 'hidden lg:block',
  rightContainer: 'flex flex-col space-y-4 flex-1',
  buyoutContainer: 'flex-1'
  }

const NFT = () => {


  const [listing, setListing] = useState()
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { tokenID } = router.query
  
  const marketplace = useMarketplace("0x621a668b9dAd954a885956FA108F68194382ab26");

  
  const address = useAddress();

  useEffect(()=> {
    getListing();
  },[])

  useEffect(()=> {
    if(!address) {
      router.replace('/')
    }
  },[address])
  
  const getListing = async () => {
    try {
      setLoading(true)
      const listing = await marketplace.getListing(BigNumber.from(tokenID));
      
      setListing(listing)
      setLoading(false)
      
    }catch(error){
      console.log(error)
    }
  }

  const buyNFT = async () => {
    try {
      await marketplace.buyoutListing(tokenID, 1)
    }catch(error){
      console.log(error)
    }
  }

console.log(listing?.asset?.description)
 
  return(
      <TopNavbarLayout>
        <div className={style.wrapper}>
          {loading ? (
          <div>Loading...</div>
          ) : (
        <div className={style.nftContainer}>
          <div className={style.leftContainer}>
            <div className={style.leftElement}>
              <NFTImage image = {listing?.asset?.image}/>
            </div>

            <div className={style.leftElement}>
             <NFTDetails desc={listing?.asset?.description}/> 
            </div>
          </div>

          <div className={style.rightContainer}>
            <NFTBasicInfo desc={listing?.asset?.name}/>

            <div className={style.buyoutContainer}>
             <NFTSalesInfo price={listing?.buyoutCurrencyValuePerToken.displayValue} buyNFT={buyNFT}/> 
            </div>
          </div>
        </div>
          )}
        </div>
      </TopNavbarLayout>
    
    
  )
}

export default NFT