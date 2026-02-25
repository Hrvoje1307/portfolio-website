import { Box } from "@/styled-system/jsx";
import { ListItem } from "../cards/list-item";
import { Code, Palette, Terminal } from "lucide-react";
import { css } from "@/styled-system/css";

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
      <Box
        css={{
          position: "relative",
          marginBottom: "60px",
          "&::after": {
            content: '""',
            position: "absolute",
            width: "80px",
            height: "4px",
            borderRadius: "16777200px",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "-20px",
            background: "#00B8DB",
          },
        }}
      >
        <h1
          className={css({
            background: "linear-gradient(90deg, #FFF 0%, #90A1B9 100%)",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            fontSize: {base:"30px", md:"48px"},
            fontWeight: "700",
          })}
        >
          Technologies & Tools
        </h1>
        <p
          className={css({
            textAlign: "center",
            color: "#90A1B9",
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "28px",
          })}
        >
          My preferred stack for building scalable applications
        </p>
      </Box>

      <Box css={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:"24px", paddingBottom:"80px", paddingX:"20px"}}>
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
