import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  directionLeft?: boolean
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="./images/js.png"
        className='rounded-full border border-gray-500 object-cover w-14 h-14 xl:w-24 xl:h-24 lg::w-24 lg:h-24 md::w-24 md:h-24 filter group-hover:grayscale transtion duration-50 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-3000 ease-in-out group-hover:bg-white w-14 h-14 xl:w-24 xl:h-24 lg::w-24 lg:h-24 md::w-24 md:h-24 rounded-full z-0'
      >
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl font-bold text-black opacity-100'>80%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill