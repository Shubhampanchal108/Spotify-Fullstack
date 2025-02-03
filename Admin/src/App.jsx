import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import AddAlbum from './pages/AddAlbum';
import AddSong from './pages/AddSong';
import ListSong from './pages/ListSong';
import ListAlbum from './pages/ListAlbum';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import AdminLogin from './pages/AdminLogin';

export const url = 'http://localhost:5000';

const App = () => {

  const Token = localStorage.getItem("token")
  const Navigate = useNavigate()
  const location = useLocation();

  const isAdminRoute = location.pathname === '/admin';

  useEffect(()=>{
    if (!Token){
      Navigate("/admin")
    }
    else{
      Navigate('dashboard')
    }
  },[Token])

  return (
    <>
      <ToastContainer />
      
      <Routes>
        <Route path='/admin' element={<AdminLogin/>} />
      </Routes>

      {!isAdminRoute && (
        <div className='flex items-start min-h-screen'>
          <Sidebar />
          <div className='flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]'>
            <Navbar />
            <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
              <Routes>
                <Route path='/dashboard' element={<Welcome />} />
                <Route path='/add-song' element={<AddSong token={Token} />} />
                <Route path='/add-album' element={<AddAlbum token={Token}/>} />
                <Route path='/list-song' element={<ListSong />} />
                <Route path='/list-album' element={<ListAlbum />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
