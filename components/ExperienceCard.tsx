/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-auto'>
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
            src="https://scontent.fpoa27-1.fna.fbcdn.net/v/t39.30808-6/277079726_5347579848588512_8519151389833166476_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFx1uv5YmgKBDOHWXagjIs657zdtTDIjyTnvN21MMiPJL0GNT1qXBW5dHk8dIFEXfhmSNaskQcl5kn6r5xKQArG&_nc_ohc=kORSlrwVd4YAX_h9LfR&_nc_ht=scontent.fpoa27-1.fna&oh=00_AfD4wUHSZztJ6J1aQjthgv3tXm3lCBmdMr1uYBx_GrPOsw&oe=63B2A90C"
            alt=""
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Fullstack Júnior</h4>
            <p className='font-bold text-2xl mt-1'>Bluecable</p>
            <div className='flex space-x-2 my-2'>
                <img
                className='h-10 w-10 rounded-full' 
                src="https://scontent.fpoa27-1.fna.fbcdn.net/v/t39.30808-6/277079726_5347579848588512_8519151389833166476_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFx1uv5YmgKBDOHWXagjIs657zdtTDIjyTnvN21MMiPJL0GNT1qXBW5dHk8dIFEXfhmSNaskQcl5kn6r5xKQArG&_nc_ohc=kORSlrwVd4YAX_h9LfR&_nc_ht=scontent.fpoa27-1.fna&oh=00_AfD4wUHSZztJ6J1aQjthgv3tXm3lCBmdMr1uYBx_GrPOsw&oe=63B2A90C" 
                alt="" />
                <img
                className='h-10 w-10 rounded-full' 
                src="https://scontent.fpoa27-1.fna.fbcdn.net/v/t39.30808-6/277079726_5347579848588512_8519151389833166476_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFx1uv5YmgKBDOHWXagjIs657zdtTDIjyTnvN21MMiPJL0GNT1qXBW5dHk8dIFEXfhmSNaskQcl5kn6r5xKQArG&_nc_ohc=kORSlrwVd4YAX_h9LfR&_nc_ht=scontent.fpoa27-1.fna&oh=00_AfD4wUHSZztJ6J1aQjthgv3tXm3lCBmdMr1uYBx_GrPOsw&oe=63B2A90C" 
                alt="" />
                <img
                className='h-10 w-10 rounded-full' 
                src="https://scontent.fpoa27-1.fna.fbcdn.net/v/t39.30808-6/277079726_5347579848588512_8519151389833166476_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFx1uv5YmgKBDOHWXagjIs657zdtTDIjyTnvN21MMiPJL0GNT1qXBW5dHk8dIFEXfhmSNaskQcl5kn6r5xKQArG&_nc_ohc=kORSlrwVd4YAX_h9LfR&_nc_ht=scontent.fpoa27-1.fna&oh=00_AfD4wUHSZztJ6J1aQjthgv3tXm3lCBmdMr1uYBx_GrPOsw&oe=63B2A90C" 
                alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>
                Starde owrk... -Ended
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Sumary points</li>
                <li>Sumary points</li>
                <li>Sumary points</li>
            </ul>
        </div>
    </article>
  )
}