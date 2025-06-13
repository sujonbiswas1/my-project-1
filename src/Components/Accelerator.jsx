import Footer from "../Layers/Footer"

const Accelerator = () => {
  return (
    <div className=" bg-black overflow-hidden md:pb-70">
      <div className="py-20 text-center mx-auto">
        <h2 className="text-5xl font-bold text-white">Our <span className="bg-linear-to-l from-pink-500 to-blue-600  bg-clip-text text-transparent"> Partners</span> </h2>
      </div>
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 container mx-auto">


        <div className="flex flex-col lg:flex-row gap-4">
          <img src="/src/assets/images/partner-1.png" alt="" />
          <img src="/src/assets/images/partner2.png" alt="" />
           <img src="/src/assets/images/partner-3.png" alt="" />
           <img src="/src/assets/images/partner-1.png" alt="" />
             <img src="/src/assets/images/partner2.png" alt="" />
          

        </div>

      </div>

    
    </div>
  )
}

export default Accelerator