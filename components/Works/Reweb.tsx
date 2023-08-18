/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Orderby({}: Props) {
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
            src="./images/reweb.png"
            alt=""
        />

        <div className='ml-5 px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Desenvolvedor Front-end</h4>
            <p className='font-bold text-2xl mt-1'>Reweb</p>
            <div className='flex space-x-2 my-2'>
                <img
                className='h-10 w-10 rounded-full' 
                src="./images/jquery.png" 
                alt="" />
                <img
                className='h-10 w-10 rounded-full' 
                src="./images/php.png" 
                alt="" />
                <img
                className='h-10 w-10 rounded-full' 
                src="./images/js.png" 
                alt="" />
                <img
                className='h-10 w-10 rounded-full' 
                src="./images/css.png" 
                alt="" />
                <img
                className='h-10 w-10 rounded-full' 
                src="./images/html.png" 
                alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>
                Jan de 2018 - Dez de 2018
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Desenvolvimento de aplicações web</li>
                <li>Ambiente Linux</li>
                <li>Bootstrap Framework</li>
            </ul>
        </div>
    </article>
  )
}