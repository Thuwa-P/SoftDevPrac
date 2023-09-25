import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import CardPanel from "@/components/CardPanel";
import { Card } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Banner></Banner>
    </main>
  );
}
