import React from "react";
import s from "./App.module.css";
import { Header } from "./Components/Header/Header";
import { Intro } from "./Components/Intro/Intro";
import { HowItWorks } from "./Components/HowItWorks/HowItWorks";
import { StoryAbout } from "./Components/StoryAbout/StoryAbout";
import { OurProduct } from "./Components/OurProduct/OurProduct";
import { BottomBlock } from "./Components/BottomBlock/BottomBlock";

const App = () => {
  return (
    <div className={s.body}>
      <Header />
      <Intro />
      <HowItWorks />
      <StoryAbout />
      <OurProduct />
      <BottomBlock />
    </div>
  );
};

export default App;
