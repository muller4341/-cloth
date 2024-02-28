import  {useEffect, useState} from 'react';
import Close from '@mui/icons-material/Close';
import axios from 'axios';
const Productlist = () => {
    const[allproducts, setAllproducts] = useState([]);

    const fechInfo = async () => {

        try {
            const response = await axios.get('http://localhost:5000/allproducts');
            setAllproducts(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }

    useEffect(() => {
        fechInfo();
    }
    , []);
     const removeproduct = async (id) => {
        let product = allproducts.filter((product) => product.id !== id);
        setAllproducts(product);
        await axios.post('http://localhost:5000/removeproduct', {id:id});

        await fechInfo();
    }



    return (
        <div className=' h-auto w-4/5 bg-slate-5 mt-32 m-10 bg-white border rounded-lg '>
            <h1 className=' ml-40 mt-6 text-[22px] font-semibold'> All Product list</h1>
            <div className='flex  flex-row space-x-10 ml-10 mt-6 mr-4'>
                <p className='w-1/6 font-semibold'> Products</p>
                <p className='w-1/6 font-semibold'>Title</p>
                <p className='w-1/6 font-semibold'>Old price</p>
                <p className='w-1/6 font-semibold'> New price</p>
                <p className='w-1/6 font-semibold'> Category</p>
                <p className='w-1/7 font-semibold'> Remove</p>
            </div>
            <div className=' mt-5'>
                {allproducts.map((product, index) => {
                    return (
                        <div key={index} className=' mt-2 flex flex-row m-10 space-x-10 border-b border-t border-gray-400 h-40 justify-center items-center'>
                            <img src={product.image} alt={product.name} className='w-1/6 h-40 bg-gray-50'/>
    
                            <p className='w-1/6'>{product.name}</p>
                            <p className='w-1/6'>${product.oldprice}</p>
                            <p className='w-1/6'>${product.newprice}</p>
                            <p className='w-1/6'>{product.category}</p>
                            <Close className='w-1/7 h-6 text-red-500 cursor-pointer' onClick={() => removeproduct(product.id)}/>
                            
                        </div>
                    )
                })}

        </div>
        </div>

    )
        
}

export default Productlist