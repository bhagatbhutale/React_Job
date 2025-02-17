import Hero from "../Components/Hero"
import HomeCard from "../Components/HomeCards";
import JobListings from "../Components/JobListings";
import ViewsAllJob from "../Components/ViewsAllJob";
const HomePage = () => {
  return (
  <>
  <Hero />
  <HomeCard />
  <JobListings isHome={true} />
  <ViewsAllJob />
  </>
  )
}

export default HomePage

