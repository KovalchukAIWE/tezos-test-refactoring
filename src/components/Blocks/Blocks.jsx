import React from "react";
import Select from "react-select";
import { useBlocksContext } from "../../context/BlocksContext";
import Table from "../Table";
import Pagination from "../Pagination/Pagination";
import { selectQuantityPages } from "../../helpers/selectQuantityPages";

import styles from "./Blocks.module.scss";

const Blocks = () => {
  const { blocks, limit, offset, handleLimit } = useBlocksContext();

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
            Front-end development test assigment
          </p>
        </div>
        <div className={styles.blocks__table}>
          <p>Tezos blocks</p>
          <div className={styles.blocks__select}>
            <p>Items per page</p>
            <Select
              defaultValue={selectQuantityPages[0]}
              options={selectQuantityPages}
              onChange={(e) => handleLimit(e.value)}
              className={styles.blocks__quantity}
            />
          </div>
          <Table blocks={currentBlock} />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Blocks;
