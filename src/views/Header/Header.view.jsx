import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FILTER_BY } from "../../constants/general";
import {
  setActiveEmailFilter,
  setActiveEmailItem,
} from "../../store/emailsList/actions";
import "./Header.css";

export default function Header() {
  const { activeEmailFilter } = useSelector((state) => state.emailsListData);
  const filters = [FILTER_BY.UNREAD, FILTER_BY.READ, FILTER_BY.FAVORITES];
  const dispatch = useDispatch();
  const handleFilterBy = (filter) => {
    dispatch(setActiveEmailItem(""));
    if (activeEmailFilter !== filter) dispatch(setActiveEmailFilter(filter));
    else dispatch(setActiveEmailFilter(""));
  };

  return (
    <div className="flex al-center">
      <span className="main">Filter By:</span>
      <ul style={{ listStyle: "none" }} className="flex">
        {filters.map((filter, index) => {
          return (
            <li
              onClick={() => handleFilterBy(filter)}
              className={activeEmailFilter === filter ? "active" : ""}
              key={index}
            >
              {filter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
