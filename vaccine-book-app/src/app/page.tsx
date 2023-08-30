import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <ProductCard
          hospitalName="Chulalongkorn Hospital"
          imgSrc="/img/chula.jpg"
        ></ProductCard>
        <ProductCard
          hospitalName="Rajavithi Hospital"
          imgSrc="/img/rajavithi.jpg"
        ></ProductCard>
        <ProductCard
          hospitalName="Thammasat University Hospital"
          imgSrc="/img/thammasat.jpg"
        ></ProductCard>
      </div>
    </main>
  );
}
