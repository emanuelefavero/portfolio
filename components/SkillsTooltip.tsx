import styles from './SkillsTooltip.module.scss'
import { HiPlus } from 'react-icons/hi'

type Props = {
  moreSkills: string[]
}

export default function SkillsTooltip({ moreSkills }: Props) {
  return (
    <>
      <span
        className={`${styles.SkillsTooltip} mt-2 cursor-default text-2xl font-semibold text-indigo-500`}
      >
        {/* TOOLTIP + ICON */}
        {/* ? container to prevent hover flickering visual bug */}
        <div className='relative -left-1 p-1'>
          <HiPlus className={`${styles.skillsTooltipButton} select-none`} />
        </div>

        {/* TOOLTIP */}
        <ul
          className={`${styles.tooltipContent} rounded-2xl border-2 border-indigo-500 bg-indigo-700 px-[2px] py-[0.38rem] text-center text-sm font-semibold text-indigo-100`}
        >
          <li className='mx-2 mb-1 border-b border-indigo-400 pb-[0.1rem] font-bold uppercase text-green-400'>
            More Skills
          </li>

          {/* MORE SKILLS */}
          {/* dynamic data from json file */}
          {moreSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </span>
    </>
  )
}
