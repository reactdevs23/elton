import React from "react";
import styles from "./styles.module.css";
import { dream } from "../../images";

const Dream = () => {
  return (
    <section className={styles.wrapper}>
      <div className={[styles.container, "container"].join(" ")}>
        <img src={dream} alt="#" className={styles.img} />
        <div className={styles.textWrapper}>
          {" "}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              <span className={styles.heading}>THE FROG</span> <br /> Dream
            </h1>
            <button className={styles.readmore}>ReadMore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dream;
