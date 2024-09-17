import React,{useState} from 'react';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import{Link,useNavigate} from "react-router-dom";



export default function Signup() {
  const[loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const[errorMessage,setErrorMessage]=useState(null);

  const [formData, setFormData] = useState({});

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})};

  const handleSubmit =async(e)=>{
    e.preventDefault();
    if(!formData.username||!formData.email||!formData.password){
      return setErrorMessage('Please fill all the fields');
    }
    try{
      setLoading(true);
      setErrorMessage(null);
      const res=await fetch('/api/admin/register',
      {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData),
      });
      const data=await res.json();
      setLoading(false);
      if(data.success===false){
        return setErrorMessage(data.message);
      }
      if(res.ok){
        navigate('/signin');
      }
      
    }catch(error){
      setErrorMessage(data.message);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg flex w-full max-w-6xl">
        {/* Left Hero Section */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2  text-gray p-10">
          <h2 className="text-4xl  mb-4 text-gray dark:text-white">Welcome to <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">EPLQ!</span></h2>
          <p className="text-lg dark:text-white">
          EPLQ delivers cutting-edge solutions for privacy-preserving location-based queries, 
          enabling secure and efficient 
          access to spatial data.


          </p>
          
        </div>

        {/* Right Sign-Up Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
            Create your EPLQ Account
          </h2>

          {/* Signup Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
               Username
              </label>
              <input
                id="username"
                name="username"
                
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="username"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="you@gmail.com"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="********"
                onChange={handleChange}
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-between mt-6">
            <span className="w-1/5 border-b dark:border-gray-600"></span>
            <span className="text-sm text-gray-500 dark:text-gray-400">or</span>
            <span className="w-1/5 border-b dark:border-gray-600"></span>
          </div>

          {/* Signup with Google */}
          <button
            className="mt-6 w-full flex items-center justify-center py-2 px-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-md focus:outline-none focus:ring-4 focus:ring-indigo-300"
            onClick={() => alert("Google Signup will be handled later!")}
          >
            <FaGoogle className="mr-3 text-xl" /> Sign Up with Google
          </button>

          {/* Already have an account */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link to="/signin" className="text-indigo-600 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
