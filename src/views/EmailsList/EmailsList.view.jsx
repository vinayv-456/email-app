import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import EmailItem from "../../components/emailItem/emailItem.view";
import PaginationComponent from "../../components/Pagination";
import { FILTER_BY } from "../../constants/general";
import { getEmailBody } from "../../store/emailBody/actions";
import { setActiveEmailItem } from "../../store/emailsList/actions";
import "./EmailsList.css";

export default function EmailsList({
  emailsList,
  total,
  activeEmailItem,
  handleAddItemInCategory,
  handlePageChange,
}) {
  const dispatch = useDispatch();
  const { filters, activeEmailFilter } = useSelector(
    (state) => state.emailsListData
  );
  const handleEmailClick = (item) => {
    if (activeEmailItem?.id) {
      handleAddItemInCategory(FILTER_BY.READ, activeEmailItem.id);
    }
    dispatch(setActiveEmailItem(item));
    dispatch(getEmailBody(item.id));
  };

  if (!total) return <p>No emails present under {activeEmailFilter} </p>;
  return (
    <div className="emails-list-container">
      {emailsList?.map((email) => (
        <EmailItem
          key={email.id}
          id={email.id}
          item={email}
          handleEmailClick={handleEmailClick}
          activeEmailItem={activeEmailItem}
          read={filters.read.includes(email.id)}
          favorite={filters.favorites.includes(email.id)}
        />
      ))}

      <PaginationComponent total={total} handlePageChange={handlePageChange} />
    </div>
  );
}
