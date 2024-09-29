import React from 'react'

function Footer() {
  return (
    <div className="w-[1440px] h-[377px] px-16 py-20 bg-white flex-col justify-start items-center gap-20 inline-flex">
    <div className="flex-col justify-start items-center gap-8 flex">
        <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[63px] h-[27px] pl-[5px] pr-[5.50px] justify-center items-center inline-flex">
                <div className="w-[52.50px] h-[27px] relative flex-col justify-start items-start flex" />
            </div>
        </div>
        <div className="w-[493px] justify-center items-start gap-8 inline-flex">
            <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">About Us</div>
            <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Contact Us</div>
            <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Get Started</div>
            <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Blog Posts</div>
            <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Help Center</div>
        </div>
    </div>
    <div className="self-stretch h-[54px] flex-col justify-start items-center gap-8 flex">
        <div className="self-stretch h-px bg-black border border-black" />
        <div className="self-stretch justify-between items-start inline-flex">
            <div className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">© 2024 Relume. All rights reserved.</div>
            <div className="justify-start items-start gap-6 flex">
                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-[21px]">Privacy Policy</div>
                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-[21px]">Terms of Service</div>
                <div className="text-black text-sm font-normal font-['Roboto'] underline leading-[21px]">Cookies Settings</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer