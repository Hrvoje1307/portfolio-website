import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import { Check } from "@/theme/icons";
import Image from "next/image";
export default function AboutMe() {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: { base: "column", lg: "row" },
        gap: "50px",
        paddingX: "50px",
        paddingY: "100px",
        alignItems: "start",
      }}
    >
      <Box css={{ width: { base: "100%", lg: "49%" } }}>
        <Image
          src="/hrvoje-cuckovic.jpeg"
          alt="About Me Background"
          width={460}
          height={460}
          className={css({
            maxWidth: { base: "100%", lg: "90%" },
            width: "100%",
            maxHeight: "auto",
            borderRadius: "20px",
            objectFit: "cover",
            transition: "box-shadow 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0 10px 60px rgba(2, 233, 233, 0.5)",
            },
          })}
        />
      </Box>
      <Box css={{ width: { base: "100%", lg: "49%" } }}>
        <h1
          className={css({
            color: "#fff",
            fontSize: "48px",
            fontWeight: "700",
            position: "relative",
            marginBottom: "90px",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: "-10px",
              width: "80px",
              height: "4px",
              background: "#00B8DB",
              borderRadius: "2px",
            },
          })}
        >
          About Me
        </h1>
        <p
          className={css({
            color: "#CAD5E2",
            fontSize: "18px",
            lineHeight: "30px",
          })}
        >
          Hello! I&apos;m{" "}
          <b className={css({ color: "#fff" })}>Hrvoje Čučković</b>, a
          passionate Frontend Developer based in Croatia. I specialize in
          building responsive, accessible, and performant web applications that
          solve real-world problems.
        </p>
        <p
          className={css({
            color: "#CAD5E2",
            fontSize: "18px",
            lineHeight: "30px",
            marginTop: "25px",
          })}
        >
          With a strong foundation in{" "}
          <span className={css({ color: "#00D3F3" })}>React</span> and{" "}
          <span className={css({ color: "#00D3F3" })}>Next.js</span>, I focus on
          creating seamless user experiences. I believe that great code is not
          just about functionality&ndash;it&apos;s about maintainability,
          scalability, and attention to detail.
        </p>
        <Box
          css={{
            display: "grid",
            gridTemplateColumns: { base: "1fr", sm: "1fr 1fr" },
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {[
            "Responsive Web Design",
            "Performance Optimization",
            "Modern UI/UX Principles",
            "Clean Architecture",
          ].map((skill) => (
            <p
              key={skill}
              className={css({
                color: "#CAD5E2",
                fontSize: "16px",
                lineHeight: "24px",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              })}
            >
              <Check />
              {skill}
            </p>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
