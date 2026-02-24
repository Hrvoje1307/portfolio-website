import { css } from "@/styled-system/css";

export function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      className={css({
        padding: { base: "9px 18px", lg: "14px 32px" },
        fontSize: "18px",
        textAlign: "center",
        fontWeight: "500",
        color: "#CAD5E2",
        border: "1px solid #314158",
        borderRadius: "10px",
        transition: "border 0.3s, color 0.3s",
        "&:hover": {
          border: "1px solid #00B8DB",
          color: "#00B8DB",
        },
      })}
    >
      {children}
    </a>
  );
}
