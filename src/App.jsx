import React,{useEffect} from 'react'
import Header from './components/Header.jsx'
import Static from './components/Static.jsx'
import Sobre from './components/Sobre.jsx'
import Skills from './components/Skills.jsx'
import Projetos from './components/Projetos.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (

    <div>
      <Header></Header>
      <Sobre></Sobre>
      <Skills></Skills>
      <Projetos></Projetos>
      <Static></Static>
    </div>
  )
}

export default App