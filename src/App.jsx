import React from 'react'
import Header from './components/Header.jsx'
import Sobre from './components/Sobre.jsx'
import Skills from './components/Skills.jsx'
import Static from './components/Static.jsx'


const App = () => {
  return (
    <div className='font-serif'>
      <Header></Header>
      <Sobre></Sobre>
      <Skills></Skills>
      <Static></Static>
    </div>
  )
}

export default App