import { EllipsisVertical } from 'lucide-react';


const ICONS = () => {
  return (
    <div>
      <div className='text-2xl flex justify-end pr-10 -mt-6  text-white'>
        <div >
         <i className="ri-search-line"></i>
        </div>
        <div className="mt-1 -mr-8 ">
         <EllipsisVertical/>
        </div>
      </div>
      <div className="text-white pl-3 pt-1.5 flex justify-start text-2xl">
        <i className="ri-camera-line"></i>
      </div>
    </div>
    
  )
}

export default ICONS
