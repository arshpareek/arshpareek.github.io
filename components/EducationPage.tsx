'use-client';

import EducationCard from "./educationCard";

export default function EducationPage() {
    type education_type = {
        university: string,
        degree: string,
        date: string,
        logoURL: string,
    }

    const education: education_type[] = [
        {
          university: "Imperial College London",
          degree: "Master of Science in Advanced Computing",
          date: "2021 - 2022",
          logoURL: "https://yt3.googleusercontent.com/_gp1LqIURbX2pdr2bs64lMjrAhAzCauxVoEe31KXx24tABu9scVZKvFLue8ZrHlHWO3PmvLa52o=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          university: "King's College London",
          degree: "Bachelor of Science in Computer Science",
          date: "2018 - 2021",
          logoURL: "https://media.licdn.com/dms/image/v2/C560BAQEsapaVYleavg/company-logo_200_200/company-logo_200_200/0/1630592448557/kings_college_london_logo?e=2147483647&v=beta&t=Uo6FaZJkddeyOxm-oWR20SXIAQkE2LOhViU2ixvTtos",
        },
      ]
    return (
        education.map((education: education_type) => <EducationCard university={education.university} degree={education.degree} date={education.date} logoURL={education.logoURL} />)
    )
}