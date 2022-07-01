import React from 'react';

const Contacto = () => {
  return (
    < div name="contacto" className='w-full h-screen bg-[#0a192f]  flex justify-center items-center p-4 '>
     < form action="https://getform.io/f/4dbeb59c-e62d-410b-92c5-fd7ad118aa60" method='POST'  className='flex flex-col max-w-[600px] w-full '>
        < div className='pb-8'>
            < p className='text-4xl font-bold inline border-b-4 border-pink-800 text-gray-300 '>Contacto</p>
            < p className='text-gray-300 py-4' >Envíe el formulario a continuación o envíeme un correo electrónico - acevedoelena.23@gmail.com </p>
        </ div>
        < input className='p-2  rounded-[10px] bg-[#ccd6f6]' type="text" placeholder='Nombre'name="name" />
        < input className='my-4 p-2  rounded-[10px] bg-[#ccd6f6]' type="email" placeholder='Email'name="email" />
        < textarea className='p-2  rounded-[10px]' name="message"  rows="10" placeholder='Mensaje'></ textarea>
        < button className='  rounded-[10px] text-white border-2 hover:bg-pink-600 hover:border-pink-600 duration-300 px-4 py-3 my-8 mx-auto flex items-center  '>Colaboremos</button>
     </ form>
    </ div>
  )
}

export default Contacto;