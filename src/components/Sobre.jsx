import React from 'react';
import img1 from '../img/971.jpg';

const Sobre = () => {
  return (
    <section className='flex-col flex sm:flex-row h-screen justify-center sm:justify-around items-center align-middle w-[95%] pt-10' >
        <div className=' texto-claro text-2xl lg:text-5xl lg:px-20 ' data-aos='fade-rigth' data-aos-easing='ease-in-sine'>
            <p className=''>Olá!</p>
            <p className=''>Sou o Pedro e faço graduação em ciências da computação pela UFSCar (Universidade federal de São Carlos) - Campus Sorocaba</p>
            <p className=''>Atualmente busco me especilizar na área de <span className='text-claro-neve text-bold'>Desenvolvimento Web</span></p>
        </div>
        <div data-aos='fade-left'>
          <img className='sm:w-[100%] w-[90%] h-auto max-w-[1500px] rounded-[5rem]'  src={img1} alt="" />
        </div>
    </section>
  )
}

export default Sobre