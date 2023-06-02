import Link from 'next/link'
import skillsData from '@/data/skills.json'
import SkillsCode from './SkillsCode'
import SkillsArea from './SkillsArea'

export default function ProjectsSection() {
  return (
    <>
      {/* SKILLS SECTION */}
      <section
        id='skills'
        className='relative -top-16 flex w-full max-w-screen-3xl flex-col items-start justify-start px-4 pb-44 pt-32 text-slate-500 2xs:px-10 xs:px-20 sm:px-28 md:px-20 lg:px-28 xl:px-40'
      >
        {/* TEXT */}
        <h2 className='mb-8 text-lg font-bold text-indigo-600'>
          <Link href='#skills'>Skills</Link>
        </h2>
        <h3 className='mb-10 text-xl font-extrabold text-slate-900 2xs:text-4xl'>
          Frontend development is my area of expertise, but ...
        </h3>
        <p className='mb-16 max-w-xl text-xl font-semibold text-slate-600/90'>
          I am highly proficient in{' '}
          <span className='text-indigo-600'>Typescript</span>,{' '}
          <span className='text-indigo-600'>React</span>,{' '}
          <span className='text-indigo-600'>Next.js</span>,{' '}
          <span className='text-indigo-600'>SASS</span>,{' '}
          <span className='text-indigo-600'>CSS</span>,{' '}
          <span className='text-indigo-600'>Tailwind CSS</span> but I&apos;m
          still capable of building full-stack{' '}
          <span className='text-indigo-600'>MERN</span>,{' '}
          <span className='text-indigo-600'>MVC</span>,{' '}
          <span className='text-indigo-600'>JAMSTACK</span> applications
        </p>

        {/* SKILLS CODE - (let myStack) */}
        <SkillsCode />

        {/* SKILLS LIST */}
        <div className='flex w-full justify-center'>
          <ul className='flex w-full max-w-screen-lg flex-wrap justify-between gap-10'>
            {/* SKILLS AREAS */}
            <SkillsArea skillsData={skillsData} skillsArea='frontend' />
            <SkillsArea skillsData={skillsData} skillsArea='backend' />
            <SkillsArea skillsData={skillsData} skillsArea='database' />
            <SkillsArea skillsData={skillsData} skillsArea='tools' />
          </ul>
        </div>
      </section>
    </>
  )
}
