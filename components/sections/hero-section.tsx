import { MainButton } from "@/components/buttons/main-button";
import { SecondaryButton } from "@/components/buttons/secondary-button";
import MobileNav from "@/components/sections/mobile-nav";
import Navigation from "@/components/sections/navigation";
import { css } from "@/styled-system/css";
import { Box, Circle } from "@/styled-system/jsx";
import { ArrowRight } from "lucide-react";
export default function HeroSection() {
   return (
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
            <h1 className={css({fontSize:{base:"36px", lg:"72px"}, marginBottom:"25px", color:"#fff",fontWeight:"700", lineHeight:{base:"40px", lg:"90px"}})}>
              Frontend Developer <br /> building <span className={css({background:"linear-gradient(90deg, #00D3F3 0%, #2B7FFF 100%)", backgroundClip: "text", WebkitTextFillColor: "transparent"})}>scalable</span> & <br />{" "}
              modern web <br /> experiences.
            </h1>
            <p className={css({fontSize:"20px", color:"#90A1B9", marginBottom:"30px", lineHeight:"30px"})}>
              I craft responsive, high-performance applications using <br /> 
              React, Next.js, and modern UI systems. Focused on clean <br/>
              code and exceptional user experiences.
            </p>
            <Box css={{display:"flex", flexDirection:{base:"column", lg:"row"}, gap:"10px"}}>
              <MainButton size="sm">
                <p className={css({fontSize: "18px", display: "flex", alignItems: "center", gap: "8px"})}>View Projects <ArrowRight /></p>
              </MainButton>
              <SecondaryButton>Contact me</SecondaryButton>
            </Box>
          </Box>
        </Box>
      </Box>
   )
} 