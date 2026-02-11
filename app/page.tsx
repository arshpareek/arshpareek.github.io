
'use client';

import Wave from 'react-wavify';
import { ShootingStars } from "@/components/ui/shadcn-io/shooting-stars";
import { ThemeProvider, useTheme } from "next-themes";
import { Sun, Moon } from 'lucide-react';


import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Project_card from "@/components/project-card";
import ModalPage from "@/components/modalPage";
import Link from 'next/link';

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <motion.button
            className='absolute left-10 top-10 flex-col w-10 h-10 text-inherit  bg-clip-padding '
            whileHover={{scale: 1.1,
                        transition: { duration: 0.5 },
            }}
            whileTap={{scale: 0.9,
                      transition: { duration: 0.2 },
            }}
            onClick={() => {setTheme(resolvedTheme === "light" ? "dark" : "light");}}
          >
            <motion.div
              key={resolvedTheme}
              initial={{ opacity: 0, rotate: -30 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.2 }}
            >
              {resolvedTheme === "dark" ? <Moon size={60} /> : <Sun size={60} color='gold'/>}
            </motion.div>
          </motion.button>
  );
}

export default function Home() {
  
  
  const [isPlaying, setIsPlaying] = useState(false);

  
  

  const audio =  useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audio.current = new Audio("/fishing_music_filter.mp3");
  }, [])
  
  

  let playPause = () => {

    if (isPlaying && audio) {
        audio.current?.pause(); 
    } 
    else {
        audio.current?.play();
    }
    
    setIsPlaying(isPlaying => !isPlaying);
  };


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
    <ThemeProvider attribute="class">
    <div className="bg-blue-50  dark:bg-blue-950 text-blue-800 dark:text-gray-100 font-frutiger grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      
        <ShootingStars
          starColor="white"
          trailColor="#2EB9DF"
          minSpeed={15}
          maxSpeed={35}
          minDelay={800}
          maxDelay={3000}
        />
        <Wave className='fill-[lightblue] dark:fill-[cornflowerblue]'
        fill='inherit'
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
            block absolute bottom-60 h-120 w-180  dark:text-gray-100 bg-gray-400/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 overflow-auto
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
            className="w-180">
              <h1 className="text-5xl font-bold pt-50">Hi, I am Arsh!</h1>
              <p className="text-2xl pt-5"> I am a Computer Science graduate experienced in Data Science and App Development.</p>
            </motion.div>
            </AnimatePresence>
          }
        

        <motion.div 
          className="
          flex justify-around items-center font-bold absolute bottom-25 h-30 w-180 transition text-inherit bg-gray-400/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
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

        <motion.div 
          className="
          flex rounded-full justify-around items-center font-bold absolute left-10 bottom-10 transition text-inherit bg-gray-400/20 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
          "
          animate={{ translateY: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3
          }}
        >
          <motion.button
            className='flex-col rounded-full pl-1 pt-0.5 w-10 h-10 text-gray-100'
            whileHover={{scale: 1.1,
                        transition: { duration: 0.5 },
            }}
            whileTap={{scale: 0.9,
                      transition: { duration: 0.2 },
            }}
          >
            <div className="">
              <Link href="https://github.com/arshpareek" rel="noopener noreferrer" target="_blank">  
                <svg className=" fill-current h-12 w-12 ml-auto mr-auto" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z"></path></g></svg>
              </Link>
              
            </div>
          </motion.button>

          <motion.button
            className='flex-col rounded-full pl--1 pt--2.9 w-11 h-11 text-gray-100 '
            whileHover={{scale: 1.1,
                        transition: { duration: 0.5 },
            }}
            whileTap={{scale: 0.9,
                      transition: { duration: 0.2 },
            }}
          >
            <div className="">
              <a href="mailto:name@email.com">
                <svg className=" fill-current h-12 w-12 ml-auto mr-auto" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM7.005 9C7.005 8.45 7.45 8 8 8H16C16.55 8 17 8.45 17 9V15C17 15.55 16.55 16 16 16H8C7.45 16 7 15.55 7 15L7.005 9ZM12 12.5L8.00001 9.99997V15H16V9.99997L12 12.5ZM12 11.5L8.00001 9.00001H16L12 11.5Z"></path> </g></svg>            
              </a>
            </div>
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="absolute right-10 bottom-10"
          animate={{ translateY: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3
          }}>
        <motion.button
            className='flex-col rounded-full w-10 h-10 text-inherit  bg-gray-400/20 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'
            whileHover={{scale: 1.1,
                        transition: { duration: 0.5 },
            }}
            whileTap={{scale: 0.9,
                      transition: { duration: 0.2 },
            }}
            onClick={playPause}
          >
            <div className="">
              <svg className=" fill-current h-8 w-8 ml-auto mr-auto" viewBox="0 0 24 24">
                <motion.path
                  animate={{d: isPlaying ? "m12 3l.01 10.55c-.59-.34-1.27-.55-2-.55a4.001 4.001 0 1 0 0 8c2.22 0 3.99-1.79 3.99-4V7h4V3zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
                                          : "M14 7h4V3h-6v4.61l2 2zm-2 3.44L4.41 2.86L3 4.27l9 9v.28c-.94-.54-2.1-.75-3.33-.32c-1.34.48-2.37 1.67-2.61 3.07a4.007 4.007 0 0 0 4.59 4.65c1.96-.31 3.35-2.11 3.35-4.1v-1.58L19.73 21l1.41-1.41zM10 19c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2",
                            
                  }}
                  transition={{ duration: 0.5 }}
                  fill="currentColor"
                  />
              </svg>
            </div>
          </motion.button>

        </motion.div>

        <ModeToggle/>
      
      
      
    </div>
    </ThemeProvider>
    
  );
}
