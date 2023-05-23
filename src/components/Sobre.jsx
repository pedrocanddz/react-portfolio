import React from 'react'

const Sobre = () => {
  return (
    <section className='flex items-center justify-around p-10'>
        <div className='max-w-2xl text-claro-neve'>
            <h2 className='text-8xl texto-header'>Olá!</h2>
            <p className='text-3xl'>Me chamo Pedro e sou estudante de graduação em ciências da computação pela UFSCar (Universidade federal de São Carlos) - Campus Sorocaba</p>
            <p className='text-3xl'>Atualmente busco me especilizar na área de <span className='text-bold'>Desenvolvimento Web</span></p>
        </div>
        <div className='w-96'>
            <img className='object-contain rounded-full h-100' src="/src/img/perfil.jpg" alt="" />
        </div>
    </section>
  )
}

export default Sobre