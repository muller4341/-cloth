import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Breadcrums/Breadcrum";
import Productdisplay from "../Productdisplay/Productdisplay";
import Descriptionbox from "../Descriptionbox/Descriptionbox";
import Relatedproduct from "../Relatedproducts/Relatedproduct";

const Product =()=>{
    const {allproduct} = useContext(ShopContext);
    const {productId} = useParams();
    const product = allproduct.find((e)=>e.id === Number(productId));

    return(
    <div className="flex flex-col w-full h-full">
    
    <Breadcrum product={product}/>
    <Productdisplay product={product}/>
    <Descriptionbox/>
    <Relatedproduct/>
    
    </div>
    
    
    )
    
    };
    export default Product