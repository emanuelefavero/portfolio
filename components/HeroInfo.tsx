interface Props {
  numberOfRepositories: number
}

export default function HeroInfo({ numberOfRepositories }: Props) {
  return (
    <>
      <div className='absolute -right-8 top-10 hidden text-xl font-medium text-slate-700 sm:right-0 sm:block sm:text-sm md:hidden lg:-right-8 lg:block lg:text-sm xl:text-xl'>
        <div className='mb-6 w-max rounded-3xl border-b-2 border-slate-300 bg-slate-300 bg-opacity-30 px-4 py-1'>
          <div className='flex flex-col items-start justify-start'>
            <div>
              <span className='text-3xl font-bold'>
                {/* Calculate years of experience (since 2018) */}
                {new Date().getFullYear() - 2018}+
              </span>{' '}
              Years
            </div>
            Experience
          </div>
        </div>

        <div className='w-max rounded-3xl border-b-2 border-slate-300 bg-slate-300 bg-opacity-30 px-4 py-1'>
          <div className='flex flex-col items-start justify-start'>
            <div>
              {/* Number of repositories */}
              <span className='text-3xl font-bold'>
                {numberOfRepositories}
              </span>{' '}
              GitHub
            </div>
            Repositories
          </div>
        </div>
      </div>
    </>
  )
}
