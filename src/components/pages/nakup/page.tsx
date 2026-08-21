import HeroSection from "./sections/hero-section";
import Footer from "./layout/footer";

export default function Page() {
  return (
    <div>
      <div className="contents">
        <div />
      </div>
      <div className="contents">
        <main className="min-h-screen flex flex-col">
          <div
            className="pointer-events-none h-px relative z-[-1] -mb-px top-0"
            data-ploy-refactor-hint="refactor-to-use-margin-padding-gap"
          />
          <HeroSection />
          <Footer />
        </main>
      </div>
      <div className="contents">
        <div />
      </div>
    </div>
  );
}
