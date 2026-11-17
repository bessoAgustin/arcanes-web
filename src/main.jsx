import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import AboutUs from './components/AboutUs.jsx'
import Services from './components/Services.jsx'
import School from './components/School.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Hero />
    <AboutUs />
    <Services />
    <School />
  </StrictMode>,
)
