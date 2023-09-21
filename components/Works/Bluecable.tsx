/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Bluecable({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-auto'>
        <motion.img
            initial={{
                x: -200,
                opacity: 2
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{ opacity:2, x:0 }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src="./images/bluecable.jpg"
            alt=""
        />

        <div className='px-10'>
            <h4 className='text-xl xl:text-4xl lg:text-4xl md:text-4xl  font-light'>Desenvolvedor Fullstack</h4>
            <p className='font-bold text-xl xl:text-2xl lg:text-2xl md:text-2xl mt-1'>Bluecable</p>
            <div className='flex space-x-2 my-2'>
                <img
                className='h-8 w-8 xl:h-10 xl:w-10 lg:h-10 lg:w-10 md:h-10 md:w-10 rounded-full' 
                src="./images/react-icon.png" 
                alt="" />
                <img
                className='h-8 w-8 xl:h-10 xl:w-10 lg:h-10 lg:w-10 md:h-10 md:w-10 rounded-full' 
                src="./images/next-js.png" 
                alt="" />
                <img
                className='h-8 w-8 xl:h-10 xl:w-10 lg:h-10 lg:w-10 md:h-10 md:w-10 rounded-full' 
                src="./images/nodejs.png" 
                alt="" />
                <img
                className='h-8 w-8 xl:h-10 xl:w-10 lg:h-10 lg:w-10 md:h-10 md:w-10 rounded-full' 
                src="./images/typescript.png" 
                alt="" />
                <img
                className='h-8 w-8 xl:h-10 xl:w-10 lg:h-10 lg:w-10 md:h-10 md:w-10 rounded-full' 
                src="./images/js.png" 
                alt="" />
                <img
                className='h-8 w-8 xl:h-10 xl:w-10 lg:h-10 lg:w-10 md:h-10 md:w-10 rounded-full' 
                src="./images/tailwind.png" 
                alt="" />
            </div>
            <p className='uppercase py-3 xl:py-5 lg:py-5 md:xl:py-5 text-gray-300'>
                Jan de 2022 - Nov de 2022
            </p>
            <ul className='list-disc space-y-2 xl:space-y-4 lg:space-y-4 md:space-y-4 ml-5 text-sm xl:text-lg lg:text-lg md:text-lg'>
                <li>Desenvolvimento de sistema CRUD</li>
                <li>Implementação pela Vercel e Firebase</li>
                <li>Validação de links pelo Google Cloud</li>
            </ul>
        </div>
    </article>
  )
}