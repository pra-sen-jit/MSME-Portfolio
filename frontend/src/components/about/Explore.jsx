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
      <div className="overflow-hidden bg-white rounded-lg border-2 border-gray-300 border-solid">
        <div className="w-full  bg-opacity-0 max-md:max-w-full">
          <div className="z-10 mb-0 w-full bg-white max-md:mb-2.5 max-md:max-w-full">
            <ExploreHero />
            <main className="flex flex-col py-24 w-full  bg-opacity-0 max-md:pt-24 max-md:max-w-full">
              <HistorySection />
              <ArtSection />
              <CommunitySection />
              <ImpactSection />
              <LegacySection />
              <SupportSection />
            </main>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Explore;
