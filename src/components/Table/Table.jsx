import React from "react";
import { useBlocksContext } from "../../contexts/BlocksContext";
import { MUTEZ_TO_XTZ } from "../../helpers/constants";
import styles from "./Table.module.scss";

const dayjs = require("dayjs");

const Table = () => {
  const { blocks } = useBlocksContext();
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>
              <div className={styles.table__header}>Block ID</div>
            </th>
            <th>
              <div className={styles.table__header}>Baker</div>
            </th>
            <th>
              <div className={styles.table__header}>Created</div>
            </th>
            <th>
              <div className={styles.table__header}># of operations</div>
            </th>
            <th>
              <div className={styles.table__header}>Volume</div>
            </th>
            <th>
              <div className={styles.table__header}>Fees</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {blocks.map((item) => (
            <>
              <tr key={item.hash}>
                <td>
                  <div>{item.level.toLocaleString()}</div>
                </td>
                <td>
                  <div>{item.bakerName || "- - -"}</div>
                </td>
                <td>
                  <div>
                    {dayjs.unix(item.timestamp).format("YYYY.MM.DD HH:mm:ss")}
                  </div>
                </td>
                <td>
                  <div>{item.number_of_operations}</div>
                </td>
                <td>
                  <div>{MUTEZ_TO_XTZ(item.volume.toFixed(6))}</div>
                </td>
                <td>
                  <div>{MUTEZ_TO_XTZ(item.fees.toFixed(6))}</div>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
