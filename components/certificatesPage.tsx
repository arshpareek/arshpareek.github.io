'use-client';

import CertificateCard from "./certificateCard";

export default function CertificatesPage() {
    type certificate_type = {
        title: string,
          issuer: string,
          date: string,
          image: string,
    }
    const certificates: certificate_type[] = [
        {
          title: "IBM Data Science",
          issuer: "Coursera",
          date: "May 2025",
          image: "/assets/IBM_Data_Science.png",
        },
        {
          title: "Generative AI with Large Language Models",
          issuer: "DeepLearning.AI",
          date: "April 2024",
          image: "/assets/Deeplearningai_LLM.png",
        },
        {
          title: "Deep Reinforcement Learning",
          issuer: "Hugging Face",
          date: "November 2023",
          image: "/assets/Huggingface_Deep_RL.png",
        },
        {
          title: "Data Scientist: Machine Learning",
          issuer: "Codecademy",
          date: "August 2023",
          image: "/assets/Codecademy_Data_Science.png",
        },
      ]
    return (
        certificates.map((certificate: certificate_type) => <CertificateCard title={certificate.title} issuer={certificate.issuer} date={certificate.date} image={certificate.image} />)
    )
}