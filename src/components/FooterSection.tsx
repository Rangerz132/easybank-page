import { Link } from "react-router";
import Logo from "../assets/images/logo.svg";
import { LARGE_MENU_LIST, MEDIAS } from "../data";
import Button from "./Button";

const FooterSection = () => {
  return (
    <div className="wrapper">
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
        {/** Menu */}
        <div className="flex flex-col space-y-4 text-center">
          {LARGE_MENU_LIST.map((menuItem) => (
            <Link
              to={menuItem.path}
              key={menuItem.name}
              className="cursor-pointer "
            >
              <div className="capitalize text-white">{menuItem.name}</div>
            </Link>
          ))}
        </div>
        {/** Button */}
        <Button text={"Request invite"} onButtonClick={() => {}} />
        {/** Copyright */}
        <div className="text-center text-neutral-grayish-blue">
          © Easybank. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
