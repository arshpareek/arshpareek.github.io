'use-client';

import EducationCard from "./educationCard";

export default function EducationPage() {
    type education_type = {
        university: string,
        degree: string,
        date: string,
        logoURL: string,
        description: string[],
    }

    const education: education_type[] = [
        {
          university: "Imperial College London",
          degree: "Master of Science in Advanced Computing",
          date: "2021 - 2022",
          logoURL: "https://yt3.googleusercontent.com/_gp1LqIURbX2pdr2bs64lMjrAhAzCauxVoEe31KXx24tABu9scVZKvFLue8ZrHlHWO3PmvLa52o=s900-c-k-c0x00ffffff-no-rj",
          description: ["Achieved distinction classification for the thesis and merit classification for the entire degree.",
            "Topics covered: Mathematics for machine learning, natural language processing, robot learning, deep learning, computer vision, and computer security.",
          ]
        },
        {
          university: "King's College London",
          degree: "Bachelor of Science in Computer Science",
          date: "2018 - 2021",
          logoURL: "https://media.licdn.com/dms/image/v2/C560BAQEsapaVYleavg/company-logo_200_200/company-logo_200_200/0/1630592448557/kings_college_london_logo?e=2147483647&v=beta&t=Uo6FaZJkddeyOxm-oWR20SXIAQkE2LOhViU2ixvTtos",
          description: ["Achieved first class classification for the entire degree.",
            "Topics covered: Data structures, mathematical methods in physics, machine learning, and network security.",
          ],
        },
        {
          university: "American School of Milan",
          degree: "International Baccalaureate Diploma",
          date: "2016 - 2018",
          logoURL: "https://pbs.twimg.com/profile_images/1092718882194944000/EEa87Jt3_400x400.jpg",
          description: ["Achieved a perfect grade of 45/45 (99.84 percentile) in International Baccalaureate Diploma with Physics, Chemistry and Maths at higher level and Economics, English and Italian at standard level.",
            "",
          ]
        }
      ]
    return (
        education.map((education: education_type) => <EducationCard university={education.university} degree={education.degree} date={education.date} logoURL={education.logoURL} description={education.description}/>)
    )
}