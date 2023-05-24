import React from 'react'

const Header = () => {
  return (
    <header className='flex w-full items-center justify-between p-4 fixed'>
        <div>
            <h1 className='texto-header'>My Portfolio</h1>
        </div>
        <div className=''>    
            <nav >
                <ul className='flex items-center justify-around space-x-2 '>
                    <li className='btn-header'><a href="#sobre">Sobre</a></li>
                    <li className='btn-header'><a href="#skills">Skills</a></li>
                    <li className='btn-header'><a href="#projetos">Projetos</a></li>
                </ul>
            </nav>
        </div>  
    </header>
  )
}

export default Header