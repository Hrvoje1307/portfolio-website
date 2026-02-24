import { css } from "@/styled-system/css";

type MainButtonProps = {
   size?: "sm" | "lg";
  children: React.ReactNode;
};

export function MainButton({ children, size = "sm" }: MainButtonProps) {
  return (
    <button
      className={css({
        padding: size === "sm" ? "6px 12px" : "32px 14px",
        borderRadius: "10px",
        border: "1px solid rgba(0,0,0,0.00)",
        background: "#00BBDB",
        boxShadow: "0 0 15px 0 rgba(6, 182, 212, 0.50)",
        color: "#000",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        justifyContent: "center",
        transition: "background 0.3s",
        "&:hover": {
          background: "#00D8DB",
        }
      })}
    >
      {children}
    </button>
  );
}
