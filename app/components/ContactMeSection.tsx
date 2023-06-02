import Link from 'next/link'
import QRCode from './QRCode'
import ContactMeCards from './ContactMeCards'

import FadeIntoView from './animations/FadeIntoView'

export default function ContactMeSection() {
  return (
    <>
      <section
        id='contact-me'
        className='dark relative -top-28 flex w-full flex-col items-center justify-center border-y-4 border-indigo-800 text-indigo-50'
      >
        <div className='w-full max-w-screen-3xl items-center justify-center px-4 pb-44 pt-32 2xs:px-10 xs:px-20 sm:px-28 md:px-20 lg:px-28 xl:px-40'>
          {/* TEXT */}
          <h3 className='mb-8 text-2xl font-bold text-indigo-500'>
            <Link href='#contact-me'>Contact Me</Link>
          </h3>
          <h2 className='mb-36 text-xl font-extrabold text-indigo-50 2xs:text-4xl xl:mb-44'>
            Get in Touch
          </h2>

          <div className='flex w-full justify-center'>
            <div className='max-w-screen-lg'>
              {/* CONTACT ME CARDS */}
              <ContactMeCards />

              {/* QR CODES */}
              <div className='mb-5 flex w-full select-none flex-wrap justify-end gap-5'>
                <FadeIntoView>
                  <QRCode
                    src='/images/qr-codes/qr-code-github.webp'
                    alt='GitHub QR Code'
                  />
                </FadeIntoView>

                <FadeIntoView>
                  <QRCode
                    src='/images/qr-codes/qr-code-linkedin.webp'
                    alt='Linkedin QR Code'
                  />
                </FadeIntoView>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
