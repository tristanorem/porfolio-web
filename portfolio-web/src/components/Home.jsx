import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import './Home.css'
import image from '../assets/foto5.jpg'
const Home = () => {
  return (
    < div  name="home" className='w-full h-screen  '>
      < img className="fondoImg" src={image} alt="fondo"/>

        {/*container */}
        < div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                < p className='text-pink-600 '>Hola mi nombre es </p>
                <h1> Maria Elena Acevedo</h1>
                <h2>Soy Desarrollador Front-End y Quality Control Engineer </h2>
        </div>
        < div>
            <button>mis Proyectos <HiArrowNarrowRight/> </button>
        </div>
    </ div>
  )
}

export default Home
