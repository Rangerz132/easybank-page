import { useContext } from "react";
import { SMALL_MENU_LIST } from "../data";
import { Link } from "react-router";
import { OverlayContext } from "../contexts/OverlayContext";
import { MenuContext } from "../contexts/MenuContext";

const Menu = () => {
  const { setOverlayContext } = useContext(OverlayContext);
  const { setMenuContext } = useContext(MenuContext);

  return (
    <div className="flex flex-col items-center justify-center py-6 lg:flex-row lg:py-0 lg:space-x-6">
      {SMALL_MENU_LIST.map((menuItem, index) => (
        <Link
          onClick={() => {
            setOverlayContext(false);
            setMenuContext(false);
          }}
          key={index}
          to={menuItem.path}
          className="text-center capitalize text-lg lg:text-base text-primary-dark-blue py-2 hover:text-primary-lime-green transition-all"
        >
          <div>{menuItem.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
