import Link from 'next/link'
import Projects from './Projects'

export default function ProjectsSection() {
  return (
    <>
      <section
        id='projects'
        className='dark relative -top-28 flex w-full flex-col items-center justify-center border-y-4 border-indigo-800 text-indigo-50'
      >
        <div className='w-full max-w-screen-3xl items-center justify-center px-4 pb-44 pt-44 2xs:px-10 xs:px-20 sm:px-28 md:px-20 lg:px-28 xl:px-40'>
          <h2 className='mb-8 text-2xl font-bold text-indigo-500'>
            <Link href='#projects'>Projects</Link>
          </h2>
          <h4 className='mb-12 text-lg font-extrabold text-indigo-50 2xs:text-4xl'>
            Work / Portfolio
          </h4>
          <p className='mb-10 max-w-xl text-xl font-medium text-[#a5b0d4] xl:mb-20 3xl:mb-40'>
            Explore my recent major projects, born from my passion and developed
            from scratch
          </p>

          {/* PROJECTS */}
          <Projects />
        </div>
      </section>
    </>
  )
}
