'use-client';

import { Dispatch, FC, ReactElement, SetStateAction } from "react";
import ProjectsPage from "./projectsPage";
import CertificatesPage from "./certificatesPage";
import EducationPage from "./EducationPage";
import WorkPage from "./WorkPage";
import { motion } from "motion/react";

export default function ModalPage({pageName, setIsVisible, setOpenPage}: {pageName: string, setIsVisible: Dispatch<SetStateAction<boolean>>, setOpenPage: Dispatch<SetStateAction<string>>}): ReactElement {
    const pages = {
        'projects': (<ProjectsPage />),
        'certificates': (<CertificatesPage />),
        'education': (<EducationPage />),
        'experience': (<WorkPage />),
    };

    return (
        <div>
            <div className="ml-4 mt-4 -mb-3">
                <motion.button whileHover={{rotate: 90,
          }}  onClick={() => {setIsVisible(false); setOpenPage('none')}}>
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                    <path
                        fill="currentColor"
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                    />
                </svg>

                </motion.button>
            </div>
            
            <div>
                {pages[pageName as keyof typeof pages]}
            </div>

        </div>
    );
}