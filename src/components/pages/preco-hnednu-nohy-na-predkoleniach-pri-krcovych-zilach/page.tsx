import TopBlocksSection from "./sections/top-blocks-section";
import HeroSection from "./sections/hero-section";

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
          />
          <TopBlocksSection />
          <HeroSection />
        </main>
      </div>
      <div className="contents">
        <div />
      </div>
    </div>
  );
}
