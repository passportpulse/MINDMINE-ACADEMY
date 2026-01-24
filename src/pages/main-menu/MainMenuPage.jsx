import React from "react";
import HeroSection from "./HeroSection";
import MainExamSection from "./MainExamSection";
import ExamGridSection from "./ExamGridSection";
import CTASection from "./CTASection";

export default function MainMenuPage() {
  return (
    <>
      <HeroSection />
      <MainExamSection
        title="JEE Main + Advanced"
        subjects={["Physics", "Chemistry", "Mathematics"]}
        eligibility="12th Appeared"
      />

      <MainExamSection
        title="NEET"
        subjects={["Physics", "Chemistry", "Biology"]}
        eligibility="12th Appeared"
        ctaText="Start Preparation"
      />
      <ExamGridSection />
      <CTASection />
    </>
  );
}
