import { Link } from "react-router-dom";
import logo2 from "../Assets/logo2.png";
import instagram from "../Assets/instagram.jpg";
import facebook from "../Assets/facebook.jpg";
import twitter from "../Assets/twitter.jpg";
import linkedin from "../Assets/linkedin.jpg";

const Footer = () => {
    return (
    
      <div className=" mt-10 mb-0 flex flex-col justify-center items-center w-full h-[350px]
        ">
        {/* upper Container */}
        <div className=" bg-gray-50 w-full h-[320px] border-b 
        border-gray-400  ">
        <div className="flex  w-full    h-1/3 justify-center  ">
          <img src={logo2} alt="logo" className="w-40 h-full" />
        </div>
  
        {/* lower Container */}
        <div className="w-full flex flex-row  h-1/10 justify-center   mt-2  ">
            <Link to="/company" className="text-black m-4">Company</Link>
            <Link to="/product" className="text-black m-4">Product</Link>
            <Link to="/offices" className="text-black m-4">Offices</Link>
            <Link to="/about" className="text-black m-4">About</Link>
            <Link to="/contact" className="text-black m-4">Contact</Link>
            
          
          
        </div>
        {/* link*/}
        <div className="w-full flex flex-row h-1/10 justify-center  mt-auto ">
          <img src={instagram   } alt="instagram" className="w-10 h-10 m-4" />
          <img src={facebook} alt="facebook" className="w-10 h-10 m-4" />
            <img src={twitter} alt="twitter" className="w-10 h-10 m-4" />
            <img src={linkedin} alt="linkedin" className="w-10 h-10 m-4" />
          
        </div>
        </div>
        {/* copyright */}
        <div className="w-full flex  h-1/10 justify-center    bg-white ">
          <p className="text-black m-4">© 2024 ሀበሻ Cloth. All rights reserved</p>
          
        </div>

      </div>
      
    );
  };
  
  export default Footer;
  