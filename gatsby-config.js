
module.exports = {
  
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://yscho.netlify.app`,
    name: `Youngsun Cho`,
    role: ``,
    email: `youngsunhere@gmail.com`,
    socialMedia: [

      { name: "linkedin", link: "https://www.linkedin.com/in/ysc0806" },
    ],
    about: `
      <p> I am a speech scientist and an AI engineer with 2.5+ years of experience in <b>commercial TTS and ASR</b>. My <b>doctoral research</b> was in using <b>phonetic posteriorgrams for selecting TTS training data</b>. Since 2019, I have been a full-time research engineer for MediaZen Inc., Seoul, South Korea. 
      <br><br>
      As much as I am adept with innovative machine learning methods for building speech technologies, I understand that in many enterprise settings, <b>quality service is grounded in quality data</b>. I fully leverage my knowledge of <b>linguistics</b> and <b>deep learning</b> to <b>generate and evaluate</b> speech and language data, providing solid groundwork for applying state-of-the-art algorithms.
      <br><br>Furthermore, I enjoy using my technical skills as a developer for streamlining and automatizing data pipelines to maximize my team's efficiency.
      <br>While leading multilingual ASR and TTS projects, I went beyond developing core models and annotation rules, and <b>built a RDBMS-based web application</b> to enable scalable, stable and quality-assured data annotation projects.
      <br><br>
      I am interested in working in a dynamic environment to continue utilizing and widening my technical skills for building technologies that reach hundreds of millions of people world-wide. 
      
      </p>
      `,
    education: [
      {
        degree: "Ph.D.",
        major: "Linguistics (Phonetics)",
        when: "2018-2021",
        school: "Korea University",
        where: "Seoul, South Korea",
        title:"<p><em>Thesis: Phonetic Posterior-based Data Selection Strategies for English Speech Synthesis</em></p>",
        moreinfo: `
        <ul style="text-indent:-20px;margin-left:20px;">
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">
        Automatic evaluation of phone-level pronunciation accuracy of native and non-native English speech data, using DNN-HMM acoustic model.
      </li>
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">
            Improved convergence and clarity of end-to-end TTS by only training on smaller-sized (20 min.), high accuracy subsets.
          </li>
          <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">
            Demonstrated effect for data selection from both native and non-native English pronunciations.
          </li>
        </ul>`,
        
      publications:`<b><em>Publications</em></b><br>
          Cho, Y. and Nam, H. (2021). A Comparison of L1 and L2 Speech Phonetic Posteriorgrams for Applications in Pronunciation Training. <em>Studies in Foreign Language Education</em>, 35(1), 293-304. <br>
          Kim, J. E., Cho, Y., Cho, Y., Hong, Y., Kim, S., & Nam, H. (2020). The effects of l1-l2 phonological mappings on l2 phonological sensitivity. <em>Studies in Second Language Acquisition</em>, 42(5), 1041-1076.
          You, H., Yang, H., Kang, J., Cho, Y., Hwang, S. H., Hong, Y., Nam, H. (2016). Development of articulatory estimation model using deep neural network. <em>Phonetics and Speech Sciences</em>, 8(3), 31–38.`

        },
      {
        degree: "M.A.",
        major: "Linguistics (Phonetics)",
        when: "2015-2018",
        school: "Korea University",
        where:"Seoul, South Korea",
        moreinfo:"",
        title:"<p>Thesis: Speaker Adaptation for Robust Speech Recognition</p>",
        publications: ""
      },
      {
        degree: "B.A.",
        major: "Neuroscience (minor in Linguistics)",
        when: "2009-2013",
        school: "Colgate University",
        where: "New York, USA",
        publications:"",
        title: `<p>Alumni Memorial Scholar (AMS); recipient of a 4-year academic scholarship</p>`,
        moreinfo:`AMS Fellowship Research : <a href="http://blogs.colgate.edu/ams/2012/01/youngsun-cho-13-a-phonetics-focused-immersion-study-of-cantonese-in-hong-kong-china.html">
        Phonology-focused Immersion Study of Cantonese followed by an acoustic analysis of the learning process, China</a>`,
      
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
        company: `Mediazen Inc.`,
        where: "Seoul, South Korea",
        moreInfo: 

        `
        <center><iframe width="500" height="250" src="https://www.youtube.com/embed/O2x_DU9-14E?start=49&end=71"><br>
        </iframe></center>

        <ul style="text-indent:-20px; margin-left:30px;list-style-position: outside;">
        <em><b>Project Lead, Voice Command System for Subway Ticketing Kiosks</em></b>
        <br>
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">Lead development of multi-lingual (ENG, KOR, JAP, CHN) voice-command ticketing system for metropolitan airport express annually servicing over 100 m. passengers.</li>
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">Translate client needs into engineering tasks and guided the client over various technical details.</li>
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">Monitor user logs, update ASR models to maintain recognition accuracy at 90%.</li>
        </ul>

        <ul style="text-indent:-20px; margin-left:30px;">
        <em><b>Project Lead, Multi-Worker Speech Annotation System</em></b>
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">Facilitated speech data pipeline by developing a web application for real-time rule checking, feedback, task assignment, monitoring of annotation workers.</li>
        <li style="list-style-position:inside;margin-bottom:1px;  text-indent: 0em;">Contributed to 4 private, 3 public data generation contracts (worth £8.2 billion) by assuring 1000+ simultaneous
        worker connections and providing dashboards for real-time monitoring of annotation progress and quality.</li>
        </ul>
        
        <ul style="text-indent:-20px; margin-left:30px;">
        <em><b>Developer, Client-customized Wake-word System</em></b>
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">Implemented and trained zero-shot voice cloning system (<a href="https://arxiv.org/pdf/1806.04558.pdf%7C">Jia et al., 2019</a>) that can generate thousands of training utterances for DNN-based wake-word modeling. </li>
        </ul>
        `
              },

      {
        role: "Student Researcher",
        when: "2016.6 - 2019.6",
        company: `MediaZen Inc.`,
        where: "Seoul, South Korea",
        moreInfo: `    <ul style="text-indent:-20px; margin-left:20px;>
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">
        Trained kaldi-based acoustic/language model for ASR.
        </li>

        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">
        Developed grapheme-to-phoneme conversion in Korean.
        </li>

        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">
        Developed Generalized End-to-End loss speaker recognition system.
        </li>
        </ul>`
      },
      {
        role: "Lecturer",
        when: "Fall 2016",
        company: `Korea University`,
        moreInfo: "Responded to inquiries of 40+ undergraduate students  undergraduate English phonology course; reviewed exam questions, marked exams"
      },

      {
        role: "Teaching Assistant",
        when: "2016.1",
        company: `Korea University MATLAB winter program`,
        moreInfo: "Taught basics of digital signal processing and programming to 40+ undergraduate students for 4 weeks.",
      },
      {
        role: "Technical Writing, Freelancer",
        when: "2015.1 - 2019.5",
        company: `LINE plus corp.`,
        where: "Seongnam, South Korea",
        moreInfo: `Translated (Korean-to-English) internal documents and company-wise newsletters.`,
      },
      { 
        role: "Technical Localization",
        when: "2013.9-2014.5",
        company: `Lionbridge Technologies`,
        where: "Seoul, South Korea",
        moreInfo: `Contributed to English localization of Lineage, a MMORPG game (revenue of £1.3 billion by 2013)`,
      },
    ],
    skills: [
      {
        name: "Tensorflow/PyTorch",
        level: "75",
        experience: "2 years",
      }

    ],
    interests: ['Unsupervised methods to speech learning'
      // "Speech",
      // "Programming",
      // "Soccer",
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
