import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import ImgFondo from '../assets/fondo10.jpg'
import './casa.css';

const Casa= () => {
  return (
    < div  name="casa" className='w-full h-screen  '>
     
                < img src={ImgFondo} alt="foto" id="fotoimg" />
            
        {/*container */}
        < div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                < p className='text-pink-600 text-2xl font-bold'>Hola, mi nombre es </p>
                < h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'> María Elena Acevedo</h1>
                < h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>Soy Desarrollador Front-End y QA Tester </h2>
                

                < div>

                 < Link to="/Work"> < button className='text-white group border-2 px-6 py-3 my-6 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:scale-110 duration-500'>mis Proyectos 
                 < span className='group-hover:scale-110 duration-300'>
                          < HiArrowNarrowRight className='ml-3'/>
                         </ span>
                  
                   </button>
                   </ Link> 
                </ div>

        </ div>  
       

    </ div>
  )
}

export default Casa;
