import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import './Home.css'
import image from '../assets/fondo10.jpg'
const Home = () => {
  return (
    < div  name="home" className='w-full h-screen  '>
      < img className="fondoImg" src={image} alt="fondo"/>

        {/*container */}
        < div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                < p className='text-pink-600 text-2xl'>Hola, mi nombre es </p>
                < h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> María Elena Acevedo</h1>
                < h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy Desarrollador Front-End y Quality Control Engineer </h2>
                

                < div>
                  < button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>mis Proyectos 
                  < span className='group-hover:rotate-90 duration-300'>
                    < HiArrowNarrowRight className='ml-3'/>
                  </ span>
                   </button>
                </ div>

        </ div>  
       

    </ div>
  )
}

export default Home
