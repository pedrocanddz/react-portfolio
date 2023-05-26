import React from 'react';

const Skills = () => {
  return (
    <section className='sm:h-screen flex flex-col lg:flex-row justify-around  items-center pt-10'>
        <div data-aos='fade-up' data-aos-easing='ease-in-sine' data-aos-anchor-placement="top-bottom">
            <p className='lg:min-h-[50%] text-3xl texto-header text-center lg:py-30' >Meus status no GitHub</p>
            <div className='flex-col p-10 justify-center'>
                <a className='my-2' href='https://github.com/pedrocanddz' target='blank'><img className='lg:px-10 m-auto my-5' src="https://github-readme-stats-three-lake-84.vercel.app/api?username=pedrocanddz&count_private=true&show_icons=true&theme=tokyonight" alt="status no gitHub" /></a>
                <a  href='https://github.com/pedrocanddz' target='blank'><img className='lg:px-10 m-auto' src="https://github-readme-stats-three-lake-84.vercel.app/api/top-langs/?username=pedrocanddz&theme=tokyonight" alt="" /></a>
            </div>
        </div>
        
        <div className='lg:min-h-[50%] w-2/3   lg:w-2/5 ' data-aos='fade-down' data-aos-easing='ease-in-sine'>
            <p className='text-3xl texto-header text-center py-30'>Linguagems</p>
            <p className="text-2xl texto-claro text-left py-10">
                Tenho conhecimento em algumas linguagems que tive contato durante a graduação ou através de cursos online
            </p>
            <ul className='texto-claro list-disc'>
                <li>C</li>
                <li>C++</li>
                <li>HTML e CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </div>
    </section>
  )
}

export default Skills