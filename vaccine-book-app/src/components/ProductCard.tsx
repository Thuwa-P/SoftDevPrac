import styles from "./productcard.module.css";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image
          src={"/img/vaccine-card.jpg"}
          alt="vaccine-card"
          fill={true}
          objectFit="cover"
        ></Image>
      </div>
      <div className={styles.cardtext}>
        <p>
          mRNA vaccine ช่วยป้องกันโควิด กระตุ้นภูมิคุ้มกันโรค
          และลดการเกิดอาการรุนแรง
        </p>
      </div>
    </div>
  );
}
