import AboutHero from "../components/about/AboutHero";
import Story from "../components/about/Story";
import MissionVision from "../components/about/MissionVision";
import Statistics from "../components/about/Statistics";
import Timeline from "../components/about/Timeline";
import MeetAstrologer from "../components/about/MeetAstrologer";
import Values from "../components/about/Values";
import AboutCTA from "../components/about/AboutCTA";

function About() {
  return (
    <>
      <AboutHero />
      <Story />
      <MissionVision />
      <Statistics />
      <Timeline />
      <MeetAstrologer />
      <Values />
      <AboutCTA />
    </>
  );
}

export default About;