import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Created with NextJS and Tailwind with a palette of colors that I chose from an artwork that I made.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/maxiv03/portfolio-website",
    previewUrl: "https://maximilianovega.com/"
  },
  {
    id: 2,
    title: "E-commerce Application",
    description: "My first project. Created with JavaScript, HTML, and Bootstrap. Log in with any fictional mail and pass.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/maxiv03/proyecto-e_commerce",
    previewUrl: "https://maxiv03.github.io/proyecto-e_commerce/index.html"
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl xl:text-5xl font-extrabold mt-4 mb-8 md:mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-FIRST_COLOR via-SECOND_COLOR to-THIRD_COLOR">
              My Projects
              </span>
          </h2>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection