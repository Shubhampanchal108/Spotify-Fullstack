import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { url } from '../App';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const Navigate = useNavigate()

    const [adminInfo, setAdminInfo] = useState({
        username:"",
        password:"",
    })

    const handleChange = (e) => {
        setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
      };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const URL = `${url}/api/album/admin-login`;
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                  "content-Type": "application/json",
                },
                body: JSON.stringify(adminInfo),
              });

            const result = await response.json()

            const {jwt_token, success} = result;

            if (success){
                localStorage.setItem('token', jwt_token)
                toast.success("Login successfully");
                setTimeout(()=>{Navigate("/dashboard")},2000)
            }else{
                toast.error("username or password is incorrect")
            }
        
        } catch (error) {
            console.log(error)
        }
      };  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Spotify Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={adminInfo.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={adminInfo.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300">
            Log In
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AdminLogin;
