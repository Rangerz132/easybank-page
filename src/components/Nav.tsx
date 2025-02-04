import Logo from "../assets/images/logo.svg";
import Hamburger from "../assets/images/icon-hamburger.svg";
import CloseIcon from "../assets/images/icon-close.svg";
import { Link } from "react-router";
import { useContext } from "react";
import { OverlayContext } from "../contexts/OverlayContext";
import Menu from "./Menu";
import Button from "./Button";
import { MenuContext } from "../contexts/MenuContext";

const Nav = () => {
  const { setOverlayContext } = useContext(OverlayContext);
  const { menuContext, setMenuContext } = useContext(MenuContext);

  const handleHamburgerClick = (): void => {
    setMenuContext((prevState) => !prevState);
    setOverlayContext((prevState) => !prevState);
  };

  return (
    <div className="fixed w-full z-50 bg-white border-b border-neutral-300">
      <div className="flex flex-row items-center justify-between wrapper py-6">
        {/** Logo */}
        <Link to={"/"} className="cursor-pointer">
          <div>
            <img src={Logo} alt={"Logo"} />
          </div>
        </Link>

        {/** Hamburger */}
        <div className="cursor-pointer lg:hidden">
          <img
            onClick={handleHamburgerClick}
            src={menuContext ? CloseIcon : Hamburger}
            alt={"Hamburger"}
          />
        </div>

        {/** Menu */}
        <div className="hidden lg:flex">
          <Menu />
        </div>

        {/** Button */}
        <div className="hidden lg:flex">
          <Button text={"Request invite"} onButtonClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
