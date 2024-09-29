import React from 'react'

function How() {
  return (
    <div className="w-full h-[1094px] px-16 py-28 bg-white flex-col justify-start items-start gap-20 inline-flex">
    <div className="h-[234px] flex-col justify-start items-start gap-4 flex">
        <div className="justify-start items-center inline-flex">
            <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Connect</div>
        </div>
        <div className="self-stretch h-[194px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-[57.60px]">Discover How Our Platform Empowers Learning</div>
            <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">Our platform seamlessly connects students with teachers, mentors, and professionals. By fostering collaboration and resource sharing, we create an engaging educational ecosystem.</div>
        </div>
    </div>
    <div className="self-stretch h-[428px] flex-col justify-start items-start gap-16 flex">
        <div className="self-stretch justify-start items-start gap-12 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <img className="self-stretch h-60" src="https://via.placeholder.com/405x240" />
                <div className="self-stretch h-[156px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-black text-[32px] font-bold font-['Roboto'] leading-[41.60px]">Engage with a Community of Learners</div>
                    <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Join a vibrant community where everyone contributes to each other's growth.</div>
                </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <img className="self-stretch h-60" src="https://via.placeholder.com/405x240" />
                <div className="self-stretch h-[156px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-black text-[32px] font-bold font-['Roboto'] leading-[41.60px]">Access Opportunities Tailored to Your Needs</div>
                    <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Stay informed with alerts for new opportunities that match your interests.</div>
                </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                <img className="self-stretch h-60" src="https://via.placeholder.com/405x240" />
                <div className="self-stretch h-[156px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch text-black text-[32px] font-bold font-['Roboto'] leading-[41.60px]">Track Your Progress and Achievements</div>
                    <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Compete on leaderboards to showcase your skills and achievements.</div>
                </div>
            </div>
        </div>
    </div>
    <div className="justify-start items-center gap-6 inline-flex">
        <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn</div>
        </div>
        <div className="justify-center items-center gap-2 flex">
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Sign Up</div>
            <div className="w-6 h-6 relative" />
        </div>
    </div>
</div>
  )
}

export default How