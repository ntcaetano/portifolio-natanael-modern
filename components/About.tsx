import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
    className='flex flex-col relative h-screen text-center md-text-left md-flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text=2xl'>
            About
        </h3>
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
        src="https://scontent.fpoa27-1.fna.fbcdn.net/v/t39.30808-6/293556144_5679319435414550_7985903651127790088_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH46u6qiSk0Etbt-fQSOcg8Qyo-7LysZ6xDKj7svKxnrLot_pmOhQCKE7FftDl2Af4flDZW2W-BLj2ihdKGHSBZ&_nc_ohc=s90r6uWiVcMAX8qoCqE&_nc_ht=scontent.fpoa27-1.fna&oh=00_AfCiU0Ei2IOvJ45jrno6pX29KWL2rOoOjmxucRU3f-BBtA&oe=63AE57CF"
        className='-mb-20 mt-40 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[200px] xl:h-[300px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4x-l font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
            background
            </h4>
            <p className='text-base'>
            Me chamo Natanael, sou um programador proativo, criativo, versátil e extrovertido. Tenho como objetivo fazer parte de um grande projeto em uma grande empresa, ser feliz e realizado profissionalmente. Trabalhei como desenvolvedor frontend, backend, autônomo e com equipe. Atualmente me especializando na ferramenta React.
            </p>
        </div>
    </motion.div>
  )
}