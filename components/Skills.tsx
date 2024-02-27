import { motion } from 'framer-motion'
import React from './Skill/React'
import Nextjs from './Skill/Nextjs'
import Vscode from './Skill/Vscode'
import Nodejs from './Skill/Nodejs'
import Ts from './Skill/Ts'
import Js from './Skill/Js'
import Css from './Skill/Css'
import Tcss from './Skill/Tcss'
import Java from './Skill/Java'
import Sql from './Skill/Sql'
import Jquery from './Skill/Jquery'
import Python from './Skill/Python'
import Angular from './Skill/Angular'
import Mysql from './Skill/Mysql'
import Html from './Skill/Html'
import Vue from './Skill/Vue'

type Props = {}

function Skills({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-col snap-center text-center xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase xl:tracking-[20px] lg:tracking-[20px] tracking-[15px] text-gray-500 text-2xl'>
        Habilidades
      </h3>

      <h3 className='absolute top-40 uppercase tracking-[4px] text-gray-500 text-xs xl:text-sm lg:text-sm md:text-sm'>
      Passe o mouse sobre uma habilidade para ver a minha proficiência
      </h3>

      <div className='grid grid-cols-4 gap-3 xl:gap-4 lg:gap-4 absolute xl:top-64 lg:top-64 top-72'>
        <Vscode />
        <React />
        <Vue />
        <Nextjs />
        <Nodejs />
        <Ts />
        <Js />
        <Css />
        <Html />
        <Tcss />
        <Java />
        <Python />
        <Sql />
        <Jquery />
        <Angular />
        <Mysql />
      </div>
    </motion.div>
  )
}

export default Skills