import { cup, place, tiempo } from "@/assets";

export const navLinks = [
    {
        title: 'Home',
        link: '#/home',
    },
    {
        title: 'Blog',
        link: '#/blog',
    },
    {
        title: 'About Us',
        link: '#/about',
    },
];

export const uniqueServices = [
    {
        id: 1,
        icon: place,
        title: 'Wide selection of restaurants',
        desc: 'Lorem ipsum dolor sit amet, consectetur adip incidid Intermediate interdum'
    },
    {
        id: 2,
        icon: cup,
        title: 'Easy Ordering process',
        desc: 'Lorem ipsum dolor sit amet, consectetur adip incidid Intermediate interdum'
    },
    {
        id: 3,
        icon: tiempo,
        title: 'Fast delivery within 20 mins',
        desc: 'Lorem ipsum dolor sit amet, consectetur adip incidid Intermediate interdum'
    },
];

export const faqData = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'Where does it come from?',
      answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    },
    {
        question: 'What is Foodtime?',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        question: 'How do I get the chance to join?',
        answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      },
      {
        question: 'How do I get quick delivery?',
        answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
      },
  ];

  export const footerLinks = [
    {
      category: "Quick links",
      links: [
        { text: "Home", url: "/" },
        { text: "Products", url: "/products" },
        { text: "Services", url: "/services" },
        { text: "FAQ", url: "/faq" },
      ],
    },
    {
      category: "Get to know us",
      links: [
        { text: "About Us", url: "/about-us" },
        { text: "Our Team", url: "/our-team" },
        { text: "Mission and Vision", url: "/mission-vision" },
      ],
    },
    {
      category: "News",
      links: [
        { text: "Latest News", url: "/latest-news" },
        { text: "Press Releases", url: "/press-releases" },
        { text: "Blog", url: "/blog" },
      ],
    },
    {
      category: "Contact",
      links: [
        { text: "Contact Us", url: "/contact-us" },
        { text: "Customer Support", url: "/customer-support" },
      ],
    },
  ];