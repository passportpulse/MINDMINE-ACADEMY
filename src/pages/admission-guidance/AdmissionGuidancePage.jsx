import React from 'react'
import Hero from "./Hero";
import OpenBoard from "./OpenBoard";
import TraditionalUgPg from "./TraditionalUgPg";
import CouncilCourse from "./CouncilCourse";
import ResearchProgram from "./ResearchProgram";
import "../../styles/admission-guidance.css";
import FreeConsultation from './FreeConsultation';

export default function AdmissionGuidancePage() {
  return (
    <div className='admission-guidance-page'>
      <Hero/>
      <OpenBoard/>
      <TraditionalUgPg/>
      <CouncilCourse/>
      <ResearchProgram/>
      <FreeConsultation/>
    </div>
  )
}
