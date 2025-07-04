import { Link, NavLink } from "react-router"

import group5 from '../images/Group5.png'
import logo from '../images/Logo.png'


const Footer = () => {
  return (
    <div className="">

       <div className="py-7 z-50 w-full top-0 mx-auto bg-black relative ">
      <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-14 container mx-auto justify-between ">
         <div className="flex items-start  ">
         <Link className="" to='/'> 
         <img src={logo}  className="w-[110px] cursor-pointer z-30" alt="" />
         <img src={group5} className="absolute -top-130 py-4 -ml-60  -rotate-90 w-[29rem]" alt="" /> 
         </Link> 

     

        </div>

         <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-0 ">
          <NavLink to="/about" className="text-[16px] text-white font-medium hover:text-gray-100 transition-all duration-300 delay-200">About Us</NavLink>
          <NavLink to="/web" className="text-[16px] text-white font-medium hover:text-gray-100 transition-all duration-300 delay-200">Web3ATL</NavLink>
          <NavLink to="/accelerator" className="text-[16px] text-white font-medium hover:text-gray-100 transition-all duration-300 delay-200">Accelerator</NavLink>
          <NavLink to="/blog" className="text-[16px] text-white font-medium hover:text-gray-100 transition-all duration-300 delay-200">Blog</NavLink>
          <NavLink to="/contact" className="text-[16px] text-white font-medium hover:text-gray-100 transition-all duration-300 delay-200">Contact</NavLink>

        </div>

          

       

      </div>

        
      
     

     
    </div>



    </div>

    
    

    
  )
}

export default Footer