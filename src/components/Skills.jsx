import React from 'react'

const Skills = () => {
  return (
    <section>
        <div>
            <p className='text-5xl texto-header text-center py-30'>Meus status no GitHub</p>
            <div className='flex p-10 items-center justify-center'>
                <a href='https://github.com/pedrocanddz' target='blank'><img className='px-10' src="https://github-readme-stats-three-lake-84.vercel.app/api?username=pedrocanddz&count_private=true&show_icons=true&theme=tokyonight" alt="status no gitHub" /></a>
                <a href='https://github.com/pedrocanddz' target='blank'><img className='px-10' src="https://github-readme-stats-three-lake-84.vercel.app/api/top-langs/?username=pedrocanddz&theme=tokyonight" alt="" /></a>
            </div>
        </div>
        <div>
                <p className='text-5xl texto-header text-center py-20'>Minhas Habilidades</p>
            <div className='flex justify-center'>
                <div className='px-10 justify-center'>
                    <p className='text-4xl texto-header'>Avançado</p>
                    <div>

                    <img className='icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" />
                    </div>
                    <img className='icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg" />

                </div>
                <div className='px-10 flex-col justify-center items-center'>
                    <div>
                    <p className='text-4xl texto-header'>Intermediário</p>

                    </div>
                    <div>

                    <img className='icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    </div>
                </div>
                <div className='px-10'>
                    <p className='text-4xl texto-header'>Iniciante</p>

                    <img className='icons' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            
                </div>

            </div>
        </div>
    </section>
  )
}

export default Skills