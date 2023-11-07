"use client"
import React from 'react';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if(response.status === 200) {
      console.log("Message sent.");
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-4 py-24 gap-4 relative">
      <div>
        <h3 className="text-3xl xl:text-5xl font-bold mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR">
            Let&apos;s Connect
          </span>
        </h3>
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
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label 
              htmlFor="email" 
              className="text-white block text-sm mb-2 font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email" 
              id="email" 
              required 
              className="bg-[#181818] border border-THIRD_COLOR placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
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
              name="subject"
              type="text" 
              id="subject" 
              required 
              className="bg-[#181818] border border-THIRD_COLOR placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
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
              className="bg-[#181818] border border-THIRD_COLOR placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="px-1 py-1 w-full rounded-lg bg-gradient-to-b from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR hover:drop-shadow-[0_1px_15px_rgba(176,108,169,0.80)] active:drop-shadow-[0_1px_15px_rgba(176,108,169,0.80)] text-white"
          >
            <span className="block bg-[#121212] rounded-lg px-5 py-2">
              Send Message
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection