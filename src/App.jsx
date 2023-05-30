import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Static from './components/Static.jsx';
import Sobre from './components/Sobre.jsx';
import Skills from './components/Skills.jsx';
import Projetos from './components/Projetos.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <Router>
      <div>
        <Header></Header>
        <div>

          <Routes>
            <Route exact path="/" element={<Sobre/>}></Route>
            <Route exact path="/Skills" element={<Skills/>}></Route>
            <Route exact path="/Projetos" element={<Projetos/>}></Route>
          </Routes>
        </div>
        <Static></Static>
      </div>
    </Router>
  )
}

export default App