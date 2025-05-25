import React from 'react'
import Image from 'next/image'

//Assets
import bgMancha from '@/assets/background/mancha.png'
import reloj from '@/assets/decoration/relojArena.png'

export default function FrontView() {
  return (
    <section className='w-full min-h-screen mb-[78px]'>
      <div className='relative w-full h-[200px] mt-8'>
        <p className='absolute text-9xl text-lightBrown font-itali font-normal'>CARITO</p>
        <p className='absolute top-24 left-28 text-5xl text-lightBrown font-itali font-normal'>&</p>
        <p className='absolute top-24 right-0 text-9xl text-lightBrown font-itali font-normal'>VICTOR</p>
      </div>
      <div className='w-full h-[500px] bg-[url(/assets/background/noviaAnillo.webp)] bg-cover bg-center mask-imgs mb-20'/>
      <div className='relative w-full h-[500px]'>
        <Image
          src={bgMancha}
          alt='bgMancha'
          className='w-full h-full object-cover z-0'
          fill
        />
        <div className='relative z-10'>
          <p className='text-5xl text-almostBlack font-itali font-normal text-center'>
            "Por encima de todo, vístanse de amor,<br/> que es el vínculo perfecto”."<br/>-Colosenses 3:14
          </p>
          <Image 
            src={reloj}
            alt='reloj'
            className=''
            width={500}
            height={500}
          />
        </div>
      </div>
      {/* <div className='py-6 bg-whiteBrown '>
        <h1 className='text-6xl text-lightBrown font-itali text-center'>Nuestra Boda</h1>
        <h2 className='text-4xl text-almostBlack font-koh font-bold text-center'>CAROLINA & VICTOR</h2>
      </div>
      <div className='w-full bg-lightBrown py-6 shadow-cardShadow'>
        <p className='text-2xl text-almostBlack font-koh text-center '>INVITACIÓN PARA:</p>
        <p className='text-5xl text-almostWhite font-itali text-center mt-2'>Sr. Sergio Morales y Sñra.</p>
      </div> */}
    </section>
  )
}
