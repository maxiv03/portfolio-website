"use client";
import React, {useTransition, useState} from 'react'
import Image from "next/image";
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc list-inside pl-2">
        <li>HTML5</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>Tailwind</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc list-inside pl-2">
        <li>La gran fábrica de ideas</li>
        <li>Jóvenes a programar, Ceibal</li>
        <li>Kreativstorm</li>
        <li>FREECODECAMP</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc list-inside pl-2">
        <li>140 hours of training in Conflict Management, Negotiation, Communication and Strategic Thinking.</li>
        <li>Ceibal&apos;s Graduation Curriculum</li>
        <li>Frontend Development Hands-on Training Program</li>
        <li>Front End Development Libraries - In progress</li>
      </ul>
    )
  }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 xl:gap-16 sm:py-16">
        <Image
          className="relative"
          alt="Sunset Glitch 03"
          src="/images/about-image.png" 
          width={550} 
          height={550} 
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-center md:text-left text-4xl xl:text-5xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR">
                About Me
              </span>
          </h2>
          <p className="text-base lg:text-lg">
            I am a proactive person, an excellent teammate, organized 
            and responsible. I have felt a deep
            passion for computer technology since I was a child. 
            I greatly enjoy learning new things, so my
            current goal is to find a challenging and dynamic position where 
            I can share my experience while also gaining new knowledge.
          </p>
          <div className="flex xl:text-2xl flex-row justify-start mt-8">
            <TabButton 
              selectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}
            >
              {" "}
                Skills{" "} 
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("education")} 
              active={tab === "education"}
            >
              {" "}
                Education{" "} 
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("certifications")} 
              active={tab === "certifications"}
            >
              {" "}
                Certifications{" "} 
            </TabButton>
          </div>
          <div className=" flex flex-col xl:text-lg mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection