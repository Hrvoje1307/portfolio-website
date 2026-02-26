import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import { Calendar } from "lucide-react";

type ExperienceCardProps = {
  company: string;
  role: string;
  duration: string;
  description: string;
};

export default function ExperienceCard({ company, role, duration, description }: ExperienceCardProps) {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "flex-start",
        width: "100%",
        maxWidth: "600px",
        padding: "24px",
        borderRadius: "16px",
        border: "1px solid rgba(29, 41, 61, 0.80)",
        background: "rgba(15, 23, 43, 0.40)",
      }}
    >
      <h1
        className={css({ color: "#fff", fontSize: "20px", fontWeight: "700" })}
      >
         {company}
      </h1>
      <p className={css({ color: "#00D3F3", fontSize:"18px", fontWeight:"500" })}>{role}</p>
      <p className={css({ color: "#90A1B9", fontSize:"14px", fontWeight:"400", display: "flex", alignItems: "center", gap: "8px" })}>
        <Calendar className={css({ color: "#90A1B9", width: "16px", height: "16px" })} /> {duration}
      </p>

      <p className={css({ color: "#CAD5E2", fontSize:"14px", fontWeight:"400" })}>
         {description}
      </p>
    </Box>
  );
}
