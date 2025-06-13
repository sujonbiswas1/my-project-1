import Footer from "../Layers/Footer"
import About from "./About"
import Accelerator from "./Accelerator"
import Blog from "./Blog"
import Hero from "./Hero"
import Web from "./Web"
const Index = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
     <Hero />
     <Web />
     <About />
     <Accelerator />
     <Blog />
     <Footer />
   
 
    </div>
  )
}

export default Index