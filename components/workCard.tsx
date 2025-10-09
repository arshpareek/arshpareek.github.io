'use client';

type Props = {
    company: string,
    date: string,
    location: string,
    logoURL: string,
  }

export default function WorkCard({company, date, location, logoURL}: Props) {
    return (
        <div className="flex w-auto p-2 m-1 border-b-1">
            <img src={logoURL} className="w-20 p-2"/>
            <div>
                <h1 className="font-bold">
                    {company}
                </h1>
                <h3 className="mt-1">
                    {location}
                </h3>
                <h3 className="mt-1">
                    {date}
                </h3>
            </div>
        </div>
    );
}