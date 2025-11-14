'use-client';

import WorkCard from "./workCard";

export default function WorkPage() {
    type work_type = {
        company: string,
          date: string,
          location: string,
          logoURL: string,
          description: string,
    }
    const work: work_type[] = [
        {
          company: "HCLTech",
          date: "Jun 2021 - Aug 2021",
          location: "London, United Kingdom",
          logoURL: "https://media.licdn.com/dms/image/v2/C4D0BAQF-RIoeeMTMKQ/company-logo_100_100/company-logo_100_100/0/1664197008220/hcltech_logo?e=1762992000&v=beta&t=V01OKcqyIxg08EZ3z6a4LW0u2h63GALQCvbDlcbV5Es",
          description: "I worked as a machine learning intern at HCL Labs during the summer of 2021, where I implemented a tree-based classification model for detecting anomalous credit card use. The task involved working with Pandas and Numpy to clean and preprocess the training data and experimenting with unsupervised machine learning models to determine the most precise one. I then deployed my final implementation, which achieved a precision of over 99%, on the Google Cloud Platform."
        },
      ]
    return (
        work.map((work: work_type) => <WorkCard company={work.company} date={work.date} location={work.location} logoURL={work.logoURL} description={work.description}/>)
    )
}