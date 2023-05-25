import Image from 'next/image'

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

        {/* Code - let myStack */}
        <div className='mb-20 rounded-md border border-[#103453] bg-[#154269] px-2 py-[0.1rem] font-semibold text-[#d2dbe8] shadow-sm shadow-[#154269]/40'>
          <span>1 </span>
          <span>
            <span className='text-[#f180f3]'>let </span>myStack <span>=</span>{' '}
            <span className='text-amber-400'>{'['}</span>
          </span>
        </div>

        {/* Skills List */}
        <ul className='flex w-full flex-wrap justify-between gap-10 px-20'>
          {/* Skill Area */}
          <li className='min-w-[118px]'>
            <Image
              className='mb-4'
              src='/images/skills/Frontend.png'
              alt='Frontend'
              width={36}
              height={36}
            />
            <h4 className='text-md mb-2 font-bold text-slate-900'>Frontend</h4>
            <ul className='flex flex-col gap-1 font-semibold text-[#6f768e]'>
              <li>Typescript</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>SASS/CSS</li>
              <li>Tailwind</li>
            </ul>
            <span className='text-2xl font-semibold text-indigo-500'>+</span>
          </li>

          {/* Skill Area */}
          <li className='min-w-[118px]'>
            <Image
              className='mb-4'
              src='/images/skills/Backend.png'
              alt='Frontend'
              width={36}
              height={36}
            />
            <h4 className='text-md mb-2 font-bold text-slate-900'>Backend</h4>
            <ul className='flex flex-col gap-1 font-semibold text-[#6f768e]'>
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>Flask</li>
              <li>Django</li>
              <li>REST</li>
            </ul>
            <span className='text-2xl font-semibold text-indigo-500'>+</span>
          </li>

          {/* Skill Area */}
          <li className='min-w-[118px]'>
            <Image
              className='mb-4'
              src='/images/skills/Database.png'
              alt='Frontend'
              width={36}
              height={36}
            />
            <h4 className='text-md mb-2 font-bold text-slate-900'>Database</h4>
            <ul className='flex flex-col gap-1 font-semibold text-[#6f768e]'>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Firebase</li>
              <li>SQL</li>
              <li>Prisma</li>
              <li>Supabase</li>
            </ul>
            <span className='text-2xl font-semibold text-indigo-500'>+</span>
          </li>

          {/* Skill Area */}
          <li className='min-w-[118px]'>
            <Image
              className='mb-4'
              src='/images/skills/Tools.png'
              alt='Frontend'
              width={36}
              height={36}
            />
            <h4 className='text-md mb-2 font-bold text-slate-900'>Tools</h4>
            <ul className='flex flex-col gap-1 font-semibold text-[#6f768e]'>
              <li>Git</li>
              <li>Jest</li>
              <li>Testing Library</li>
              <li>ESLint</li>
              <li>Figma</li>
              <li>Kanban</li>
            </ul>
            <span className='text-2xl font-semibold text-indigo-500'>+</span>
          </li>
        </ul>
      </section>
    </>
  )
}
