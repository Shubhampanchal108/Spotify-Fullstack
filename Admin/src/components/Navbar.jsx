import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = async () => {
    localStorage.removeItem("token");
    toast.success("Logout successfully");
    setTimeout(()=>{navigate("/admin")}, 3000)
  };

  return (
    <div className='navbar w-full border-b-2 border-gray-800 px-5 sm:px-12 py-4 text-lg flex justify-end items-center'>
      <p className="font-semibold mr-96">Admin Panel</p>
      <button onClick={Logout} className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ml-96">
        Logout
      </button>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
