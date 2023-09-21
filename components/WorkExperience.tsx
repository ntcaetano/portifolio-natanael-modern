import { motion } from 'framer-motion'
import React from 'react'
import Bluecable from './Works/Bluecable'
import Orderby from './Works/Orderby'
import Reweb from './Works/Reweb'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
    className='h-screen flex relative snap-center overflow-hidden flex-col  md:flex-row max-w-5xl pt-20 pb-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase xl:tracking-[20px] lg:tracking-[20px] tracking-[15px] text-gray-500 text-2xl'>
            Experiencia
        </h3>

        <div className='relative top-8 max-h-screen w-full flex space-x-5 p-10 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
            <Bluecable/>
            <Orderby/>
            <Reweb/>
        </div>
    </motion.div> 
  )
}

export default WorkExperience