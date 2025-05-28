import React from 'react'
import Image from 'next/image'

//Assets
import rama from '@/assets/decoration/rama.png'

export default function MainView() {
  return (
    <section className='relative w-full'>
      <div className='relative w-[100px] sm:w-[150px] h-[150px] sm:h-[270px]'>
        <Image
          src={rama}
          alt='rama'
          className='w-full h-full object-cover z-0 scale-x-[-1] rotate-[45deg]'
          fill
        />
      </div>
      <p className='absolute font-allura font-thin text-9xl text-lightBrown top-16 sm:top-28 left-1/2 -translate-x-1/2'>CV</p>
      <h1 className='text-6xl text-lightBrown font-cormorant font-light text-center mt-12' >CAROLINA & VICTOR</h1>
      <p className='text-xl text-almostBlack/80 font-cormorant font-light text-center uppercase mt-12'>"Por encima de todo, vístanse de amor,<br/> que es el vínculo perfecto”."<br/>-Colosenses 3:14</p>
      <div className='w-full flex flex-col items-center'>
        <p className='text-2xl text-almostBlack/80 font-cormorant font-light text-center uppercase mt-12'>Sábado</p>
        <p className='text-8xl text-lightBrown font-koh font-light text-center uppercase'>26</p>
        <p className='text-2xl text-almostBlack/80 font-cormorant font-light text-center uppercase'>Jul. <span className='font-koh'>2025</span></p>
        <div className='absolute w-full flex justify-end'>
          <div className='relative w-[100px] sm:w-[150px] h-[150px] sm:h-[270px]'>
            <Image
              src={rama}
              alt='rama'
              className='w-full h-full object-cover z-0 -rotate-[45deg]'
              fill
            />
          </div>
        </div>
      </div>
    </section>
  )
}
