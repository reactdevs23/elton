import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import styles from "./Header.module.css";
import { logo } from "../../images";
const Header = () => {
  const socialLinks = { twitter: "#", telegram: "#" };
  return (
    <header className={styles.header}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="#" className={styles.logo} />
          <h2 className={styles.logoText}>Elton</h2>
        </div>{" "}
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
    </header>
  );
};

export default Header;
