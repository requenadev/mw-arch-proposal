import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left_container}>
        <Image
          className={styles.logo}
          src="/assets/images/logo-letters.png"
          alt="Cashea logo"
          quality={100}
          width={120}
          height={0}
        />
      </div>
      <div className={styles.right_container}></div>
    </nav>
  );
}
