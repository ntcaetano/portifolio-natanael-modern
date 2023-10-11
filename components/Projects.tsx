/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Projects({}: Props) {
  const projects = [1];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly lg:mx-auto mr-1 items-center z-0"
    >
      <h3 className="absolute top-24 uppercase xl:tracking-[20px] lg:tracking-[20px] tracking-[15px] text-gray-500 text-2xl">
        Projetos
      </h3>

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center md:p-44 h-screen ml-10">
            <div className="flex flex-row mt-14">
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
            <div className="xl:space-y-10 lg:space-y-10 space-y-2 md:px-10 max-w-6xl">
              <div className="xl:text-4xl lg:text-4xl md:text-4xl text-lg font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {i + 1} de {projects.length}:
                </span>{" "}
                Bluecable API
                <SocialIcon
                  url="https://github.com/ntcaetano/"
                  fgColor="gray"
                  bgColor="transparent"
                />
              </div>
              <p className="m-12 xl:text-lg lg:text-lg text-xs text-center md:text-auto xl:w-auto lg:w-auto">
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
