
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
      <p> I am a speech scientist and an  AI engineer with 2.5+ years of experience  in commercial TTS and ASR. I am interested in using deep-learning to automatically  select quality data for efficient training of speech-to-text systems.  I received a PhD in English linguistics from Korea University with a doctoral research on using phonetic posteriorgram for selecting TTS training data.  Since 2019, I have been a full-time research engineer for MediaZen Inc., Seoul, South Korea. 
      <br><br>
      As much as I am fluent with innovative machine learning methods for building and improving speech technologies, I understand that in real life, quality service is grounded on quality data. My expertise in linguistics have allowed me to devise better ways to prepare data used for training TTS and ASR. Furthermore, I enjoy using my technical skills as a developer for streamlining and automatizing work pipelines to maximize my team's efficiency.
      <br><br>
      While leading multilingual ASR and TTS projects, I not only developed core models but defined the rules of annotation for 20+ data professionals and built RDBMS-based web service to allow efficient task assignment, automatic rule application, monitoring and reviewing. 
      <br><br>
      I am interested in working in a dynamic environment to continue utilizing and widening my technical skills for building technologies that reach hundreds of millions of people worldwide. 
      
      </p>
      `,
    education: [
      {
        degree: "Ph.D.",
        major: "Linguistics (Phonetics)",
        when: "2018-2021",
        school: "Korea University, Seoul, South Korea",
        where: "",
        title:"<p><em>Thesis: Phonetic Posterior-based Data Selection Strategies for English Speech Synthesis</em></p>",
        thesis: `
        <ul>
        <li>
        Automatic evaluation of phone-level pronunciation accuracy of native and non-native English speech data, using DNN-HMM acoustic model.
      </li>
        <li>
            Improved convergence and clarity of end-to-end TTS by only training on smaller-sized (20 min.), high accuracy subsets.
          </li>
          <li>
            Demonstrated effect for data selection from both native and non-native English pronunciations.
          </li>
        </ul>`,
        
      publications:`<ul><em>Publications</em>
          <li>
          Cho, Y. and Nam, H. (2021). A Comparison of L1 and L2 Speech Phonetic Posteriorgrams for Applications in Pronunciation Training. <em>Studies in Foreign Language Education</em>, 35(1), 293-304., </li>
          <li>
          Kim, J. E., Cho, Y., Cho, Y., Hong, Y., Kim, S., & Nam, H. (2020). The effects of l1-l2 phonological mappings on l2 phonological sensitivity. <em>Studies in Second Language Acquisition</em>, 42(5), 1041-1076.</li>
        </ul> `,
      },
      {
        degree: "M.A.",
        major: "Linguistics (Phonetics)",
        when: "2015-2018",
        school: `Korea University, Seoul, South Korea`,
        where: "",
        title: `<p>Thesis: Speaker Adaptation for Robust Speech Recognition</p>
        <ul><em>Publications</em>
        <li>
          You, H., Yang, H., Kang, J., Cho, Y., Hwang, S. H., Hong, Y., Nam, H. (2016). Development of articulatory estimation model using deep neural network. <em>Phonetics and Speech Sciences</em>, 8(3), 31–38.
          </li>
        </ul>`
      },
      {
        degree: "B.A.",
        major: "Neuroscience (minor in Linguistics)",
        when: "2009-2013",
        school: `Colgate University, New York, USA`,
        where: "",
        title: `<p>Alumni Memorial Scholar (AMS); recipient of a 4-year academic scholarship</p>
        AMS Fellowship Research : <a href="http://blogs.colgate.edu/ams/2012/01/youngsun-cho-13-a-phonetics-focused-immersion-study-of-cantonese-in-hong-kong-china.html">link text
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
        company: `Mediazen, Seoul, South Korea`,
        where: "",
        moreInfo: 

        `<ul style="text-indent:-20px; margin-left:20px;">
        <em>Project Lead, <b>Voice Command System for Subway Ticketing Kiosks</em></b>

        <center><iframe width="200" height="100" src="https://www.youtube.com/embed/O2x_DU9-14E?start=49&end=71">
        </iframe></center>

        <li style="list-style-position:inside; margin-bottom:10px; text-indent: 10px;">Lead development of multi-lingual (ENG, KOR, JAP, CHN) voice-command ticketing system for metropolitan airport express annually servicing over 100 m. passengers.</li>
        <li style="list-style-position:inside; margin-bottom:10px; text-indent: 10px;">Translate client needs into engineering tasks and guided the client over various technical details.</li>
        <li style="list-style-position:inside; margin-bottom:10px; text-indent: 10px;">Monitor user logs, update ASR models to maintain recognition accuracy at 90%.</li>
        </ul>

        <ul style="text-indent:-20px; margin-left:20px;">
        <em>Project Lead, <b>Multi-Worker Speech Annotation System</em></b>
        <li style="list-style-position:inside; margin-bottom:10px; text-indent: 10px;">Facilitated speech data pipeline by developing a web application for real-time task assignment, automated rule
        application, editor feedback and monitoring of annotation workers.</li>
        <li style="list-style-position:inside;margin-bottom:10px;  text-indent: 10px;">Contributed to 4 private, 3 public data generation contracts (worth 8.2 billion gbp) by assuring 1000+ simultaneous
        worker connections and providing dashboards for real-time monitoring of annotation progress and quality.</li>
        </ul>`
              },

      {
        role: "Student Researcher",
        when: "2016.6 - 2019.6",
        company: `Mediazen, Seoul, South Korea`,
        where: "",
        moreInfo: `<ul style="text-indent:-20px; margin-left:20px;">
        <li>
        Trained kaldi-based acoustic/language model for speech recognition.
        </li>

        <li>
        Developed grapheme-to-phoneme conversion in Korean.
        </li>

        <li>
        Developed Generalized End-to-End loss based speaker recognition system.
        </li>
        </ul>`
      },
      {
        role: "Teaching Assistant",
        when: "Fall 2016",
        company: `Undergraduate English Phonology, Korea University`,
        moreInfo: "Reviewed midterm and final exam questions; marked exams and responded to inquiries of 40+ undergraduate students."
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
        company: `LINE plus corp., Seongnam, South Korea`,
        where: "",
        moreInfo: `Translated (Korean-to-English) internal documents and company-wise newsletters.`,
      },
      { 
        role: "Technical Localization",
        when: "2013.9-2014.5",
        company: `Lionbridge Technologies, Seoul, South Korea`,
        where: "",
        moreInfo: `Contributed to English localization of Lineage, a MMORPG game (revenue of $1.8 billion by 2013)`,
      },
    ],
    skills: [
      {
        name: "Tensorflow/PyTorch",
        level: "75",
        experience: "2 years",
      }

    ],
    interests: ['n/a'
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
