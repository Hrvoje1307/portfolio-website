import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx/box";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title?: string;
  description?: string;
  skills?: string[];
  imageUrl?: string;
  liveLink?: string;
  githubLink?: string;
};

export function ProjectCard({
  title = "Project Title",
  description = "A brief description of the project goes here. It highlights the main features and technologies used.",
  skills = "Tehnologies used in the project".split(" "),
  imageUrl = "/roi-calculator.png",
  liveLink = "#",
  githubLink = "",
}: ProjectCardProps) {
  return (
    <Box
      css={{
        maxWidth: "300px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #1D293D",
        borderRadius: "16px",
      }}
    >
      <Box>
        <Image src={imageUrl} alt={title} width={300} height={200} />
      </Box>
      <Box css={{ padding: "24px" }}>
        <h3
          className={css({
            color: "#fff",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "28px",
            marginBottom: "10px",
          })}
        >
          {title}
        </h3>
        <p
          className={css({
            color: "#90A1B9",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
            marginBottom: "10px",
          })}
        >
          {description}
        </p>
        <Box
          css={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "14px",
          }}
        >
          {skills.map((skill) => (
            <span
              className={css({
                padding: "4px 8px",
                backgroundColor: "rgba(5, 51, 69, 0.30)",
                border: "1px solid rgba(16, 78, 100, 0.50)",
                borderRadius: "16777200px",
                fontSize: "12px",
                fontWeight: "500",
                color: "#53EAFD",
              })}
              key={skill}
            >
              {skill}
            </span>
          ))}
        </Box>
        <Box
          css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "12px",
          }}
        >
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                display: "flex",
                alignItems: "center",
                padding: "6px 12px",
                justifyContent: "center",
                gap: "7px",
                borderRadius: "10px",
                border: "1px solid #314158",
                color: "#CAD5E2",
              })}
            >
              <SquareArrowOutUpRight width={13} height={13} />
              Live Demo
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={css({
                display: "flex",
                alignItems: "flex-start",
                padding: "6px 12px",
                justifyContent: "center",
                gap: "7px",
                borderRadius: "10px",
                border: "1px solid rgba(0,0,0,0)",
                background: "rgba(29, 41, 61, 0.80)",
                color: "#fff",
              })}
            >
              <Github width={13} height={13} />
              Code
            </Link>
          )}
        </Box>
      </Box>
    </Box>
  );
}
