'use-client';

import { FC, ReactElement } from "react";
import ProjectsPage from "./projectsPage";
import CertificatesPage from "./certificatesPage";
import EducationPage from "./EducationPage";
import WorkPage from "./WorkPage";

export default function ModalPage({pageName}: {pageName: string}): ReactElement {
    const pages = {
        'projects': (<ProjectsPage />),
        'certificates': (<CertificatesPage />),
        'education': (<EducationPage />),
        'experience': (<WorkPage />),
    };

    return (
        pages[pageName]
    );
}