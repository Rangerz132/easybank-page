import { useState } from "react";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";

import Menu from "../components/Menu";
import Nav from "../components/Nav";
import Overlay from "../components/Overlay";
import { OverlayContext } from "../contexts/OverlayContext";
import { MenuContext } from "../contexts/MenuContext";
import PerksSection from "../components/perk/PerksSection";
import LatestArticlesSection from "../components/article/LatestArticlesSection";

function Home() {
  const [overlayContext, setOverlayContext] = useState<boolean>(false);
  const [menuContext, setMenuContext] = useState<boolean>(false);

  return (
    <OverlayContext.Provider value={{ overlayContext, setOverlayContext }}>
      <MenuContext.Provider value={{ menuContext, setMenuContext }}>
        <div>
          <Overlay />
          <Nav />
          <div
            className={`fixed z-50 w-full wrapper mt-24 ${
              menuContext ? "flex lg:hidden" : "hidden"
            } `}
          >
            <div className="bg-white rounded-lg w-full">
              <Menu />
            </div>
          </div>
          <div className="pb-20">
            <HeroSection />
          </div>
          <div className="bg-neutral-light-grayish-blue py-20">
            <PerksSection />
          </div>
          <div className="bg-neutral-very-light-gray py-20">
            <LatestArticlesSection />
          </div>
          <div className="bg-primary-dark-blue py-10">
            <FooterSection />
          </div>
        </div>
      </MenuContext.Provider>
    </OverlayContext.Provider>
  );
}

export default Home;
