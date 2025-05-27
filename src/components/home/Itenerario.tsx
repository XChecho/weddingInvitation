import React from 'react'
import Image from 'next/image'

//Assets
import cena from '@/assets/decoration/cena.png'
import coupes from '@/assets/decoration/copas.png'
import arrivar from '@/assets/decoration/arrivar.png'
import iglesia from '@/assets/decoration/Iglesia.png'
import argollas from '@/assets/decoration/argollas.png'
import entradanovios from '@/assets/decoration/entradanovios.png'
import llegadanovios from '@/assets/decoration/llegadanovios.png'


export default function Itenerario() {
  return (
    <div className='w-full flex flex-col items-center mt-20'>
        <p className='text-center font-itali uppercase font-normal text-5xl text-lightBrown'>Itinerario</p>
        <div className='relative w-full flex'>
          <div className='absolute w-10/12 h-1 bg-lightBrown rounded-full top-[150px] left-[10%] sm:left-20' />
          <div className='absolute w-6 h-6 bg-lightBrown rounded-full top-[140px] left-[10%] sm:left-[60px]' />
          <div className='absolute w-6 h-6 bg-lightBrown rounded-full top-[140px] left-[34%] sm:left-[205px]' />
          <div className='absolute w-6 h-6 bg-lightBrown rounded-full top-[140px] left-[60%] sm:right-[205px]' />
          <div className='absolute w-6 h-6 bg-lightBrown rounded-full top-[140px] right-[10%] sm:right-[60px]' />
          <div className='w-1/4 flex flex-col space-y-12'>
            <div className='h-32 flex justify-center items-end'>
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'><span className='font-koh text-almostBlack/65'>9:00</span> <br/> AM</p>
            </div>
            <div className='w-full flex flex-col items-center'>
              <Image src={arrivar} alt='arrivar' width={40} height={40} />
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'>Llegada Familia</p>
            </div>
          </div>
          <div className='w-1/4 flex flex-col space-y-12'>
            <div className='w-full h-32 flex flex-col items-center justify-end'>
              <Image src={llegadanovios} alt='llegadanovios' width={40} height={40} />
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'>Llegada Novios</p>
            </div>
            <div>
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'><span className='font-koh text-almostBlack/65'>9:30</span> <br/> AM</p>
            </div>
          </div>
          <div className='w-1/4 flex flex-col space-y-12'>
            <div className='h-32 flex justify-center items-end'>
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'><span className='font-koh text-almostBlack/65'>10:00</span> <br/> AM</p>
            </div>
            <div className='w-full flex flex-col items-center'>
              <Image src={iglesia} alt='church' width={40} height={40} />
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'>Ceremonia</p>
            </div>
          </div>
          <div className='w-1/4 flex flex-col space-y-12'>
            <div className='w-full h-32 flex flex-col items-center justify-end'>
              <Image src={coupes} alt='coupes' width={40} height={40} />
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'>Recepción</p>
            </div>
            <div>
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'><span className='font-koh text-almostBlack/65'>11:30</span> <br/> AM</p>
            </div>
          </div>
        </div>
        <div className='relative w-full flex'>
          <div className='absolute w-10/12 h-1 bg-lightBrown rounded-full top-[150px] left-4' />
          <div className='absolute w-6 h-6 bg-lightBrown rounded-full top-[140px] left-[10%] sm:left-[60px]' />
          <div className='absolute w-6 h-6 bg-lightBrown rounded-full top-[140px] left-[34%] sm:left-[205px]' />
          <div className='absolute w-6 h-6 bg-lightBrown rounded-full top-[140px] left-[60%] sm:right-[205px]' />
          <div className='absolute w-6 h-6 bg-lightBrown rounded-full top-[140px] right-[10%] sm:right-[60px]' />
          <div className='w-1/4 flex flex-col space-y-12'>
            <div className='h-32 flex justify-center items-end'>
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'><span className='font-koh text-almostBlack/65'>12:00</span> <br/> PM</p>
            </div>
            <div className='w-full flex flex-col items-center'>
              <Image src={entradanovios} alt='entradanovios' width={40} height={40} />
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'>Entrada Novios</p>
            </div>
          </div>
          <div className='w-1/4 flex flex-col space-y-12'>
            <div className='w-full h-32 flex flex-col items-center justify-end'>
              <Image src={coupes} alt='coupes' width={40} height={40} />
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'>Brindis</p>
            </div>
            <div>
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'><span className='font-koh text-almostBlack/65'>1:00</span> <br/> PM</p>
            </div>
          </div>
          <div className='w-1/4 flex flex-col space-y-12'>
            <div className='h-32 flex justify-center items-end'>
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'><span className='font-koh text-almostBlack/65'>1:30</span> <br/> PM</p>
            </div>
            <div className='w-full flex flex-col items-center'>
              <Image src={cena} alt='cena' width={40} height={40} />
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'>Almuerzo</p>
            </div>
          </div>
          <div className='w-1/4 flex flex-col space-y-12'>
            <div className='w-full h-32 flex flex-col items-center justify-end'>
              <Image src={argollas} alt='argollas' width={40} height={40} />
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'>Felices por siempre</p>
            </div>
            <div>
              <p className='text-center font-cormorant uppercase font-normal text-lg text-almostBlack/80'><span className='font-koh text-almostBlack/65'>4:00</span> <br/> PM</p>
            </div>
          </div>
        </div>
      </div>
  )
}
