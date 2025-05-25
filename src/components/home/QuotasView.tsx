import React from 'react'

export default function QuatosView() {
  return (
    <section className='w-full'>
      <div className='w-full flex flex-col bg-midleBrown py-6 px-4'>
        <p className='text-2xl text-almostBlack font-koh font-normal text-center mb-2'>HEMOS RESERVADO</p>
        <p className='text-6xl text-almostWhite font-koh font-normal text-center'>3</p>
        <p className='text-5xl text-almostWhite font-itali font-normal text-center'>lugares para ti y tus acompañantes</p>
      </div>
      <div className='bg-whiteBrown'>
        <div className='relative py-20'>
          <p className='text-6xl text-lightBrown font-koh font-medium text-center'>CAROLINA<br/>VICTOR</p>
          <p className='absolute text-[280px] text-lightBrown/25 font-koh font-medium text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>&</p>
        </div>
        <p className='text-5xl text-almostBlack font-itali font-normal text-center'>
          "Por encima de todo, vístanse de amor,<br/> que es el vínculo perfecto”."<br/>-Colosenses 3:14
        </p>
      </div>
    </section>
  )
}

