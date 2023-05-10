import { CSSProperties, FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const style: CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.3)",
  borderRadius: "5px",
  padding: "32px",
};

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={style}>
      <h3>DarkLayout</h3>
      {children}
    </div>
  );
};
