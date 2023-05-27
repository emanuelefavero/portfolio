import ProjectCard from './ProjectCard'
import projectsData from '@/data/projects.json'

import FadeIntoView from './animations/FadeIntoView'

export default function Projects() {
  return (
    <>
      <div className='flex w-full flex-row flex-wrap justify-center gap-8 pt-16'>
        {projectsData.projects.map((project, index) => (
          <div key={index}>
            <FadeIntoView>
              <ProjectCard project={project} />
            </FadeIntoView>
          </div>
        ))}
      </div>
    </>
  )
}
