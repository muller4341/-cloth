import home2 from '../Assets/home02.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import clamp from '../Assets/clamp.png';

const Shopform = () => {
  return (
    <div className="flex justify-center items-center h-full bg-red-100 postion:fixed">
      {/* Left Container */}
      <div className="flex  w-1/2 bg-red-100  mt-16 h-full justify-center">
        <div className="flex flex-col items-start mt-16 ml-4  w-1/2 space-y-10">
          <p className="text-lg font-bold mb-2 text-yellow-800">ሀበሻ Cloth</p>
          <p className="text-[24px] text-black mb-2  ">NEW ARRIVALS ONLY</p>
          <div className=' flex flex-row space-x-2 justify-center items-center'>
            <p className=" text-black mb-2 font-bold text-[48px]">New </p>
          <img src={clamp} className=' w-10 h-10'/>
          </div>
          <p className=" text-black mb-2 font-bold text-[48px]"> Collections</p>
          <p className=" text-black mb-2 font-bold text-[48px]">For Everyone</p>
          <button className="bg-red-500 text-white px-4 py-4 rounded-lg hover:bg-red-800">Latest Collection<ArrowRightAltIcon/></button>
        </div>
      </div>

      {/* Right Container */}
      <div className="w-1/2 flex bg-red-100 h-full justify-center mt-16">
        <div className="flex justify-center items-center  h-3/4 w-2/3">
          <img src={home2} alt="home" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Shopform;
