import React from "react";
import styles from "./styles.module.css";
import { meme } from "../../images";

const Meme = () => {
  return (
    <section className={styles.wrapper}>
      <div className={[styles.container, "container"].join(" ")}>
        <img src={meme} alt="#" className={styles.img} />
        <div className={styles.textWrapper}>
          {" "}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              <span className={styles.heading}>IT WAS ALL A</span> <br /> MEME
            </h1>
            <button className={styles.readmore}>ReadMore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meme;
