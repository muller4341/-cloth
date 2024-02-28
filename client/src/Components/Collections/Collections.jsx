import Item from "./Item";
import { useState, useEffect } from "react";
//import collection from "../Assets/collection";

const Collections = () => {
     
    const [ newcollection, setNewcollection] = useState([]);

    useEffect (()=>{
        fetch('http://localhost:5000/newcollection')
        .then((response) => response.json())
        .then((data )=> setNewcollection(data) )
        .catch(error => {
            console.error('Error:', error);
        });
    },[]);



    return (
        <div className="w-screen">
            <div className="flex w-screen h-[100px]   justify-center ">
            <p className='text-[36px] font-bold  text-black'>NEW COLLECTIONS</p>
   
        </div>
            <div className=" grid grid-cols-4 gap-4 ">
                {newcollection.map((item, i) => {
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


