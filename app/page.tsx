import HeroSection from './components/HeroSection'

async function getRepositoriesCount() {
  const res = await fetch('https://api.github.com/users/emanuelefavero')
  const data = await res.json()
  return data.public_repos
}

export default async function Home() {
  const repositoriesCount = await getRepositoriesCount()
  return (
    <>
      <span>{repositoriesCount}</span>
      <HeroSection />
    </>
  )
}
