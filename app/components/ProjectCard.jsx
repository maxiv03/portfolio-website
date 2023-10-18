import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl border-2 border-SECOND_COLOR relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
      >

        {/* Overlay of BracketIcon and EyeIcon displayed only on large screens */}
        <div className="overlay absolute rounded-t-xl items-center justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden lg:group-hover:flex lg:group-hover:bg-opacity-70 lg:transition-all lg:duration-500">
          <Link 
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"/>
          </Link>

          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>

      </div>

      {/* BracketIcon and EyeIcon displayed only on small screens */}
      <div className="flex items-center justify-evenly py-2 group lg:hidden">
        <Link 
          href={gitUrl}
          className="h-10 w-10 border-2 rounded-full border-[#ADB7BE] flex items-center justify-center hover:border-white active:border-white group/link"
        >
          <CodeBracketIcon className="h-7 w-7 text-[#ADB7BE] cursor-pointer group-hover/link:text-white group-active/link:text-white"/>
        </Link>

        <Link
          href={previewUrl}
          className="h-10 w-10 border-2 rounded-full border-[#ADB7BE] flex items-center justify-center hover:border-white active:border-white group/link"
        >
          <EyeIcon className="h-7 w-7 text-[#ADB7BE] cursor-pointer group-hover/link:text-white group-active/link:text-white" />
        </Link>
      </div>

      <div className="h-38 md:h-44 lg:h-48 rounded-b-xl border-2 border-THIRD_COLOR lg:mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-white text-xl lg:text-2xl xl:text-3xl font-semibold mb-2">
          {title}
        </h5>
        <p className="text-xs md:text-sm xl:text-lg text-[#adb4ba]">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard