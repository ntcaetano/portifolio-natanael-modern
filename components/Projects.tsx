/* eslint-disable react/jsx-key */
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function Projects({}: Props) {

  const projects = [1];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col texte-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <div className="flex flex-row mt-32">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative h-56 w-56 mx-auto object-cover"
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
                className="relative h-56 w-66 mx-auto object-cover"
                src="./images/bluecable_2.png"
                alt=""
              />
            </div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  {i + 1} of {projects.length}:
                </span>{" "}            
                Bluecable API
              </h4>
              <h5 className="text-2xl font-semibold text-center">
                https://teste1-iota-jade.vercel.app/autenticacao
              </h5>
              <p className="text-lg text-center md:text-left">
                Webservice empresarial com sistema OAuth para login e logout
                integrado ao Google. Possuí um formulário de dados onde o
                usuário pode registrar as informações sobre renegociações de
                clientes. As funções do serviço variam entre manipulação e
                armazenamento de dados via banco de dados não-relacional. A
                aplicação está integrada com a plataforma Firebase para a gestão
                de dados e autorizações de Login com validação de links pelo
                Google Cloud, também está versionada pelo Github e implementada
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
