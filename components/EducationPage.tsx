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
          logoURL: "/icl.png",
          description: ["Achieved distinction classification for the thesis and merit classification for the entire degree.",
            "Topics covered: Mathematics for machine learning, natural language processing, robot learning, deep learning, computer vision, and computer security.",
          ]
        },
        {
          university: "King's College London",
          degree: "Bachelor of Science in Computer Science",
          date: "2018 - 2021",
          logoURL: "/kcl.png",
          description: ["Achieved first class classification for the entire degree.",
            "Topics covered: Data structures, mathematical methods in physics, machine learning, and network security.",
          ],
        },
        {
          university: "American School of Milan",
          degree: "International Baccalaureate Diploma",
          date: "2016 - 2018",
          logoURL: "/asm.png",
          description: ["Achieved a perfect grade of 45/45 (99.84 percentile) in International Baccalaureate Diploma with Physics, Chemistry and Maths at higher level and Economics, English and Italian at standard level.",
            "",
          ]
        }
      ]
    return (
        education.map((education: education_type) => <EducationCard university={education.university} degree={education.degree} date={education.date} logoURL={education.logoURL} description={education.description}/>)
    )
}