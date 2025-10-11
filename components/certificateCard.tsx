'use client';

import Image, { StaticImageData } from 'next/image';
import { motion, Transition, useDomEvent } from "framer-motion";
import { useState, useRef } from 'react';



type Props = {
    title: string,
    issuer: string,
    date: string,
    image: string,
}

export default function CertificateCard({title, issuer, date, image}: Props) {
    const transition: Transition = {
        type: "spring",
        damping: 25,
        stiffness: 120
      };
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="flex w-auto p-5 m-1 border-b-1">
            <motion.img whileHover={{scale: 1.05, transition: { duration: 0.1 }, }} src={image} alt={'certificate_image'} width={120} transition={transition} onClick={() => setOpen(!isOpen)} className={isOpen ? 'relative w-auto h-auto max-w-100 m-auto p-2' : 'p-2'}/>
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