import {
  mobile,
  backend,
  creator,
  web,
  stack,
  email,
  location,
  github,
  linkedin,
  bellbeat,
  analysisSurvey,
  edmontonTraffic,
  salesDash,
  usStock,
  secAlberta,
  tableau

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Projects",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analysis",
    icon: mobile,
  },
  {
    title: "Data Science",
    icon: creator,
  },
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technology = [
  {
    name: 'Languages',
    content: [
      {
        name: "JavaScript",
        icon: 'javascript/javascript-original.svg',
      },
      {
        name: "Python",
        icon: 'python/python-original.svg',
      },
      {
        name: "C#",
        icon: 'csharp/csharp-original.svg',
      },
    ]
  },
  {
    name: 'Front-end Frameworks/Tools',
    content: [
      {
        name: "React JS",
        icon: 'react/react-original-wordmark.svg',
      },
      {
        name: "Tailwind CSS",
        icon: 'tailwindcss/tailwindcss-plain.svg',
      },
      {
        name: "Sass",
        icon: 'sass/sass-original.svg',
      },
      {
        name: "Figma",
        icon: 'figma/figma-original.svg',
      },
      {
        name: "Jest",
        icon: 'jest/jest-plain.svg',
      },
      {
        name: "HTML 5",
        icon: 'html5/html5-original.svg',
      },
      {
        name: "CSS 3",
        icon: 'css3/css3-plain-wordmark.svg',
      },
    ],
  },
  {
    name: 'Back-end Frameworks/Tools',
    content: [
      {
        name: "Node JS",
        icon: 'nodejs/nodejs-plain.svg',
      },
      {
        name: "Express JS",
        icon: 'express/express-original.svg',
      },
      {
        name: "npm",
        icon: 'npm/npm-original-wordmark.svg',
      },
    ],
  },
  {
    name: 'Databases',
    content: [
      {
        name: "MongoDB",
        icon: 'mongodb/mongodb-plain-wordmark.svg',
      },
      {
        name: "MySQL",
        icon: 'mysql/mysql-original-wordmark.svg',
      },
      {
        name: "PostgreSQL",
        icon: 'postgresql/postgresql-original.svg',
      },
    ],
  },
  {
    name: 'Data Science Frameworks/Packages',
    content: [
      {
        name: "NumPy",
        icon: 'numpy/numpy-original-wordmark.svg',
      },
      {
        name: "Pandas",
        icon: 'pandas/pandas-original-wordmark.svg',
      },
      {
        name: "Selenium",
        icon: 'selenium/selenium-original.svg',
      },
      {
        name: "Kaggle",
        icon: 'kaggle/kaggle-original.svg',
      },
      {
        name: "RStudio",
        icon: 'rstudio/rstudio-original.svg',
      },
    ],
  },

  {
    name: "IDE's and Tools",
    content: [
      {
        name: "VSCode",
        icon: 'vscode/vscode-original.svg',
      },
      {
        name: "git",
        icon: 'git/git-original-wordmark.svg',
      },
      {
        name: "Jupyter",
        icon: 'jupyter/jupyter-original-wordmark.svg',
      },
    ]
  },
]

const experiences = [
  {
    title: "Traffic Analysis",
    project_name: "Edmonton Traffic Analysis",
    image: edmontonTraffic,
    icon: stack,
    icons: [
      'devicon-jupyter-plain-wordmark',
      'devicon-numpy-original',
      'devicon-python-plain',
      'devicon-pandas-original'
    ],
    date: "Jan 2021 - Feb 2022",
    gitUrl: 'https://github.com/fabio-analyzes-data/edmonton-traffic',
    liveUrl: 'https://fabio-analyzes-data.github.io/edmonton-traffic/',
    points: [
      'Performed an exploratory data analysis on Edmonton\'s City Traffic Data to gain insight into patterns, figures and correlations',
      "Gained insight into Edmonton traffic density, its distribution and evolution throughout the 2010's",
      'Analyzed whether the COVID pandemic altered traffic density and if Edmonton traffic levels have returned to pre-pandemic levels',
      'Data provided by Edmonton City Traffic Flow Maps and Reports'
    ],
  },
  {
    title: "Market Analysis",
    image: bellbeat,
    project_name: "Bellbeat Market Analysis",
    icon: mobile,
    icons: [
      'devicon-rstudio-plain',
      "devicon-kaggle-original",
    ],
    date: "March 2020 - April 2021",
    gitUrl: 'https://github.com/fabio-analyzes-data/bellbeat-analysis',
    liveUrl: 'https://fabio-analyzes-data.github.io/bellbeat-analysis/',
    points: [
      "Performed data analysis in search of new marketing strategies and growth opportunities ",
      "Analyzed and identified usage trends of similar products offered by competitor brands",
      "Performed preliminary and exploratory analysis to determine usage scenarios for company's products",
      "Participated in team reviews and providing constructive feedback to team members.",
    ],
  },
  {
    title: "Sales Analysis",
    project_name: "Revenue and Demand per State Analysis",
    image: salesDash,
    icon: backend,
    isUrl: true,
    icons: [
      'https://github.com/microsoft/PowerBI-Icons/blob/main/PNG/Power-BI.png?raw=true',
    ],
    date: "Jan 2022 - Jan 2023",
    gitUrl: 'https://github.com/fabio-analyzes-data/sales-analysis',
    liveUrl: '',
    points: [
      "Developed Data Dashboard to visualize and understand sales data and its evolution over the last 4 years",
      "Provided comprehensive analysis of data's trends, insights, patterns and correlations",
      "Designed insightful dashboards to aggregate data by relevant criteria such as geographical location, timeframe and so on",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Implemented DAX functions to further acquire insights from the given data set",
    ],
  },
  {
    title: "Stock Transactions",
    project_name: "USA Congress Members Stock Exchanges",
    image: usStock,
    icon: mobile,
    isUrl: true,
    icons: [
      tableau,
    ],
    date: "Jan 2023 - Present",
    gitUrl: '',
    liveUrl: 'https://public.tableau.com/app/profile/fabio.henao/viz/stock-us-representatives/General',
    points: [
      "Developed an insightful data presentation pertaining different stock transactions undertaken by US Congress Members",
      "Implemented relevant filtering criteria to aggregate data based on state legislature and political party",
      "Designed numerous insightful charts and graphs to communicate the relevant findings of the data patterns",
      "Implemented dynamic filtering and updated to visualize the contents of the data ",
    ],
  },
  {
    title: "Post Secondary Education",
    project_name: "Alberta Post Secondary Income",
    image: secAlberta,
    icon: stack,
    isUrl: true,
    icons: [
      tableau
    ],
    date: "Jan 2023 - Present",
    gitUrl: '',
    liveUrl: 'https://public.tableau.com/app/profile/fabio.henao/viz/PostSecondaryIncomeAlberta/PostSecondaryDashboard',
    points: [
      "Developed a data dashboard to visualize the Median Income Distribution in Alberta based on the type of acquired credential",
      "Implemented relevant dynamic filtering to visualize relevant segments of the data set",
      "Designed numerous charts and graphs to illustrate the findings of the data analysis process",
    ],
  },
];

const contact = [
  {
    name: 'EMAIL',
    icon: email,
    content: 'henaocaviedesg@gmail.com',
    href: 'mailto:henaocaviedesg@gmail.com',
    link: true,
  },
  {
    name: 'GITHUB REPOS',
    icon: github,
    content: 'https://github.com/fabio-analyzes-data',
    href: 'https://github.com/fabio-analyzes-data',
    link: true,
  },
  {
    name: 'LINKEDIN',
    icon: linkedin,
    content: 'https://www.linkedin.com/in/fabio-andres-henao-caviedes/',
    href: 'https://www.linkedin.com/in/fabio-andres-henao-caviedes/',
    link: true,
  },
  {
    name: 'LOCATION',
    icon: location,
    content: 'Alberta, Canada',
    href: '',
    link: false,
  },
]
export { services, technology, experiences, contact };