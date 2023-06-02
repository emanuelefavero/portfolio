'use client'

import styles from './HeaderMenuItems.module.scss'
import { useRouter } from 'next/navigation'

export default function DownloadCVButton() {
  const router = useRouter()

  const handleDownloadCV = () => {
    const fileUrl = '/emanuele-favero-CV.pdf'
    const newWindow = window.open(fileUrl, '_blank')
    if (newWindow) {
      newWindow.opener = null
    }
    // router.push(router.pathname) // Optional: Refresh the current page
  }

  return (
    <>
      <li className='mr-6'>
        <button
          className={`${styles.linkHoverLineAnimation} relative cursor-pointer rounded-sm active:text-slate-600`}
          onClick={handleDownloadCV}
        >
          Download CV
        </button>
      </li>
    </>
  )
}
