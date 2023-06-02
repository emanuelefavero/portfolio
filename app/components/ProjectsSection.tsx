import Link from 'next/link'
import Projects from './Projects'

export default function ProjectsSection() {
  return (
    <>
      <section
        id='projects'
        className='dark relative -top-28 flex w-full flex-col items-start justify-start border-y-4 border-indigo-800 px-4 pb-44 pt-32 text-indigo-50 2xs:px-10 xs:px-20 sm:px-28 md:px-20 lg:px-28 xl:px-40'
      >
        <h3 className='mb-8 text-2xl font-bold text-indigo-500'>
          <Link href='#projects'>Projects</Link>
        </h3>
        <h2 className='mb-12 text-4xl font-extrabold text-indigo-50'>
          Work / Portfolio
        </h2>
        <p className='mb-10 max-w-xl text-xl font-medium text-[#a5b0d4]'>
          Explore my recent major projects, born from my passion and developed
          from scratch
        </p>

        {/* PROJECTS */}
        <Projects />
      </section>
    </>
  )
}
