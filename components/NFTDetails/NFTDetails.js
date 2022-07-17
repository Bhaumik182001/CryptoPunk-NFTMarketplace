import {GrTextAlignLeft} from 'react-icons/gr'
import {BsFillBookmarkFill} from 'react-icons/bs'
import Dropdown from './Dropdown'

const style = {
  wrapper: 'flex flex-col divide-y rounded-lg overflow-hidden border dark:divide-black dark:border-black',
  icon: 'h-5 w-5 text-hray-600'
}

const NFTDetails = ({item, desc}) => {
  const dropdownData = [
    {  
      title: 'Description',
      icon: <GrTextAlignLeft className={style.icon} />
  },
  {
    title: 'Properties',
    icon: <BsFillBookmarkFill className={style.icon} />
  },
  ]
  return(
    <div className={style.wrapper}>
      {dropdownData.map((item, index)=> (
      <Dropdown key={index} title={item.title} icon={item.icon} desc={desc}/>
      ))}
    
    </div>
  )
}

export default NFTDetails