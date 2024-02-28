import allproduct from "../Assets/allproduct"
import Item from '../Shopcatagory/Item'
const Relatedproduct = () => {
    const Relatedproduct = allproduct.slice (10, 14)
     



    return (
        <div className="flex flex-col justify-center items-center ">
            <p className=" text-black text-[28px] font-bold ">  Related Product </p>

            <div className=" flex flex-row justify-center grid-cols-4 gap-4 grid-rows-2">
                {Relatedproduct.map((item, i) => {
                    
                    return (
                        <Item 
                        key={i}
                                Id={item.id}
                                image={item.img}
                                name={item.name}
                                oldprice={item.oldprice}
                                newprice={item.newprice}
                         
                         
                         />
                    )
                })}

            </div>

        </div>
    )
}

export default Relatedproduct