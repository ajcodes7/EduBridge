import Image from "next/image";
import React from "react";
import studentsImg from "../assets/1143.jpg";

function Team() {
  return (
    <div className="w-full h-[1300px] px-16 py-28 bg-white flex-col justify-start items-center gap-20 inline-flex">
      <div className="h-[149px] flex-col justify-start items-center gap-4 flex">
        <div className="justify-start items-center inline-flex">
          <div className="text-center text-black text-base font-semibold font-['Roboto'] leading-normal">
            Meet
          </div>
        </div>
        <div className="self-stretch h-[109px] flex-col justify-start items-center gap-6 flex">
          <div className="self-stretch text-center text-black text-5xl font-bold font-['Roboto'] leading-[57.60px]">
            Our Team
          </div>
          <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
            Dedicated professionals committed to educational excellence.
          </div>
        </div>
      </div>
      <div className="self-stretch h-[610px] flex-col justify-start items-start gap-16 flex">
        <div className="self-stretch justify-start items-start gap-12 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
            <div className="w-20 h-20 relative">
              <Image
                src={studentsImg}
                alt="image"
                className="object-cover object-center"
                fill
              />
            </div>

            <div className="self-stretch h-[121px] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
                <div className="self-stretch text-center text-black text-xl font-semibold font-['Roboto'] leading-[30px]">
                  Alice Johnson
                </div>
                <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  CEO & Founder
                </div>
              </div>
              <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">
                Passionate about creating opportunities for students and
                educators worldwide.
              </div>
            </div>
            <div className="justify-start items-start gap-3.5 inline-flex">
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
            <img
              className="w-20 h-20"
              src="https://via.placeholder.com/80x80"
            />
            <div className="self-stretch h-[121px] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
                <div className="self-stretch text-center text-black text-xl font-semibold font-['Roboto'] leading-[30px]">
                  Mark Smith
                </div>
                <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  CTO
                </div>
              </div>
              <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">
                Innovating technology solutions to enhance the learning
                experience for all users.
              </div>
            </div>
            <div className="justify-start items-start gap-3.5 inline-flex">
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
            <img
              className="w-20 h-20"
              src="https://via.placeholder.com/80x80"
            />
            <div className="self-stretch h-[121px] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
                <div className="self-stretch text-center text-black text-xl font-semibold font-['Roboto'] leading-[30px]">
                  Sarah Lee
                </div>
                <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  Marketing Director
                </div>
              </div>
              <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">
                Crafting engaging campaigns to connect with our vibrant
                community.
              </div>
            </div>
            <div className="justify-start items-start gap-3.5 inline-flex">
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
            </div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-12 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
            <img
              className="w-20 h-20"
              src="https://via.placeholder.com/80x80"
            />
            <div className="self-stretch h-[121px] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
                <div className="self-stretch text-center text-black text-xl font-semibold font-['Roboto'] leading-[30px]">
                  James Brown
                </div>
                <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  Content Strategist
                </div>
              </div>
              <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">
                Developing valuable resources to empower learners and educators
                alike.
              </div>
            </div>
            <div className="justify-start items-start gap-3.5 inline-flex">
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
            <img
              className="w-20 h-20"
              src="https://via.placeholder.com/80x80"
            />
            <div className="self-stretch h-[121px] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch h-[57px] flex-col justify-start items-center flex">
                <div className="self-stretch text-center text-black text-xl font-semibold font-['Roboto'] leading-[30px]">
                  Full name
                </div>
                <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  Job title
                </div>
              </div>
              <div className="self-stretch text-center text-black text-base font-normal font-['Roboto'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </div>
            </div>
            <div className="justify-start items-start gap-3.5 inline-flex">
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="h-[273px] relative" />
        </div>
      </div>
      <div className="flex-col justify-start items-center gap-6 flex">
        <div className="h-[85px] flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch text-center text-black text-[32px] font-bold font-['Roboto'] leading-[41.60px]">
            We're hiring!
          </div>
          <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
            Join our mission to transform education for everyone.
          </div>
        </div>
        <div className="h-12 flex-col justify-start items-start gap-4 flex">
          <div className="w-[155px] px-6 py-3 border border-black justify-center items-center gap-2 inline-flex">
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
              Open positions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
