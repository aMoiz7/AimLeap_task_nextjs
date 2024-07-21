import { CiLinkedin } from "react-icons/ci"
import { FaFacebookSquare, FaInstagramSquare, FaVoicemail } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { IoCallOutline, IoLocationSharp } from "react-icons/io5"
import { MdOutlineMail } from "react-icons/md"


const Contact =()=>{
return(
    <div className="flex flex-col overflow-x-hidden ">
    <div className="w-screen h-screen bg-gradient-to-r from-blue-900
    via-blue-800 to-purple-700  flex flex-row justify-center items-center ">
      <div className="w-7/12 h-3/4  mr-10 ml-44 text-start -mt-14 ">
      <h1 className="text-4xl pl-4 font-semibold text-white ">Contact Us -</h1>
      <h1 className="text-4xl mt-4 font-semibold text-white">Your Feedback Shapes Our </h1>
      <h1 className="text-4xl font-semibold text-orange-500 mt-2 ">Excellence</h1>
      <div className="mt-20 text-lg flex flex-col p-4 ">
      <h4 className="flex flex-row text-white "><MdOutlineMail className="text-orange-500 h-6 w-6 mt-1 mr-4" /> jorndoe@gmail.com</h4>
      <h4 className="flex flex-row mt-6 text-white"><IoCallOutline className="text-orange-500 h-6 w-6 mt-1 mr-4" />
      +32 545 11 541</h4>
      <h4 className="flex flex-row mt-6 text-white "><IoLocationSharp className="text-orange-500 h-6 w-6 mt-1 mr-4" />
      NEW YORK 3250 house </h4>
      </div>
      
      <div className="flex flex-row mt-20 ml-4">
      <button><CiLinkedin className="text-orange-500 h-6 w-6 mt-1 mr-6" />
      </button>

      <button><FaInstagramSquare className="text-orange-500 h-6 w-6 mt-1 mr-6" />
      </button>

      <button><FaXTwitter className="text-orange-500 h-6 w-6 mt-1 mr-6" />
      </button>
      <button><FaFacebookSquare className="text-orange-500 h-6 w-6 mt-1 mr-6"/>
      </button>

      </div>

      </div>

      <div className="w-4/12  rounded-xl z-30 h-3/4 bg-white ml-20 mr-20 -mt-14">
      <div>
        
        <h3 className=" text-lg text-orange-600 font-normal mt-6 ml-6">I'm interested in:</h3>
        <div className="flex flex-row mt-2 ml-6">
            <button className="border bg-orange-500 rounded-full text-sm text-white pl-2 pr-2 mr-2"> Sales</button>
            <button className="border rounded-full text-sm text-gray-500 pl-2 pr-2 mr-2">Get Demo</button>
            <button className="border rounded-full text-sm text-gray-500 pl-2 pr-2 mr-2">User Support</button>
        </div>
        <div className="flex flex-row mt-4 ml-6">
            <button className="border rounded-full text-sm text-gray-500 pl-2 pr-2 mr-2"> Vendor support</button>
            <button className="border rounded-full text-sm text-gray-500 pl-2 pr-2 mr-2">Other</button>
           
        </div>
        <div className="flex flex-col mt-6 ml-6">
      <div className="flex flex-col mb-2">
        <div className="flex flex-row mb-1">
          <label htmlFor="name" className="w-1/2 mr-2 text-sm text-orange-600 ">Your Name</label>
          <label htmlFor="email" className="w-1/2 mr-2 text-sm text-gray-400">Your Email</label>
        </div>
        <div className="flex flex-row">
          <input type="text" id="name" className="  w-40 h-6 border  border-transparent border-b-orange-600  p-1" />
          <input type="text" id="email"  className=" w-40 ml-6 h-6 border  border-transparent border-b-gray-400  p-1" />
        </div>
      </div>

      <div className="flex flex-col mb-2 mt-2">
        <div className="flex flex-row mb-1">
          <label htmlFor="phone" className="w-1/2 mr-2 text-sm text-gray-400">Phone</label>
          <label htmlFor="country" className="w-1/2 mr-2 text-sm text-gray-400">Country</label>
        </div>
        <div className="flex flex-row">
          <input type="text" id="name" className="  w-40 h-6 border  border-transparent border-b-gray-400  p-1" />
          <input type="text" id="email"  className=" w-40 ml-6 h-6 border  border-transparent border-b-gray-400  p-1" />
        </div>
        <div className="flex flex-row mb-1 mt-4">
          <label htmlFor="link" className="w-1/2 mr-2 text-sm text-black">Link</label>
        </div>
        <div className="flex flex-row">
          <input type="text" id="Link" className="  w-11/12 pr-7 h-6 border  border-transparent border-b-gray-400  p-1" />
          
         
        </div>
        <div className="flex flex-row mb-1 mt-4">
          <label htmlFor="link" className="w-1/2 mr-2 text-sm text-gray-400">Message</label>
        </div>
        <div className="flex flex-row">
          <textarea  id="Link" className="  w-11/12 pr-7 h-24 border rounded-xl   border-gray-400  p-1" />
          
         
        </div>
      </div>

    </div>
      </div>
      <button className="w-10/12 h-8 rounded-full bg-orange-600 text-white font-semibold ml-9 mt-1">Send Message</button>
    </div>
   
        
    </div>
    <div className="h-screen ">
        <div className="flex flex-col justify-center text-center mt-10 ">
            <h1 className="text-lg text-orange-600 font-semibold">Find Us</h1>
            <h1 className="text-4xl text-black font-bold">Our Locations</h1>
            </div>
            <div className="flex flex-row w-full">

    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-8 pt-40 w-52 mx-auto mt-24">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/222px-Statue_of_Liberty_7.jpg" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl text-center text-lime-400">Usa</h3>
    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-center text-gray-300">City of love</div>
</article>


<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-8 pt-40 w-52 mx-auto mt-24">
    <img src="https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_Toronto_destination_main_1_l_572_1000.jpg" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl text-center text-lime-400">Canada</h3>
    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article>

<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-8 pt-40 w-52 mx-auto mt-24">
    <img src="https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover"/>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
    <h3 className="z-10 mt-3 text-3xl text-center text-lime-400">India</h3>
    <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article>

<article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-6 pb-8 pt-40 w-52 mx-auto mt-24">
  <img src="https://www.blibli.com/friends-backend/wp-content/uploads/2024/04/B111872-Cover.jpg" alt="University of Southern California" className="absolute inset-0 h-full w-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
  <h3 className="z-10 mt-3 text-3xl text-center text-lime-400">Australia</h3>
  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
</article>
</div>

    </div>
    </div>

   

)

}

export default Contact