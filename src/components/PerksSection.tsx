import PerkList from "./PerkList";

const PerksSection = () => {
  return (
    <div className=" flex flex-col space-y-16 wrapper">
      <div className="text-center space-y-6 flex flex-col items-center md:text-left md:items-start">
        {/** Title */}
        <h2 className="text-3xl text-primary-dark-blue max-w-xs">
          Why choose Easybank?
        </h2>
        {/** Description */}
        <div className="text-neutral-grayish-blue md:max-w-[50%]">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </div>
      </div>

      <PerkList />
    </div>
  );
};

export default PerksSection;
