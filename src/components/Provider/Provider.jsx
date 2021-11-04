/* eslint-disable import/no-extraneous-dependencies */
import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getDataFromApi } from "../../api";

export const BlocksContext = createContext();

const Provider = ({ children }) => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [blocks, setBlocks] = useState([]);
  const [totalCount, setTotalCount] = useState("");

  useEffect(() => {
    async function fetchData() {
      const dataFromBlocksApi = await getDataFromApi(offset, limit);
      setBlocks(dataFromBlocksApi.blocks);
      setTotalCount(dataFromBlocksApi.totalCount);
    }
    fetchData();
  }, [limit, offset]);

  const handleLimit = (value) => {
    setLimit(value);
    setOffset(() => 0);
  };

  const blocksContextValue = {
    handleOffset: (value) => setOffset(value),
    limit,
    handleLimit,
    offset,
    blocks,
    totalCount,
  };

  return (
    <BlocksContext.Provider value={blocksContextValue}>
      {children}
    </BlocksContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
