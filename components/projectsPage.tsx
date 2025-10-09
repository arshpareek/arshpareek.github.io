'use-client';

import Project_card from "./project-card";

export default function ProjectsPage() {
    type project_type = {
        title: string,
        body: string,
    }
    const projects: project_type[] = [
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
    return (
        projects.map((project: project_type) => <Project_card title={project.title} body={project.body} />)
    )
}