
const Blog = () => {
  return (
     <div className=" bg-black relative h-full overflow-hidden pb-30">
      <div className="px-4 sm:px-8 md:px-14 lg:px-24 container mx-auto">

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2">

             <div className="px-10  md:py-5 mx-auto w-full">
            <h2 className="text-white text-4xl md:text-4xl mb-8 font-bold">How to use <span className="bg-gradient-to-l from-purple-700  to-blue-600 bg-clip-text text-transparent "> Web3ATL ?</span>  </h2>
            <p className="text-secoundary  mb-4">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            <p className="text-secoundary ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <button className="bg-gradient-to-l from-purple-700  to-blue-600 px-10 py-3 cursor-pointer text-white transition-all duration-300 delay-150 hover:text-gray-300 rounded-2xl mt-6">View Detail</button>

          </div>

          <div className="px-10 md:py-16 py-14 -ml-20 md:ml-0">
            <img src="/public/w1.png" className="ml-10 relative z-20" alt="" />
            <div className="absolute sm:z-10  top-130 md:-top-120 right-0 rotate-180 ">
              <img src="/public/Group 5.png" alt="" />

            </div>
          </div>

       

        </div>
        </div>

      </div>
      
 
    </div>
  )
}

export default Blog