export type Job = {
  id: number,
  title: string,
  image: string,
  salary: string,
  location: string,
  jobType: string
}

export const JobData: Job[] = [
  {
    id: 1,
    title: "Software engineer",
    image: "/images/c1.png",
    salary: "40k - 50k",
    location: "remote",
    jobType: "full time"
  },
  {
    id: 2,
    title: "Hr Manager",
    image: "/images/c2.png",
    salary: "70k - 90k",
    location: "remote",
    jobType: "full time"
  },
  {
    id: 3,
    title: "CFO",
    image: "/images/c3.png",
    salary: "250k - 350k",
    location: "remote",
    jobType: "full time"
  },
  {
    id: 4,
    title: "Front-end Developer",
    image: "/images/c4.png",
    salary: "60k - 80k",
    location: "remote",
    jobType: "full time"
  },
  {
    id: 5,
    title: "Web Designer",
    image: "/images/c5.png",
    salary: "70k - 90k",
    location: "remote",
    jobType: "full time"
  },
  {
    id: 6,
    title: "Kernel Developer",
    image: "/images/c6.png",
    salary: "120k - 160k",
    location: "remote",
    jobType: "full time"
  },
]
