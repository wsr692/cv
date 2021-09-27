
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
        moreInfo: `<b>Data-Efficient TTS</b>
        <p><em>Thesis: Phonetic Posterior-based Data Selection Strategies for English Speech Synthesis</em></p>
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
        
        <ul><em>Publications</em>
          <li>Cho, Y. and Nam, H. (2021). A Comparison of L1 and L2 Speech Phonetic Posteriorgrams for Applications in Pronunciation Training. Studies in Foreign Language Education, 35(1), 293-304., </li>
          <li>Kim, J. E., Cho, Y., Cho, Y., Hong, Y., Kim, S., & Nam, H. (2020). The effects of l1-l2 phonological mappings on l2 phonological sensitivity. Studies in Second Language Acquisition, 42(5), 1041-1076. https://doi.org/10.1017/S0272263120000133</li>
        </ul> `,
      },
      {
        degree: "M.A.",
        major: "Linguistics (Phonetics)",
        when: "2015-2018",
        school: "Korea University",
        where: "Seoul, South Korea",
        moreInfo: `Thesis: Speaker Adaptation for Robust Speech Recognition
        <ul><em>Publications</em>
          You, H., Yang, H., Kang, J., Cho, Y., Hwang, S. H., Hong, Y., Nam, H. (2016). Development of articulatory estimation model using deep neural network. Phonetics and Speech Sciences, 8(3), 31–38. https://doi.org/10.13064/ksss.2016.8.3.031
        </ul>`
      },
      {
        degree: "B.A.",
        major: "Neuroscience (minor in Linguistics)",
        when: "2009-2013",
        school: "Colgate University",
        where: "New York, USA",
        moreInfo: `<p>Alumni Memorial Scholar; recipient of a 4-year merit-based scholarship</p>
         "Alumni Memorial Scholars Fellowship Research - A Phonology-focused Immersion Study of Cantonese followed by an acoustic analysis of the learning process, China"`,
      
        //  "Hand Gestures and Head Nods Assist in L2 Production of Mandarin Tones"
        //  Cho, Y., Zheng, A., Kelly, S., Hirata, Y., Colgate University

        //  Studied the effects of co-speech hand and head gestures on Mandarin Chinese tone production by L2
        //  speakers. Results showed that producing hand gestures and head nods with speech was superior to speech
        //  alone in imitating a native Mandarin speech model. The results support embodied theories of language
        //  production.
        },
    ],
    experience: [
      {
        role: "Research Engineer",
        when: "2019.6 - Present",
        company: "Mediazen",
        where: "Seoul, South Korea",
        moreInfo: 

        `<ul style="list-style-position:inside; text-indent: 20px;margin-left: 20px;">
        Project Lead,<b> <em>Voice Command System for Subway Ticketing Kiosks</em></b>
        <li style="list-style-position:inside; text-indent: 20px;">Led development of multi-lingual (English, Korean, Japanese, Chinese) voice command based system for an airport express annually servicing over 100 million passengers.</li>

        <li style="list-style-position:inside; text-indent: 20px;">Translated client needs into engineering tasks and guided the client over various technical details.</li>
        <li style="list-style-position:inside; text-indent: 20px;">"Monitored user logs to constantly update ASR models to maintain recognition accuracy at 90%.</li>
        </ul>

        <ul style="list-style-position:inside; text-indent: 20px;margin-left: 20px;">
        Project Lead, <b><em>Web-based Multi-Worker Speech Annotation System</em></b>
        <li style="list-style-position:inside; text-indent: 20px;">Facilitated speech data pipeline by developing a web application for real-time task assignment, automated rule
        application, editor feedback and monitoring of annotation workers.</li>
        <li style="list-style-position:inside; text-indent: 20px;">Contributed to 4 private, 3 public data generation contracts (worth 8.2 billion gbp) by assuring 1000+ simultaneous
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
        moreInfo: `<li>Trained kaldi-based acoustic model for speech recognition.</li>`,

      },
      {
        role: "Teaching Assistant",
        when: "2016.1",
        company: "Korea University MATLAB winter program",
        moreInfo: "Taught basics of digital signal processing and programming to 40+ undergraduate students for 4 weeks.",
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
