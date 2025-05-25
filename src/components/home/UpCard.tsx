'use client'
import React from 'react'
import ReactCurvedText from 'react-curved-text';

export default function UpCard() {
  return (
    <section className='w-full'>
      <div className='relative w-full bg-[url(/assets/decoration/ramasTop.png)] bg-contain bg-no-repeat bg-top pt-36'>
        {/* <h1 className='text-6xl text-almostBlack font-noto text-center' >CARITO & VICTOR</h1> */}
        <ReactCurvedText
            width={576}
            height={140}
            cx={288}
            cy={160}
            rx={125}
            ry={150}
            startOffset={55}
            reversed={true}
            text="CAROLINA & VICTOR"
            textProps={{ style: { 
              fontSize: 32, 
              fontFamily: 'Noto_Serif',
              fontWeight: 500,
              fill: '#1A1A1A'
            } }}
            tspanProps={{ dy: 20}}
            svgProps={{ style: 
              {rotate: 11}
            }}
            
        />
        <ReactCurvedText
            width={576}
            height={150}
            cx={288}
            cy={-40}
            rx={98}
            ry={120}
            startOffset={90}
            reversed={false}
            text="26 . JULIO . 25"
            textProps={{ style: { 
              fontSize: 28, 
              fontFamily: 'Noto_Serif',
              fontWeight: 500,
            }}}
            tspanProps={{ dy: 18}}
        />
        <p className='absolute text-7xl text-lightBrown font-tangerine font-bold top-[280px] left-1/2 -translate-x-1/2 -translate-y-1/2'>C & V</p>
        <p className='text-6xl text-almostBlack font-tangerine font-medium text-center mt-2'>¡Nuestra Boda!</p>
        <div className='w-full flex justify-center'>
          <div className='w-[310px]'>
            <div className='flex justify-between  items-end gap-6 mt-8'>
              <p className='w-1/4 text-2xl text-almostBlack font-noto font-thin text-center'>SÁBADO</p>
              <p className='w-1/3 text-6xl text-lightBrown font-noto font-regular text-center mr-4 ml-5'>26</p>
              <p className='w-1/2 text-2xl text-almostBlack font-noto font-thin text-left'>JULIO</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
              <div className='w-full h-[2px] bg-midleBrown' />
              <p className='text-3xl text-almostBlack font-noto font-thin text-center'>2025</p>
              <div className='w-full h-[2px] bg-midleBrown' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
