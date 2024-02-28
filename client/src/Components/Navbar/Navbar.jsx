import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo2 from '../Assets/logo2.png';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';


const Navbar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('shop');
  const {Totalitem }= useContext(ShopContext);

  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/') {
      setActiveMenu('shop');
    } else if (pathname === '/men') {
      setActiveMenu('men');
    } else if (pathname === '/women') {
      setActiveMenu('women');
    } else if (pathname === '/kids') {
      setActiveMenu('kid');
    }
  }, [location.pathname]);
  
  return (
    <div className="bg-white flex justify-between items-center border-b border-gray-400 position: fixed  z-50 w-screen h-auto">
      {/* Left Container */}
      <div className="flex items-center ml-32">
        <img src={logo2} alt="logo" className="w-36 h-24" />
      </div>

      {/* Middle Container */}
      <div className="flex items-center space-x-12 ml-6">
        <Link
          to="/"
          className={`text-black transform hover:scale-125 transition-transform text-[20px] active:border-b active:border-red-500   ${
            activeMenu === 'shop' ? 'active' : ''
          }`}
          onClick={() => setActiveMenu('shop')}

        >
          Shop
        </Link>
        <Link
          to="/men"
          className={`text-black transform hover:scale-125 transition-transform text-[20px] active:border-b active:border-red-500 ${
            activeMenu === 'men' ? 'active' : ''
          }`}
          onClick={() => setActiveMenu('men')}
        >
          Men
        </Link>
        <Link
          to="/women"
          className={`text-black transform hover:scale-125 transition-transform text-[20px] active:border-b active:border-red-500 ${
            activeMenu === 'women' ? 'active' : ''
          }`}
          onClick={() => setActiveMenu('women')}
        >
          Women
        </Link>
        <Link
          to="/kids"
          className={`text-black transform hover:scale-125 transition-transform text-[20px] active:border-b active:border-red-500 ${
            activeMenu === 'kid' ? 'active' : ''
          }`}
          onClick={() => setActiveMenu('kid')}
        >
          Kids
        </Link>
      </div>

      {/* Right Container */}
      <div className="flex items-center space-x-16 mr-48">
        {/* Login Button */}
      
          {localStorage.getItem('token')?
          <button onClick={()=>{localStorage.removeItem('token');window.location.replace('/')}}
           className="bg-white w-32 text-black px-6 py-2 rounded-full text-[20px] border-gray-400 border border-solid">
            Logout
          </button>
          :   <Link to="/loginsignup"><button className="bg-white w-32 text-black px-6 py-2 rounded-full text-[20px] border-gray-400 border border-solid">
            Login
          </button> </Link>
          }  

      

        {/* Shopping Cart Icon */}
        <div className="flex flex-row space-x-0 "> 
          <Link to="/cart">
            <ShoppingCartIcon className="text-gray-600 " style={{ fontSize: 40 }} />
          </Link>
          <span className="text-red-600 text-[20px] fornt-bold ml-1
          flex justify-start items-start  mt-0 mb-auto">{Totalitem()}</span>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
