
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
      <p> 음성 인식과 합성 분야에서 연구와 개발을 해 왔습니다. 다국어 음성 인식 시스템 개발을 리드한 경험을 가지고 있으며 2021년 6월에 음성합성으로 박사학위를 취득했습니다. <br><br>현재는 어학 에듀테크(EdTech) 분야에서 영어 문법, 어휘, 발음 평가 솔루션을 기획하고 개발하고 있습니다. <br><br> 
      직접 훈련에 사용할 음성 인식용 데이터를 효율적으로 구축하기 위해, 데이터를 검수/관리하는 웹서비스를 기획하고 운영한 이력이 있습니다. 불편한 것을 개선하는 일을 좋아하고, 새로운 도구를 익히고 만드는 것이 즐겁습니다. 특히나 조직 내에서 효율적인 업무 파이프라인을 구축하는 일에 관심이 많습니다. </p>
      <a href="http://112.220.79.218:33078/"> 음성 데이터 검수/관리 NAMZSTER API 문서</a><br>
      <a href="https://yscho0806.github.io/docs-namzster/grammarpro.html">영어 문법 및 어휘 평가 시스템 API 문서</a><br>
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
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">Lead development of multi-lingual (ENG, KOR, JAP, CHN) voice-command ticketing system for metropolitan airport express annually servicing over 100 million passengers.</li>
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">Applied cross-lingual pronunciation variations to accomodate non-Korean pronunciations of Korean station names.</li>
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">Translate client needs into engineering tasks and guided the client over various technical details.</li>
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">Monitor user logs, update ASR models to maintain recognition accuracy at 90%.</li>
        </ul>

        <ul style="text-indent:-20px; margin-left:30px;">
        <em><b>Project Lead, Multi-Worker Speech Annotation System</em></b>
        <li style="list-style-position:inside; margin-bottom:1px; text-indent: 0em;">Facilitated speech data pipeline by developing a web application for real-time rule checking, feedback, task assignment, monitoring of annotation workers.</li>
        <li style="list-style-position:inside;margin-bottom:1px;  text-indent: 0em;">Contributed to 4 private, 3 public data generation contracts by assuring 1000+ simultaneous
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
        role: "Teaching Assistant",
        when: "Fall 2016",
        company: `Korea University`,
        moreInfo: "Responded to inquiries of 40+ undergraduate students in an English phonology course; reviewed exam questions, marked exams."
      },

      {
        role: "Teaching Assitant",
        when: "2016.1",
        company: `Korea University MATLAB winter program`,
        moreInfo: "Taught basics of digital signal processing and programming to 40+ undergraduate students for 4 weeks.",
      },
      {
        role: "Technical Writing, Freelancer",
        when: "2015.1 - 2015.2 & 2017.4 - 2019.4",
        company: `LINE plus corp.`,
        where: "Seongnam, South Korea",
        moreInfo: `Translation of (Korean-to-English) technical documents.`,
      },
      { 
        role: "Technical Localization",
        when: "2013.9-2014.5",
        company: `Lionbridge Technologies`,
        where: "Seoul, South Korea",
        moreInfo: `Contributed to English localization of Lineage, a MMORPG game`,
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
