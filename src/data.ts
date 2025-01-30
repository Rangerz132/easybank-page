import { PerkType } from "./types/perkType";
import OnlineBankingIcon from "./assets/images/icon-online.svg";
import SimpleBudgetingIcon from "./assets/images/icon-budgeting.svg";
import FastOnboardingIcon from "./assets/images/icon-onboarding.svg";
import OpenAPIIcon from "./assets/images/icon-api.svg";

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
