export {default as Article} from './article/Article';
export {default as Brand} from './brand/Brand';
export {default as Home} from './home/home';
export {default as CTA} from './cta/CTA';
export {default as Feature} from './feature/Feature';
export {default as Navbar} from './navbar/Navbar';
export {default as Collection} from './collections/Collection'

import { VRGlasses,location,RLmodes, facebook, instagram, linkedin, airbnb, binance, coinbase, dropbox  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "blog",
    title: "Studio",
  },
  
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "about",
    title: "About"
  }
];

export const features = [
  
  
  {
    id: "feature-1",
    icon: location,
    title: "Location Based",
    content:
      "You can place your creations in real word loactions.",
  },
  {
    id: "feature-2",
    icon: VRGlasses,
    title: "Virtual Training",
    content:
      " Use it to train Virtually using common platform and integrated 3D models.",
  },
  {
    id: "feature-3",
    icon: RLmodes,
    title: "NFT's",
    content:
      "Save your creations and NFT's on secure blockchain network.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    // img: people01,
  },
  // {
  //   id: "feedback-2",
  //   content:
  //     "Money makes your life easier. If you're lucky to have it, you're lucky.",
  //   name: "Steve Mark",
  //   title: "Founder & Leader",
  //   img: people02,
  // },
  // {
  //   id: "feedback-3",
  //   content:
  //     "It is usually people in the money business, finance, and international trade that are really rich.",
  //   name: "Kenn Gallagher",
  //   title: "Founder & Leader",
  //   img: people03,
  // },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  // {
  //   id: "social-media-3",
  //   icon: twitter,
  //   link: "https://www.twitter.com/",
  // },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

