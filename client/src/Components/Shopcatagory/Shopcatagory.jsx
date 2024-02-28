import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ShopContext } from '../Context/ShopContext';
import Item from './Item';
import Dropdown from '@mui/icons-material/ArrowDropDown';

const Shopcatagory = (props) => {
    const { allproduct } = useContext(ShopContext);
    console.log('allproduct', allproduct);
    console.log('category', props.category);
    console.log('banner', props.banner);

    return (
        <div className="w-screen h-full flex flex-col ">
                <div className=' mt-24'>
                    <div>{props.banner}</div>
                </div>
                <div className=' flex flex-1 h-60 '>
                    <p className=' ml-10 flex items-center justify-start w-1/2 h-16 text-[18px]'> Showing 1-12 of 36 products</p>
                <div className='flex   w-1/2 h-16 justify-end items-center  mr-80'>
                    <div className='border-gray-200 border rounded-full  
                    items-center flex flex-row h-16 w-28 justify-center' >
                    <p className='text-[18px]'>Sortby</p>
                    <Dropdown className='w-10 h-6'/>
                    </div>

                </div>

                </div>
            <div className="grid grid-cols-4 gap-4">
                {allproduct.map((item, i) => {
                    if (item.category === props.category) {
                        return (
                            <Item
                                key={i}
                                Id={item.id}
                                image={item.image}
                                name={item.name}
                                oldprice={item.oldprice}
                                newprice={item.newprice}
                            />
                        );
                    } else return null;
                })}
            </div>
            <div className=' flex  justify-center w-auto h-auto'>
            <button className='  flex justify-center items-center mt-10 mb-10 
            border border-gray100 bg-gray-50  rounded-lg w-80 h-10 hover:bg-gray-100'>
                Explore More
            </button>
            </div>
        </div>
    );
};

Shopcatagory.propTypes = {
    banner: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
};

export default Shopcatagory;
