"use client";
import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import { CodeXml, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { MainButton } from "../buttons/main-button";
import { useEffect, useState } from "react";
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={css({
        paddingY: "25px",
        position: { base: "absolute", lg: "fixed" },
        paddingX: "50px",
        top: 0,
        left: 0,
        right: 0,
        display: { base: "none", lg: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        zIndex: 9999,
        background: scrolled ? "rgba(2, 6, 24, 0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s, backdrop-filter 0.3s",
      })}
    >
      <Box css={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <CodeXml
          className={css({
            background: "linear-gradient(45deg, #00B8DB 0%, #155DFC 100%)",
            width: "40px",
            height: "40px",
            padding: "8px",
            flexShrink: "0",
            borderRadius: "10px",
            color: "#fff",
          })}
        />
        <p
          className={css({
            color: "#fff",
            fontFamily: "Intern, sans-serif",
            fontWeight: "700",
          })}
        >
          Hrvoje Cuckovic
        </p>
      </Box>
      <Box css={{ color: "#90A1B9", display: "flex", gap: "60px" }}>
        <Box css={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <Link href="#" className={css({ "&:hover": { color: "#fff" } })}>
            About
          </Link>
          <Link href="#" className={css({ "&:hover": { color: "#fff" } })}>
            Tech Stack
          </Link>
          <Link href="#" className={css({ "&:hover": { color: "#fff" } })}>
            Experience
          </Link>
          <Link href="#" className={css({ "&:hover": { color: "#fff" } })}>
            Projects
          </Link>
          <Link href="#" className={css({ "&:hover": { color: "#fff" } })}>
            Contact
          </Link>
        </Box>
        <Box
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          style={{ gap: "12px" }}
        >
          <Link
            href="https://github.com/Hrvoje1307"
            target="_blank"
            className={css({ "&:hover": { color: "#fff" } })}
          >
            <Github />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hrvoje-%C4%8Du%C4%8Dkovi%C4%87-061a1b211/"
            target="_blank"
            className={css({ "&:hover": { color: "#fff" } })}
          >
            <Linkedin />
          </Link>
          <MainButton size="sm">Let&apos;s talk</MainButton>
        </Box>
      </Box>
    </nav>
  );
}
