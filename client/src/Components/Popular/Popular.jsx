import Item from '../Collections/Item';
import { useState, useEffect } from "react";
//import collection from "../Assets/collection";

const Collections = () => {
     
    const [popular,setPopular] = useState([]);

    useEffect (()=>{
        fetch('http://localhost:5000/popular')
        .then((response) => response.json())
        .then((data )=> setPopular(data) )
        .catch(error => {
            console.error('Error:', error);
        });
    },[]);



    return (
        <div className="w-screen mt-20 mb-4">
            <div className="flex w-screen h-[100px]   justify-center ">
            <p className='text-[36px] font-bold  text-black'>Popular in women</p>
   
        </div>
            <div className=" grid grid-cols-4 gap-4 ">
                {popular.map((item, i) => {
                    return (
                        <Item key={i} Id={item.id} image={item.image} name={item.name} 
                        oldprice={item.oldprice} newprice={item.newprice}/>
                    );
                })}
            </div>
        </div>
    );
};

export default Collections;


