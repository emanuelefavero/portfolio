import ProjectCard from './ProjectCard'

// TODO: Add dynamic data from json file

export default function Projects() {
  return (
    <>
      <div className='flex w-full flex-row flex-wrap justify-center gap-8 pt-16'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  )
}
