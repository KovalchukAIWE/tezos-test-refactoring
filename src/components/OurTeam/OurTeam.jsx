import React from "react";
import styles from "./OurTeam.module.scss";

const OurTeam = () => (
  <>
    <div id='team' className={styles.header}>
      Our team
    </div>
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.left__img} />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
          molestie pretium, dictum nunc ac pellentesque. Semper imperdiet elit,
          nec faucibus varius dui. Lorem non sed tincidunt pharetra tempor. Amet
          proin sapien consequat orci, mauris.Lorem ipsu elit.\amet, porttitor.
        </p>
        <div className={styles.button}>
          <button type='button' className={styles.button__btn}>
            Learn More...
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.right__img} />
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
          molestie pretium, dictum nunc ac pellentesque. Semper imperdiet elit,
          nec faucibus varius dui. Lorem non sed tincidunt pharetra tempor. Amet
          proin sapien consequat orci, mauris.Lorem ipsu elit.\amet, porttitor.
        </p>
        <div className={styles.button}>
          <button type='button' className={styles.button__btn}>
            Learn More...
          </button>
        </div>
      </div>
    </div>
  </>
);

export default OurTeam;
