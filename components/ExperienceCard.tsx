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
            src="data:image/png;base64,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"
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