import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { BGTitle } from "@/styles/home/index.styles";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1500);
  }, []);

  return (
    <>
      <BGTitle loaded={loaded}>
        <span>CARLOS PONCE</span>
        <span>PORTFOLIO</span>
      </BGTitle>
    </>
  );
}
