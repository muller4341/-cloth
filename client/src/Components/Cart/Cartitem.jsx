
import  { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Remove from '@mui/icons-material/Close';


const Cartitem = () => {
    const {allproduct, cartitems, Removefromcart, Totalcartamount} = useContext(ShopContext);
    return (
        <div className=" w-full h-auto   flex justify-center items-center   ">
         <div className="  flex flex-col h-auto  w-3/4 justify-start items-center  mt-40">
            <div className=" flex flex-row justify-center space-x-36  w-full">
                <p className="text-black font-bold text-[16px] w-20 ml-6">Products</p>
                <p className="text-black font-bold text-[16px] w-40 " >Title</p>
                <p className="text-black font-bold text-[16px] w-10"> Price</p>
                <p className="text-black font-bold text-[16px] w-10">Quqntity</p>
                <div className=" flex flex-row space-x-32">
                <p className="text-black font-bold text-[16px] w-10"> Total</p>
                <p className="mr-4 text-black flex font-bold">Remove
                </p>
                </div>
            </div>
            {allproduct.map((e) => {
                if (cartitems[e.id] > 0) {
                    return (
                        <div key={e.id} className="w-full mb-0 "> 
                            <div className="flex flex-row  space-x-36 mt-4justify-center items-center
                            border-t border-b border-gray-300">
                                <img src={e.img} alt="product" className="w-20 h-30 bg-gray-200" />
                                <p className="w-40  text-black">{e.name}</p>
                                <p className="w-10 text-black">${e.newprice}</p>
                                <button className="w-10 h-10 border border-gray-300 rounded-lg">{cartitems[e.id]}</button>
                                <p className="w-10">{e.newprice * cartitems[e.id]}</p>
                                <Remove onClick={() => { Removefromcart(e.id) }} className="w-10" />
                            </div>
                        </div>
                    );
                    
                }
                return null;
            })}
            <div className=" flex flex-row w-full h-auto mt-20">
                {/* left */}
            <div className=" flex  flex-col w-1/2 ">
                 
                    <p className="text-black font-bold text-[28px]"> Cart Totals</p>
                    
                        <div className="flex flex-row mt-8  border-b border-gray-200 ">
                            <p className=" text-black  text-[18px] mb-3">Subtotal</p>
                            <p className=" text-black  text-[18px] mb-3 ml-auto">${Totalcartamount()}</p>
                            
                        </div >
                        <div className="flex flex-row mt-4  border-b border-gray-200 ">
                            <p className=" text-black  text-[18px] mb-3">Shipping</p>
                            <p className=" text-black  text-[18px] mb-3 ml-auto">Free</p>
                        </div>
                        <div className="flex flex-row mt-4    ">
                            <p className=" text-black font-bold text-[18px] mb-3">Total</p>
                            <p className=" text-black font-bold text-[18px] mb-3 ml-auto">${Totalcartamount()}</p>
                       </div>
                   
                   <div className="mt-8">
                          <button className="w-60 h-16 bg-red-500 hover:bg-red-800 rounded-lg text-[18px] text-white">Proceed to checkout</button>
                   </div>
                   
                     </div>
                   {/* right */}
                   <div className=" w-1/2 h-auto">
                   <div className="ml-10 flex flex-col">
                          <p className="text-black text-[22px]">If you have promo code inter here </p>
                          <div className="flex flex-row mt-4">
                                <input type="text" 
                                className=" w-60 h-12 rounded-lg bg-gray-200 justify-center
                                border border-gray-300 items-center"
                                placeholder="promo code"/>
                                <button className="h-12 w-32 bg-red-500 hover:bg-red-800 rounded-lg">Submit</button>
                          </div>
                   </div>
                   </div>
                
            
        
          
        </div>
        </div>
        </div>
    );
    };
    export default Cartitem
