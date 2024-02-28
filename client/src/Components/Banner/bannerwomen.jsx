import women61 from '../Assets/women61.png';


const bannerwomen = () => {
  return (
    <div className='flex justify-center w-screen h-auto '>
    <div className="flex justify-center items-center w-full h-[300px] bg-red-50 mb-10 border border-red-50  rounded-lg">
      {/* Left Container */}
      <div className="flex  w-1/2 h-5/6 justify-center">
        <div className="flex flex-col items-center justify-center  ml-4  w-full h-full space-y-2">
          <p className=" text-yellow-600 mb-2 font-bold text-[48px]"> FLAT 50% OFF </p>
          <div className='flex flex-row space-x-3'>
          <p className=" text-yellow-600 mb-2 font-bold text-[24px]">12 </p>
          <p className=" text-black mb-2 font-bold text-[24px]"> Hours </p>
          <p className=" text-yellow-600 mb-2 font-bold text-[24px]"> 20</p>
          <p className=" text-black mb-2 font-bold text-[24px]"> Mins</p>
          </div>  
          <button className="bg-red-500 text-white px-4 w-40 py-4 rounded-lg hover:bg-red-800">Explore now</button>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-1/2 flex  h-[300px] justify-center  ">
        <div className="flex justify-center items-center  h-full w-1/2 ">
          <img src={women61} alt="home" className="w-full h-full" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default bannerwomen;