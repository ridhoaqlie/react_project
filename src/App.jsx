import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'
import { useState } from 'react'

function App() {

  const [isDark, setIsDark] = useState(true)

  return (
    <div id='top' data-theme={isDark ? 'dark' : 'light'} className={'app'}>
      <Header
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)} />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
