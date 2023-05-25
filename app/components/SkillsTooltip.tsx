import styles from './SkillsTooltip.module.scss'

export default function SkillsTooltip() {
  return (
    <>
      <div
        className={`${styles.tooltip} text-2xl font-semibold text-indigo-500`}
      >
        +
        <ul className={`${styles.tooltiptext}`}>
          <li className='mx-2 mb-1 border-b border-indigo-400 pb-[0.1rem] font-bold uppercase text-green-400'>
            More Skills
          </li>
          <li>Testing Library</li>
          <li>VS Code</li>
          <li>Git</li>
        </ul>
      </div>
    </>
  )
}
