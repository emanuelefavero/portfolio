import Link from 'next/link'
import QRCode from './QRCode'
import ContactMeCards from './ContactMeCards'

export default function ContactMeSection() {
  return (
    <>
      <section
        id='contact-me'
        className='dark relative -top-28 flex w-full flex-col items-start justify-start border-y-4 border-indigo-800 px-40 pb-44 pt-32 text-indigo-50'
      >
        {/* TEXT */}
        <h3 className='mb-8 text-2xl font-bold text-indigo-500'>
          <Link href='#contact-me'>Contact Me</Link>
        </h3>
        <h2 className='mb-36 text-4xl font-extrabold text-indigo-50'>
          Get in Touch
        </h2>

        {/* CONTACT ME CARDS */}
        <ContactMeCards />

        {/* QR CODES */}
        <div className='mb-5 flex w-full select-none flex-wrap justify-end gap-5'>
          <QRCode
            src='/images/qr-codes/qr-code-github.webp'
            alt='GitHub QR Code'
          />

          <QRCode
            src='/images/qr-codes/qr-code-linkedin.webp'
            alt='Linkedin QR Code'
          />
        </div>
      </section>
    </>
  )
}
