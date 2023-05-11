import { FC } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import styles from "./MainLayout.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const inter = Inter({ subsets: ["latin"] });

export const MainLayout: FC<Props> = ({ children, title = "Pokemon App" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Armando Albor" />
        <meta
          name="description"
          content={`Información sobre el pokémon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={`${styles.main} ${inter.className}`}>{children}</main>
    </>
  );
};
