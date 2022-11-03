import React from 'react'

import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import { SkillsData } from './SkillsData';
  
  

const WhoweAre =() => {
  return (
    <>
    <div className='w-full mt-40  flex flex-col justify-between  ml-5 mr-5 bg-white '>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto '>

           <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
               <h1 className=' text-5xl md:text-7xl text-orange-500 text-center  '>Who We Are</h1>
           </div>
            
            
            <div>
                    
            <div className="flex flex-wrap  before:lg:grid-cols-4">
                
                
                                {/*  tab */}
                <div className=" mr-10 text-center ">
                    
                    <Tabs id="custom-animation"   value="vision">
                    <TabsHeader>
                        {SkillsData.map(({ label, value }) => (
                        <Tab key={value} value={value} style={{color:'orange',fontSize:'2rem',cursor:'pointer'}}>
                            {label}
                        </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody animate={{
                                        mount: { y: 0 },
                                        unmount: { y: 250 },
                                        }}>
                        {SkillsData.map(({ value, desc }) => (
                        <TabPanel key={value} value={value} style={{marginTop:'5rem'}}>
                            {desc}
                            
                            
                        </TabPanel>
                        ))}
                    </TabsBody>
                    </Tabs>

                </div>
            </div>

                    
            </div>    
                
            
            
            
        </div>
    </div>
    </>
  )
}

export default WhoweAre