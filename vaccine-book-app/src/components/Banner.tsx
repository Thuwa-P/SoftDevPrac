"use client";
import { useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Banner() {
  const covers = [
    "/img/vaccine-cover.jpg",
    "/img/vaccine-cover2.jpg",
    "/img/vaccine-cover3.jpg",
    "/img/vaccine-cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();
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
      <button
        className="bg-white text-teal-500 border border-teal-500 font-semibold py-2 px-2 m-2 rounded z-30 
      absolute bottom-0 right-0 hover:bg-teal-500 hover:text-white hover:border-transparent"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/hospital");
        }}
      >
        Select Your Hospital Now !
      </button>
    </div>
  );
}
