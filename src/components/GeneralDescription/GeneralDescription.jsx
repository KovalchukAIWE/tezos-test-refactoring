import React from "react";
import styles from "./GeneralDescription.module.scss";

const GeneralDescription = () => (
  <div id='description' className={styles.wrapper}>
    <div className={styles.description}>
      <p className={styles.description__header}>
        General Description of the assignment
      </p>
      <div className={styles.description__text}>
        <div className={styles.description__number}>01</div>
        <p className={styles.description__paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <hr className={styles.description__underline} />
      <div className={styles.description__text}>
        <div className={styles.description__number}>02</div>
        <p className={styles.description__paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <hr className={styles.description__underline} />
      <div className={styles.description__text}>
        <div className={styles.description__number}>03</div>
        <p className={styles.description__paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <hr className={styles.description__underline} />
    </div>
    <div className={styles.img} />
  </div>
);

export default GeneralDescription;
