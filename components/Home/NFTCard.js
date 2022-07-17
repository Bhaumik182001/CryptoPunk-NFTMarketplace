import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'

const NFTCard = ({ item }) => {
  
  const style = {
    wrapper: 'relative flex h-[450px] w-[340px] cursor-pointer flex-col rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-[#333333] space-between',
    imageContainer: 'h-3/4 overflow-hidden',
    nftImage: 'rounded-t-lg object-cover',
    nftLowerContainer: 'flex h-1/4 flex-col justify-between p-4',
    nftInfoContainer: 'flex justify-between',
    collectionTitle: 'text-sm text-gray-500 dark:text-gray-400',
    nftTitle: 'text-sm font-bold',
    wethImageContainer: 'flex items-center justify-end space-y-1',
    priceContainer: 'flex flex-col items-end justify-center space-y-1',
    priceTitle: 'yext-xs font-light',
    likesContainer: `flex items-center justify-end space-x-2`,
    heartIcon: 'h-3 w-3 text-gray-500 dark:text-400',
    likesCounter: "text-xs text-gray-500 dark:text-gray-400"
  }
  
  return( 
    <div className={style.wrapper}>
    <div className={style.imageContainer}>
      <Image className={style.nftImage}
        src={item.asset.image}
        height={340}
        width={340}
        alt='nt'
        />
    </div>
      <div className={style.nftLowerContainer}>
        <div className={style.nftInfoContainer}>
           <div>
             {item.asset.collection && (
                <div className={style.collectionTitle}>
                  {item.asset?.collection?.name}
                </div>
             )}

             <div className={style.nftTitle}>
               {item.asset.name}
             </div>
          </div>  

          <div className={style.priceContainer}>
            <div className={style.priceTitle}>Buy at</div>
            <div className={style.wethImageContainer}>
              <Image 
                height={16}
                src='/weth-logo.svg'
                width={16}
                alt='weth'
                />
              <div className={style.priveValue}>
                {item.buyoutCurrencyValuePerToken?.displayValue}
              </div>
            </div>
          </div>
        </div>

        <div className={style.likesContainer}>
        <AiOutlineHeart className={style.heartIcon} />
          <div className={style.likeCounter}>
            {item.asset?.stats?.favourite ?? 90}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTCard;