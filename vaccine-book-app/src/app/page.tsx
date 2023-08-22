import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </main>
  );
}
