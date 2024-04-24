import { JobCard } from "@/app/Components/Helper/JobCard";
import { JobData } from "../../../../../data";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../auth";
import Link from "next/link";
import { ApplyButton } from "@/app/Components/Helper/ApplyButton";

const jobDetails = async ({params}:{params:{id:string}}) => {
  const singleJob = JobData.find((job)=>job.id.toString()===params.id)
  const session = await getServerSession(authOptions)
  
  const firstForJobs =JobData.slice(0,4)

  return(
    <div className="mt-20 mb-12 ">
      <div className="block sm:flex items-center justify-between w-[80%] mx-auto">
        <div className="flex-[0.7rem]">
          <JobCard job={singleJob!} />
        </div>
        {session && <ApplyButton /> }
        {!session && (
          <Link href="/signup">
            <button className="px-8 py-3 bg-emerald-600 rounded-lg text-white">Sign Up to Apply</button>
          </Link>
        )}
      </div>
      <div className="mt-16 w-[80%] mx-auto">
        <h2 className="text-[20px] font-semibold">Job Description</h2>
        <p className="mt-4 text-black text-opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus nemo dolorem consequatur debitis nihil, sit soluta, 
          perferendis modi quos adipisci maxime vero tenetur explicabo, aliquam error et voluptas quasi?
        </p>
        <h2 className="text-[20px] mt-8 font-semibold">Key Responsabilities</h2>
        <p className="mt-4 text-black text-opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id necessitatibus nemo dolorem consequatur debitis nihil, sit soluta, 
          perferendis modi quos adipisci maxime vero tenetur explicabo, aliquam error et voluptas quasi?
        </p>
        <h2 className="text-[20px] mt-8 font-semibold">
          Skills
        </h2>
        <ul className="mt-4">
          <li className="mt-4 text-black text-opacity-70">React</li>
          <li className="mt-4 text-black text-opacity-70">Javascript</li>
          <li className="mt-4 text-black text-opacity-70">NodeJS</li>
        </ul>
        <h2 className="text-[20px] font-semibold">
          Related Jobs
        </h2>
        <div className="mt-4">
            {
                firstForJobs.map((job)=>{
                    return <Link href={`/job/details/${job.id}`} className="space-y-6" key={job.id}>
                        <JobCard job={job} />
                    </Link>
                })
            }
        </div>
      </div>
    </div>
  )
}

export default jobDetails;
