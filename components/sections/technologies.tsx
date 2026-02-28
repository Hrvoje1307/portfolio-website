import { Box } from "@/styled-system/jsx";
import { ListItem } from "../cards/list-item";
import { Code, Palette, Terminal } from "lucide-react";
import { css } from "@/styled-system/css";
import HeadingSection from "./heading-section";

const technologies = [
  {
    icon: <Code className={css({ color: "#00D3F2" })} />,
    title: "Frontend Core",
    item: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    icon: <Palette className={css({ color: "#FB64B6" })} />,
    title: "Styling & UI",
    item: ["Tailwind CSS", "Panda CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    icon: <Terminal className={css({ color: "#FDC700" })} />,
    title: "Tools & DevOps",
    item: ["Git & GitHub", "Figma", "Vercel", "Vite"],
  },
];

export default function Technologies() {
  return (
    <Box>
      <HeadingSection title="Technologies & Tools" subtitle="My preferred stack for building scalable applications" />

      <Box
        css={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          paddingBottom: "80px",
          paddingX: "20px",
        }}
      >
        {technologies.map((tech) => (
          <ListItem
            key={tech.title}
            icon={tech.icon}
            title={tech.title}
            item={tech.item}
          />
        ))}
      </Box>
    </Box>
  );
}
