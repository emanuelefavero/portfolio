import styles from './SkillsTooltip.module.scss'
import { HiPlus } from 'react-icons/hi'

export default function SkillsTooltip() {
  return (
    <>
      <span
        className={`${styles.SkillsTooltip} mt-2 cursor-default text-2xl font-semibold text-indigo-500`}
      >
        <HiPlus className={`${styles.skillsTooltipButton} select-none`} />
        <ul
          className={`${styles.tooltipContent} rounded-2xl border-2 border-indigo-500 bg-indigo-700 px-[2px] py-[0.38rem] text-center text-sm font-semibold text-indigo-100`}
        >
          <li className='mx-2 mb-1 border-b border-indigo-400 pb-[0.1rem] font-bold uppercase text-green-400'>
            More Skills
          </li>
          <li>Testing Library</li>
          <li>VS Code</li>
          <li>Git</li>
        </ul>
      </span>
    </>
  )
}
