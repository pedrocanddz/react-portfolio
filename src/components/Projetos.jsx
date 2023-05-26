import React from 'react';

const Projetos = () => {
  return (
    <section className='h-screen flex justify-center align-center items-center pt-10'>
        <div className='texto-claro w-80' data-aos='fade-down'>
            <h2 className='text-4xl'>Projetos</h2>
            <ul className='mt-8'  >
                <li className='relative flex gap-6 pb-5 items-baseline' data-aos='fade-down'>
                    <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-azul-claro'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div className='text-sm'>
                        <p className='mt-2'>
                            Meu primeiro projeto é este portfolio, que foi desenvolvido
                            com o uso de ReactJS e TailwindCSS utilizando o Vite como bundler 
                            e o GitHub Pages para hospedagem.
                        </p>
                        <div className='flex flex-wrap mt-2'>
                            <p className='p-1 mx-1 bg-claro-neve rounded-sm'>React</p>
                            <p className='p-1 mx-1 bg-claro-neve rounded-sm'>JavaScript</p>
                            <p className='p-1 mx-1 bg-claro-neve rounded-sm' >Tailwind</p> 
                        </div>
                        
                    </div>
                </li>
                <li className='relative flex gap-6 pb-5 items-baseline' data-aos='fade-down'>
                    <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-azul-claro'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </div>
                    <div className='text-sm'>
                        <p>Em andamento</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Projetos