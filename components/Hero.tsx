import React from "react";
import image from "next/image";
function Hero() {
  return (
    <div className="w-full h-[900px] bg-gradient-to-t from-primary via-secondary to-teritiary justify-center items-center inline-flex">
      <div className="w-full flex-col justify-end items-center gap-20 inline-flex">
        <div className="self-stretch mt-10 h-[100px] flex-col justify-start items-center gap-6 flex">
          <div className="self-stretch text-center text-white text-[56px] font-bold font-['Roboto'] leading-[67.20px]">
            Connect, Learn, Impact:
          </div>
          <div className="self-stretch  text-center text-white text-lg font-normal font-['Roboto'] leading-[27px]">
            Bridge the Digital divide for the Success of Education, leading to a
            developed and solider Global South
          </div>
        </div>
        <div className="justify-start items-start gap-6 inline-flex">
          <a
            href="../sign-up/page.tsx"
            className="px-5 py-2 border rounded-lg justify-center items-center gap-2 flex hover:bg-primary group"
          >
            <div className="text-black text-base font-sans leading-normal font-bold group-hover:text-white">
              Sign Up
            </div>
          </a>
          <a
            href="../Login/page.tsx"
            className="px-5 py-2 bg-primary rounded-lg justify-center items-center gap-2 flex hover:opacity-80"
          >
            <div className="text-white text-base  font-sans leading-normal font-bold">
              Login
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
