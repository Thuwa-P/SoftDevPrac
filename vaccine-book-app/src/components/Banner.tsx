import styles from "./banner.module.css";
import Image from "next/image";
export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={"/img/vaccine-cover.jpg"}
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
