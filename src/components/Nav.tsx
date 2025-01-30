import Logo from "../assets/images/logo.svg";
import Hamburger from "../assets/images/icon-hamburger.svg";
import { Link } from "react-router";

const Nav = () => {
  return (
    <div className="fixed w-full z-50 bg-white border-b border-neutral-300">
      <div className="flex flex-row items-center justify-between wrapper py-6">
        {/** Logo */}
        <Link to={"/"}>
          <div>
            <img src={Logo} alt={"Logo"} />
          </div>
        </Link>

        {/** Hamburger */}
        <div>
          <img src={Hamburger} alt={"Hamburger"} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
