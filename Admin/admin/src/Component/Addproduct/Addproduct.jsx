import upload from '../../assets/Assets/upload.png';  
import { useState } from 'react';  
const Addproduct = () => {

    const[ image, setImage]=useState(false);
    const [categoryError, setCategoryError] = useState(false);

    const[prodactDetails, setProdactDetails]=useState({
        name:'',
        category:'',
        oldprice:'',
        newprice:'',
        image:''
    });


    const handleImage=(e)=>{
        
        setImage(e.target.files[0]);
    }

    const changeHandler=(e)=>{
        setProdactDetails({...prodactDetails,
             [e.target.name]:e.target.value})
    }
    
    const Add_product = async () => {
        if (!prodactDetails.category) {
            setCategoryError(true);
            return;
        }

        setCategoryError(false);

        console.log(prodactDetails);
        let responseData;
        let product = prodactDetails;
        let formData = new FormData();
        formData.append('product', image);
    
         await fetch('http://localhost:5000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            })
            .then((response) => response.json())
            .then((data) => {
                responseData = data;
            })
    
            

            if (responseData.success) {
                product.image = responseData.image_url;
                console.log(product);

                await fetch('http://localhost:5000/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.success) {
                            alert('product added successfully');
                            // Reset the form
                            setProdactDetails({
                                name: '',
                                category: '',
                                oldprice: '',
                                newprice: '',
                                image: ''
                            });
                            setImage(false);
                        } else {
                            alert('product not added');
                        }
                        console.log(data);
                    });
            }
            

        
    }

    return (
        <div className='w-4/5 h-screen  flex justify-center items-center mt-20'>
        <div className=" h-screen w-3/4 justify-start mt-32 bg-white m-10 space-y-1 border rounded-lg">
            <div className=' flex flex-col  m-10   space-y-1'>
            <h1 className="text-black text-[20px] font-semibold"> Product title</h1>
            <input type="text" value={prodactDetails.name} onChange={ changeHandler} 
            name="name" className="w-7/8 h-12 border border-gray-200 rounded-lg"
             placeholder="Enter product title"/>


            </div>
            <div className='m-10 flex flex-row space-x-4 ml-0 mt-0'>
                <div className='flex flex-col  m-10 mt-0   space-y-1 w-1/2'>
                    <p className="text-black text-[20px] font-semibold">price</p>
                    <input type="text"  value={ prodactDetails.oldprice} onChange={changeHandler}className="w-full h-12 border border-gray-200 rounded-lg"
                placeholder="Enter product price"
                name="oldprice"/>
                </div>
                <div className='flex flex-col mt-0 m-10  space-y-1 w-1/2'>
                    <p className="text-black text-[20px] font-semibold">offer price</p>
                    <input type="text" value={prodactDetails.newprice} onChange={changeHandler} className="w-full h-12 border border-gray-200 rounded-lg"
                placeholder="Enter product price"
                name="newprice"/>
                </div>
            </div>
            <div className='flex flex-col  m-10   space-y-1'>
                <p className='text-black text-[20px] font-semibold'>Product category </p>
                <select value={prodactDetails.category} onChange={changeHandler}name='category' className="w-1/5 h-12 border border-gray-200 rounded-lg ">
                  <option value="">Select a category</option>
                   <option value="women" className="text-black"> Women</option>
                   <option value="men"> Men</option>
                   <option value="kids"> Kids</option>
                </select>
                {categoryError && <p style={{ color: 'red' }}>Please select a category</p>}
 
            </div>
            <div  className='flex flex-col  m-10  space-y-1'>
                <label className=' ' >
                  <div className='flex justify-center  w-1/4 bg-gray-50 place-items-center
                   border- rounded-lg flex-col'>
                <img src={ image?URL.createObjectURL(image)    :  upload} alt="image" className="w-full h-28 
                 "/>
                
                <input type="file"  onChange={handleImage} name='image' id=" file-input" className= "w-1/2 h-12 border-2 border-black   " hidden > 
            

                </input>
                 
                <p className=' '>Upload image</p>
                
                </div>
                </label>

        
            </div>
            <div className=' m-10'>
                <button onClick={()=>{ Add_product()}} 
                className='bg-red-500  hover:bg-red-600
                 text-white text-[20px] w-32 h-12 mt-10 border rounded-lg'>
                    Add product
                </button>
            </div>

        </div>
        </div>

    )

}

export default Addproduct
