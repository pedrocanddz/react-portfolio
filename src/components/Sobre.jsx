import React from 'react';
import img1 from '../img/971_30.jpg';

const Sobre = () => {
  return (
    <section className='flex-col flex sm:flex-row h-screen justify-center sm:justify-around items-center align-middle w-[95%] pt-10' >
        <div className=' lg:px-20 ' data-aos='fade-rigth' data-aos-easing='ease-in-sine'>
            <p className=' text-2xl lg:text-5xl'><span className='text-header text-bold'>Desenvolvedor Front-End</span></p>
            <p className='texto-p text-4xl'>
              Sou o Pedro Henrique e faço graduação em ciências da computação pela UFSCar - Campus Sorocaba
              <p>Atualmente uso <span className='texto-header'>React</span> e <span className='texto-header'>JavaScript</span> como linguagens de programação</p>
            </p>
                          
        </div>
        <div data-aos='fade-left'>
          <img className='sm:w-[100%] w-[90%] h-auto max-w-[1500px] rounded-[5rem]'  src={img1} alt="" />
        </div>
    </section>
  )
}

export default Sobre