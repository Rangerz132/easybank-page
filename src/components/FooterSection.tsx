import { Link } from "react-router";
import Logo from "../assets/images/logo.svg";
import { LARGE_MENU_LIST, MEDIAS } from "../data";
import Button from "./Button";

const FooterSection = () => {
  return (
    <div className="wrapper ">
      <div className="grid grid-cols-1 space-y-10 md:grid-cols-4  md:space-y-0">
        <div className="flex flex-col items-center justify-center space-y-10">
          {/** Logo */}
          <div>
            <img src={Logo} alt={"Logo"} />
          </div>
          {/** Media icons */}
          <div className="flex flex-row space-x-4">
            {MEDIAS.map((media) => (
              <Link to={media.url} key={media.name} className="cursor-pointer">
                <div>
                  <img src={media.icon.path} alt={media.icon.alt} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/** Menu */}
        <div className="grid grid-cols-1 space-y-4 text-center md:grid-cols-2 md:text-left ">
          {LARGE_MENU_LIST.map((menuItem) => (
            <Link to={menuItem.path} key={menuItem.name}>
              <div className="capitalize text-white  hover:text-primary-lime-green transition-all cursor-pointer">
                {menuItem.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-1 space-y-10 md:items-end md:col-start-4">
          {/** Button */}
          <div className="text-center md:text-right">
            <Button text={"Request invite"} onButtonClick={() => {}} />
          </div>
          {/** Copyright */}
          <div className="text-center text-neutral-grayish-blue md:text-right">
            © Easybank. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
