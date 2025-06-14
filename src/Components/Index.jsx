import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from "../Layers/Footer"
import About from "./About"
import Accelerator from "./Accelerator"
import Blog from "./Blog"
import Contact from "./Contact"
import Hero from "./Hero"
import Web from "./Web"
const Index = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
    <ToastContainer />
     <Hero />
     <Web />
     <About />
     <Accelerator />
     <Blog />
     <Contact />
     <Footer />
   
 
    </div>
  )
}

export default Index