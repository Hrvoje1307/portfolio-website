import { Box } from "@/styled-system/jsx";
import HeadingSection from "./heading-section";
import { ProjectCard } from "../cards/project-card";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <Box css={{ padding: "60px" }}>
      <HeadingSection
        title="Featured Projects"
        subtitle="A selection of my recent work and personal projects"
      />
      <Box
        css={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          marginTop: "40px",
        }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            skills={project.skills}
            liveLink={project.liveLink}
          />
        ))}
      </Box>
    </Box>
  );
}
