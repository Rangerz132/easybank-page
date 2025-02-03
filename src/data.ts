import { PerkType } from "./types/perkType";
import OnlineBankingIcon from "./assets/images/icon-online.svg";
import SimpleBudgetingIcon from "./assets/images/icon-budgeting.svg";
import FastOnboardingIcon from "./assets/images/icon-onboarding.svg";
import OpenAPIIcon from "./assets/images/icon-api.svg";
import { ArticleType } from "./types/articleType";
import ArticleImage1 from "./assets/images/image-currency.jpg";
import ArticleImage2 from "./assets/images/image-restaurant.jpg";
import ArticleImage3 from "./assets/images/image-plane.jpg";
import ArticleImage4 from "./assets/images/image-confetti.jpg";
import { MediaType } from "./types/mediaType";
import Facebook from "./assets/images/icon-facebook.svg";
import Youtube from "./assets/images/icon-youtube.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import Pinterest from "./assets/images/icon-pinterest.svg";
import Instagram from "./assets/images/icon-instagram.svg";
import { MenuType } from "./types/menuType";

const ONLINE_BANKING: PerkType = {
  name: "Online banking",
  descrption:
    "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  icon: {
    path: OnlineBankingIcon,
    alt: "Online banking icon",
  },
};
const SIMPLE_BUDGETING: PerkType = {
  name: "Simple budgeting",
  descrption:
    "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  icon: {
    path: SimpleBudgetingIcon,
    alt: "Simple budgeting icon",
  },
};
const FAST_ONBOARDING: PerkType = {
  name: "Fast onboarding",
  descrption:
    "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  icon: {
    path: FastOnboardingIcon,
    alt: "Fast onboarding icon",
  },
};
const OPEN_API: PerkType = {
  name: "Open API",
  descrption:
    "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  icon: {
    path: OpenAPIIcon,
    alt: "Open API icon",
  },
};
export const PERKS: PerkType[] = [
  ONLINE_BANKING,
  SIMPLE_BUDGETING,
  FAST_ONBOARDING,
  OPEN_API,
];

const ARTICLE_1: ArticleType = {
  id: "1",
  author: "Claire Robinson",
  title: "Receive money in any currency with no fees",
  content:
    "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  thumbnail: {
    path: ArticleImage1,
    alt: "Thumbnail",
  },
};
const ARTICLE_2: ArticleType = {
  id: "2",
  author: "Wilson Hutton",
  title: "Treat yourself without worrying about money",
  content:
    "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  thumbnail: {
    path: ArticleImage2,
    alt: "Thumbnail",
  },
};
const ARTICLE_3: ArticleType = {
  id: "3",
  author: "Wilson Hutton",
  title: "Take your Easybank card wherever you go",
  content:
    "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  thumbnail: {
    path: ArticleImage3,
    alt: "Thumbnail",
  },
};
const ARTICLE_4: ArticleType = {
  id: "4",
  author: "Claire Robinson",
  title: "Our invite-only Beta accounts are now live!",
  content:
    "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
  thumbnail: {
    path: ArticleImage4,
    alt: "Thumbnail",
  },
};
export const LATEST_ARTICLES: ArticleType[] = [
  ARTICLE_1,
  ARTICLE_2,
  ARTICLE_3,
  ARTICLE_4,
];

const FACEBOOK: MediaType = {
  name: "Facebook",
  url: "#",
  icon: {
    path: Facebook,
    alt: "Facebook icon",
  },
};
const YOUTUBE: MediaType = {
  name: "Youtube",
  url: "#",
  icon: {
    path: Youtube,
    alt: "Youtube icon",
  },
};
const TWITTER: MediaType = {
  name: "Twitter",
  url: "#",
  icon: {
    path: Twitter,
    alt: "Twitter icon",
  },
};
const PINTEREST: MediaType = {
  name: "Pinterest",
  url: "#",
  icon: {
    path: Pinterest,
    alt: "Pinterest icon",
  },
};
const INSTAGRAM: MediaType = {
  name: "Instagram",
  url: "#",
  icon: {
    path: Instagram,
    alt: "Instagram icon",
  },
};
export const MEDIAS: MediaType[] = [
  FACEBOOK,
  YOUTUBE,
  TWITTER,
  PINTEREST,
  INSTAGRAM,
];

const HOME: MenuType = {
  name: "home",
  path: "/",
};

const ABOUT: MenuType = {
  name: "about",
  path: "/about",
};
const CONTACT: MenuType = {
  name: "contact",
  path: "/contact",
};
const BLOG: MenuType = {
  name: "blog",
  path: "/blog",
};
const CAREERS: MenuType = {
  name: "careers",
  path: "/careers",
};
const SUPPORT: MenuType = {
  name: "support",
  path: "/support",
};
const PRIVACY_POLICY: MenuType = {
  name: "privacy policy",
  path: "/privacyPolicy",
};

export const LARGE_MENU_LIST: MenuType[] = [
  ABOUT,
  CONTACT,
  BLOG,
  CAREERS,
  SUPPORT,
  PRIVACY_POLICY,
];

export const SMALL_MENU_LIST: MenuType[] = [
  HOME,
  ABOUT,
  CONTACT,
  BLOG,
  CAREERS,
];
