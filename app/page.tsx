import AboutMe from "@/components/sections/about-me";
import HeroSection from "@/components/sections/hero-section";
import Technologies from "@/components/sections/technologies";
import { Box } from "@/styled-system/jsx";


export default function Home() {
  return (
    <Box css={{ background: "#020618", minHeight: "100vh" }}>
      <HeroSection />
      <AboutMe />
      <Technologies />
    </Box>
  );
}
