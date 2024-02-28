
import logo2 from '../../assets/Assets/logo2.png';
import profile from '../../assets/Assets/profile.png';
import Dropdown from '@mui/icons-material/ArrowDropDown';


const Navbar = () => {
 
  
  
  return (
    <div className="bg-white flex justify-between items-center border-b border-gray-400 position: fixed  z-50 w-screen h-auto">
      {/* Left Container */}
      <div className="flex items-center ml-32 flex-row">
        <img src={logo2} alt="logo" className="w-36 h-24" />
        <p className='text-yellow-500 text-[20px]'> Admin panel</p>
      </div>

      {/* Middle Container*/}
      <div className="flex items-center space-x-12 ml-6">
        
      </div>

      {/* Right Container */}
      <div className="flex items-center space-x-2 mr-48 flex-rw">
        <img src={profile} alt="logo" className="w-20 h-20 bg-gray-200 border rounded-full" />
        <Dropdown className='text-black'/>


        
    </div>
    </div>
  );
};

export default Navbar;
