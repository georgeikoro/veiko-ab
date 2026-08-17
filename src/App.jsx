import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import { useIntroSequence } from "./hooks/useIntroSequence.js";
import { useScrollReveal } from "./hooks/useScrollReveal.js";
import Terms from "./pages/Terms.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

import IntroOverlay from "./components/IntroOverlay.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import StatsBand from "./components/StatsBand.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import WidePhoto from "./components/WidePhoto.jsx";
import WhyVeiko from "./components/WhyVeiko.jsx";
import About from "./components/About.jsx";
import Audiences from "./components/Audiences.jsx";
import Coverage from "./components/Coverage.jsx";
import Pricing from "./components/Pricing.jsx";
import Comparison from "./components/Comparison.jsx";
import PhotoStrip from "./components/PhotoStrip.jsx";
import FAQ from "./components/FAQ.jsx";
import Quote from "./components/Quote.jsx";
import Footer from "./components/Footer.jsx";

function Page() {
  const { introVisible, woke, scrollReady, prefersReducedMotion } = useIntroSequence();
  useScrollReveal(scrollReady, prefersReducedMotion);

  return (
    <div style={{ background: "#FFFFFF" }}>
      <IntroOverlay visible={introVisible} />
      <ProgressBar />
      <Header />
      <Hero woke={woke} />
      <Services />
      <StatsBand />
      <HowItWorks />
      <WidePhoto />
      <WhyVeiko />
      <About />
      <Audiences />
      <Coverage />
      <Pricing />
      <Comparison />
      <PhotoStrip />
      <FAQ />
      <Quote />
      <Footer />
    </div>
  );
}

export default function App() {
  const path = window.location.pathname;
  if (path === "/villkor") return <Terms />;
  if (path === "/integritetspolicy") return <PrivacyPolicy />;
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
