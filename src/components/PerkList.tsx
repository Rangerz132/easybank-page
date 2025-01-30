import { PERKS } from "../data";
import PerkItem from "./PerkItem";

const PerkList = () => {
  return (
    <div className="flex flex-col space-y-10">
      {PERKS.map((perk, index) => (
        <PerkItem key={index} perk={perk} />
      ))}
    </div>
  );
};

export default PerkList;
