import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Baran YENİ | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Personal portfolio for Baran Yeni.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Baran Yeni',
  subtitle: "I'm a Full Stack Web Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'As a summary of my background, I had spent all my high school years in an R&D center as a software developer. I had encountered all the product development processes and rehearsed in different software development procedures in this company.',
  paragraphTwo:
    'What I had in terms of software development basics had growth as I kept the trace of the work in the company I worked for. All of these experiences made magnificent effection in my vocation and self-improvement. This was incredible for my career path as an engineer candidate.',
  paragraphThree:
    'From now on, I want to have a professional career in the field of software development which I have been interested in since I was very young.',
  resume: 'http://www.baranyeni.com/resume', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pavoPortal.png',
    title: 'Portal Web App',
    info: 'This tool makes it easier to manage R&D, manufacturing, project management, sales, finance and some more procedures in a company.',
    info2:
      'This project developed with Ruby on Rails and runned on Linux/NGINX servers. We used multiple database solution to store our data on MySQL an ORACLE DB. For CI/CD operations Capistrano tool helped us. Used Git to make our development life easier.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'energyAnalyser.png',
    title: 'Energy Analyser Mobile App',
    info: 'It was my very first time MVC and cross-compile mobile application development experience. Project was created for monitoring the energy consumption of high energy consuming equipment in our production units',
    info2:
      'This mobile app developed on Ionic Framework with Angular. Web service which handles basic CRUD operations developed with PHP on Apache server, to store our data we used MySQL DB',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'homeAutomationPanel.jpg',
  //   title: 'Home Automation Panel',
  //   info: 'This was bery basic usage of IoT concept, I got ESP8266 module and the RPi talking to each other over HTTP protocol in my local network. I had the change of controlling my light bulbs in my room wirelessly.',
  //   info2: 'Project based on RPi and TFT screen, UI developed with Python Tkinter library. C++ used on ESP8266 side.',
  //   url: '',
  //   repo: 'https://github.com/baranyeni/homeAutomationPanel', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: 'info@baranyeni.com',
  btn: '',
  email: 'info@baranyeni.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'github.com/baranyeni',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/RooToBot',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://tr.linkedin.com/in/baranyeni',
    },
    {
      id: nanoid(),
      name: 'spotify',
      url: 'https://open.spotify.com/user/simplethingswillhappen?si=Ekj3qPwyQ025Xsi-auKViA',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/baranymo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
