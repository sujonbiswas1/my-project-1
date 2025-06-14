import partner1 from '../images/partner-1.png'
import partner3 from '../images/partner-3.png'
import partner2 from '../images/partner2.png'
const Accelerator = () => {
  return (
    <div className=" bg-black overflow-hidden md:pb-70">
      <div className="py-20 text-center mx-auto">
        <h2 className="text-5xl font-bold text-white" data-aos="fade-down">Our <span className="bg-linear-to-l from-pink-500 to-blue-600  bg-clip-text text-transparent"> Partners</span> </h2>
      </div>
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 container mx-auto">


        <div className="flex flex-col lg:flex-row gap-4 " data-aos="fade-up">
          <img src={partner1} alt="" />
          <img src={partner2} alt="" />
           <img src={partner3} alt="" />
           <img src={partner1} alt="" />
             <img src={partner2} alt="" />
          

        </div>

      </div>

    
    </div>
  )
}

export default Accelerator