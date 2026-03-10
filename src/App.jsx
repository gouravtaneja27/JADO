import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import OurServices from './pages/OurServices'
import SubjectAreas from './pages/SubjectAreas'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Navbar />
      < Hero />
      < OurServices />
      < AboutUs />
      < SubjectAreas />
      < ContactUs />
      < Footer />
    </>
  )
}

export default App
