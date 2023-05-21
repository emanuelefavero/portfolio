import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'

async function getNumberOfRepositories() {
  const res = await fetch('https://api.github.com/users/emanuelefavero')
  const data = await res.json()

  if (!data.public_repos) {
    // Fallback to a default value (number of repositories I have on GitHub at the time of writing)
    // TODO: Update this value over time
    return 170
  }

  return Number(data.public_repos)
}

export default async function Home() {
  const numberOfRepositories: number = await getNumberOfRepositories()

  return (
    <>
      <HeroSection numberOfRepositories={numberOfRepositories} />
      <ProjectsSection />
    </>
  )
}
