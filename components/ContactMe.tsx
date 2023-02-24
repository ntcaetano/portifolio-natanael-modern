import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {}

function ContactMe({ }: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contato
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          Eu tenho o que você precisa.{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Vamos Conversar.</span>
        </h4>

        <div className='flex items-center space-x-5 justify-center'>
          <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2x-l'>(51)9-8610-2483</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2x-l'>natacaet@gmail.com</p>
        </div>

        <div className='flex items-center space-x-5 justify-center'>
          <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
          <p className='text-2x-l'>123 Developer Lane</p>
        </div>
      </div>

      <form className='flex flex-col space-y-2 w-fit mx-auto'>
        <div className='flex space-x-2'>
          <input placeholder="Nome" className='contactInput' type="text" />
          <input placeholder="Email" className='contactInput' type="text" />
        </div>
        <input placeholder="Assunto" className='contactInput' type="text" />

        <textarea placeholder="Mensagem" className='contactInput' />
        <button type="submit" className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>
          Enviar
        </button>
      </form>
    </div>
  )
}

export default ContactMe