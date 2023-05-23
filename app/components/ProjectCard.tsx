import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'
import ProjectTechnology from './ProjectTechnology'

export default function ProjectCard() {
  return (
    <>
      <div className='w-80 rounded-3xl border border-[#0a0c29] bg-[#171b56] shadow-sm shadow-[#0a0c29] transition-all duration-200 hover:scale-[1.02] hover:bg-[#1b2061] active:scale-[0.98]'>
        <Link href='https://pineapple-ecommerce.vercel.app/' target='_blank'>
          <div className='mb-4 h-44 w-full rounded-t-3xl bg-slate-300'></div>
          <div className='px-4'>
            <h4 className='mb-2 text-xl font-semibold'>
              Pineapple Ecommerce ↗
            </h4>
            <p className='text-md mb-4 font-medium text-[#a5b0d4]'>
              An iPhone ecommerce built with Next.js, Sanity and Stripe
            </p>
          </div>
        </Link>

        <Link
          className='pb-4'
          href='https://github.com/emanuelefavero'
          target='_blank'
        >
          <div className='mb-4 w-full px-4'>
            <div className='github-link flex items-center justify-end text-sm font-semibold text-indigo-100 transition-all duration-150 hover:text-white active:scale-95'>
              <BsGithub
                className='mr-2 transform text-xl transition-all duration-200'
                aria-label='github.com/emanuelefavero'
                title='github.com/emanuelefavero'
              />
              Explore Code
            </div>
          </div>
          <div className='flex flex-wrap gap-x-3 gap-y-3 px-4 pb-4'>
            <ProjectTechnology technology='Next.js' />
            <ProjectTechnology technology='Sanity' />
            <ProjectTechnology technology='Stripe' />
            <ProjectTechnology technology='React' />
          </div>
        </Link>
      </div>
    </>
  )
}
