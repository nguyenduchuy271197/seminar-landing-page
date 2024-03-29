import Benefits from "./_components/benefits";
import Hero from "./_components/hero";
import StickyBar from "./_components/sticky-bar";
import Story from "./_components/story";
import StoryTable from "./_components/story-table";
import StoryChart from "./_components/story-chart";
import StoryMethods from "./_components/story-methods";
import Reviews from "./_components/reviews";
import EarlyBird from "./_components/early-bird";
import Targets from "./_components/targets";
import FAQ from "./_components/faq";
import Speaker from "./_components/speaker";
import Agenda from "./_components/agenda";
import CTA from "./_components/cta";
import StoryDream from "./_components/story-dreams";
import StickyBarWrapper from "@/hooks/sticky-bar-wrapper";

export default function HomePage() {
  return (
    <div className="sm:py-16 py-10">
      <Hero />
      <Story />
      <Benefits />
      {/* <StoryTable /> */}
      <StoryDream />
      <StoryChart />
      <StoryMethods />
      <Reviews />
      <StickyBarWrapper className="space-y-20 sm:py-16 py-10">
        <EarlyBird />
        <Targets />
        <Speaker />
        <Agenda />
        <FAQ />
        <CTA />
      </StickyBarWrapper>
      <StickyBar />
    </div>
  );
}
