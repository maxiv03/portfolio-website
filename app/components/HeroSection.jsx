"use client"
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Max',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'Glitch Artist',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base  sm:text-lg mb-6 lg:text-xl">
            I'm a Junior Front-End Developer and a Glitch Art artist. I have a strong foundation in HTML, 
            CSS, and JavaScript, and I enjoy creating captivating user interfaces that bring designs to life.
          </p>
          <div>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
              <span className="block bg-[#121212] hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full px-5 py-2">
                Hire Me
              </span>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full position-relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/fotocv2.jpeg"
              alt="hero image"
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