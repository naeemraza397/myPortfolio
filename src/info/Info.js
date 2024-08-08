import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import umair from "../img/umair.png";
import arif from "../img/arif.png";
import mobeen from "../img/mobeen.png";
import muaaz from "../img/muaaz.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Naeem",
  lastName: "Raza",
  initials: "js", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },

    {
      emoji: "💼",
      text: "Software Engineer at TechandOver",
    },
    {
      emoji: "📧",
      text: "naeemraza397@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/naeemraza397",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/naeem-raza-b420a51b6/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Greetings! I'm Naeem Raza, an accomplished and enthusiastic full-stack developer deeply dedicated to the art of crafting extraordinary user experiences. My expedition in the expansive tech landscape has been distinguished by a diverse and comprehensive skill set, coupled with an unwavering commitment to delivering solutions that transcend excellence.",
  bio2: "With a keen eye on industry trends, I stay committed to continuous learning, ensuring that I bring innovative solutions to the table. My positive attitude and collaborative spirit make me a pleasure to work with. Let's connect and explore exciting opportunities in the world of technology! 🚀🌐",
  bio3: "I have worked with a wide range of technologies in my career. Some of them are listed below:",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],

  projectsList: [
    {
      title: "Kazzah Member App",
      description:
        "An app that lets clients discover trusted professional services within their close network, organize bookings, and make payments seamlessly.",
      tags: [
        { name: "#React Native", bgColor: "#00cfff", hoverColor: "#00a3cc" },
        { name: "#Redux", bgColor: "#9b59b6", hoverColor: "#8e44ad" },
        { name: "#TypeScript", bgColor: "#9b59b6", hoverColor: "#8e44ad" },
        { name: "#Paper UI", bgColor: "#99425B", hoverColor: "#99425B" },
        {
          name: "#React Navigation",
          bgColor: "#3278C6",
          hoverColor: "#3278C6",
        },
        { name: "#Babel", bgColor: "#9b59b6", hoverColor: "#8e44ad" },
        { name: "#Jest", bgColor: "#F5DA55", hoverColor: "#F5DA55" },
        { name: "#Redux Toolkit", bgColor: "#9b59b6", hoverColor: "#8e44ad" },
        { name: "#Axios", bgColor: "#3278C6", hoverColor: "#3278C6" },
        { name: "#Reanimated", bgColor: "#9b59b6", hoverColor: "#8e44ad" },
      ],
      link: "https://apps.apple.com/us/app/kazzah/id6475733007",
    },
    {
      title: "Kazzah Provider App",
      description:
        "An app that integrates scheduling, chat, and payments, connecting clients and service providers seamlessly.",
      tags: [
        { name: "#React Native", bgColor: "#00cfff", hoverColor: "#00a3cc" },
        { name: "#Redux", bgColor: "#9b59b6", hoverColor: "#8e44ad" },
        { name: "#TypeScript", bgColor: "#9b59b6", hoverColor: "#8e44ad" },
        { name: "#Paper UI", bgColor: "#99425B", hoverColor: "#99425B" },
        {
          name: "#React Navigation",
          bgColor: "#3278C6",
          hoverColor: "#3278C6",
        },
        { name: "#Babel", bgColor: "#9b59b6", hoverColor: "#8e44ad" },
        { name: "#Jest", bgColor: "#F5DA55", hoverColor: "#F5DA55" },
        { name: "#Redux Toolkit", bgColor: "#9b59b6", hoverColor: "#8e44ad" },
        { name: "#Axios", bgColor: "#3278C6", hoverColor: "#3278C6" },
        { name: "#Reanimated", bgColor: "#9b59b6", hoverColor: "#8e44ad" },
      ],
      link: "https://apps.apple.com/us/app/kazzah-pro/id6475400976",
    },
  ],

  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Kazzah Member",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Kazzah Provider",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock5,
    },
  ],
};

export const praisesList = [
  //   { image: umair },
  //   { image: arif },
  //   { image: mobeen },
  //   { image: muaaz },
  {
    link: "https://www.linkedin.com/in/omair-tanveer-07a148207/",
    author: "Omair Tanveer (Senior Web Developer At TechandOver)",
    recommendation:
      '" Naeem brings a positive attitude and collaborative spirit to the team.He excels in react native development. "',
  },
  {
    link: "https://www.linkedin.com/in/arif-rustam-075bb4259/",
    author: "Arif Rustam (React Developer At TechandOver)",
    recommendation: `" Working with Naeem on the Kazzah project at Techandover has been a remarkable experience. Naeem's expertise in React Native and his unwavering dedication consistently propelled our project forward. His problem-solving skills and collaborative spirit make him an invaluable team member. I highly recommend Naeem for any role or project; his technical acumen and reliability are outstanding assets. "`,
  },
  {
    link: "https://www.linkedin.com/in/mobeen-ejaz-8174a5198/",
    author:
      "Mobeen Ejaz (Frontend Developer | React Developer | Next Developer At TechandOver)",
    recommendation: `" I highly recommend Naeem for any project or role that involves React Native development. We have worked together on several projects, and I have always been impressed by his technical skills, problem-solving abilities, and collaborative spirit. Naeem is diligent, detail-oriented, and consistently delivers high-quality work. His expertise in React Native is top-notch, and he is always willing to help out the team and share his knowledge. I am confident that he will be a valuable asset to any team or project. "`,
  },
  {
    link: "https://www.linkedin.com/in/muaazkhan9329/",
    author:
      "Muaaz Khan (Team Lead | React Native | React.js | Javascript Developer | MERN | PERN)",
    recommendation: `" I had the pleasure of collaborating with Naeem Bhai on Kazzah, a product of Techandover. Naeem Bhai is a man of his word, consistently steering the project in the right direction and ensuring alignment with the intended goals. He stands out as one of the most hardworking individuals in our team and possesses extensive knowledge in React Native. I confidently recommend him for any team or task; he is someone you can rely on even in challenging situations. "`,
  },
];

export const list = [
  {
    name: ". TypeScript",
  },
  {
    name: ". JavaScript",
  },
  {
    name: ". React",
  },
  {
    name: ". React Native",
  },
  {
    name: ". Node.js",
  },
  {
    name: ". Express.js",
  },
  {
    name: ". Next.js",
  },
  {
    name: ". Redux",
  },
  {
    name: ". Mongo Db",
  },
  {
    name: ". PostgreSQL",
  },
  {
    name: ". GraphQL",
  },
  {
    name: ". REST APIs",
  },
  {
    name: ". Git",
  },
  {
    name: ". CI/CD",
  },
];
