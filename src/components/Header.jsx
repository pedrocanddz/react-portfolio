import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='z-[100] flex w-full items-center justify-between p-2 fixed bg-[#1e5091]'>
        <div>
            <h1 className='texto-header'><Link to="/">PedroSousa.social</Link></h1>
        </div>
        <div className=''>    
            <nav >
                <ul className='flex items-center justify-around space-x-2 '>
                    <li className='btn-header'><Link to="/">Sobre</Link></li>
                    <li className='btn-header'><Link to="/Skills">Skills</Link></li>
                    <li className='btn-header'><Link to="/Projetos">Projetos</Link></li>
                </ul>
            </nav>
        </div>  
    </header>
  )
}

export default Header