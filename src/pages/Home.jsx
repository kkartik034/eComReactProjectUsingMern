import Besteller from "../components/Besteller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewsLetterBox from "../components/NewsLetterBox"
import OurPolicy from "../components/OurPolicy"


const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Besteller/>
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home