/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, {
  createContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  useContext,
} from "react";
import PropTypes from "prop-types";
import { getDataFromApi } from "../api";

export const BlocksContext = createContext();
export const useBlocksContext = () => useContext(BlocksContext);

const Provider = ({ children }) => {
  const [limit, setLimit] = useState(3);
  const [offset, setOffset] = useState(0);
  const [blocks, setBlocks] = useState([]);
  const [totalCount, setTotalCount] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      setIsError(false);
      try {
        const data = await getDataFromApi(offset, limit);
        setBlocks(data.blocks);
        setTotalCount(data.totalCount);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();
  }, [limit, offset]);

  const handleLimit = useCallback(
    (value) => {
      setLimit(value);
      setOffset(0);
    },
    [setLimit, setOffset],
  );
  const handleOffset = useCallback((value) => setOffset(value), [setOffset]);

  const blocksContextValue = useMemo(
    () => ({
      handleOffset,
      limit,
      handleLimit,
      offset,
      blocks,
      totalCount,
    }),
    [handleOffset, limit, offset, blocks, totalCount],
  );

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
