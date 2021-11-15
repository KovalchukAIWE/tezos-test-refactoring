import React from "react";
import { useBlocksContext } from "../../Context/BlocksContext";
import "./Table.module.scss";

const dayjs = require("dayjs");

const Table = () => {
  const { blocks } = useBlocksContext();
  return (
    <div>
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
            <th>
              <div>Endorsements</div>
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
                  <div>
                    {(item.volume * 1e-7).toFixed(6)}
                    &#42793;
                  </div>
                </td>
                <td>
                  <div>
                    {(item.fees * 1e-6).toFixed(6)}
                    &#42793;
                  </div>
                </td>
                <td>
                  <div>{item.endorsements}</div>
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
