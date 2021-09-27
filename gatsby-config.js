
module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://yscho.netlify.app`,
    name: `ysc`,
    role: `Speech Scientist`,
    email: `ysc@gmail.com`,
    socialMedia: [
      {
        name: "github",
        link: "",
      },
      { name: "linkedin", link: "" },
    ],
    about: `
      <p> write <p>See the PDF version of my resume <a href="#">here</a>.</p>
      `,
    education: [
      {
        degree: "Ph.D.",
        major: "Linguistics (Phonetics)",
        when: "2018-2021",
        school: "Korea University",
        where: "Seoul, South Korea",
        moreInfo: `Data-based approaches to improving TTS pronunciation accuracies 
        <p>Thesis: Phonetic Posterior-based Data Selection Strategies for English Speech Synthesis</p>
        <ul>
        <li>Selected speech data based on their phone-based accuracies measured by DNN-HMM acoustic model</li>
        <li>Trained character & phone based end-to-end English TTS (Tacotron2 + Waveglow) with the selected data</li>
        <li>Result: TTS models trained with high-accuracy & smaller data subsets, generated clearer speech than unfiltered & larger datasets,</li>
         </ul>
        `,
      },
      {
        degree: "M.A.",
        major: "Linguistics (Phonetics)",
        when: "2015-2018",
        school: "Korea University",
        where: "Seoul, South Korea",
        moreInfo: `write`,
      },
      {
        degree: "B.A.",
        major: "Neuroscience (minor in Linguistics)",
        when: "2009-2013",
        school: "Colgate University",
        where: "New York, USA",
        moreInfo: `<p>write</p>`,
      },
      {
        degree: "High School Diploma",
        when: "2006-2009",
        school: "Ewha Foreign Language High School",
        where: "Seoul, South Korea",
      },
    ],
    experience: [
      {
        role: "Speech Research Engineer",
        when: "2019.6 - Present",
        company: "Mediazen",
        where: "Seoul, South Korea",
        moreInfo: `<p>Automatic Speech Recognition for subway ticketing machines</p>
        <p> Model and develop multi-lingual (EN,KR,JP,CH) speech-based ticketing system for a subway line that transports 100 million passengers per year)</p>
        <p> Training and deploying noise-robust ASR models (DNN-HMM hybrid acoustic models + FST-based language models) that meet client accuracy standards (90% for 3-best results)  </p>
        <p> Develop Keyword Extraction modules from STT results</p>
        <p> Voice Cloning-based speech data generation for ASR and wake-word modelling</p>
        <p> A web-based multi-worker speech data annotation system built to endure 1000+ simultaneous connections. </p>`,
      },

      {
        role: "Student Researcher",
        when: "2016.6 - 2019.6",
        company: "Mediazen",
        where: "Seoul, South Korea",
        moreInfo:`na`,

      },
      {
        role: "MATLAB Teaching Assistant",
        when: "2016.12",
        company: "Korea University",
        where: "Seoul, South Korea",
        moreInfo: `Taught MATLAB programming and basics of digital signal processing to undergraduate students.`,
      },
      {
        role: "Technical Writing, Freelancer",
        when: "2015-2019",
        company: "LINE plus corp.",
        where: "Seongnam, South Korea",
        moreInfo: `See my <a href="#" target="_blank" rel="noopener noreferrer">work</a>.`,
      },
      {
        role: "Technical Localization",
        when: "2013.9-2014.5",
        company: "Lionbridge Technologies",
        where: "Seoul, South Korea",
        moreInfo: `See my <a href="#" target="_blank" rel="noopener noreferrer">work</a>.`,
      },
    ],
    skills: [
      {
        name: "Tensorflow/PyTorch",
        level: "75",
        experience: "2 years",
      }

    ],
    interests: [
      "Speech",
      "Programming",
      "Soccer",
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "great-gatsby",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
		`gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
            `IBM Plex Mono`,
        ],
				display: 'swap'
      },
    },
  ],
}
