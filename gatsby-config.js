
module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://yscho.netlify.app`,
    name: `ysc`,
    role: `Speech Scientist`,
    email: `email`,
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
        moreInfo: ` Data-Efficient TTS
        <p>Thesis: Phonetic Posterior-based Data Selection Strategies for English Speech Synthesis</p>
        <ul>
          <li>
            Selected speech data based on their phone-based accuracies measured by DNN-HMM acoustic model.
          </li>
          <li>
            Trained character & phone based end-to-end English TTS (Tacotron2 + Waveglow) with the selected data
          </li>
          <li>
            Improved training convergence and clarity of end-to-end TTS by training on data selected by phone posteriors derived from speech recognition.
          </li>
          <li>
            Created 30+ voices of native and various non-native English speakers, using as little as 20 mins of selected speech data.
          </li>
          <li>
            Demonstrated phone-posteriors are effective for selecting quality TTS data for both standard and non-standard pronunciations.
          </li>
        </ul>
        `,
      },
      {
        degree: "M.A.",
        major: "Linguistics (Phonetics)",
        when: "2015-2018",
        school: "Korea University",
        where: "Seoul, South Korea",
        moreInfo: `Thesis: Speaker Adaptation for Robust Speech Recognition`,
      },
      {
        degree: "B.A.",
        major: "Neuroscience (minor in Linguistics)",
        when: "2009-2013",
        school: "Colgate University",
        where: "New York, USA",
        moreInfo: `<p>Recipient of Merit-based scholarship, 4-years</p>`,
      },
    ],
    experience: [
      {
        role: "Speech Research Engineer",
        when: "2019.6 - Present",
        company: "Mediazen",
        where: "Seoul, South Korea",
        moreInfo: `
        
        <p>• Text-to-Speech</p>
        <p>• Speech Recognition</p>
  

        <ul>
        Project Lead, <em>Voice Command System for Subway Ticketing Kiosks</em>
        <li>Led development of multi-lingual (English, Korean, Japanese and Mandarin Chinese) voice command based system for
        an airport express annually servicing over 100 million passengers.</li>
        <li>Translated client needs into engineering tasks and guided the client over various technical details.</li>
        <li>Monitored user logs to constantly update ASR models to maintain recognition accuracy at 90%.</li>
        </ul>

        <ul>
        Project Lead, <em>Web-based Multi-Worker Speech Annotation System</em>
        <li>Facilitated speech data pipeline by developing a web application that for real-time task assignment, automated rule
        application, editor feedback and monitoring of annotation workers.</li>
        <li>Contributed to 4 private, 3 public data generation contracts (worth 8.2 billion gbp) by assuring 1000+ simultaneous
        worker connections and providing dashboards for real-time monitoring of annotation progress and quality.</li>
        </ul>`
        
        // moreInfo: `<p>Automatic Speech Recognition for subway ticketing machines</p>
        // <p> Model and develop multi-lingual (EN,KR,JP,CH) speech-based ticketing system for a subway line that transports 100 million passengers per year)</p>
        // <p> Training and deploying noise-robust ASR models (DNN-HMM hybrid acoustic models + FST-based language models) that meet client accuracy standards (90% for 3-best results)  </p>
        // <p> Develop Keyword Extraction modules from STT results</p>
        // <p> Voice Cloning-based speech data generation for ASR and wake-word modelling</p>
        // <p> A web-based multi-worker speech data annotation system built to endure 1000+ simultaneous connections. </p>`,
      },

      {
        role: "Student Researcher",
        when: "2016.6 - 2019.6",
        company: "Mediazen",
        where: "Seoul, South Korea",
        moreInfo:`Train kaldi-based acoustic model for speech recognition.`,

      },
      {
        role: "MATLAB Teaching Assistant",
        when: "2016.12",
        company: "Korea University",
        where: "Seoul, South Korea",
        moreInfo: `MATLAB winter school - taught basics of digital signal processing to undergraduate students.`,
      },
      {
        role: "Technical Writing, Freelancer",
        when: "2015-2019",
        company: "LINE plus corp.",
        where: "Seongnam, South Korea",
        moreInfo: `Translated (Korean-to-English) internal documents and company-wise newsletters.`,
      },
      {
        role: "Technical Localization",
        when: "2013.9-2014.5",
        company: "Lionbridge Technologies",
        where: "Seoul, South Korea",
        moreInfo: `Contributed to English localization of an Lineage, a MMORPG game (revenue of $1.8 billion by 2013)`,
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
