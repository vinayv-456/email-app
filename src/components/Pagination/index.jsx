/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from "react";
import leftArrow from "../../assets/icons/BackArrow.svg";
import rightArrow from "../../assets/icons/right_arrow.svg";
import "./pagination.css";

const PaginationComponent = (props) => {
  const { handlePageChange, total } = props;
  const menusPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastMenu = currentPage * menusPerPage;
  const indexOfFirstMenu = indexOfLastMenu - menusPerPage;

  useEffect(() => {
    handlePageChange(currentPage);
  }, [currentPage]);

  const handlePageDown = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePageUp = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="pagination-container">
      <img
        // src={indexOfFirstMenu !== 0 ? leftArrow : leftArrowDisable}
        src={leftArrow}
        className={indexOfFirstMenu !== 0 ? "" : "disable"}
        alt="back"
        onClick={indexOfFirstMenu !== 0 ? handlePageDown : null}
      />
      <p style={{ marginRight: "5px" }}>
        {indexOfLastMenu < total
          ? `${indexOfFirstMenu + 1}-${indexOfLastMenu}`
          : total % indexOfFirstMenu === 1
          ? total
          : `${indexOfFirstMenu + 1}-${total}`}
      </p>
      <div> of {total}</div>

      <img
        src={rightArrow}
        // src={indexOfLastMenu < total ? rightArrow : rightArrowDisable}
        className={indexOfLastMenu < total ? "" : "disable"}
        alt="forward"
        onClick={indexOfLastMenu < total ? handlePageUp : null}
      />
    </div>
  );
};

export default PaginationComponent;
