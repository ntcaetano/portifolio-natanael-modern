import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
    className='flex flex-col relative h-screen text-center md-text-left md-flex-row max-w-6xl justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl'>
            Sobre mim
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
        src="./images/Perfil_2.jpg"
        className='-mb-20 md:-mb-15 mt-32 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
        />

        <div className='space-y-10 px-0 md:px-20 mt-20'>
            <h4 className='text-4x-l font-semibold'>Aqui está um <span className='underline decoration-[#F7AB0A]/50'>breve</span>{" "}
            resumo sobre mim:
            </h4>
            <p className='text-base'>
            Me chamo Natanael &#128515;, sou um programador proativo, criativo, versátil e extrovertido. Gosto de estudar, ler livros de fantasia &#128218; e jogar jogos de estratégia pois sou muito competitivo (hehe). Tenho como objetivo profissional fazer parte de um grande projeto empresarial e como objetivo pessoal viajar pelo mundo &#127758;, conhecer novas culturas e histórias. Trabalhei como desenvolvedor frontend, backend, autônomo e com equipe. Atualmente, me especializando na ferramenta React &#9883;.
            </p>
        </div>
    </motion.div>
  )
}