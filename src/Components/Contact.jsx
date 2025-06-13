
const Contact = () => {
  return (
    <div className="pb-50 pt-14 bg-black relative overflow-hidden"> 
      <div className="px-4 sm:px-8 md:px-14 lg:px-32 container mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div>
          <img src="/public/w1.png" alt="" />
        </div>

        <div>
          <h2 className="text-4xl text-center font-bold text-white mb-12">Contact Us</h2>

          <div className="bg-gradient-to-r p-1 from-blue-600 to-pink-500 rounded-3xl mb-12">

            <div className="bg-black p-2 rounded-3xl">
              <input type="text" className="bg-transparent w-full text-white px-4 " />

            </div>

          </div>

             <div className="bg-gradient-to-r p-1 from-blue-600 to-pink-500 rounded-3xl mb-12">



            <div className="bg-black p-2 rounded-3xl">
              <textarea name="" id="" className="bg-transparent w-full text-white px-4 h-[10rem]"></textarea>

            </div>

          </div>

          <button className="w-full bg-linear-to-l from-pink-500 to-blue-500 text-white text-2xl rounded-3xl py-1 cursor-pointer">submit</button>

        </div>

        </div>


        

      </div>




    </div>
  )
}

export default Contact