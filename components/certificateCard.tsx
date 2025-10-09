'use client';

type Props = {
    title: string,
    issuer: string,
    date: string,
    image: string,
}

export default function CertificateCard({title, issuer, date, image}: Props) {
    return (
        <div className="flex w-auto p-5 m-1 border-b-1">
            <img src={image} />
            <div>
                <h1 className="font-bold">
                    {title}
                </h1>
                <h3 className="mt-1">
                    {issuer}
                </h3>
                <h3 className="mt-1">
                    {date}
                </h3>
            </div>
        </div>
    );
}