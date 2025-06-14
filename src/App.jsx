import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import About from './Components/About.jsx'
import Accelerator from './Components/Accelerator.jsx'
import Blog from './Components/Blog.jsx'
import Contact from './Components/Contact.jsx'
import Error from './Components/Error.jsx'
import Index from './Components/Index.jsx'
import Web from './Components/Web.jsx'
import Navbar from './Layers/Navbar.jsx'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/"  element={<Index />}/>
      <Route path="/about" element={<About />}  />
      <Route path="/web" element={<Web />}  />
      <Route path="/Accelerator" element={<Accelerator />}  />
      <Route path="/blog" element={<Blog />}  />
      <Route path="/contact" element={<Contact />}  />
      <Route path="*" element={<Error />}  />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
