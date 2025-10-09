'use client';

type Props = {
    university: string,
    degree: string,
    date: string,
    logoURL: string,
  }

export default function EducationCard({university, degree, date, logoURL}: Props) {
    return (
        <div className="flex w-auto p-2 m-1 border-b-1">
            <img src={logoURL} className="w-20 p-2"/>
            <div>
                <h1 className="font-bold">
                    {university}
                </h1>
                <h3 className="mt-1">
                    {degree}
                </h3>
                <h3 className="mt-1">
                    {date}
                </h3>
            </div>
        </div>
    );
}