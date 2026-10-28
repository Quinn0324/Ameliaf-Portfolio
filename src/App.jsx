import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import CaseStudy from './pages/CaseStudy.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cs1" element={<CaseStudy slug="cs1" />} />
        <Route path="/cs2" element={<CaseStudy slug="cs2" />} />
        <Route path="/cs3" element={<CaseStudy slug="cs3" />} />
      </Route>
    </Routes>
  )
}
