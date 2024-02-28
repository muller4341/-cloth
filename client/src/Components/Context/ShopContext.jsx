import { createContext, useEffect, useState } from "react";
//import allproduct from "../Assets/allproduct";
import PropTypes from 'prop-types';

export const ShopContext = createContext(null);
//allproduct.length +1

const Defaultcart =()=>{
    let cart={};
    for (let index=0; index <300 +1 ; index++){
        cart[index] = 0;
    
}
return cart;
}

const ShopContextProvider = (props)=>{
    const [allproduct,setAllProduct] = useState([]);
    const [cartitems, setCartitems] =useState(Defaultcart());

    useEffect (()=>{
        fetch('http://localhost:5000/allproducts')
        .then((response) => response.json())
        .then((data )=> setAllProduct(data) )
        if (localStorage.getItem('token')){

            fetch('http://localhost:5000/getcart', {
                    method: 'POST',
                    headers:{
                        Accept: 'application/json',
                        'token': `${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                        },
    
                body: "",

            })
            .then((response) => response.json())
            .then((data )=> setCartitems(data))
    }
    else {
        console.log('please login');
    }
    
},[]);

    
    const Addtocart=(itemId)=>{
        setCartitems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));

        if (localStorage.getItem('token')){
            fetch('http://localhost:5000/addtocart', {
                 method: 'POST',
                 headers:{
                    Accept: 'application/json',
                    'token': `${localStorage.getItem('token')}`,

                    'Content-Type': 'application/json'
                      },

                 body: JSON.stringify({'itemId':itemId}),

        })
        .then((response) => response.json())
        .then((data )=> console.log(data) )
        .catch(error => {
            console.error('Error:', error);
        });

    
    
    } else {
        console.log('please login', itemId);
    }

    };


        
            const Removefromcart=(itemId)=>{
                setCartitems((prev) => ({...prev, [itemId]: prev[itemId] -1}))


                if (localStorage.getItem('token')){
                    fetch('http://localhost:5000/removefromcart', {
                         method: 'POST',
                         headers:{
                            Accept: 'application/json',
                            'token': `${localStorage.getItem('token')}`,
        
                            'Content-Type': 'application/json'
                              },
        
                         body: JSON.stringify({'itemId':itemId}),
        
                })
                .then((response) => response.json())
                .then((data )=> console.log(data) )
                .catch(error => {
                    console.error('Error:', error);
                });
        
            
            
            } else {
                console.log('please login', itemId);
            }
        
            
            
            };
                    console.log('cartitems', cartitems);
                const Totalcartamount =()=>{
                    let totalamount=0;
                    for (const item in cartitems){
                        if (cartitems[item] > 0){
                            let Iteminfo = allproduct.find((product)=>product.id === Number(item));
                            totalamount +=Iteminfo.newprice * cartitems[item];
                        }

                        
                    }
                    return totalamount;
                }

                const Totalitem =()=>{
                    let totalitem=0;
                    for (const item in cartitems){
                        if (cartitems[item] > 0){
                            totalitem += cartitems[item];
                            
                        }

                        
                    }
                    return totalitem;
                }
      
    const contextvalue = {allproduct, cartitems, Addtocart, Removefromcart, Totalcartamount, Totalitem};
    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
};

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default ShopContextProvider;

