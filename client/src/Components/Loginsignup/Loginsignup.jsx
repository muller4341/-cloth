
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Loginsignup = () => {
  const navigate  = useNavigate();
  
  const [agree, setAgree] = useState(false);
  const handleAgreeChange = () => {
    setAgree(!agree);
  }


  
  const [state , setState] = useState('Login');

  const [formData , setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  
  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  
  const login =  async() => {
      
    console.log(' login function called', formData);
    let responseData;
    await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      responseData = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });

    if (responseData && responseData.success) {
      localStorage.setItem('token', responseData.token);
      navigate('/');
    } else {
      alert('you email or password is incorrect');
    }

    
  };

  const signup = async() => {

    console.log('signup function called', formData);
    if (!agree) {
      alert('You must agree to the terms of use & privacy policy');
      return;
    }

    let responseData;
    await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      responseData = data;
    })
    .catch(error => {
      console.error('Error:', error);
    });

    if (responseData && responseData.success) {
      localStorage.setItem('token', responseData.token);
      navigate('/');
    } else {
      alert('Signup failed');
    }

  };


  return (
    <div className='w-screen h-screen flex justify-center items-center bg-red-100'>
    <div className=" w-1/3 mx-auto h-1/2  p-6 bg-white 
    rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold mb-4">{state}</h2>
      <div className="mb-4">
    {state==='Sign up'? <input
          type="text"
          placeholder="Your Name"
          name = 'name'
          value={formData.name}
          onChange={changeHandler}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        /> : <></>}    

      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email Address"
          name = 'email'
          value={formData.email}
          onChange={changeHandler}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          name = 'password'
          value={formData.password}
          onChange={changeHandler}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={()=>{state==='Sign up'? signup(): login()}}
        className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-blue"
      >
        Continue
      </button>
      {state==='Sign up'? <p className="mt-4 text-sm text-gray-600">
        Already have an account? <Link  className='text-blue-400' onClick ={()=>{setState("Login")}}>Login here   </Link>
      </p>
      :   <p className="mt-4 text-sm text-gray-600">
        create Account <Link className='text-blue-400' onClick ={()=>{setState("Sign up")}}>Sign up  </Link>
      </p>}
      
      {state==='Sign up'? 
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="agreeCheckbox"
          checked={agree}
          onChange={handleAgreeChange}
          className="mr-2"
        />
       <label htmlFor="agreeCheckbox" className="text-sm text-gray-700">
          By continuing, I agree to the terms of use & privacy policy
        </label>
      
      </div>
        : <></>}
    </div>
    </div>
  );
};

export default Loginsignup;
