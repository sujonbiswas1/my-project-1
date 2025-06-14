import hero2 from '../images/hero2.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='relative'>
      <div className="back z-10 ">
        <div className='grid grid-cols-1 md:grid-cols-2  max-w-screen mx-auto space-x-8'>

          <div className=''>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full text-white font-bold mb-6'>Build Inform Advance</h1>
            <p className=' text-secoundary'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

            <div className='mt-10 flex flex-col md:flex-row gap-6'>
              <button className='bg-linear-to-l from-purple-500 to-blue-600 px-10 py-2 rounded-xl text-white font-medium cursor-pointer '>Apply For Accelerator</button>
              <button className='border border-amber-300 px-10 py-2 text-transparent rounded-xl font-medium  cursor-pointer'>Apply For Accelerator</button>
            </div>
          </div>

          <div>
            <img src={hero2} className=' mt-40 md:-mt-10'  alt="" />
          </div>

          

        </div>


        <div className="absolute left-0 bottom-0 h-1/2 right-0 z-10  bg-gradient-to-t from-black to-transparent hidden md:block"></div>
      </div>







    </div>
  )
}

export default Hero