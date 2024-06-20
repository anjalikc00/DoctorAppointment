import React from "react";


function Register() {
  return (
    // <i class="fa-solid fa-user"></i>
    <div className="bg-gradient-to-r from-sky-300 to-indigo-600 h-screen w-full bg-flex flex-row align-items justify-center  pt-20">
    
      <div classname=" flex justify-center align-items border-2 h-96 w-96">
        <h1 className="italic text-3xl tracking-wider line-clamp-6 text-slate-800 flex justify-center font-semibold">REGISTER HERE</h1>
        <form action="" className="flex flex-col">
          <div className="h-20 w-full flex justify-center items-center gap-5">
               <label htmlFor="">Name</label>  
            <input type="text" className="p-2 outline-none rounded-xl  focus:bg-gray-700 focus:text-white" placeholder="Username" />
          </div>
          <div className="h-20 w-full  flex justify-center items-center gap-5">
            <label htmlFor="">Email</label>
            <input type="text" className="p-2  outline-none rounded-xl  focus:bg-gray-700 focus:text-white " placeholder="Password" />
          </div>
          <div className="h-20 w-full flex justify-center items-center gap-5">
               <label htmlFor="">Password</label>  
            <input type="text" className="p-2 outline-none rounded-xl  focus:bg-gray-700 focus:text-white" placeholder="Username or Email" />
          </div>
            <div className="h-20 w-full flex flex-col justify-center items-center">
            <button className="h-[40px] w-[200px] bg-green-700 rounded-2xl hover:text-green-700 font-semibold hover:bg-white hover:shadow-gray-900 ">Register</button>
         {/* <Link to='/login' className="hover:text-green-700">Sign In? </Link> */}
        
            </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
