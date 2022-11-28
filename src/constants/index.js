import {
  facebook,
  instagram,
  linkedin,
  twitter,
  people01,
  people02,
  people03,
  delivery,
  organic,
  quality,
} from "../assets/img";
export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "products",
    title: "Products",
    path: "/products",
  },
  // {
  //   id: "blogs",
  //   title: "Blog",
  //   path: "/blogs",
  // },
  {
    id: "abouts",
    title: "About",
    path: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
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
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const contact = {
  office: "18/2 Armenian Street, M.T.C Tower, Dhaka-1100, Bangladesh.",
  factory: "Atashur Road, Nekrojbag, Keraniganj, Dhaka, Bangladesh",
  phone: "+8801741-815160",
  email: "amaratlimited@gmail.com",
  website: "https://amaratlimited.com",
};

export const commitments = [
  { id: "organic", image: organic, title: "100% Organic" },
  { id: "guarantee", image: quality, title: "Quality Guaranteed" },
  { id: "delivery", image: delivery, title: "Quick Delivery" },
];
