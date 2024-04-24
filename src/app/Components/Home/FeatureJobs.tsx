import Link from "next/link"
import { JobData } from "../../../../data"
import { Heading } from "../Helper/Heading"
import { JobCard } from "../Helper/JobCard"

export const FeatureJobs = () => {
    return (
        <div className="pt-20 pb-12">
            <Heading
                mainHeading="Feature Jobs"
                subHeading="Know your worth and find the best job for you"
            />
            <div className="mt-12 w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {JobData.map((job) => {
                    return (
                        <Link href={`/jobs/jobdetails/${job.id}`} key={job.id}>
                            <JobCard job={job} />
                        </Link>
                    )
                })}
            </div>
            <Link href="/jobs/alljobs">
                <div className="text-center mt-[3rem]">
                    <button className="px-8 py-2 font-semibold hover:bg-blue-900 transition-all 
              duration-300 bg-blue-700 rounded text-white">
                        View All Jobs
                    </button>
                </div>
            </Link>
        </div>
    )
}
