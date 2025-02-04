import { PerkType } from "../../types/perkType";

const PerkItem = (props: { perk: PerkType }) => {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center text-center md:text-left md:items-start">
      <div>
        <img src={props.perk.icon.path} alt={props.perk.icon.alt} />
      </div>
      <h3 className="text-lg text-primary-dark-blue">{props.perk.name}</h3>
      <div className="text-neutral-grayish-blue">{props.perk.descrption}</div>
    </div>
  );
};

export default PerkItem;
