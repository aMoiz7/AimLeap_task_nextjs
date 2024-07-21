import { stringify } from "querystring"

interface dataTypes{
   data:{email :string,
    password :string,
    firstname :string,
    lastname :string} ,
    setData: React.Dispatch<React.SetStateAction<any>>
}
const Signup = ({data , setData}:dataTypes) => {

 
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
         const {name ,value} =e.target

         setData((prev:dataTypes)=>({...prev , [name]:value}))
    }
    
    function handleSubmit (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(data){
            localStorage.setItem("Userdata" , JSON.stringify(data))
        }
        else{
            alert("data not found")
        }
    }

    console.log(data ,"data")

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
    <div className="w-7/12 max-h-screen flex flex-row items-center -mt-20">
        <div className="bg-gradient-to-r from-purple-600 to-fuchsia-700  h-4/5 w-full text-center p-4 border rounded-lg z-10 ">
        <h6 className="text-sm text-white mt-10">QUOTE RLATED TO USER</h6>
        <img src="https://www.esendex.co.uk/wp-content/uploads/UKI-ESX-BLG-How-to-create-a-mobile-journey-that-converts-FY24Q1-JP-6134611129-1.png" className="w-2/3 h-52 ml-20 rounded-lg mt-14"/>
        <div className="flex flex-col  justify-start align-bottom">
            <h6 className=" text-start text-white text-sm mt-28">Trusted by</h6>
            <div className="align-bottom text-start font-medium mt-2 text-lg text-gray-300 flex space-x-6">
  <span>GOOGLE</span>
  <span>GOOGLE</span>
  <span>GOOGLE</span>
  <span>GOOGLE</span>
  
</div>
        </div>
        </div>
       
        <div className="bg-white h-4/5 w-full text-center  rounded-lg ">
        
       <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
  </div>
  <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-2" onSubmit={handleSubmit} method="POST" >
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-start">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" value={data.email} type="email" autoComplete="email" required className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 text-start">Password</label>
          
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="current-password" value={data.password} required className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-start">First Name</label>
        <div className="mt-2">
          <input id="firstname" name="firstname" type="text"  value={data.firstname} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset p-2 focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-start">Last Name</label>
        <div className="mt-2">
          <input id="lastname" name="lastname" type="text" value={data.lastname} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} />
        </div>
      </div>
      <p className=" text-center text-xs text-gray-500">
      By creating an account,<br/> you agree to the xxxx 
      <a href="#" className=" ml-1 leading-6 text-blue-600 hover:text-indigo-500 underline">
        Privacy policy</a> and <a href="#" className=" leading-6 text-blue-600 hover:text-indigo-700 underline">Terms of use</a>
    </p>
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >Create account</button>
      </div>
    </form>

    <p className="mt-2 text-center text-xs text-gray-500">
      Already have an account ?
      <a href="#" className=" ml-1 leading-6 text-blue-600 hover:text-indigo-500 ">
        Sign In
        </a>
        </p>
   
  </div>
</div>



        
        </div>
    </div>
</div>
  )
}

export default Signup