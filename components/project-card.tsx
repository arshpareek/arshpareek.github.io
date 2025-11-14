'use client';

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Props = {
    title: string,
    body: string,
}

export default function Project_card({title, body}: Props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    let handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <motion.div className="block w-auto p-5 m-1 border-b-1" onClick={handleDropdown}>
            <h1 className="font-bold">
                {title}
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
            </h1>
            <AnimatePresence mode="wait">{isDropdownOpen && <motion.div initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 100 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  duration: 0.25,
                }}>
                <h1 className="mt-1">
                    {body}
                </h1>
            </motion.div>}
            </AnimatePresence>
        </motion.div>
    );
}