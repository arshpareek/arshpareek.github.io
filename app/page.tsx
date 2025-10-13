
'use client';

import Image from "next/image";
import Wave from 'react-wavify'

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Project_card from "@/components/project-card";
import ModalPage from "@/components/modalPage";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [openPage, setOpenPage] = useState('none')

  const projects = [
    {
      title: 'Bird Call Classification Application',
      body: 'Developed an Android application using React Native to identify over 200 bird species. The application uses an EfficientNet convolutional neural network to locally process and classify audio collected from the device\'s microphone. The neural network is trained on thousands of bird voice samples from all over the world collected by the annual BirdClef competitions.Developed an Android application using React Native to identify over 200 bird species. The application uses an EfficientNet convolutional neural network to locally process and classify audio collected from the device\'s microphone. The neural network is trained on thousands of bird voice samples from all over the world collected by the annual BirdClef competitions.',
    },
    {
      title: "Data Story on New Delhi Air Pollution with Predictive Analysis",
      body: "Explored time series data pertaining to New Delhi's air pollution measurements to extract trends and insights. Complemented insights with interactive visualizations using Plotly Dash. Implemented an array of predictive models to perform predictive analysis on the time series data.",
    },
    {
      title: "Atmospheric NO2 Levels Forecasting Using Satellite Data and Deep Learning",
      body: " ",
    },
    {
      title: "Implementation of an Anomaly Detection System.",
      body: "Implemented an XGBoost algorithm for anomaly detection and deployed the machine learning model to Google Cloud AI Platform.",
    },
    {
      title: "Implementation and Evaluation of a Derivative-based Lexical Analyser.",
      body: "Worked on developing and evaluating a lexical analysis algorithm as part of final year dissertation.",
    },
    {
      title: "Self-navigating Robot Implementation.",
      body: "Developed software for a navigation robot using algorithms such as the PID controller, bayesian filtering, and A* search.",
    },
  ]

  const education = [
    {
      university: "Imperial College London",
      degree: "Master of Science in Advanced Computing",
      date: "2021 - 2022",
      logoURL: "https://yt3.googleusercontent.com/_gp1LqIURbX2pdr2bs64lMjrAhAzCauxVoEe31KXx24tABu9scVZKvFLue8ZrHlHWO3PmvLa52o=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      university: "King's College London",
      degree: "Bachelor of Science in Computer Science",
      date: "2018 - 2021",
      logoURL: "https://media.licdn.com/dms/image/v2/C560BAQEsapaVYleavg/company-logo_200_200/company-logo_200_200/0/1630592448557/kings_college_london_logo?e=2147483647&v=beta&t=Uo6FaZJkddeyOxm-oWR20SXIAQkE2LOhViU2ixvTtos",
    },
  ]

  const work = [
    {
      company: "HCLTech",
      date: "Jun 2021 - Aug 2021",
      location: "London, United Kingdom",
      logoURL: "https://media.licdn.com/dms/image/v2/C4D0BAQF-RIoeeMTMKQ/company-logo_100_100/company-logo_100_100/0/1664197008220/hcltech_logo?e=1762992000&v=beta&t=V01OKcqyIxg08EZ3z6a4LW0u2h63GALQCvbDlcbV5Es",
    },
  ]

  const certificates = [
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

  const open = (pageName: string) => {
    setIsVisible(true);
    setOpenPage(pageName);
  }

  const close = () => {
    setIsVisible(false);
    setOpenPage('none');
  }

  const renderPage = (name: string) => {
    switch(name) {
      case 'none':
        break;
      case 'education':
        break;
      case 'work':
        break;
      case 'projects':
        return (projects.map(project => <Project_card title={project.title} body={project.body} />));
        break;
      case 'certificates':
        break;
    }
  }

  const handleClick = (buttonName: string) => {
    if (openPage === buttonName){
      setIsVisible(false);
      setOpenPage('none');
    }
    else if (openPage === 'none'){
      setIsVisible(true);
      setOpenPage(buttonName);
    }
    else{
      setOpenPage(buttonName);
    }
  }

  return (
    <div className="bg-blue-50 font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Wave fill='lightblue'
          paused={false}
          style={{ display: 'flex',
            position: 'fixed',
            bottom: 0,
          }}
          options={{
            height: 10,
            amplitude: 20,
            speed: 0.15,
            points: 3
          }}
      />
      

        <AnimatePresence>
          {isVisible && <motion.div
          className="
          block absolute bottom-60 h-120 w-180 text-blue-800 bg-gray-400/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 overflow-auto
          "
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: 50}}
        >
          <ModalPage pageName={openPage} setIsVisible={setIsVisible} setOpenPage={setOpenPage}/>
          
        </motion.div>}
        </AnimatePresence>

        {!isVisible && <AnimatePresence>
          <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5}}
          exit={{opacity: 0}}
          className="text-blue-800 w-180">
            <h1 className="text-5xl font-bold pt-50">Hi, I am Arsh!</h1>
            <p className="text-2xl pt-5"> I am a Computer Science graduate experienced in Data Science and App Development</p>
          </motion.div>
          </AnimatePresence>
        }
      

      <motion.div 
        className="
        flex justify-around items-center font-bold absolute bottom-25 h-30 w-180 transition text-blue-800 bg-gray-400/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
        "
        animate={{ translateY: 20 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2
        }}
      >
      
        <motion.button
          className='flex-col'
          whileHover={{scale: 1.1,
                      transition: { duration: 0.5 },
          }}
          whileTap={{scale: 0.9,
                    transition: { duration: 0.2 },
          }}
          onClick={() => handleClick('education')}
        >
          <div className="">
            <svg className=" fill-current h-12 w-12 ml-auto mr-auto" viewBox="0 0 24 24">
              <path 
                fill="currentColor"
                d="M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3L1 9l11 6l9-4.91V17h2V9z"
              />
            </svg>
          </div>
          <div>
            Education
          </div>
        </motion.button>

        <motion.button
          className='flex-col'
          whileHover={{scale: 1.1,
                      transition: { duration: 0.5 },
          }}
          whileTap={{scale: 0.9,
                    transition: { duration: 0.2 },
          }}
          onClick={() => handleClick('projects')}
        >
          <div className="">
            <svg className=" fill-current h-12 w-12 ml-auto mr-auto" viewBox="0 0 24 24">
              <path 
                fill="currentColor"
                d="M6.36 18.78L6.61 21l1.62-1.54l2.77-7.6c-.68-.17-1.28-.51-1.77-.98zm8.41-7.9c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22zM15 8c0-1.3-.84-2.4-2-2.82V3h-2v2.18C9.84 5.6 9 6.7 9 8c0 1.66 1.34 3 3 3s3-1.34 3-3m-3 1c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"
              />
            </svg>
          </div>
          <div>
            Projects
          </div>
        </motion.button>

        <motion.button
          className='flex-col'
          whileHover={{scale: 1.1,
                      transition: { duration: 0.5 },
          }}
          whileTap={{scale: 0.9,
                    transition: { duration: 0.2 },
          }}
          onClick={() => handleClick('experience')}
        >
          <div className="">
            <svg className=" fill-current h-12 w-12 ml-auto mr-auto" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
              />
            </svg>
          </div>
          <div>
            Experience
          </div>
        </motion.button>

        <motion.button
          className='flex-col'
          whileHover={{scale: 1.1,
                      transition: { duration: 0.5 },
          }}
          whileTap={{scale: 0.9,
                    transition: { duration: 0.2 },
          }}
          onClick={() => handleClick('certificates')}
        >
          <div className="">
            <svg className=" fill-current h-12 w-12 ml-auto mr-auto" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
              />
            </svg>
          </div>
          <div>
          Certificates
          </div>
        </motion.button>

      </motion.div >
      
    </div>

    
  );
}
