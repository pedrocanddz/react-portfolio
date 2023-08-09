import React from 'react';

const Atividades = () =>{
    return (
        <section className='h-screen flex justify-center align-center items-center pt-10'>
            <div className='text-claro text-center w-[60%] m-auto'>
                <h2 className='text-3xl'>Atividades realizadas</h2>
                <ul className='texto-claro grid  gap-5 py-5 '>
                    <li className='py-10'>
                        <h3 className='text-2xl pb-5'>Empresa Júnior</h3>
                        <p className='texto-p'>Durante a graduação participei da <a href="https://www.beetsjr.com.br/quem-somos" target='blank' className='text-azul-claro'>Beets Jr</a>, uma empresa júnior focada em criar sites institucionais para clientes, 
                            em que aprendi o básico do Desenvolvimento Web, trabalhar em equipe e a desenvolver projetos com prazos e
                            requisitos definidos com o uso de HTML,CSS e JavaScript.
                        </p>
                    </li>
                    <li className='py-10'>
                        <h3 className='text-2xl pb-5'>Maratona de programação</h3>
                        <p className='texto-p'>Atualmente, participo de uma equipe com o foco em competir na maratona de programação,
                            onde desenvolvemos habilidades de resolução de problemas, 
                            o aprendizado de estruturas de dados e o trabalho em equipe.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Atividades