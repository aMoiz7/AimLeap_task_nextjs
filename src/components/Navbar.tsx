"use client"
import { MdDensitySmall, MdPhoneInTalk } from "react-icons/md";
import React, { useEffect, useState } from 'react'
import axios from "axios";

const Navbar = () => {

   
    const [data , setData] = useState([])
    const [search , setSearch ] = useState([]);

    useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/posts").
         then((res)=>{ console.log(res.data) , setSearch(res.data) })
         .catch((error)=>(console.log(error)))

         
    },[])

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm === "") {
            setData([]); // Set data to empty array when input is empty
        } else {
            let sdata = search.filter((val:any) => val.title.toLowerCase().includes(searchTerm));
            setData(sdata);
        }
    }
    
    

  return (
    <div>
       <div className="flex p-2 justify-normal items-center border-b border-gray-300 flex-wrap h-16">
            <div className="flex items-center">
                <h1 className='font-bold text-2xl pl-10'>Logo</h1>
            </div>
            <div className="relative flex flex-row items-start justify-start w-7/12 ml-6">
                <svg className="absolute left-2 h-4 w-6 mt-4 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input type="text" placeholder="Search" className="pl-10 border border-gray-200 rounded-full w-full py-1 px-1 h-12 bg-gray-200" onChange={handleSearch} />
                {data.length > 0 && (
                    <div className="absolute top-14 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
                        {data.map((val, i) => (
                            //@ts-ignore
                            <p key={i} className="px-4 py-2 hover:bg-gray-100">{val.title}</p>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex items-start gap-2 ml-auto">
                <MdPhoneInTalk className="bg-orange-100 text-orange-400 rounded-full h-10 w-12 p-2 mt-1" />
                <button className="px-1 py-0 h-12">
                    <p className="text-xs text-start text-gray-500">Have a Question?</p>
                    <h2 className="font-bold text-orange-500 text-start">Contact Support</h2>
                </button>
                <button className="border px-2 py-0 h-12 ml-6 w-48 font-bold text-sm rounded-full text-white bg-orange-600">Register/Login</button>
            </div>
        </div>

<div className="flex h-14 items-center w-full">
      <div className="flex w-9/12 scale-x-90 items-center">
        <button className="flex items-center ml-4">
          <MdDensitySmall className="w-4 h-4 mr-2" />
          All Categories
        </button>
        <button className="ml-10 text-gray-400">Blog</button>
        <button className="ml-10 text-gray-400">Contact us</button>
        <button className="ml-10 text-gray-400">About us</button>
        <button className="ml-10 text-gray-400">More</button>
      </div>
      <div className="flex w-3/12 justify-start items-center">
        <button className="text-purple-700 font-semibold">Write a review</button>
        <button className="text-purple-700 ml-10 font-semibold">Vendor</button>
      </div>
    </div>

</div>
  )
}

export default Navbar