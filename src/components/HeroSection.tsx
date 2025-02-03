import Button from "./Button";
import Mockups from "../assets/images/image-mockups.png";
import IntroMobile from "../assets/images/bg-intro-mobile.svg";
import IntroDesktop from "../assets/images/bg-intro-desktop.svg";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="relative flex flex-col space-y-10  md:space-y-0 wrapper md:flex-row-reverse md:justify-between  md:space-x-10">
        {/** Mockups */}
        <div className="md:basis-1/2">
          <img src={Mockups} alt="Mockups" className="" />
        </div>

        {/** Content Section */}
        <div className="flex flex-col items-center justify-center text-center space-y-8 md:items-start md:text-left md:basis-2/5">
          {/** Title */}
          <h1 className="text-4xl text-primary-dark-blue md:text-6xl">
            Next generation <br /> digital banking
          </h1>
          {/** Description */}
          <p className="text-neutral-grayish-blue">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          {/** Button */}
          <Button text="Request invite" onButtonClick={() => {}} />
        </div>
      </div>
      <div className="hidden md:flex ">
        <div className="absolute top-0 right-0 translate-x-[20%] -z-10 ">
          <img src={IntroDesktop} alt="Intro mobile" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
