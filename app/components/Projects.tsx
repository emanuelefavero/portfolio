import ProjectCard from './ProjectCard'
import projectsData from '@/data/projects.json'

export default function Projects() {
  return (
    <>
      <div className='flex w-full flex-row flex-wrap justify-center gap-8 pt-16'>
        {projectsData.projects.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </>
  )
}
