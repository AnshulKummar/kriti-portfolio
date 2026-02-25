export const projectCategories = [
  'All',
  'Tableau',
  'Python',
  'R',
  'Power BI',
  'Data Engineering',
  'SQL',
  'MongoDB',
];

export const projects = [
  // --- Tableau Public Vizzes (3 — embeddable via iframe) ---
  {
    id: 't1',
    title: 'Sales Opportunity Challenge',
    description:
      'Interactive dashboard driving sales performance insights for sales managers. Built for the Maven Sales Challenge.',
    categories: ['Tableau'],
    type: 'tableau',
    tableauUrl:
      'https://public.tableau.com/views/SalesOpportunitychallenge/Dashboard32',
    githubUrl: null,
    externalUrl: null,
    tags: ['Tableau', 'Sales Analytics', 'Maven Challenge'],
    featured: true,
  },
  {
    id: 't2',
    title: 'Bank X Storyline Presentation',
    description:
      'Tableau Story analyzing customer demographics, account balances, and banking patterns for strategic decision-making.',
    categories: ['Tableau'],
    type: 'tableau',
    tableauUrl:
      'https://public.tableau.com/views/BankXStorylinePresentation/BankXDashboardStoryPresentation',
    githubUrl: null,
    externalUrl: null,
    tags: ['Tableau', 'Banking', 'Customer Analytics'],
    featured: true,
  },
  {
    id: 't3',
    title: 'COVID-19 Spread Dashboard',
    description:
      'Visualizing the evolution and spread of COVID-19 and its impact in China vs. the U.S. during the first two months of the outbreak.',
    categories: ['Tableau'],
    type: 'tableau',
    tableauUrl:
      'https://public.tableau.com/views/Spread_15839457612560/Dashboard2',
    githubUrl: 'https://github.com/kriti-hub/Visualization-Project-Outbreak',
    externalUrl: 'https://public.tableau.com/app/profile/kritisri86/viz/Spread_15839457612560/Dashboard2',
    tags: ['Tableau', 'COVID-19', 'Data Visualization'],
    featured: true,
  },

  // --- Maven Projects ---
  {
    id: 'm2',
    title: 'MLB Player Data Analysis Using SQL',
    description:
      'Analyzed decades of MLB player data to uncover insights on player education, salary distribution, career trajectories, and player attributes using advanced SQL querying techniques.',
    categories: ['SQL'],
    type: 'maven',
    tableauUrl: null,
    githubUrl: null,
    externalUrl: 'https://mavenshowcase.com/project/27715',
    tags: ['SQL', 'Sports Analytics', 'MLB', 'Data Analysis'],
    featured: true,
  },
  {
    id: 'm3',
    title: 'Adventures in Sales Analytics',
    description:
      'End-to-end Power BI dashboard for AdventureWorks cycling company — transformed raw CSV data into interactive visualizations tracking revenue, profit, return rates, regional trends, and high-value customer segments.',
    categories: ['Power BI'],
    type: 'maven',
    tableauUrl: null,
    githubUrl: null,
    externalUrl: 'https://mavenshowcase.com/project/36517',
    tags: ['Power BI', 'Sales Analytics', 'DAX', 'Data Modeling'],
    featured: true,
  },
  {
    id: 'm4',
    title: 'Hospital Analytics',
    description:
      'Data analytics for Massachusetts General Hospital — analyzed patient encounters, cost and coverage insights, payer distributions, and patient behavior trends to support operational efficiency and care optimization.',
    categories: ['SQL'],
    type: 'maven',
    tableauUrl: null,
    githubUrl: null,
    externalUrl: 'https://mavenshowcase.com/project/38433',
    tags: ['SQL', 'Healthcare', 'Hospital Analytics', 'Cost Optimization'],
    featured: true,
  },

  // --- GitHub Repositories (8) ---
  {
    id: 'g1',
    title: 'DataPipeline',
    description:
      'People Analytics Data Pipeline POC — WellNow Urgent Care staffing optimization.',
    categories: ['Python', 'Data Engineering'],
    type: 'github',
    tableauUrl: null,
    githubUrl: 'https://github.com/kriti-hub/DataPipeline',
    externalUrl: 'https://data-pipeline-nine.vercel.app/',
    tags: ['Python', 'Data Pipeline', 'People Analytics', 'GCP', 'AI', 'BigQuery'],
    featured: true,
  },
  {
    id: 'g2',
    title: 'Executive Dashboard using Power BI',
    description:
      'Crave Inc. executive board decision-making dashboard built in Power BI.',
    categories: ['Power BI'],
    type: 'github',
    tableauUrl: null,
    githubUrl:
      'https://github.com/kriti-hub/Executive-Dashboard-using-Power-BI',
    externalUrl: null,
    tags: ['Power BI', 'Executive Reporting', 'Dashboard'],
    featured: false,
  },
  {
    id: 'g3',
    title: 'Boston Housing Prediction',
    description:
      'Linear regression model to predict median real estate prices in the Boston area.',
    categories: ['Python'],
    type: 'github',
    tableauUrl: null,
    githubUrl: 'https://github.com/kriti-hub/Boston-housing',
    externalUrl: null,
    tags: ['Python', 'Jupyter', 'Linear Regression', 'Real Estate'],
    featured: false,
  },
  {
    id: 'g4',
    title: 'Insurance Premium Forecasting',
    description:
      'Health insurance premium forecasting using multiple linear regression in R.',
    categories: ['R'],
    type: 'github',
    tableauUrl: null,
    githubUrl: 'https://github.com/kriti-hub/Insurance-LinearRegression',
    externalUrl: null,
    tags: ['R', 'Linear Regression', 'Insurance', 'Forecasting'],
    featured: false,
  },
  {
    id: 'g5',
    title: 'USDA Nutrient Database Analysis',
    description:
      'Exploratory data analysis on the USDA National Nutrient Database.',
    categories: ['Python'],
    type: 'github',
    tableauUrl: null,
    githubUrl:
      'https://github.com/kriti-hub/Analysis-on-USDA-National-Nutrient-Database-data',
    externalUrl: null,
    tags: ['Python', 'EDA', 'Nutrition', 'Data Analysis'],
    featured: false,
  },
  {
    id: 'g6',
    title: 'NYC Airbnb Analysis — MongoDB Atlas',
    description:
      'NYC Airbnb 2019 listings analysis using MongoDB Atlas for NoSQL data exploration.',
    categories: ['MongoDB'],
    type: 'github',
    tableauUrl: null,
    githubUrl:
      'https://github.com/kriti-hub/New-York-City-Airbnb-Analysis--MongoDB-Atlas',
    externalUrl: null,
    tags: ['MongoDB', 'NoSQL', 'Airbnb', 'NYC'],
    featured: false,
  },
  {
    id: 'g8',
    title: 'Titanic Disaster Analysis',
    description:
      'Titanic survival prediction analysis using Python and Jupyter notebooks.',
    categories: ['Python'],
    type: 'github',
    tableauUrl: null,
    githubUrl:
      'https://github.com/kriti-hub/Titanic-Train-Disaster-Analysis',
    externalUrl: null,
    tags: ['Python', 'Jupyter', 'Classification', 'Kaggle'],
    featured: false,
  },
];
