"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Project Auto Deploy oleh:</p>
        <div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Dena Kamal D.
          </h1>
          <h2>NIM: 2206090</h2>
          <h3>Institut Teknologi Garut</h3>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.card}>
          <h2>Selamat Datang! 👋</h2>
          <p>
            Ini adalah contoh aplikasi Next.js yang di-deploy secara otomatis.
          </p>
          <button onClick={handleLike} className={styles.button}>
            Sukai Halaman Ini 👍 ({likes})
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {/* Anda bisa menambahkan link atau card lain di sini */}
      </div>
    </main>
  );
}
