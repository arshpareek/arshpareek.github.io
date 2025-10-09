'use client';

type Props = {
    title: string,
    body: string,
}

export default function Project_card({title, body}: Props) {
    return (
        <div className="block w-auto p-5 m-1 border-b-1">
            <div className="font-bold">
                {title}
            </div>
            <div className="mt-1">
                {body}
            </div>
        </div>
    );
}