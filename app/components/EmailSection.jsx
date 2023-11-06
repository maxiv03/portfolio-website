import React from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-4 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white mb-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, 
          I&apos;ll try my best to get back at you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/maxiv03"
            target="_blank"  
          >
            <Image src={GithubIcon} alt="Github Icon"/>
          </Link>
          <Link
            href="https://www.linkedin.com/in/maximiliano-vega-5b3526256/"
            target="_blank"  
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon"/>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label 
              htmlFor="email" 
              className="text-white block text-sm mb-2 font-medium"
            >
              Your email
            </label>
            <input
              type="email" 
              id="email" 
              required 
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-6">
            <label 
              htmlFor="subject" 
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text" 
              id="subject" 
              required 
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            >

            </textarea>
          </div>

        </form>
      </div>
    </section>
  )
}

export default EmailSection