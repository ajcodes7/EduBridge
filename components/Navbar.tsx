import React from 'react'

function Navbar() {
  return (
    <div className="w-full h-[72px] px-16 bg-white border-b-2 border-black flex-col justify-center items-center fixed inline-flex">
    <div className="self-stretch justify-between items-center inline-flex">
        <div className="w-20 h-10 justify-center items-center flex">
            <div className="w-[63px] h-[27px] pl-[5px] pr-[5.50px] justify-center items-center flex">
                <div className="w-[52.50px] h-[27px] relative flex-col justify-start items-start flex" />
            </div>
        </div>
        <div className="justify-center items-center gap-8 flex">
            <div className="justify-end items-center gap-8 flex">
                <div className="justify-center items-center gap-1 flex">
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Home Page</div>
                </div>
                <div className="justify-center items-center gap-1 flex">
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">About Us</div>
                </div>
                <div className="justify-center items-center gap-1 flex">
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Contact Us</div>
                </div>
                <div className="justify-center items-center gap-1 flex">
                    <div className="justify-start items-center gap-1 flex">
                        <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Resources</div>
                        <div className="w-6 h-6 relative" />
                    </div>
                </div>
            </div>
            <div className="justify-center items-center gap-4 flex">
                <a href='/students' className="px-5 py-2 border border-black justify-center items-center gap-2 flex">
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Join</div>
                </a>
                <div className="px-5 py-2 bg-black border border-black justify-center items-center gap-2 flex">
                    <div className="text-white text-base font-normal font-['Roboto'] leading-normal">Login</div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Navbar