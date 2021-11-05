import React from "react";
import styles from "./TestingSkills.module.scss";

const TestingSkills = () => (
  <div id='skills' className={styles.container}>
    <p className={styles.header}>Testing skills</p>
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <div className={styles.check}>
          <div className={styles.check__icon} />
          <div className={styles.check__text}>
            Applying HTML, CSS/SASS. Markup implementation
          </div>
        </div>
        <div className={styles.check}>
          <div className={styles.check__icon} />
          <div className={styles.check__text}>
            Applying JS. Transforming and organising data. Interaction
          </div>
        </div>
      </div>
      <div className={styles.statistic}>
        <div className={styles.statistic__markup}>HTML, CSS/SASS</div>
        <div className={styles.statistic__rest}>TTP/REST</div>
        <div className={styles.statistic__js}>JS</div>
        <div className={styles.statistic__framework}>VUE/REACT</div>
      </div>
      <div className={styles.right}>
        <div className={styles.check}>
          <div className={styles.check__icon} />
          <div className={styles.check__text}>
            Working with asynchronous code, HTTP and REST architecture
          </div>
        </div>
        <div className={styles.check}>
          <div className={styles.check__icon} />
          <div className={styles.check__text}>
            Using one of the modern front-end frameworks either Vue or React.
            Vue is preferable but React is also viable
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TestingSkills;
