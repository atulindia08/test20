import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/components/HomePage";

export default function Home() {
  const main = {
    marginTop: '100px'
  };
  return (
    <main style={main}>
     <HomePage />
    </main>
  );
}
