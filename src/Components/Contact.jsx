import React from 'react';
import { toast } from 'react-toastify';
import w1 from '../images/w1.png';

 const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "428fc45c-f4a5-42e6-a5f7-c54a1bfc2891");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("submited");
      toast.success()
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult();
      toast.error(data.message)
    }
  };


  return (
    <div className="md:pb-30 pb-7  md:-pt-18 bg-black relative overflow-hidden"> 
      <div className="px-4 sm:px-8 md:px-14 lg:px-32 container mx-auto">

        <div className="hidden md:grid md:grid-cols-2 gap-8">

          <div data-aos="fade-up">
          <img src={w1} alt="" />
        </div>

        <div data-aos="fade-down" className='w-full'>
          <h2 className="text-4xl text-center font-bold text-white mb-12">Contact Us</h2>


          <form action="" onSubmit={onSubmit}>

            
          <div className="bg-gradient-to-r p-1 from-blue-600 to-pink-500 rounded-3xl mb-12">

            <div className="bg-black p-2 rounded-3xl">
              <input type="email" name='email' className="bg-transparent w-full text-white px-4 " required />

            </div>

          </div>

             <div className="bg-gradient-to-r p-1 from-blue-600 to-pink-500  rounded-3xl mb-12">



            <div className="bg-black p-2 rounded-3xl">
              <textarea name="description" id="" className="bg-transparent w-full text-white px-4 h-[10rem]" required></textarea>

            </div>

          </div>

          <button type='submit' onClick={result} className="w-full bg-linear-to-l from-pink-500 to-blue-500 text-white text-2xl rounded-3xl py-2 cursor-pointer">submit</button>
          <span className='text-white text-2xl mt-6 pt-6'>{result}</span>


          </form>


        </div>

        </div>

        <div className="flex flex-col md:hidden gap-8 justify-between">

         

        <div data-aos="fade-down">
          <h2 className="text-4xl text-center font-bold text-white mb-12">Contact Us</h2>


          <form action="" onSubmit={onSubmit}>

            
          <div className="bg-gradient-to-r p-1 from-blue-600 to-pink-500 rounded-3xl mb-12">

            <div className="bg-black p-2 rounded-3xl">
              <input type="email" name='email' className="bg-transparent w-full text-white px-4 " required />

            </div>

          </div>

             <div className="bg-gradient-to-r p-1 from-blue-600 to-pink-500  rounded-3xl mb-12">



            <div className="bg-black p-2 rounded-3xl">
              <textarea name="description" id="" className="bg-transparent w-full text-white px-4 h-[10rem]" required></textarea>

            </div>

          </div>

          <button type='submit' onClick={result} className="w-full bg-linear-to-l from-pink-500 to-blue-500 text-white text-2xl rounded-3xl py-2 cursor-pointer">submit</button>
          <span className='text-white text-2xl mt-5 pt-5'>{result}</span>


          </form>


        </div>

         <div data-aos="fade-up">
          <img src={w1} alt="" />
        </div>

        </div>


        

      </div>




    </div>
  )
}

export default Contact