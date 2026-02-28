import { Box } from "@/styled-system/jsx";
import ExperienceCard from "../cards/experience-card";
import HeadingSection from "./heading-section";

export default function Experience() {
  return (
    <Box
      css={{
        paddingBottom: "60px",
      }}
    >
      <HeadingSection
        title="Professional Experience"
        subtitle="My journey in the tech industry"
      />

      <Box
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          marginTop: "40px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <ExperienceCard
            company="ICC"
            role="Web Developer"
            duration="Jan 2024 - May 2024"
            description="Developed and maintained web applications. Collaborated with design teams to implement responsive user interfaces."
          />
        </Box>
        <Box>
          <ExperienceCard
            company="Treblle"
            role="Frontend Developer"
            duration="Sep 2025 - Present"
            description="Building modern developer tools and API monitoring interfaces. Contributing to the core product dashboard using React and Tailwind CSS."
          />
        </Box>
      </Box>
    </Box>
  );
}
