/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
    const [text] = useTypewriter({
        words: [
            "Olá, meu nome é Natanael",
            "Cara-que-ama-Café.tsx",
            "MasAmaMaisAindaCodar />",
        ],
        loop: true,
        delaySpeed: 2000
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-36 w-36 xl:h-44 xl:w-44 lg:h-44 lg:w-44 md:h-44 md:w-44 mx-auto object-cover'
                src="./images/Perfil.jpg"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Engenheiro de Software
                </h2>
                <h1 className='text-4xl xl:text-6xl lg:text-6xl font-semibold px-10'>
                    <span className='text-lg xl:text-4xl lg:text-4xl md:text-4xl mr-3'>{text}</span>
                    <Cursor cursorColor="#F7AB04" />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>Sobre</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experiencias</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Habilidades</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projetos</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}