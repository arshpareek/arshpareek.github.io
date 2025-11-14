'use client';

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";


type Props = {
    university: string,
    degree: string,
    date: string,
    logoURL: string,
    description: string[],
  }

export default function EducationCard({university, degree, date, logoURL, description}: Props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    let handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <div className="block w-auto p-2 m-1 border-b-1">
            <div className="flex w-auto p-2 m-1 " onClick={handleDropdown}>
                <img src={logoURL} className="w-20 h-20 p-2"/>
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
                <div>
                    <motion.button
                        className="absolute right-0 mr-5"
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
                                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                                    />
                                </svg>

                    </motion.button>
                </div>
            </div>
            <AnimatePresence mode="wait">{description && isDropdownOpen && <motion.div className="w-auto ml-5 " initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 100 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.25,
                }}>
                    {<ul className="list-disc">
                        {description.map((item, index) => (
                            <li>{item}</li> 
                        ))}
                    </ul>}
            </motion.div>}
            </AnimatePresence>
        </div>
        
    );
}