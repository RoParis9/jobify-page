import { Heading } from "../Helper/Heading"
import { JobCategoryCard } from "../Helper/JobCategoryCard"

export const JobCategory = () => {
  return (
    <div className="pt-20 pb-12">
      <Heading mainHeading="Popular Job Categories" subHeading="2000 jobs live - 293 added today"/>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] items-center">
        <JobCategoryCard image="/images/icon1.png" category="Finance" openPositions="23"/>
        <JobCategoryCard image="/images/icon3.png" category="Design" openPositions="212"/>
        <JobCategoryCard image="/images/icon2.png" category="Marketing" openPositions="82"/>
        <JobCategoryCard image="/images/icon4.png" category="Development" openPositions="120"/>
        <JobCategoryCard image="/images/icon5.png" category="HR" openPositions="29"/>
        <JobCategoryCard image="/images/icon6.png" category="Automotive" openPositions="1300"/>
        <JobCategoryCard image="/images/icon7.png" category="Customer Service" openPositions="190"/>
        <JobCategoryCard image="/images/icon8.png" category="Health Care" openPositions="3400"/>
        <JobCategoryCard image="/images/icon9.png" category="Project Management" openPositions="4200"/>
      </div>
    </div>
  )
}
