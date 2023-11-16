"use client";
import { useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const covers = [
    "/img/vaccine-cover.jpg",
    "/img/vaccine-cover2.jpg",
    "/img/vaccine-cover3.jpg",
    "/img/vaccine-cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();
  //console.log(session?.user.token);
  return (
    <div className={styles.banner} onClick={() => setIndex(index + 1)}>
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        objectFit="cover"
      ></Image>
      <div className={styles.bannerText}>
        <h1 className="font-mono">Get Vaccinate For Free!!!</h1>
        <h2 className="font-mono">@Chamchuri 9 Building from 09.00 - 18.00</h2>
        <h3 className="font-mono">From 28 Aug 2021</h3>
      </div>
      {session ? (
        <div className="z-30 absolute top-5 right-0 font-semibold text-teal-500 txt-xl bg-white border border-teal-500 rounded px-4 m-4">
          Hello {session.user?.name}
        </div>
      ) : null}
      <button
        data-test-id="bannerButton"
        className="bg-white text-teal-500 border border-teal-500 font-semibold py-2 px-4 m-4 rounded z-30 
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
