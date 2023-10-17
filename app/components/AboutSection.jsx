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
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>Tailwind</li>
        <li>React</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc list-inside pl-2">
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
        <li>Ceibal's Graduation Curriculum</li>
        <li>Frontend Development Hands-on Training Program</li>
        <li>Front End Development Libraries</li>
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
        <Image className="relative" src="/images/about-image.png" width={550} height={550} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl xl:text-5xl font-extrabold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR">
                About Me
              </span>
          </h2>
          <p className="text-base lg:text-lg">
          Morbi tincidunt, felis at mattis commodo, 
          nisi ipsum lacinia nulla, quis lacinia leo est ac neque. 
          Duis mauris nibh, congue quis ante in, rutrum cursus sapien. 
          In dui nisi, eleifend vitae orci ut, euismod vulputate nibh. 
          Curabitur pretium volutpat turpis, finibus dapibus magna auctor eu.
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