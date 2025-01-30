import Button from "./Button";
import Mockups from "../assets/images/image-mockups.png";
import IntroMobile from "../assets/images/bg-intro-mobile.svg";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col space-y-10 pb-20">
      {/** Image Section */}
      <div className="relative flex justify-center">
        {/** Intro shapes */}
        <img
          src={IntroMobile}
          alt="Intro shapes"
          className="absolute top-0 left-0 w-full -z-10"
        />
        {/** Mockups */}
        <img src={Mockups} alt="Mockups" className="relative z-10 wrapper" />
      </div>

      {/** Content Section */}
      <div className="relative z-20 wrapper ">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/** Title */}
          <h1 className="text-4xl text-primary-dark-blue">
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
    </div>
  );
};

export default HeroSection;
