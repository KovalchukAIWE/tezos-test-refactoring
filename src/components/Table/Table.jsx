import React from "react";
import { useBlocksContext } from "../../context/BlocksContext";
import { MUTES_TO_XTZ } from "../../helpers/constants";
import styles from "./Table.module.scss";

const dayjs = require("dayjs");

const Table = () => {
  const { blocks } = useBlocksContext();
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>
              <div>Block ID</div>
            </th>
            <th>
              <div>Baker</div>
            </th>
            <th>
              <div>Timestamp</div>
            </th>
            <th>
              <div># of operations</div>
            </th>
            <th>
              <div>Volume</div>
            </th>
            <th>
              <div>Fee</div>
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
                  <div>{MUTES_TO_XTZ(item.volume.toFixed(6))}</div>
                </td>
                <td>
                  <div>{MUTES_TO_XTZ(item.fees.toFixed(6))}</div>
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
