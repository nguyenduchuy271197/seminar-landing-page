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
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect(
    "/waitlist?slug=chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec"
  );

  return (
    <div className="space-y-20 sm:py-16 py-10">
      <Hero />
      <Benefits />
      <Story />
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
