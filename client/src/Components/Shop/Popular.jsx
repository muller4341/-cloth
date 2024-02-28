import women203 from '../Assets/women203.png'
import women208 from '../Assets/women208.png'
import women22 from '../Assets/women22.png'
import women29 from '../Assets/women29.png'
const Popular = () => {
    return (
      <div className=" mt-40 w-screen md:h-[550px] h-auto flex flex-col  items-center justify-center mb-4  ">
        {/* First row of small containers */}
        <div className="flex w-screen h-[100px]   justify-center ">
            <p className='text-[36px] font-bold  text-black'>Popular in Women</p>
   
        </div>
   
        {/* Second row with images */}
        <div className="  flex  mt-2 flex-col  md:flex-row w-screen md:h-[450px] h-auto md:justify-center  
         md:space-x-4  space-y-4 justify-start ">
        {/* 1 */}
        <div className='flex bg-  md:flex-col sm:flex-row md:w-1/5 w-full  md:h-[430px] 
        h-20 justify-center items-center mt-4 transition-transform transform hover:scale-110 '>
           
               <div className="  border border-gray-200  rounded-lg flex flex-row justify-center items-center bg-gray-200 md:w-full w-2/3 md:h-[430px]
                 h-20 top-0  ">
                     <img src={women203} alt="Best 1" className="w-full md:h-[340px]  object-cover" />
                     <div className='flex flex-col justify-end mb-auto'>
                         
                   </div>
               </div>
               
   
               
               <div className="  flex flex-col md:w-full w-1/2 h-20 m-2  justify-center items-start   ">
                       <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'> new Ethiopian ሀበሻ dress </p>
                       <p className='md:ml-14 ml-4'>
                           <span className="text-red-500 md:text-[16px] text-[10px]">$260</span>{' '}
                   <del className="text-black opacity-50 md:text-[16px] text-[10px]">$360</del>
                   </p> 
                   
                   
           </div>
           
   
         </div>




            {/* 2 */}
            <div className='flex   md:flex-col sm:flex-row md:w-1/5 w-full 
             md:h-[430px] h-20 justify-center items-center mt-4 transition-transform transform hover:scale-110 '>
           
               <div className=" border border-gray-200  rounded-lg  flex flex-row justify-center items-center bg-gray-200 md:w-full w-1/2  md:h-[430px]  h-20 top-0 ">
                     <img src={women22} alt="Best 1" className="w-full md:h-[340px]  h-20 object-cover" />
                     <div className='flex flex-col justify-end mb-auto'>
                         
                   </div>
               </div>
               
   
               
               <div className="  flex flex-col md:w-full w-1/2 h-20 m-2  justify-center items-start   ">
                       <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>new northern Ethiopia ሀበሻ dress </p>
                       <p className='md:ml-14 ml-4'>
                           <span className="text-red-500 md:text-[16px] text-[10px]">$260</span>{' '}
                   <del className="text-black opacity-50 md:text-[16px] text-[10px]">$360</del>
                   </p> 
                   
                   
           </div>
           
   
         </div>
             
            {/* 3 */}
            <div className='flex   md:flex-col sm:flex-row md:w-1/5 w-full  
            md:h-[430px] h-20 justify-center items-center mt-4 transition-transform transform hover:scale-110 '>
           
               <div className="  border border-gray-200  rounded-lg flex flex-row justify-center items-center bg-gray-200 md:w-full w-1/2  md:h-[430px]  h-20 top-0 ">
                     <img src={women208} alt="Best 1" className="w-full md:h-[340px] h-20 object-cover" />
                     <div className='flex flex-col justify-end mb-auto'>
                         
                   </div>
               </div>
               
   
               
               <div className="  flex flex-col md:w-full w-1/2 h-20 m-2  justify-center items-start   ">
                       <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>new Etiopan ሀበሻ dress </p>
                       <p className='md:ml-14 ml-4'>
                           <span className="text-red-500 md:text-[16px] text-[10px]">$260</span>{' '}
                   <del className="text-black opacity-50 md:text-[16px] text-[10px]">$360</del>
                   </p> 
                   
                   
           </div>
           
   
         </div>
         {/* 4 */}
         <div className='flex   md:flex-col sm:flex-row md:w-1/5 w-full 
          md:h-[430px] h-20 justify-center items-center mt-4 transition-transform transform hover:scale-110 '>
           
               <div className=" border border-gray-200  rounded-lg  flex flex-row justify-center items-center bg-gray-200 md:w-full w-1/2  md:h-[430px]  h-20 top-0 ">
                     <img src={women29} alt="Best 1" className="w-5/6 md:h-[340px] h-20 object-cover" />
                     <div className='flex flex-col justify-end mb-auto'>
                         
                   </div>
               </div>
               
   
               
               <div className="  flex flex-col md:w-full w-1/2 h-20 m-2  justify-center items-start   ">
                       <p className='md:ml-14 ml-4 md:text-[16px] text-[10px]'>new eastern Ethiopia ሀበሻ dress </p>
                       <p className='md:ml-14 ml-4'>
                           <span className="text-red-500 md:text-[16px] text-[10px]">$260</span>{' '}
                   <del className="text-black opacity-50 md:text-[16px] text-[10px]">$360</del>
                   </p> 
                   
                   
           </div>
           
   
         </div>



         </div>




         </div>
        
         )};
            export default Popular