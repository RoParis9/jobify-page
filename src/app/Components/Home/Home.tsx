import { Hero } from "./Hero"
import { JobCategory } from "./JobCategory"
import { FeatureJobs } from "./FeatureJobs"

export const Home = () => {
    return (
        <>
          <Hero />
          <JobCategory />
          <FeatureJobs />
        </>
    )
}
