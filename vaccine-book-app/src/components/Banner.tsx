"use client";
import { useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
export default function Banner() {
  const covers = [
    "/img/vaccine-cover.jpg",
    "/img/vaccine-cover2.jpg",
    "/img/vaccine-cover3.jpg",
    "/img/vaccine-cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.banner} onClick={() => setIndex(index + 1)}>
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        objectFit="cover"
      ></Image>
      <div className={styles.bannerText}>
        <h1>Get Vaccinate For Free!!!</h1>
        <h2>@Chamchuri 9 Building from 09.00 - 18.00</h2>
        <h3>From 28 Aug 2021</h3>
      </div>
    </div>
  );
}
