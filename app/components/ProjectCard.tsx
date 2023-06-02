import styles from './ProjectCard.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
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
      <div className='h-full w-full flex-1 overflow-hidden rounded-3xl border border-[#0a0c29] bg-[#171b56] shadow-sm shadow-[#0a0c29] transition-all duration-200 hover:scale-[1.02] hover:bg-[#1b2061] active:scale-[0.98] 2xs:w-80'>
        {/* WEBSITE URL LINK */}
        <div className={styles.websiteURL}>
          <Link
            // .websiteURL
            href={project.websiteURL}
            target='_blank'
          >
            <Image
              className={`${styles.image} mb-4 h-auto w-auto select-none rounded-t-3xl bg-slate-300`}
              // .image
              src={project.image}
              alt={project.name}
              width={320}
              height={176}
            />
            <div className='px-4'>
              <h5 className='mb-2 text-xl font-semibold'>
                {/* .name */}
                <span className={styles.projectName}>{project.name}</span>{' '}
                <span className={`${styles.arrow} select-none`}>
                  <HiOutlineArrowUpRight className='inline' />
                </span>
              </h5>
              <p className='text-md min-h-[6rem] pb-4 font-medium text-[#a5b0d4]'>
                {/* .description */}
                {project.description}
              </p>
            </div>
          </Link>
        </div>

        {/* REPOSITORY URL LINK */}
        <div className={styles.repositoryURL}>
          <Link
            className='pb-4'
            // .repositoryURL
            href={project.repositoryURL}
            target='_blank'
          >
            <div className='mb-4 w-full px-4'>
              <div className='github-link flex select-none items-center justify-end text-sm font-semibold text-indigo-100 transition-all duration-150'>
                <BsGithub
                  className={`${styles.githubIcon} mr-2 transform select-none text-xl transition-all duration-200`}
                  aria-label='github.com/emanuelefavero'
                  title='github.com/emanuelefavero'
                />
                <span className={styles.exploreCode}>Explore Code</span>
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
      </div>
    </>
  )
}
