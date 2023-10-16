import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Created with NextJS and Tailwind with a palette of colors that I chose from an artwork that I made.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "E-commerce Application",
    description: "My first project. Created with JavaScript, HTML, and Bootstrap.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
  }
]

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectsSection