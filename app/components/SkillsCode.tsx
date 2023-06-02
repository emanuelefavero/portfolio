import TypewriterTextEffect from './TypewriterTextEffect'

export default function SkillsCode() {
  return (
    <>
      <div className='mb-20 hidden min-w-[154px] select-none rounded-md border border-[#103453] bg-[#154269] px-2 py-[0.1rem] font-semibold text-[#d2dbe8] shadow-sm shadow-[#154269]/40 3xs:block xl:mb-32 3xl:mb-40'>
        <span className='mr-3'>1</span>

        {/* TYPEWRITER TEXT EFFECT */}
        <TypewriterTextEffect />
      </div>
    </>
  )
}
