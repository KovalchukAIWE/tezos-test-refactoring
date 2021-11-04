import React from "react";
import styles from "./TestingSkills.module.scss";

const TestingSkills = () => (
  <div id='skills' className={styles.wrapper}>
    <p className={styles.block_header}>Testing skils</p>
    <div className={styles.wrapper_block}>
      <div className={styles.left_block}>
        <div className={styles.icon_text}>
          <div className={styles.icon_check} />
          <div className={styles.block_text}>
            Applying HTML, CSS/SASS. Markup implementation
          </div>
        </div>
        <div className={styles.icon_text}>
          <div className={styles.icon_check} />
          <div className={styles.block_text}>
            Applying JS. Transforming and organising data. Interaction
          </div>
        </div>
      </div>
      <div className={styles.statistic_block}>
        <div className={styles.statistic_markup}>HTML, CSS/SASS</div>
        <div className={styles.statistic_rest}>TTP/REST</div>
        <div className={styles.statistic_js}>JS</div>
        <div className={styles.statistic_framework}>VUE/REACT</div>
      </div>
      <div className={styles.right_block}>
        <div className={styles.icon_text}>
          <div className={styles.icon_check} />
          <div className={styles.block_text}>
            Working with asynchronous code, HTTP and REST architecture
          </div>
        </div>
        <div className={styles.icon_text}>
          <div className={styles.icon_check} />
          <div className={styles.block_text}>
            Using one of the modern front-end frameworks either Vue or React.
            Vue is preferable but React is also viable
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TestingSkills;
