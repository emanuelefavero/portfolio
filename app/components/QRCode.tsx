import Image from 'next/image'

type Props = {
  src: string
  alt: string
}

export default function QRCode({ src, alt }: Props) {
  return (
    <>
      <div className='rounded-xl border-b border-[#242b87] bg-[#1d226f] shadow-sm shadow-[#0d0f35]'>
        <Image
          src={src}
          alt={alt}
          aria-label={alt}
          width={80}
          height={80}
          className='mb-[2px] rounded-xl border-b-2 border-indigo-500'
        />
        <div className='px-[2px] pb-[2px] text-center text-sm font-medium uppercase'>
          Scan Me
        </div>
      </div>
    </>
  )
}
