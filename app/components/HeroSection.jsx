"use client"
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Max',
                1000,
                'Web Dev',
                1000,
                'Glitch Art',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base lg:mr-1 sm:text-lg mb-6 lg:text-xl">
            I have a strong foundation in HTML, CSS, and JavaScript, and I enjoy creating captivating user interfaces that bring designs to life.
          </p>
          <div>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-b from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR hover:drop-shadow-[0_1px_20px_rgba(176,108,169,0.80)] text-white">
              <span className="block bg-[#121212] rounded-full px-5 py-2">
                Hire Me
              </span>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-b from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR hover:drop-shadow-[0_1px_20px_rgba(176,108,169,0.80)] text-white mt-3">
              <span className="block bg-[#121212] rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-8 lg:mt-0">
          <div className="rounded-full position-relative w-[250px] h-[250px] sm:w-[220px] sm:h-[220px] lg:w-[400px] lg:h-[400px] bg-gradient-to-b from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR px-2 py-2">
            <Image
              src="/images/hero-image.png"
              alt="Picture of myself"
              width={0}
              height={0}
              sizes="100vw"
              style={{borderRadius:'50%', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection