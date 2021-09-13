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
        moreInfo: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        See my thesis <a href="#">here</a>.</p>`,
      },
      {
        degree: "M.A.",
        major: "Linguistics (Phonetics)",
        when: "2015-2018",
        school: "Korea University",
        where: "Seoul, South Korea",
        moreInfo: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."`,
      },
      {
        degree: "B.A.",
        major: "Neuroscience (minor in Linguistics)",
        when: "2009-2013",
        school: "Colgate University",
        where: "New York, USA",
        moreInfo: `<p>I finally found out how it feels like to live in LA; it was awesome!</p>`,
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
        moreInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
      {
        role: "Technical Localization, Freelancer",
        when: "2015-2019",
        company: "LINE plus corp.",
        where: "Seongnam, South Korea",
        moreInfo: `See my <a href="#" target="_blank" rel="noopener noreferrer">work</a>.`,
      },
    ],
    skills: [
      {
        name: "Python",
        level: "85",
        experience: "5 years",
      },
      {
        name: "Tensorflow/PyTorch",
        level: "75",
        experience: "2 years",
      },

      {
        name: "Linux",
        level: "100",
        experience: "4 years",
      },
      {
        name: "C++",
        level: "40",
        experience: "1 years",
      },
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
