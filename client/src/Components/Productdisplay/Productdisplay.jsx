import PropTypes from 'prop-types';
import Star from '@mui/icons-material/StarBorder';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
const Productdisplay = (props) => {

    const {product} = props;  
    Productdisplay.propTypes = {
        product: PropTypes.object.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        oldprice: PropTypes.string.isRequired,
        newprice: PropTypes.string.isRequired,
    
    };

    const {Addtocart} = useContext(ShopContext);

    
    
    
    
    return (
        <div  className="flex flex-row w-screen h-aut0 bg-yellow mt-20 mb-20">
            {/* left side */}
        <div className=" flex flex-row w-1/2 h-full ">
            <div className="flex flex-col w-1/3  justify-center h-full items-center">
                <img src={product.image} alt="product" className="w-28 h-32 m-4 bg-gray-100 transition-transform transform hover:scale-110 border rounded-lg" />
                <img src={product.image} alt="product" className="w-28 h-32  m-4 bg-gray-100 transition-transform transform hover:scale-110 border rounded-lg" />
                <img src={product.image} alt="product" className="w-28 h-32  m-4 bg-gray-100 transition-transform transform hover:scale-110 border rounded-lg " />
                <img src={product.image} alt="product" className="w-28 h-32  m-4 bg-gray-100 transition-transform transform hover:scale-110 border rounded-lg" />


            </div>
            <div className="flex flex-col w-2/3 bg-gray-100 justify-center items-center mt-4 mb-4
             transition-transform transform hover:scale-110 border rounded-lg">
            <img src={product.image} alt="product" className="w-96 h-120 m-4  " />

             </div>


        </div>
        {/* right side */}
        <div className=' flex flex-col  mt-4 mb-4 w-1/2 mr-10  '>
        <p className=' ml-20 font-bold text-black  text-[32px]'> {product.name}</p>
        
          <div className=' ml-20 flex  flex-row items-center mt-4'>
            <Star className=' text-yellow-500 '/>
            <Star className=' text-yellow-500'/>
            <Star className=' text-yellow-500'/>
            <Star className=' text-yellow-500'/>
            <Star className=' text-red-500'/>
            <p className=' text-black  font-semibold'>(22)</p>

          </div>
          {/* price */}
          <div className='mt-10 ml-20 flex flex-row space-x-4'>
          <p className='text-red-400 text-[22px] font-semibold'>${product.newprice}</p>
           <del className='text-black text-[22px] font-semibold opacity-50 '>&{product.oldprice}</del>
           

          </div>
          {/* description */}
          <div className='flex flex-row mt-6 ml-20'>
            <p className='text-black font-semibold'> Explore ሀበሻ cloth, a symbol of Ethiopian heritage. Crafted from premium cotton, our collection
            combines tradition and modernity. Versatile in all sizes, each piece exudes cultural pride and sophistication 
             the epitome of Ethiopian fashion.
            </p>
          </div>
          {/* size */}
          <div className='mt-8 ml-20 flex flex-col' >
            <p className='text-black font-semibold text-[20px]'> Select size</p>
               {/* sizes */}
               <div className='flex flex-row mt-6 space-x-3'>
                 <div className='border  border-gray-100 rounded-lg 
                  bg-gray-100 w-20 h-12 justify-center flex items-center hover:bg-gray-300'>S</div>
                 <div className='border  border-gray-100 rounded-lg 
                  bg-gray-100 w-20 h-12 justify-center flex items-center hover:bg-gray-300'>M</div>
                 <div className='border  border-gray-100 rounded-lg 
                  bg-gray-100 w-20 h-12 justify-center flex items-center hover:bg-gray-300'>L</div>
                 <div className='border  border-gray-100 rounded-lg 
                  bg-gray-100 w-20 h-12 justify-center flex items-center hover:bg-gray-300'>XL</div>
                 <div className='border  border-gray-100 rounded-lg 
                  bg-gray-100 w-20 h-12 justify-center flex items-center hover:bg-gray-300'>XXl</div>

               </div>
          </div>
          
          <button className=' mt-6 ml-20 justify-start items-start flex*
          w-60 h-16 bg-red-500 hover:bg-red-700 border rounded-lg text-[24px]
          text-white' onClick={()=>{Addtocart(product.id)}}> Add to cart</button>
            <div className='mt-6 ml-20 flex flex-col'>
                <p className='flex flex-row space-x-2'>
                    <span className='text-black font-bold text-[18px]'> Catagory:</span>
                    <span className='text-black  text-[18px]'>{product.category}, {product.name}</span>
                </p>

                <p className='flex flex-row space-x-2'>
                    <span className='text-black font-bold text-[18px]'> Tags:</span>
                    <span className='text-black  text-[18px]'> new ሀበሻ design</span>
                </p>


            </div>
          
            


        </div>
            
        </div>
    );
}




export default Productdisplay;









        
        

    