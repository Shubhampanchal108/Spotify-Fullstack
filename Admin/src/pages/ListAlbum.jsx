import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../App";
import { toast } from "react-toastify";

const ListAlbum = () => {
  const [data, setData] = useState([]);

  const fetchAlbum = async () => {
    try {
      const response = await axios.get(`${url}/api/album/list`);
      if (response.data.success) {
        setData(response.data.albums);
      }
    } catch (error) {
      toast.error("Failed to load songs");
    }
  };

  const removeAlbum = async(id)=>{
    try {
      const response = await axios.post(`${url}/api/album/remove`, {id})

      if(response.data.success){
        toast.success(response.data.message);
        await fetchAlbum();
      }
    } catch (error) {
      toast.error("Internal server error");
    }
  }

  useEffect(() => {
    fetchAlbum();
  }, []);

  return (
    <div>
      <p>All Albums List</p>
      <br />

      <div className="hidden sm:grid grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
        <b>Image</b>
        <b>Name</b>
        <b>Album</b>
        <b>Description</b>
        <b>Album Colour</b>
      </div>

      {data.map((item, index) => {
        return (
          <div
            className="grid grid-cols-3 sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5"
            key={index}
          >
            <img src={item.image} className="w-12" alt="" />
            <p>{item.name}</p>
            <p>{item.desc}</p>
            <input type="color" value={item.bgColor} />
            <p className="cursor-pointer" onClick={()=>removeAlbum(item._id)}>
              <i className="fa-regular fa-trash-can"></i>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ListAlbum;
