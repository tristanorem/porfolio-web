import React from 'react'
import HTML from '../assets/html.png';
import Git from '../assets/git.png';
import Github from '../assets/github.png';
import Javascript from '../assets/javascript.png';
import Reacts from '../assets/react.png';
import REDUX from '../assets/redux.png';
import Trello from '../assets/logotrello.png';
import Jira from '../assets/logojira.png';
import Node from '../assets/node.png';
import BOOTS from '../assets/bootstrap.png';
import Taiwin from '../assets/tailwind.png';




const Skill = () => {
  return (
    < div name="skills" className='text-gray-300' >
        {/*container */}
      < div className='max-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
          < div >
             < p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experiencia</p>
             <p className='py-4'>// Tegnologías con las que trabajo.</p>
          </ div>

                < div> 
                  < div>
                    < img className='w-20 mx-auto ' src={HTML}  alt='HTML icon'   />
                    <p>HTML5</p>
                  </ div>
                </ div>
        </ div>
      </ div>
   
  )
}

export default Skill
