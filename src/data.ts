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
