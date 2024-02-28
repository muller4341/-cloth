import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = (props) => {
    Item.propTypes = {
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        oldprice: PropTypes.string.isRequired,
        newprice: PropTypes.string.isRequired,
        Id: PropTypes.string.isRequired
    };
    return (
        
                
        <div className="  flex  mt-2 flex-row  md:flex-col w-full md:h-[450px] h-auto md:justify-center  
         md:space-x-4  space-y-4 justify-start  ">
        {/* 1 */}
        <div className='   flex bg-  md:flex-col sm:flex-row md:w-full w-full  md:h-[430px] 
        h-20 justify-center items-center mt-4 transition-transform transform hover:scale-110 '>
           
            
        

            <div className="   bg-gray-200 border border-gray-200  rounded-lg
            flex flex-row justify-center items-center  md:w-5/6 w-2/3 md:h-[430px]
            h-20 top-0 ">
                <Link to={`/product/${props.Id}`}>
                    <img  onClick={window.scrollTo(0,0)}src={props.image} alt="" className="w-full md:h-[340px]  object-cover" />
                </Link>
                <div className='flex flex-col justify-end mb-auto'>
                </div>
            </div>
               
   
               
               <div className="  flex flex-col md:w-full w-1/2 h-20 m-2  justify-center items-start   ">
                       <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>{ props.name} </p>
                       <p className='md:ml-14 ml-4'>
                           <span className="text-red-500 md:text-[16px] text-[10px]">${ props.newprice}</span>{' '}
                   <del className="text-black opacity-50 md:text-[16px] text-[10px]">${ props.oldprice}</del>
                   </p> 
                   
                   
           </div>
           
   
         </div>




            


         </div>
        
        
         
            
        
    );
}



export default Item;