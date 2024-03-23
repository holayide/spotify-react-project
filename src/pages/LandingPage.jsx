import Header from "../component/Header";
import { HeroPage } from "../component/Hero";
import { SpotifyPremium } from "../component/SpotifyPreminum";
import PremiumOptions from "../component/PremiumOptions";
import Footer from "../component/Footer";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <HeroPage />
      <SpotifyPremium />
      <PremiumOptions />
      <Footer />
    </div>
  );
}
