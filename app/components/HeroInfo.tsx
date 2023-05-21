export default function HeroInfo() {
  return (
    <>
      <div className='absolute -right-16 top-10 text-xl font-medium text-slate-700'>
        <div className='mb-6 w-max rounded-full border-b-2 border-slate-300 bg-slate-300 bg-opacity-30 px-7 py-1'>
          <p className='max-w-[6.3rem]'>
            <span className='text-3xl font-bold'>5+</span> Years Experience
          </p>
        </div>
        <div className='w-max rounded-full border-b-2 border-slate-300 bg-slate-300 bg-opacity-30 px-7 py-1'>
          <p className='max-w-[9.3rem]'>
            <span className='text-3xl font-bold'>170+</span> GitHub Repositories
          </p>
        </div>
      </div>
    </>
  )
}
