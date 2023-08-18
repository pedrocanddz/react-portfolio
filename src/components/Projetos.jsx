import React from 'react';
import arrow from '../img/arrow.png';

const Projetos = () => {
  return (
    <section className='h-screen flex justify-center align-center items-center pt-10'>
        <div className='texto-claro w-1/3' data-aos='fade-down'>
            <h2 className='text-4xl'>Projetos</h2>
            <ul className='mt-8'  >
                <a href="https://github.com/pedrocanddz/react-portfolio" target='_blank'>
                    <li className='relative flex gap-6 pb-5 items-baseline ' data-aos='fade-down'>
                        <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-azul-claro'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div className='text-sm flex justify-between hover:shadow-inner
                         hover:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                         hover:drop-shadow-lg py-4 px-2 rounded-lg'>
                            <div className='px-2'>
                                <p className='mt-2'>
                                    <h4>Portfolio</h4>
                                    <br />
                                    <p>Meu primeiro projeto é este portfolio, que foi desenvolvido
                                    com o uso de ReactJS e TailwindCSS utilizando o Vite como bundler 
                                    e o DigitalOcean para hospedagem.</p>
                                </p>

                                <div className='flex flex-wrap mt-2'>
                                    <p className='p-1 mx-1 bg-claro-neve rounded-md'>React</p>
                                    <p className='p-1 mx-1 bg-claro-neve rounded-md'>JavaScript</p>
                                    <p className='p-1 mx-1 bg-claro-neve rounded-md' >Tailwind</p> 
                                </div>
                            </div>
                            <img className='w-[20px] h-[20px] m-auto align-rigth' src={arrow} alt="" />    
                        </div>
                    </li>
                </a>
                <a href="https://github.com/pedrocanddz/movie-generator" target='_blank'>
                    <li className='relative flex gap-6 pb-5 items-baseline' data-aos='fade-down'>
                        <div className='before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-azul-claro'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" />
                            </svg>
                        </div>
                        <div className='text-sm flex justify-between hover:shadow-inner
                            hover:matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                            hover:drop-shadow-lg py-4 px-2 rounded-lg'>
                                <div className='px-2'>
                                    <p className='mt-2'>
                                        <h4>Movie Generator</h4>
                                        <br />
                                        <p>Projeto com o objetivo de buscar filmes mais populares e bem avaliados de uma API chamada Movie DataBase
                                            (TMDB) e exibir em uma lista com a imagem do filme, o título e a nota de avaliação.
                                            Além de adicionar o filme desejado em uma Watchlist possibilitando ver detalhes do filme no site do IMDB.
                                        </p>
                                    </p>

                                    <div className='flex flex-wrap mt-2'>
                                        <p className='p-1 mx-1 bg-claro-neve rounded-md'>VueJs</p>
                                        <p className='p-1 mx-1 bg-claro-neve rounded-md'>JavaScript</p>
                                        <p className='p-1 mx-1 bg-claro-neve rounded-md' >Tailwind</p> 
                                    </div>
                                </div>
                                <img className='w-[20px] h-[20px] m-auto align-rigth' src={arrow} alt="" />    
                            </div>
                    </li>
                </a>
            </ul>
        </div>
    </section>
  )
}

export default Projetos