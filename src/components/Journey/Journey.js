import React from "react";
import styles from "./styles.module.css";
import { journey } from "../../images";

const Journey = () => {
  return (
    <section className={styles.wrapper}>
      <div className={[styles.container, "container"].join(" ")}>
        <img src={journey} alt="#" className={styles.img} />
        <div className={styles.textWrapper}>
          {" "}
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              <span className={styles.heading}>A LONG ASS</span> <br /> Journey
            </h1>
            <button className={styles.readmore}>ReadMore</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
