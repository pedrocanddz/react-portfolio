import React from 'react'

const Sobre = () => {
  return (
    <section className='flex h-screen justify-around items-center align-middle w-[95%]' >
        <div className=' texto-claro text-5xl px-20' data-aos='fade-rigth' data-aos-easing='ease-in-sine'>
            <p className=''>Olá!</p>
            <p className=''>Sou o Pedro e faço graduação em ciências da computação pela UFSCar (Universidade federal de São Carlos) - Campus Sorocaba</p>
            <p className=''>Atualmente busco me especilizar na área de <span className='text-claro-neve text-bold'>Desenvolvimento Web</span></p>
        </div>
        <div data-aos='fade-left'>
          <img className='w-[100%] h-auto max-w-[1500px] rounded-[5rem]'  src="/src/img/971.jpg" alt="" />
        </div>
    </section>
  )
}

export default Sobre