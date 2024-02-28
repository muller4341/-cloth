import addcart from '../../assets/Assets/addcart.png';
import { Link } from 'react-router-dom';
import list from '../../assets/Assets/list.png';
const Sidebar=()=>{


    return(
        <div className="bg-white h-screen w-1/5 flex flex-col items-start
         justify-start  mt-0 top-0 space-y-6 border-r border-gray-200 ">
  <div className='flex ml-8 h-auto w-5/6 justify-center items-center bg-gray-50 mt-28  border rounded-lg hover:bg-gray-100'>
    <Link to='/addproduct' className='h-auto w-auto flex flex-row'>
      <img src={addcart} alt="logo" className="w-16 h-10 " />
      <p className='text-blue-900 text-[22px] font-semibold'>Add product </p>
    </Link>
  </div>

  <div className='flex ml-8 h-auto w-5/6 justify-center items-center bg-gray-50 mt-28  border rounded-lg hover:bg-gray-100'>
    <Link to='/productlist' className='h-auto w-auto  flex flex-row'>
      <img src={list} alt="logo" className="w-16 h-10 " />
      <p className='text-blue-900 text-[22px] font-semibold'> Product list </p>
    </Link>
  </div>
</div>

    )
}

export default Sidebar;