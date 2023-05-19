import Link from 'next/link'

export default function HeaderMenu() {
  return (
    <ul>
      <li>
        <Link href='#portfolio'>Portfolio</Link>
      </li>
      <li>
        <Link href='#skills'>Skills</Link>
      </li>
      <li>
        <Link href='/emanuele-favero-CV.pdf' target='_blank'>
          Download CV
        </Link>
      </li>
      <li>
        <Link href='#contact-me'>Contact Me</Link>
      </li>
    </ul>
  )
}
