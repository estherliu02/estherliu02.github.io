// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-graduate-from-the-university-of-waterloo-with-a-bachelor-of-cs-and-a-diploma-in-korean-language-i-i-am-recognized-on-the-dean-s-honours-list-with-a-cumulative-average-of-90-24",
          title: 'I graduate from the University of Waterloo with a Bachelor of CS and...',
          description: "",
          section: "News",},{id: "news-computational-analysis-uncovering-contrasts-in-g-quadruplex-propensity-and-aptamer-enrichment-in-selex-derived-libraries-is-accepted-at-chembiochem",
          title: 'Computational Analysis Uncovering Contrasts in G-Quadruplex Propensity and Aptamer Enrichment in SELEX-Derived Libraries...',
          description: "",
          section: "News",},{id: "news-sci2pol-evaluating-and-fine-tuning-llms-on-scientific-to-policy-brief-generation-is-accepted-at-iclr-2026-see-you-in-rio-de-janeiro-brazil",
          title: 'Sci2Pol: Evaluating and Fine-tuning LLMs on Scientific-to-Policy Brief Generation is accepted at ICLR...',
          description: "",
          section: "News",},{id: "projects-models-of-humans-for-adjudicating-ai-debate",
          title: 'Models of Humans for Adjudicating AI Debate',
          description: "understanding how people judge AI debates",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
