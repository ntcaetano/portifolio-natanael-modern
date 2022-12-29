import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text=2xl'>
            Experiencia
        </h3>

        <div className='mt-60 max-h-screen w-full flex space-x-5 p-10 overflow-x-scroll snap-x snap-mandatory'>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
    </motion.div> 
  )
}

export default WorkExperience