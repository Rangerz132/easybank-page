import Button from "./Button";
import Mockups from "../assets/images/image-mockups.png";
import IntroMobile from "../assets/images/bg-intro-mobile.svg";
import IntroDesktop from "../assets/images/bg-intro-desktop.svg";

const HeroSection = () => {
  return (
    <div className="relative ">
      <div className="relative flex flex-col space-y-10  md:space-y-0 wrapper  md:space-x-10">
        {/** Mockups */}
        <div className="md:basis-1/2 md:absolute md:right-0 md:top-[25%] md:w-[40%] lg:w-[35%]">
          <img src={Mockups} alt="Mockups" className="" />
        </div>

        {/** Content Section */}
        <div className="relative md:left-0 md:max-w-[50%] md:pr-10 md:mt-40">
          <div className="flex flex-col items-center justify-center text-center space-y-8 md:items-start md:text-left ">
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
      </div>

      {/** Intro Shapes Desktop*/}
      <div className="hidden md:flex ">
        <div className=" absolute md:top-[30%] right-0 -z-10 md:max-w-[50%] lg:max-w-[55%] ">
          <img src={IntroDesktop} alt="Intro desktop" className="" />
        </div>
      </div>

      {/** Intro Shapes Mobile*/}
      <div className="flex md:hidden ">
        <div className="absolute top-0 w-full -z-10 ">
          <img src={IntroMobile} alt="Intro mobile" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
