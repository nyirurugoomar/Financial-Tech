import React from 'react'
import './Project.css';
import App from '../assets/app.jpeg'
import website from '../assets/website.jpeg'
import bank from '../assets/bank.png'

function Project() {
  return (
    <>
     <div className='mt-40 mb-2'>
        <div className='text-center text-orange-500 text-5xl'>Special Projects</div>
        <div class='Card'>
         <div>
          <img class="img" src={bank} alt="" />
          <div class="project-title">
           <h4><b>Project xxxx</b></h4> 
         </div>
         </div>

         <div>
         <img class="img" src={bank} alt="Avatar" />
          <div class="project-title">
           <h4><b>Project xxxx</b></h4> 
         </div>
         </div>


         <div>
         <img class="img" src={bank} alt="" />
          <div class="project-title">
           <h4><b>Project xxxx</b></h4> 
         </div>
         </div>
        </div>
     </div>
    </>
    
  )
}

export default Project