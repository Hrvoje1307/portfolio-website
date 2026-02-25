import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";

type ListItemProps = {
  icon: React.ReactNode;
  title: string;
  item: Array<string>;
};

export function ListItem({ icon, title, item }: ListItemProps) {
  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        padding: "25px",
        height: "250px",
        width: "300px",
        borderRadius: "16px",
        border: "1px solid rgba(29, 41, 61, 0.60)",
        background: "rgba(15, 23, 43, 0.40)",
      }}
    >
      <Box
        css={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          css={{
            display: "flex",
            width: "50px",
            height: "50px",
            padding: "13px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            border: "1px solid #314158",
            background: "rgba(29, 41, 61, 0.50)",
          }}
        >
          {icon}
        </Box>
        <h3
          className={css({
            color: "#fff",
            fontSize: "20px",
            fontWeight: "700",
          })}
        >
          {title}
        </h3>
      </Box>
      <ul>
        {item.map((i, index) => (
          <li
            className={css({
              color: "#CAD5E2",
              fontSize: "16px",
              lineHeight: "24px",
              listStyle: "inside",
            })}
            key={index}
          >
            {i}
          </li>
        ))}
      </ul>
    </Box>
  );
}
