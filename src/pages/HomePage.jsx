import React from "react";

import GeneralDescription from "../components/GeneralDescription";
import OurTeam from "../components/OurTeam";
import Blocks from "../components/Blocks";
import TestingSkills from "../components/TestingSkills";
import Header from "../components/Header";

const HomePage = () => (
  <>
    <Header />
    <Blocks />
    <TestingSkills />
    <GeneralDescription />
    <OurTeam />
  </>
);

export default HomePage;
