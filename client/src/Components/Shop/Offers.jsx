import women20 from '../Assets/women20.png'


const Offers = () => {
  return (
    <div className='flex justify-center w-screen h-auto '>
    <div className="flex justify-center items-center w-3/4 h-[400px] bg-red-50 mb-10 border border-red-50  rounded-lg">
      {/* Left Container */}
      <div className="flex  w-1/2   mt-16 h-5/6 justify-center">
        <div className="flex flex-col items-start  ml-4  w-full h-full space-y-6 ">
            <div className=' flex flex-col '>
          <p className=" text-black mb-2 font-bold text-[48px]"> Exclusive </p>
          <p className=" text-black mb-2 font-bold text-[48px]">Offers For You</p>
          </div>
          <p className="text-[18px] text-black mb-2  ">ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="bg-red-500 text-white px-4 w-40 py-4 rounded-lg hover:bg-red-800">check now</button>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-1/2 flex  h-[400px] justify-center  ">
        <div className="flex justify-center items-center  h-full w-2/3 ">
          <img src={women20} alt="home" className="w-full h-full" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Offers;
