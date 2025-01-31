import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import LatestArticlesSection from "../components/LatestArticlesSection";
import Nav from "../components/Nav";
import PerksSection from "../components/PerksSection";

function Home() {
  return (
    <div>
      <Nav />
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
  );
}

export default Home;
