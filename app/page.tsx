import { MainButton } from "@/components/buttons/main-button";
import MobileNav from "@/components/sections/mobile-nav";
import Navigation from "@/components/sections/navigation";
import { css } from "@/styled-system/css";
import { Box, Circle } from "@/styled-system/jsx";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <Box css={{ background: "#020618", minHeight: "100vh" }}>
      <Box
        className={css({
          bg: "url('/hero-background.jpg') ",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          position: "relative",
          zIndex: 0,
        })}
      >
        <Box
          className={css({
            position: "absolute",
            inset: 0,
            bg: "rgba(2, 6, 24, 0.9)",
            zIndex: 1,
          })}
        />
        <Box
          css={{
            position: "relative",
            zIndex: 2,
            paddingX: "50px",
            paddingY: "100px",
          }}
        >
          <MobileNav />
          <Navigation />
          <Box
            className={css({
              display: "flex",
              gap: "8px",
              position: "relative",
              background: "rgba(5, 51, 69, 0.30)",
              maxWidth: "215px",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px 13px",
              border: "1px solid rgba(0, 184, 219, 0.20)",
              borderRadius: "16777200px",
              marginBottom: "30px",
            })}
          >
            <Circle size={2} css={{ background: "#00D8DB" }} />
            <p
              className={css({
                color: "#00D8DB",
                fontWeight: "500",
                fontSize: "14px",
              })}
            >
              Available for new projects
            </p>
          </Box>

          <Box>
            <h1>
              Frontend Developer <br /> building <span>scalable</span> & <br />{" "}
              modern web <br /> experiences.
            </h1>
            <p>
              I craft responsive, high-performance applications using React,
              Next.js, and modern UI systems. Focused on clean code and
              exceptional user experiences.
            </p>
            <Box css={{display:"flex", flexDirection:"row", gap:"10px"}}>
              <MainButton size="sm">
                View Projects <ArrowRight />
              </MainButton>
              <a
                className={css({
                  paddingX: "32px",
                  paddingY: "14px",
                  fontSize: "18px",
                  textAlign: "center",
                  fontWeight: "500",
                  color: "#CAD5E2",
                  border: "1px solid #314158",
                  borderRadius: "10px",
                })}
              >
                Contact me
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
