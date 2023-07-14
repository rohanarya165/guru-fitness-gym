import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Feeds from "../components/Feeds";

export default function Home() {
  return (
    <div>
      <Banner />
      <Feeds/>
      <Services />
      <About />
    </div>
  );
}
