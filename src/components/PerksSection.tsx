import React from "react";
import PerkList from "./PerkList";

const PerksSection = () => {
  return (
    <div className="bg-neutral-very-light-gray py-20 flex flex-col space-y-16">
      <div className="wrapper">
        <div className="text-center space-y-6 flex flex-col items-center">
          {/** Title */}
          <h2 className="text-3xl text-primary-dark-blue max-w-xs">
            Why choose Easybank?
          </h2>
          {/** Description */}
          <div className="text-neutral-grayish-blue">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </div>
        </div>
      </div>
      <div className="wrapper">
        <PerkList />
      </div>
    </div>
  );
};

export default PerksSection;
