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
        moreInfo: `write`,
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
        moreInfo: `<p></p>`,
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
