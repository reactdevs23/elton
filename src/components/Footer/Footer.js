import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import styles from "./Footer.module.css";
import { logo } from "../../images";
const Footer = () => {
  const socialLinks = { twitter: "#", telegram: "#" };
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={[styles.container].join(" ")}>
          <div className={styles.logoAndList}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="#" className={styles.logo} />
              <h2 className={styles.logoText}>Elton</h2>
            </div>
            <div className={styles.listContainer}>
              <p className={styles.list}>FROGPAPER</p>{" "}
              <p className={styles.list}>TOKENECONOMICS</p>{" "}
              <p className={styles.list}>COPY CONTRACT</p>
            </div>
          </div>
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
        </div>
        <p className={styles.copyRight}>
          ELTON A FROG ON TON * all rights reserved * copyrights 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
