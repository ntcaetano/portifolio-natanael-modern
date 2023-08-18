import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }} 
    className='flex xl:flex-row lg:flex-row snap-center flex-col relative h-screen text-center md-text-left md-flex-row max-w-4xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase xl:tracking-[20px] lg:tracking-[20px] tracking-[15px] text-gray-500 text-2xl'>
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
        className='-mb-20 md:mb-0 xl:mt-24 lg:mt-24 mt-28 flex-shrink-0 lg:w-56  lg:h-56 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]'
        />

        <div className='space-y-5 px-0 md:px-20 mt-10'>
            <h4 className='text-4x-l font-semibold'>Aqui está um <span className='underline decoration-[#F7AB0A]/50'>breve</span>{" "}
            resumo sobre mim:
            </h4>
            <p className='text-base'>
            Me chamo Natanael &#128515;, sou um programador proativo, criativo, versátil e extrovertido. Gosto de estudar, ler livros de fantasia &#128218; e jogar jogos de estratégia, pois, sou muito competitivo (hehe). Tenho como objetivo profissional fazer parte de um grande projeto empresarial e como pessoal viajar pelo mundo &#127758;, conhecer novas culturas e histórias. Trabalhei como desenvolvedor frontend, backend, autônomo e com equipe. Atualmente, me especializando na ferramenta React &#9883;.
            </p>
        </div>
    </motion.div>
  )
}