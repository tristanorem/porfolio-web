import React from 'react'



import HTML from '../assets/html.png';
import Github from '../assets/github.png';
import Javascript from '../assets/javascript.png';
import Reacts from '../assets/react.png';
import REDUX from '../assets/redux.png';

import Jira from '../assets/logojira.png';
import Node from '../assets/node.png';
import BOOTS from '../assets/bootstrap.png';
import Taiwin from '../assets/tailwind.png';
import CSS from '../assets/css.png';



const Habilidad = () => {
  return (
    < div name="skills" className='w-full h-screen bg-[#0a192f] text-gray-300   ' >
      
        {/*container */}
      < div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ' >
          < div >
              < p className='text-4xl font-bold inline border-b-4 border-pink-600 py-2'>Experiencia</p>
               < p className='py-5'> Tecgnologías con las que trabajo.</p> 
          </ div>

            < div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                < div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   < img className='w-20 mx-auto ' src={HTML} alt="HTML icon" />
                  < p className='my-4' >HTML</p>
                </ div>
                < div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   < img className='w-20 mx-auto ' src={Github} alt="HTML icon" />
                  < p className='my-4' >GITHUB</p>
                </ div>
                < div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   < img className='w-20 mx-auto ' src={Javascript } alt="HTML icon" />
                  < p className='my-4' >JAVASCRIP</p>
                </ div>
                < div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   < img className='w-20 mx-auto ' src={Reacts} alt="HTML icon" />
                  < p className='my-4' >REACT</p>
                </ div>
                < div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   < img className='w-20 mx-auto ' src={REDUX } alt="HTML icon" />
                  < p className='my-4' >REDUX</p>
                </ div>
                < div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   < img className='w-20 mx-auto ' src={Jira} alt="HTML icon" />
                  < p className='my-4' >JIRA</p>
                </ div>
                < div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   < img className='w-20 mx-auto ' src={Node} alt="HTML icon" />
                  < p className='my-4' >NODE</p>
                </ div>
                < div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   < img className='w-20 mx-auto ' src={BOOTS} alt="HTML icon" />
                  < p className='my-4' >BOOTSTRAP</p>
                </ div>
                < div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   < img className='w-20 mx-auto ' src={Taiwin} alt="HTML icon" />
                  < p className='my-4' >taiwin</p>
                </ div>
                < div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                   < img className='w-20 mx-auto ' src={CSS} alt="HTML icon" />
                  < p className='my-4' >CSS</p>
                </ div>
            </ div>

      </ div>
    </ div>
   
  )
}

export default Habilidad;
