import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

//Assets
import rama from '@/assets/decoration/rama.png'
import traje from '@/assets/decoration/traje.png'
import sobre from '@/assets/decoration/sobre.png'
import corazon from '@/assets/decoration/corazon.png'
import vestido from '@/assets/decoration/vestido.png'

export default function DressCode() {

  const linkWP = 'https://wa.link/jmehih'
  return (
    <section className='relative w-full flex flex-col items-center'>
      <div className='absolute top-[480px] w-full flex justify-start z-0'>
          <div className='relative w-[150px] h-[270px]'>
            <Image
              src={rama}
              alt='rama'
              className='w-full h-full object-cover z-0 scale-x-[-1] rotate-[45deg]'
              fill
            />
          </div>
        </div>
        <div className='absolute w-full flex justify-end -top-20'>
          <div className='relative w-[150px] h-[270px]'>
            <Image
              src={rama}
              alt='rama'
              className='w-full h-full object-cover z-0 -rotate-[45deg]'
              fill
            />
          </div>
        </div>
      <div className='relative w-full flex flex-col items-center z-10'>
        <p>Dress Code</p>
        <p className='text-2xl text-almostBlack/80 font-cormorant font-light text-center uppercase mt-12'>Formal</p>
        <div className='w-full flex my-6'>
          <div className='w-1/2 flex flex-col items-center'>
            <Image src={traje} alt='rama' width={58} height={58} />
            <p className='text-xl text-lightBrown font-cormorant font-light text-center uppercase '>Ellos</p>
            <p className='text-base text-almostBlack/80 font-cormorant font-light text-center uppercase'>Saco y pantalón</p>
          </div>
          <div className='w-1/2 flex flex-col items-center'>
            <Image src={vestido} alt='rama' width={58} height={58} />
            <p className='text-xl text-lightBrown font-cormorant font-light text-center uppercase '>Ellas</p>
            <p className='text-base text-almostBlack/80 font-cormorant font-light text-center uppercase'>Vestido Largo</p>
          </div>
        </div>
        <p className='text-xl text-lightBrown font-cormorant font-light text-center uppercase '>Nos reservamos el color <br/> azul, blanco, beige y verde olivo </p>
      </div>
      <div className='relative w-full flex flex-col items-center mt-20 z-10'>
        <p className='text-2xl text-almostBlack/80 font-cormorant font-light text-center uppercase'>Es importante para nosotros <br/> que estes presente en este día.<br/> Por eso no olvides</p>
        <p>Confirmar</p>
        <p className='text-2xl text-almostBlack/80 font-cormorant font-light text-center uppercase mt-4'>Tu asistencia</p>
        <Link href={linkWP} target='_blank' className='w-[220px] h-12 bg-lightBrown flex items-center justify-center mt-4 rounded-full'> 
          <p className='font-cormorant font-normal text-xl text-whiteBrown uppercase'>Confirma aquí</p>
        </Link>
      </div>
      <div className='w-full flex flex-col items-center mt-28'>
        <Image src={sobre} alt='rama' width={58} height={58} />
        <p className='text-xl text-almostBlack/80 font-cormorant font-light text-center uppercase mt-4'>Lluvia de sobres</p>
      </div>
      <div className='w-full flex flex-col items-center mt-28'>
        <Image src={corazon} alt='rama' width={58} height={58} />
        <p className='text-2xl text-almostBlack/80 font-cormorant font-light text-center uppercase mt-4'>¡Te esperamos para celebrar <br/>juntos este momento especial!</p>
      </div>
    </section>
  )
}
