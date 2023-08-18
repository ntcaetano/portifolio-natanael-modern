/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {

  const projects = [1];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase xl:tracking-[20px] lg:tracking-[20px] tracking-[15px] text-gray-500 text-2xl">
        Projetos
      </h3>

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <div className="flex flex-row xl:-ml-0 lg:-ml-0 -ml-7 mt-32">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative xl:h-56 xl:w-56 lg:h-56 lg:w-56 h-26 w-36  mx-auto object-cover"
                src="./images/bluecable.jpg"
                alt=""
              />
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative xl:h-56 xl:w-56 lg:h-56 lg:w-56 h-26 w-36 mx-auto object-cover"
                src="./images/bluecable_2.png"
                alt=""
              />
            </div>
            <div className="xl:space-y-10 lg:space-y-10 space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="xl:text-4xl lg:text-4xl text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {i + 1} of {projects.length}:
                </span>{" "}            
                Bluecable API
              </h4>   
              <p className="xl:text-lg lg:text-lg text-1xl text-center md:text-left xl:w-auto lg:w-auto w-80">
                Webservice empresarial com sistema OAuth para login e logout
                integrado ao Google. Possuí um formulário de dados onde o
                usuário pode registrar as informações sobre renegociações de
                clientes. As funções do serviço variam entre manipulação e
                armazenamento de dados via banco de dados não-relacional. A
                aplicação está integrada com a plataforma Firebase para a gestão
                de dados, autorizações de Login com validação de links pelo
                Google Cloud. Também está versionada pelo Github e implementada
                pela plataforma Vercel.
              </p>
              
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
