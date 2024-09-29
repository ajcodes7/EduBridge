import React from 'react'
import image from 'next/image'
function Hero() {
  return (
    <div className="w-full h-[900px] bg-gradient-to-t from-primary via-secondary to-teritiary justify-center items-center inline-flex">
    <div className="w-[768px] flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch h-[239px] flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch text-center text-white text-[56px] font-bold font-['Roboto'] leading-[67.20px]">Medium length hero heading goes here</div>
            <div className="self-stretch text-center text-white text-lg font-normal font-['Roboto'] leading-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</div>
        </div>
        <div className="justify-start items-start gap-4 inline-flex">
            <div className="px-6 py-3 bg-white border border-white justify-center items-center gap-2 flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Button</div>
            </div>
            <div className="px-6 py-3 border border-white justify-center items-center gap-2 flex">
                <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Button</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero