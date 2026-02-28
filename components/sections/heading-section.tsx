import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";

type HeadingSectionProps = {
  title: string;
  subtitle?: string;
};
export default function HeadingSection({
  title,
  subtitle,
}: HeadingSectionProps) {
  return (
    <Box
      css={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1
        className={css({
          background: "linear-gradient(90deg, #FFF 0%, #90A1B9 100%)",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          fontSize: { base: "30px", md: "48px" },
          fontWeight: "700",
        })}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          className={css({
            color: "#90A1B9",
            textAlign: "center",
            fontSize: { base: "16px", md: "18px" },
            marginTop: "10px",
            fontWeight: "400",
          })}
        >
          {subtitle}
        </p>
      )}
      <Box
        css={{
          width: "80px",
          height: "4px",
          background: "#00B8DB",
          borderRadius: "2px",
          marginTop: "20px",
        }}
      ></Box>
    </Box>
  );
}
