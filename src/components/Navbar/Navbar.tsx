import { ActiveLink } from "./ActiveLink";
import { Inter } from "next/font/google";
import styles from "./Navbar.module.css";
import { MenuItem } from "./types";

const inter = Inter({ subsets: ["latin"] });

const menuItems: MenuItem[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={`${styles["menu-container"]} ${inter.className}`}>
      {menuItems.map((menuItem) => (
        <ActiveLink
          key={menuItem.href}
          href={menuItem.href}
          text={menuItem.text}
        />
      ))}
    </nav>
  );
};
