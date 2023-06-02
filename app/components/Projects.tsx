import ProjectCard from './ProjectCard'
import projectsData from '@/data/projects.json'

import FadeIntoView from './animations/FadeIntoView'

export default function Projects() {
  return (
    <div className='flex w-full justify-center'>
      <div className='flex w-full max-w-screen-xl flex-row flex-wrap justify-center gap-8 pt-16'>
        {projectsData.projects.map((project, index) => (
          <div key={index}>
            <FadeIntoView>
              <ProjectCard project={project} />
            </FadeIntoView>
          </div>
        ))}
      </div>
    </div>
  )
}
