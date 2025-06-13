
const About = () => {
  return (
    <div className="bg-black py-16  overflow-hidden">
     <div className="flex flex-col items-center px-4 sm:px-8 md:px-14 lg:px-20 mx-auto container justify-center">
      <div>
        <h1 className="text-center text-5xl md:text-4xl lg:text-5xl text-white font-medium">Our <span className="bg-linear-to-l from-purple-400 to-blue-600 bg-clip-text text-transparent ">Vertical </span> </h1>

        <div className="pt-60">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  ">

            <div className="bg-[#20114f] outline-[#4719bc] relative py-10 mt-18 md:mt-0 px-6 rounded-2xl" >
              <img src="/public/e1.png" className="shadow-lg absolute -top-28 -ml-5" alt="" />
              <h3 className="text-2xl text-white text-center font-semibold mb-4">Education</h3>
              <p className="text-secoundary mb-4 ">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing</p>

              <button className="px-5 py-2 shrink-0 cursor-pointer bg-linear-to-l from-pink-500 to-blue-600  w-full rounded-2xl shadow-lg outline-[#231444]">Read More Detail</button>

            </div>

              <div className="bg-[#20114f] outline-[#4719bc] relative py-10 mt-18 md:mt-0 px-6 rounded-2xl" >
              <img src="/public/government.png" className="shadow-lg absolute -top-40 -ml-2" alt="" />
              <h3 className="text-2xl text-white text-center font-semibold mb-4">Governance</h3>
              <p className="text-secoundary mb-4 ">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing</p>

              <button className="px-5 py-2 shrink-0 cursor-pointer bg-linear-to-l from-pink-500 to-blue-600  w-full rounded-2xl shadow-lg outline-[#231444]">Read More Detail</button>

            </div>

            <div className="bg-[#20114f] outline-[#4719bc] relative py-10 mt-18 md:mt-0 px-6 rounded-2xl" >
              <img src="/public/e1.png" className="shadow-lg absolute -top-28 -ml-5" alt="" />
              <h3 className="text-2xl text-white text-center font-semibold mb-4">Education</h3>
              <p className="text-secoundary mb-4 ">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing</p>

              <button className="px-5 py-2 shrink-0 cursor-pointer bg-linear-to-l from-pink-500 to-blue-600  w-full rounded-2xl shadow-lg outline-[#231444]">Read More Detail</button>

            </div>

              <div className="bg-[#20114f] outline-[#4719bc] relative py-10 mt-18 md:mt-0 px-6 rounded-2xl" >
              <img src="/public/government.png" className="shadow-lg absolute -top-40 -ml-2" alt="" />
              <h3 className="text-2xl text-white text-center font-semibold mb-4">Governance</h3>
              <p className="text-secoundary mb-4 ">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing</p>

              <button className="px-5 py-2 shrink-0 cursor-pointer bg-linear-to-l from-pink-500 to-blue-600  w-full rounded-2xl shadow-lg outline-[#231444]">Read More Detail</button>

            </div>


          </div>
          
        </div>
      </div>

     </div>
    </div>
  )
}

export default About