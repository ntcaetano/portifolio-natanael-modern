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
      src="https://scontent.fpoa27-1.fna.fbcdn.net/v/t39.30808-6/277079726_5347579848588512_8519151389833166476_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFx1uv5YmgKBDOHWXagjIs657zdtTDIjyTnvN21MMiPJL0GNT1qXBW5dHk8dIFEXfhmSNaskQcl5kn6r5xKQArG&_nc_ohc=kORSlrwVd4YAX_h9LfR&_nc_ht=scontent.fpoa27-1.fna&oh=00_AfD4wUHSZztJ6J1aQjthgv3tXm3lCBmdMr1uYBx_GrPOsw&oe=63B2A90C"
      className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transtion duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-3000 ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:w-24 xl:h-24 rounded-full z-0'
      >
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill