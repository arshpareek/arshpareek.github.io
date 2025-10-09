'use-client';

import WorkCard from "./workCard";

export default function WorkPage() {
    type work_type = {
        company: string,
          date: string,
          location: string,
          logoURL: string,
    }
    const work: work_type[] = [
        {
          company: "HCLTech",
          date: "Jun 2021 - Aug 2021",
          location: "London, United Kingdom",
          logoURL: "https://media.licdn.com/dms/image/v2/C4D0BAQF-RIoeeMTMKQ/company-logo_100_100/company-logo_100_100/0/1664197008220/hcltech_logo?e=1762992000&v=beta&t=V01OKcqyIxg08EZ3z6a4LW0u2h63GALQCvbDlcbV5Es",
        },
      ]
    return (
        work.map((work: work_type) => <WorkCard company={work.company} date={work.date} location={work.location} logoURL={work.logoURL} />)
    )
}