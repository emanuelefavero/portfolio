import skillsData from '@/data/skills.json'
import SkillsCode from './SkillsCode'
import SkillsArea from './SkillsArea'

export default function ProjectsSection() {
  return (
    <>
      <section
        id='projects'
        className='relative -top-16 flex w-full flex-col items-start justify-start px-40 pb-44 pt-32 text-slate-500'
      >
        {/* Text */}
        <h3 className='mb-8 text-2xl font-bold text-indigo-600'>Skills</h3>
        <h2 className='mb-10 text-4xl font-extrabold text-slate-900'>
          Frontend development is my area of expertise, but ...
        </h2>
        <p className='mb-16 max-w-xl text-xl font-semibold text-[#6f768e]'>
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

        {/* Skills Code - (let myStack) */}
        <SkillsCode />

        {/* Skills List */}
        <ul className='flex w-full flex-wrap justify-between gap-10 px-20'>
          {/* Skill Areas */}
          <SkillsArea skillsData={skillsData} skillsArea='frontend' />
          <SkillsArea skillsData={skillsData} skillsArea='backend' />
          <SkillsArea skillsData={skillsData} skillsArea='database' />
          <SkillsArea skillsData={skillsData} skillsArea='tools' />
        </ul>
      </section>
    </>
  )
}
