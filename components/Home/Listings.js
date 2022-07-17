import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useMarketplace } from '@thirdweb-dev/react'
import NFTCard from './NFTCard'

const Listings = () => {
  
  const style = {
    wrapper: 'mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'
  }
  
  const marketplace = useMarketplace("0x621a668b9dAd954a885956FA108F68194382ab26");

  const [listings, setListings] = useState([]);
  
  useEffect(()=>{
   getListings(); 
 },[])
  
  const getListings = async () => {
    try {
      const list = await marketplace.getActiveListings();
      setListings(list)
    } catch(error) {
      console.log(error);
    }
  }
  return(
    <div className= {style.wrapper}>
      {listings.length > 0 ? (
      <>
        {listings?.map((item, index)=>(
          <Link
          href={`/assets/${item.assetContractAddress}/${item.id}`}
          key = {index} >
          <a> <NFTCard item={item}/></a>
          </Link>
       
        
        ))}
      </>
      ) : (
      <div>Loading</div>
      )}
    </div>
  )
}

export default Listings