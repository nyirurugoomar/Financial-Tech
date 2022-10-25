import React from 'react'
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import { SkillsData } from './SkillsData';

function WhoweAre() {
  return (
    <>
    <div className="flex flex-wrap mt-60 mb-60 before:lg:grid-cols-3">
        
        <div className="w-1/2 ml-auto text-center">
            <h1 className='whoweare-section font-bold text-9xl mt-12 text-orange-600  '>Who We Are</h1>
            
        {/* <img className='w-full' src={aboutImg}alt='/'/> */}
        </div>
                        {/* skills tab */}
        <div className="w-1/2 mr-auto text-center bg-slate-50">
            
            <Tabs id="custom-animation" value="mision and mission">
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
    </>
  )
}

export default WhoweAre