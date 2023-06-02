import Image from 'next/image'
import SkillsTooltip from './SkillsTooltip'

type SkillsData = {
  frontend: string[]
  backend: string[]
  database: string[]
  tools: string[]
}

type Props = {
  skillsData: SkillsData
  // ? keyof is a Typescript utility type that returns the keys of an object
  skillsArea: keyof SkillsData // 'frontend' | 'backend' | 'database' | 'tools'
}

export default function SkillsArea({ skillsData, skillsArea }: Props) {
  // NOTE: Access the skillsData property using the skillsArea variable
  const skills = skillsData[skillsArea] // e.g. skillsData['frontend']

  function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  }
  const skillsAreaCapitalized = capitalize(skillsArea)

  return (
    <>
      <li className='min-w-[150px] border-l-2 border-dotted border-slate-900/20 px-4 pt-4'>
        <Image
          className='mb-4 select-none'
          src={`/images/skills/${skillsAreaCapitalized}.png`}
          alt={skillsAreaCapitalized}
          width={36}
          height={36}
        />
        <h4 className='text-md mb-2 font-bold text-slate-900'>
          {skillsAreaCapitalized}
        </h4>
        <ul className='flex flex-col gap-1 font-semibold text-slate-600/90'>
          {/* SKILLS */}
          {/* Render first 6 skills from skillsData */}
          {skills.slice(0, 6).map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        {/* MORE SKILLS TOOLTIP */}
        {/* Pass the skills array except the first 6 elements */}
        <SkillsTooltip moreSkills={skills.slice(6)} />
      </li>
    </>
  )
}
