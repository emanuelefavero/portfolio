type Props = {
  technology: string
}

export default function ProjectTechnology({ technology }: Props) {
  return (
    <>
      <div className='max-w-max rounded-full bg-[#1d3057ff] px-3 py-1 font-medium text-[#58eec1]'>
        {technology}
      </div>
    </>
  )
}
