import React, { memo } from "react";
import { useSelector } from "react-redux";
import Avatar from "../../components/Avatar/Avatar.view";
import Button from "../../components/Button/Button.view";
import { FILTER_BY } from "../../constants/general";
import { formatDate } from "../../utility/moment";
import "./EmailDetails.css";

const EmailDetails = ({ handleAddItemInCategory }) => {
  const { activeEmailItem } = useSelector((state) => state.emailsListData);
  const { emailDetails } = useSelector((state) => state.emailBody);
  const handleFavClick = (id) => {
    handleAddItemInCategory(FILTER_BY.FAVORITES, id);
  };
  return (
    <div className="flex email-body-container border">
      <div style={{ marginTop: "10px" }}>
        <Avatar name={activeEmailItem?.from?.name} />
      </div>
      <div style={{ marginLeft: "20px" }}>
        <div
          className="flex al_center"
          style={{ justifyContent: "space-between" }}
        >
          <span style={{ fontSize: "48px" }} className="main">
            {activeEmailItem?.subject}
          </span>
          <div>
            <Button
              title="Mark as favorite"
              onClick={() => handleFavClick(emailDetails.id)}
            />
          </div>
        </div>
        <span>{formatDate(activeEmailItem.date)}</span>
        {emailDetails?.body && (
          <div dangerouslySetInnerHTML={{ __html: emailDetails.body }} />
        )}
      </div>
    </div>
  );
};
export default memo(EmailDetails);
