import React, {useState} from 'react';
import {FaBars , FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import LogoWeb from '../assets/logoelena.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const[nav ,setNav]=useState(false) 
  const handleClick=()=> setNav(!nav);
  return (
    < div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0d23423a] text-white'>
            < Link to="/">
                < img src={LogoWeb} alt="Logo Img" style={{width:'50px'}}   />
            </ Link>
            {/*menu*/ }
            
                < ul className='hidden md:flex   '>
                    < li className='  hover:text-pink-600 duration-300 ' >< Link to='/'> Home</Link></ li>
                    < li className='  hover:text-pink-600 duration-300' >< Link to="/About">Sobre mi</Link> </ li>
                    < li className='  hover:text-pink-600  duration-300' >< Link to="/Skill"> Experiencia</Link></ li>
                    < li className='  hover:text-pink-600 duration-300'  > < Link to="/Work" >Proyectos</Link></ li>
                    < li className='  hover:text-pink-600 duration-300'  > < Link to="/Contact">Contacto</Link></ li>
                    
                </ ul>
            
            {/* hamburger*/}

             < div onClick={handleClick}  className='md:hidden z-10'>
                {!nav ? < FaBars /> : < FaTimes/>}
             </ div>       

            {/*mobile menu */}
            < ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center'}>
                    < li className='py-6 text-4xl ' >Home</ li>
                    < li className='py-6 text-4xl' >About</ li>
                    < li className='py-6 text-4xl' >Skill</ li>
                    < li className='py-6 text-4xl' >Work</ li>
                    < li className='py-6 text-4xl' >Contact</ li> 
            </ ul>




            {/*social icons */}
                < div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
                    < ul>
                      < li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        < a className='flex  justify-between items-center w-full text-gray-300 ' 
                        href="https://www.linkedin.com/in/elena-acevedo-06b45a1a0/" >
                          Linkedin < FaLinkedin size={30}/>  
                        </ a>
                      </  li>
                      < li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        < a className='flex  justify-between items-center w-full text-gray-300 ' 
                        href="https://github.com/tristanorem" >
                          Github < FaGithub size={30}/>  
                        </ a>
                      </  li>
                      < li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
                        < a className='flex  justify-between items-center w-full text-gray-300 ' 
                        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" >
                          Email < HiOutlineMail size={30}/>  
                        </ a>
                      </  li>
                      < li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        < a className='flex  justify-between items-center w-full text-gray-300 ' 
                        href="https://web.whatsapp.com/" >
                          Contact < BsFillPersonLinesFill size={30}/>  
                        </ a>
                      </  li>
                    </ ul>  
                </ div>

    </ div>
  )
}

export default Navbar