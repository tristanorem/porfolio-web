import React from 'react';

import fotoImg from '../assets/foto1.jpg'
const About = () => {
  return (
    < div name='about' className='w-full h-screen  text-gray-300'>
        < div className='flex flex-col justify-center items-center w-full h-full '>
            < div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                < div className='sm:text-rigth pb-8 pl-4'>
                    < p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        Sobre mí
                    </p>
                </ div>
                < div ></div>
                </div>
                < div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8'>
                    < div >
                    < img className='grid justify-center bg-pink-500 shadow-lg shadow-pink-500/60 drop-shadow-xl  rounded-[35px] w-[25rem] my-6'  src={fotoImg} alt="fondo"/>
                    </ div>
                    < div className='sm:text-left text-4xl font-bold '>
                    <p>Hola! Me desempeño en el diseño y desarrollo de paginas web dinamicas y funcionales.
                     Me considero una persona autodidacta.
                     Aprendo nuevas tecnologias que facilitan la programacion para una solucion mas rápida y eficaz de una tarea a resolver.
                     Encuentro cierta facilidad al momento de crear la estetica web (front-end), ese es mi fuerte.</p>
                   
                    </div>
                </div>
        </ div>
    </ div> 
  )
}

export default  About;