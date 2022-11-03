import React from 'react'
import heroImg from '../assets/Creative writing-pana.png'
import "../navbar.css";

function Hero() {
  return (
    <div name='hero' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
           <div className='flex flex-col justify-center md:items-start w-full ml-10  py-8'>
               {/* <p className='text-2xl'>Get Sequencing & Secure Data</p> */}
               <div className="line"></div>
               <h1 className='py-3 text-5xl md:text-7xl font-bold  '>A CREATIVE WAY TO GROW YOUR EXISTING BUSINESS IDEAL.</h1>
               
           </div>
            
            
            <div>
                    
                      <img className='w-full mt-10' src={heroImg} alt='/'/>
                    
            </div>    
                
            
            
            
        </div>
    </div>
  )
}

export default Hero