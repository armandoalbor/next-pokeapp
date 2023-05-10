import Link from "next/link";
import { useRouter } from "next/router";
import { MenuItem } from "./types";

const style = {
  color: "#64ceecff",
};

export const ActiveLink = ({ text, href }: MenuItem) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} style={href === asPath ? style : undefined}>
      {text}
    </Link>
  );
};
