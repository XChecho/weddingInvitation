import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

//Components
import Itenerario from './Itenerario'

//Assets
import rama from '@/assets/decoration/rama.png'
import coupes from '@/assets/decoration/copas.png'
import iglesia from '@/assets/decoration/Iglesia.png'

export default function EventsDetail() {

  const linkPlace = 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x8e40782e43eab1e1:0x7507b60ea53e0998?entry=s&sa=X&ved=1t:8290&hl=es-co&ictx=111'
  const linkCoupes = 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x8e40785920045009:0x44a2a049ec58f61b?entry=s&sa=X&ved=1t:8290&hl=es-co&ictx=111'

  return (
    <section className='relative w-full mt-20 flex flex-col items-center pb-10'>
      <div className='absolute top-96 w-full flex justify-start'>
          <div className='relative w-[100px] sm:w-[150px] h-[150px] sm:h-[270px]'>
            <Image
              src={rama}
              alt='rama'
              className='w-full h-full object-cover z-0 scale-x-[-1] rotate-[45deg]'
              fill
            />
          </div>
        </div>
      <div className='relative w-full flex flex-col items-center z-10'>
        <Image src={iglesia} alt='rama' width={58} height={58} />
        <p className='mt-4 text-center font-allura font-normal text-5xl text-lightBrown'>Ceremonia</p>
        <p className='text-center font-cormorant uppercase font-normal text-2xl text-almostBlack/80'>Iglesia Divina Misericordia <br/> Vía Canelon <br/> Camino entrada a veredea la Fagua. <br/> Chia - Cundinamarca</p>
        <Link href={linkPlace} target='_blank' className='w-[220px] h-12 bg-lightBrown flex items-center justify-center mt-4 rounded-full'> 
          <p className='font-cormorant font-normal text-xl text-whiteBrown uppercase'>Click Ubicación</p>
        </Link>
      </div>
      <div className='w-full flex flex-col items-center mt-20'>
        <Image src={coupes} alt='rama' width={58} height={58} />
        <p className='mt-4 text-center font-allura font-normal text-5xl text-lightBrown'>Recepción</p>
        <p className='text-center font-cormorant uppercase font-normal text-2xl text-almostBlack/80'>Casa Tibana <br/> Via charrascal chia</p>
        <Link href={linkCoupes} target='_blank' className='w-[220px] h-12 bg-lightBrown flex items-center justify-center mt-4 rounded-full'> 
          <p className='font-cormorant font-normal text-xl text-whiteBrown uppercase'>Click Ubicación</p>
        </Link>
      </div>
      <Itenerario />
    </section>
  )
}
