import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../../../styles/home/pokemonList/pagination/pagination.module.css";
import React from "react";

function Pagination(props) {
  const { page, setPage } = props;
  function handlePrev() {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(65);
    }
    window.scroll(0, 0);
  }
  function handleNext() {
    if (page < 65) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
    window.scroll(0, 0);
  }
  // console.log("page", page);

  return (
    <div className={styles.container}>
      <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faChevronLeft} />
        &nbsp; Prev
      </button>
      <button onClick={handleNext}>
        Next &nbsp;
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Pagination;
