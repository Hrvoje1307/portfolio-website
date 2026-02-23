"use client";
import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import { CodeXml, Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { MainButton } from "../buttons/main-button";
import { useState } from "react";
export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav
      className={css({
        paddingY: "25px",
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        display: { base: "flex", lg: "none" },
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
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
      {!isMenuOpen && (
        <Box onClick={() => setIsMenuOpen(true)}>
          <Menu className={css({ color: "#90A1B9" })} width={24} height={24} />
        </Box>
      )}
      {isMenuOpen && (
        <Box onClick={() => setIsMenuOpen(false)}>
          <X
            className={css({
              color: "#90A1B9",
              zIndex: 9999,
              position: "absolute",
              top: "20px",
              right: "20px",
            })}
            width={24}
            height={24}
          />
        </Box>
      )}

      <Box
        css={{
          position: "absolute",
          top: "0",
          right: isMenuOpen ? "0" : "-100%",
          color: "#90A1B9",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          transition: "all 0.3s ease-in-out",
          background: "#020618",
          height: "100dvh",
          padding: "50px",
        }}
      >
        {isMenuOpen && (
          <Box onClick={() => setIsMenuOpen(false)}>
            <X
              className={css({
                color: "#90A1B9",
                zIndex: 9999,
                position: "absolute",
                top: "20px",
                right: "20px",
              })}
              width={24}
              height={24}
            />
          </Box>
        )}
        <Box
          css={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Link href="#">About</Link>
          <Link href="#">Tech Stack</Link>
          <Link href="#">Experience</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Contact</Link>
        </Box>
        <Box
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          style={{ gap: "12px" }}
        >
          <Link href="https://github.com/Hrvoje1307">
            <Github />
          </Link>
          <Link href="https://www.linkedin.com/in/hrvoje-%C4%8Du%C4%8Dkovi%C4%87-061a1b211/">
            <Linkedin />
          </Link>
          <MainButton size="sm">Let&apos;s talk</MainButton>
        </Box>
      </Box>
    </nav>
  );
}
