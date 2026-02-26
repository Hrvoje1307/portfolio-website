import { Box } from "@/styled-system/jsx";
import ExperienceCard from "../cards/experience-card";
import { css } from "@/styled-system/css/css";

export default function Experience() {
  return (
    <Box
      css={{
        paddingBottom: "60px",
      }}
    >
      <Box css={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1
          className={css({
            background: "linear-gradient(90deg, #FFF 0%, #90A1B9 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            fontSize: { base: "30px", md: "48px" },
            fontWeight: "700",
          })}
        >
          Professional Experience
        </h1>
        <p
          className={css({
            color: "#90A1B9",
            textAlign: "center",
            fontSize: { base: "16px", md: "18px" },
            marginTop: "10px",
            fontWeight: "400",
          })}
        >
          My journey in tech industry
        </p>
        <Box
          css={{
            width: "80px",
            height: "4px",
            background: "#00B8DB",
            borderRadius: "2px",
            marginTop: "20px",
          }}
        ></Box>
      </Box>

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
