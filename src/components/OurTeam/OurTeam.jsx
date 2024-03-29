import React from "react";
import styles from "./OurTeam.module.scss";

const OurTeam = () => (
  <>
    <div id='team' className={styles.title}>
      Our team
    </div>
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.left__img} />
        <div className={styles.paragraph}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
            molestie pretium, dictum nunc ac pellentesque. Semper imperdiet
            elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra
            tempor. Amet proin sapien consequat orci, mauris.Lorem ipsu
            elit.\amet, porttitor.
          </p>
          <div className={styles.button}>
            <button type='button' className={styles.button__btn}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right__img} />
        <div className={styles.paragraph}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
            molestie pretium, dictum nunc ac pellentesque. Semper imperdiet
            elit, nec faucibus varius dui. Lorem non sed tincidunt pharetra
            tempor. Amet proin sapien consequat orci, mauris.Lorem ipsu
            elit.\amet, porttitor.
          </p>
          <div className={styles.button}>
            <button type='button' className={styles.button__btn}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default OurTeam;
