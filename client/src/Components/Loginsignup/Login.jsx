import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  const handleSignup = () => {
    
    console.log('Email:', email);
    console.log('Password:', password);
    
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-red-100'>
    <div className="w-1/3 h-1/2  p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 flex items-center ">Login</h2>
      
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleSignup}
        className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-blue"
      >
        Continue
      </button>
      <p className="mt-8 text-sm text-gray-600">
        Have not an account? <Link to='/loginsignup' className='text-blue-400'>
          Signup here</Link>
      </p>
      
    </div>
    </div>
  );
};

export default Login;
