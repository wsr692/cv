module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://yscho.netlify.app`,
    name: `Youngsun Cho`,
    role: `Speech Scientist`,
    email: `yscatwork@gmail.com`,
    socialMedia: [
      {
        name: "github",
        link: "https://github.com/wsr692",
      },
      { name: "linkedin", link: "https://www.linkedin.com/in/youngsun-cho-13961a118/" },
    ],
    about: `
      <p>The son of Jedi Knight Anakin Skywalker and Senator Padmé Amidala,
      Luke Skywalker was born along with his twin sister Leia in 19 BBY.
      As a result of Amidala's death and Anakin's fall to the dark side of the Force,
      the Skywalker children were separated and sent into hiding,
      with Leia adopted by the royal family of Alderaan while Luke was raised by his relatives on Tatooine.
      Longing for a life of adventure and purpose,
      Skywalker joined the Rebellion and began learning the ways of the Force under the guidance of Jedi Master Obi-Wan Kenobi,
      whose first apprentice was Luke's own father.
      During the Battle of Yavin in 0 BBY, Skywalker saved the Alliance from annihilation by destroying the Empire's planet-killing superweapon,
      the Death Star. He continued his training in the years that followed,
      determined to become a Jedi Knight like his father before him,
      and found a new mentor in Grand Master Yoda. After his master's death,
      Skywalker participated in the Battle of Endor in 4 ABY,
      during which he confronted the Sith Lord Darth Vader,
      whom he learned was in fact his father, Anakin Skywalker.
      With Luke's help, Anakin returned to the light side of the Force by destroying the Emperor at the cost of his own life,
      fulfilling his destiny as the Chosen One. You can find more information <a href="https://starwars.fandom.com/wiki/Luke_Skywalker" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <p>See the PDF version of my resume <a href="#">here</a>.</p>
      <p>As you can see, it's possible to add HTML tags in your about page.</p>
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
