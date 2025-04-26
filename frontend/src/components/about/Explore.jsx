"use client";
import React from "react";
import ExploreHero from "./ExploreHero";
import HistorySection from "./HistorySection";
import ArtSection from "./ArtSection";
import CommunitySection from "./CommunitySection";
import ImpactSection from "./ImpactSection";
import LegacySection from "./LegacySection";
import SupportSection from "./SupportSection";
import AnimatedPage from "../AnimatedPage";

function Explore() {
  return (
    <AnimatedPage>
      <div className="overflow-hidden bg-white">
        {/* Fullscreen Hero Section */}
        <section className="w-full h-screen relative">
          <ExploreHero />
        </section>

        {/* Main Content Sections */}
        <main className="flex flex-col gap-24 py-20 px-6 md:px-12 lg:px-20 bg-white max-w-7xl mx-auto">
          <section className="max-w-6xl mx-auto w-full">
            <HistorySection />
          </section>

          <section className="max-w-6xl mx-auto w-full">
            <ArtSection />
          </section>

          <section className="max-w-6xl mx-auto w-full">
            <CommunitySection />
          </section>

          <section className="max-w-6xl mx-auto w-full">
            <ImpactSection />
          </section>

          <section className="max-w-6xl mx-auto w-full">
            <LegacySection />
          </section>

          <section className="max-w-6xl mx-auto w-full">
            <SupportSection />
          </section>
        </main>
      </div>
    </AnimatedPage>
  );
}

export default Explore;
