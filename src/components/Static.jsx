import React from 'react';

const Static = () => {
  return (
    <div  className=' bottom-0 fixed right-0 py-5 text-center'>
        <div className='py-2'>
            <a href="https://github.com/pedrocanddz" target='blank'>
                
            <img className='w-6 h-6 sm:w-8 sm:h-8' src="https://img.icons8.com/windows/32/github.png" alt="github"/>
          </a></div>
        <div className='sm:py-2'>
          <a href="https://www.linkedin.com/in/pedro-h-candido/" target='blank'>
            <img className='w-6 h-6 sm:w-8 sm:h-8' src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
          </a>
        </div>
        <div className='sm:px-1 sm:py-2 sm:text-bold vertical-rl tracking-wider texto-p'>pedrosousa@estudante.ufscar.br</div>
    </div>
  )
}

export default Static