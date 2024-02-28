


const Newletter = () => {
  return (
    <div className='flex justify-center w-screen h-auto mt-16'>
    <div className="flex flex-col justify-center items-center w-3/4 h-[250px] bg-red-50 mb-10 border border-red-50  rounded-lg">
      {/* upper Container */}
      <div className="flex  w-full    h-1/2 justify-center ">
        <div className="flex flex-col items-center  ml-4  w-full h-full space-y-6 justify-center">
            
          <p className=" text-black mb-2 font-bold text-[38px]"> Get Exculisive Ofeers On Your Email </p>
          <p className=" text-black mb-2 text-[24px]">Subscribe to our newletter and stay updated</p>
        
        </div>
      </div>

      {/* lower Container */}
      <div className="w-full flex  h-1/2 justify-center   mt-8 ">
        <input type="email" placeholder="Enter your email" className="w-1/3 h-16 rounded-full m-4 p-4 mr-0" />
      <button className="bg-red-500 text-white px-4 w-40 h-16 py-4 rounded-full hover:bg-red-800 m-4 ml-0">Subscribe</button>
        
      </div>
    </div>
    </div>
  );
};

export default Newletter;
