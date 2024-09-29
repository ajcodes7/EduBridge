import React from 'react'

function Features() {
  return (
    <>
    <div className="w-full h-[864px] px-16 py-28 bg-white flex-col justify-start items-start gap-20 inline-flex">
    <div className="self-stretch justify-start items-center gap-20 inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-[452px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-72 flex-col justify-start items-start gap-4 flex">
                    <div className="justify-start items-center inline-flex">
                        <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">Connect</div>
                    </div>
                    <div className="self-stretch h-[248px] flex-col justify-start items-start gap-6 flex">
                        <div className="self-stretch text-black text-5xl font-bold font-['Roboto'] leading-[57.60px]">Unlock Your Potential with Our Platform</div>
                        <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">Our platform empowers users to connect with peers and mentors, share valuable resources, and build comprehensive profiles. Stay updated with opportunity alerts that keep you informed about the latest advancements in your field.</div>
                    </div>
                </div>
                <div className="self-stretch h-[132px] flex-col justify-start items-start gap-4 flex">
                    <div className="self-stretch py-2 justify-start items-start gap-6 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch text-black text-xl font-bold font-['Roboto'] leading-7">Subheading one</div>
                            <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                            <div className="self-stretch text-black text-xl font-bold font-['Roboto'] leading-7">Subheading two</div>
                            <div className="self-stretch text-black text-base font-normal font-['Roboto'] leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-start items-center gap-6 inline-flex">
                <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn</div>
                </div>
                <div className="justify-center items-center gap-2 flex">
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Join</div>
                    <div className="w-6 h-6 relative" />
                </div>
            </div>
        </div>
        <img className="grow shrink basis-0 h-[640px]" src="https://via.placeholder.com/616x640" />
    </div>
</div>
<div className="w-[1440px] h-[942px] px-16 py-28 bg-white flex-col justify-start items-center gap-20 inline-flex">
    <div className="h-[234px] flex-col justify-start items-center gap-4 flex">
        <div className="justify-start items-center inline-flex">
            <div className="text-center text-black text-base font-semibold font-['Roboto'] leading-normal">Connect</div>
        </div>
        <div className="self-stretch h-[194px] flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch text-center text-black text-5xl font-bold font-['Roboto'] leading-[57.60px]">Explore Our Exciting Features for Learning</div>
            <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">Our platform offers a variety of features designed to enhance your educational journey. From tracking your progress to connecting with mentors, we have everything you need to succeed.</div>
        </div>
    </div>
    <div className="self-stretch h-[276px] flex-col justify-start items-start gap-16 flex">
        <div className="self-stretch h-[276px] justify-start items-start gap-12 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
                <div className="w-12 h-12 relative" />
                <div className="self-stretch h-[156px] flex-col justify-start items-center gap-6 flex">
                    <div className="self-stretch text-center text-black text-[32px] font-bold font-['Roboto'] leading-[41.60px]">Compete and Climb the Leaderboards</div>
                    <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Showcase your skills and track your progress against peers.</div>
                </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
                <div className="w-12 h-12 relative" />
                <div className="self-stretch h-[156px] flex-col justify-start items-center gap-6 flex">
                    <div className="self-stretch text-center text-black text-[32px] font-bold font-['Roboto'] leading-[41.60px]">Find Your Perfect Mentorship Opportunity</div>
                    <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Connect with experienced professionals to guide your journey.</div>
                </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
                <div className="w-12 h-12 relative" />
                <div className="self-stretch h-[156px] flex-col justify-start items-center gap-6 flex">
                    <div className="self-stretch text-center text-black text-[32px] font-bold font-['Roboto'] leading-[41.60px]">Share Resources and Collaborate with Others</div>
                    <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">Access a wealth of knowledge and tools from fellow users.</div>
                </div>
            </div>
        </div>
    </div>
    <div className="justify-start items-center gap-6 inline-flex">
        <div className="px-6 py-3 border border-black justify-center items-center gap-2 flex">
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Learn More</div>
        </div>
        <div className="justify-center items-center gap-2 flex">
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">Sign Up</div>
            <div className="w-6 h-6 relative" />
        </div>
    </div>
</div>

</>
    
  )
}

export default Features