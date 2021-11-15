/* eslint-disable arrow-body-style */
import axios from "axios";

// const blocksApi = axios.create({
const baseUrl = "https://api.teztracker.com/v2/data/tezos";
// });

const NETWORK = "mainnet";

export const getDataFromApi = async (offset = 0, limit = 10) => {
  const url = `${baseUrl}/${NETWORK}/blocks`;
  const res = await axios.get(url, {
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
