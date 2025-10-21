import 'remixicon/fonts/remixicon.css'
import Titles from './Navbar/Titles';
import Headings from './Navbar/Headings';
import ICONS from './Navbar/ICONS';
// import Body from './Navbar/Body-part';

const Navbar = () => {
  return (
    <div className="w-full h-24 bg-[#075E54] rounded-t-3xl border-black-500 border-2 ">   
    <div>
       <Titles/>
      <div>
        <ICONS/>
      </div>
     <Headings/>
      </div>  
</div>    
  )
}

export default Navbar
