import React from 'react';



const Trabajo = () => {
  return (
    < div name="work" className=' w-full md:h-screen bg-[#0a192f]  text-gray-300 '>
    
        < div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full' >
          < div className='pb-8'>
            < p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Proyectos</p>
            < p className='py-6'>Algunos de mis trabajos realizados.</p>
          </ div>

          < div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
             < div className='shadow-lg shadow-[#040c16]'>
               < div>
                  <span>

                  </span>
                  < div>
                      < a href="/" >
                        <button></button>
                      </ a>
                      < a href="/" >
                        <button></button>
                      </ a>
                  </ div>
               </ div>
             </ div> 
          </ div>  

        </ div>
    </ div>
  )
}

export default Trabajo;