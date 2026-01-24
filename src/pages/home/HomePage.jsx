import CampusesSection from "./CampusesSection";
import AcademicsSection from "./AcademicsSection";
import AdmissionProcess from "./AdmissionProcess";
import AdmissionsOpen from "./AdmissionsOpen";
import ExcellenceSection from "./ExcellenceSection";
import HeroSection from "./HeroSection";
import SkillProgramsSection from "./SkillProgramsSection";
import WhyChooseMindmine from "./WhyChooseMindmine";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <ExcellenceSection/>
      <AcademicsSection/>
      <SkillProgramsSection/>
      <AdmissionProcess/>
      <CampusesSection/>
      <WhyChooseMindmine/>
      <AdmissionsOpen/>
    </>
  );
}
