import Link from 'next/link'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import ProjectTechnology from './ProjectTechnology'

type Props = {
  project: {
    name: string
    description: string
    image: string
    websiteURL: string
    repositoryURL: string
    technologies: string[]
  }
}

export default function ProjectCard({ project }: Props) {
  return (
    <>
      <div className='h-full w-80 flex-1 rounded-3xl border border-[#0a0c29] bg-[#171b56] shadow-sm shadow-[#0a0c29] transition-all duration-200 hover:scale-[1.02] hover:bg-[#1b2061] active:scale-[0.98]'>
        <Link
          // .websiteURL
          href={project.websiteURL}
          target='_blank'
        >
          <Image
            className='mb-4 h-44 w-full rounded-t-3xl bg-slate-300'
            // .image
            src={project.image}
            alt={project.name}
            width={320}
            height={176}
          />
          <div className='px-4'>
            <h4 className='mb-2 text-xl font-semibold'>
              {/* TODO: Replace emoji arrow with react icon and animate on hover */}
              {/* .name */}
              {project.name} ↗
            </h4>
            <p className='text-md mb-4 min-h-[5rem] font-medium text-[#a5b0d4]'>
              {/* .description */}
              {project.description}
            </p>
          </div>
        </Link>

        <Link
          className='pb-4'
          // .repositoryURL
          href={project.repositoryURL}
          target='_blank'
        >
          <div className='mb-4 w-full px-4'>
            <div className='github-link flex items-center justify-end text-sm font-semibold text-indigo-100 transition-all duration-150 hover:text-white active:scale-95'>
              <BsGithub
                className='mr-2 transform text-xl transition-all duration-200'
                aria-label='github.com/emanuelefavero'
                title='github.com/emanuelefavero'
              />
              Explore Code
            </div>
          </div>
          <div className='flex flex-wrap gap-x-3 gap-y-3 px-4 pb-[1rem]'>
            {/* .technologies */}
            {project.technologies.map((technology, index) => (
              <div key={index}>
                <ProjectTechnology technology={technology} />
              </div>
            ))}
          </div>
        </Link>
      </div>
    </>
  )
}
