import React from "react";
import { useBlocksContext } from "../../contexts/BlocksContext";
import Table from "../Table";
import Pagination from "../Pagination/Pagination";

import styles from "./Blocks.module.scss";

const Blocks = () => {
  const { blocks, limit, offset } = useBlocksContext();

  const indexOfLastBlock = offset * limit;
  const indexOfFirstBlock = indexOfLastBlock - limit;
  const currentBlock = blocks.slice(indexOfFirstBlock, indexOfLastBlock);

  return (
    <div className={styles.blocks}>
      <div className={styles.blocks__bg} />
      <div className={styles.blocks__wrapper}>
        <div className={styles.blocks__description}>
          <div className={styles.blocks__logo} />
          <p className={styles.blocks__title}>Tezos Ukraine</p>
          <p className={styles.blocks__subtitle}>
            Front-end development test assignment
          </p>
        </div>
        <div className={styles.blocks__table}>
          <p className={styles.blocks__name}>Tezos blocks</p>
          <Table blocks={currentBlock} />
          <Pagination />
        </div>
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default Blocks;
