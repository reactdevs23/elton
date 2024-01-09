import React from "react";
import styles from "./styles.module.css";
import { meme } from "../../images";

const Kings = () => {
  return (
    <section className={styles.wrapper}>
      <div className={[styles.container, "container"].join(" ")}>
        <img src={meme} alt="#" className={styles.img} />
        <div className={styles.textWrapper}>
          {" "}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              <span className={styles.heading}>
                THE TREASURY <span className={styles.mobile}>OF</span>{" "}
              </span>{" "}
              <br />
              <span className={styles.dekstop}>OF</span> Kings
            </h1>
            <button className={styles.readmore}>ReadMore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kings;
