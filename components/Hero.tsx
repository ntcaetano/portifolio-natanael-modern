/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
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
        <BackgroundCircles/>
        <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src='https://media.licdn.com/dms/image/C4E03AQEMYvuB1M1wrw/profile-displayphoto-shrink_800_800/0/1564622802620?e=1677110400&v=beta&t=gx5sJjLJAH0hcY69DRwNx9Z4luwdHdDMFZ_33mHBkvs'
        />
        <div>
            <h2 className='text-5xl lg:text-6xl font-semibold px-10'>
                
            </h2>
            <h1>    
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
        </div>
    </div>
  )
}