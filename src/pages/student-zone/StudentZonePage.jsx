import React from "react";
import Enquiry from "./Enquiry";
import Notices from "./Notices";
import Payment from "./Payment";
import Apply from "./Apply";
import Hero from "./Hero";

export default function StudentZonePage() {
  return (
    <>
      <Hero />
      <Enquiry />
      <Apply />
      <Notices />
      <Payment />
    </>
  );
}
