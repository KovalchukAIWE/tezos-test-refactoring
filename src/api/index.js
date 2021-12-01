/* eslint-disable arrow-body-style */
import axios from "axios";

const NETWORK = "mainnet";
const blocksApi = axios.create({
  baseURL: `https://api.teztracker.com/v2/data/tezos/${NETWORK}`,
});

export const getDataFromApi = async (offset = 0, limit = 10) => {
  const res = await blocksApi.get("blocks", {
    params: {
      offset,
      limit,
    },
  });
  return {
    blocks: res.data,
    totalCount: res.headers["x-total-count"],
  };
};
