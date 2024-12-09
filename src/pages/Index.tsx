import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { TournamentTypes } from "@/components/TournamentTypes";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <TournamentTypes />
      <CTA />
    </div>
  );
};

export default Index;