import { PERKS } from "../data";
import PerkItem from "./PerkItem";

const PerkList = () => {
  return (
    <div className="grid grid-cols-1 space-y-10 md:grid-cols-2 md:space-y-6 md:space-x-10 lg:grid-cols-4 lg:space-y-0">
      {PERKS.map((perk, index) => (
        <PerkItem key={index} perk={perk} />
      ))}
    </div>
  );
};

export default PerkList;
