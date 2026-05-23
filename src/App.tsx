import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Foundation from './components/Foundation'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <div className="page" data-name="HOME">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Foundation />
      <Contact />
    </div>
  )
}
