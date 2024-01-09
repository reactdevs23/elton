import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import styles from "./HeroSection.module.css";
import { heroImg } from "../../images";

const HeroSection = () => {
  const socialLinks = { twitter: "#", telegram: "#" };
  // there has two button container of buy and copy ca because of responsiveness
  return (
    <section className={styles.wrapper}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.imgContainer}>
          <img src={heroImg} alt="#" className={styles.img} />

          <div className={styles.textContainer}>
            <div className={styles.titleAndTagline}>
              <h1 className={styles.title}>
                {" "}
                <span className={styles.heading}>Meet</span> <br /> ELTON
              </h1>
              <div className={styles.socialContainer}>
                <a href={socialLinks.twitter} target="_blank" rel="noreferrer">
                  <FaXTwitter className={styles.twitterIcon} />
                </a>{" "}
                <a
                  href={socialLinks.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.telegramContainer}
                >
                  <FaTelegramPlane className={styles.telegramIcon} />
                </a>
              </div>
              <p className={styles.tagline}>
                THE FIRST CRYPTO FROG ON THE TON CHAIN.
              </p>
            </div>
            {/* buttonContainer for dekstop */}
            <div
              className={[styles.buttonContainer, styles.dekstopButtons].join(
                " "
              )}
            >
              <button className={styles.button}>Buy</button>{" "}
              <button className={styles.button}>COPY CA</button>
            </div>
          </div>
        </div>

        {/*buttonContainer for mobile */}
        <div
          className={[styles.buttonContainer, styles.mobileButtons].join(" ")}
        >
          <button className={styles.button}>Buy</button>{" "}
          <button className={styles.button}>COPY CA</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
