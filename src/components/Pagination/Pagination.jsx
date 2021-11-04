import React, { useContext } from "react";
// import PropTypes from 'prop-types';
import { BlocksContext } from "../Provider/Provider";
import { pageData } from "../../helpers/pageData";

import styles from "./Pagination.module.scss";

const Pagination = () => {
  const { handleOffset, offset, limit, totalCount } = useContext(BlocksContext);

  const pages = Math.ceil(totalCount / limit);
  const currentPages = pageData(offset, limit, pages);
  const handlePage = (value) => {
    if (offset === 0 && value < offset) return;
    if (currentPages[currentPages.length - 1].pageNumber === pages && pages)
      return;
    handleOffset(value);
  };

  return (
    <div className={styles.paginate}>
      <button
        type='button'
        aria-label='button previous page'
        className={styles.paginate__link}
        onClick={() => handlePage(offset - limit)}
      >
        &#60;
      </button>
      {currentPages.map((el) => (
        <button
          key={`key-${el.pageNumber}`}
          type='button'
          aria-label={`button ${el.pageNumber}  page`}
          className={el.active ? styles.active : ""}
          onClick={() => handlePage(el.pageOffset)}
          name={el.pageNumber}
        >
          {el.pageNumber}
        </button>
      ))}
      <button
        type='button'
        aria-label='button next page'
        className={styles.paginate__link}
        onClick={() => handlePage(offset + limit)}
      >
        &#62;
      </button>
    </div>
  );
};

// Pagination.propTypes = {
//   offset: PropTypes.number.isRequired,
//   paginate: PropTypes.func.isRequired,
//   page: PropTypes.func.isRequired,
// };

export default Pagination;
