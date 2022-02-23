import React from "react";
import { formatDate } from "../../utility/moment";
import Avatar from "../Avatar/Avatar.view";
import "./emailItem.css";

export default function EmailItem({
  item,
  activeEmailItem,
  handleEmailClick,
  read,
  favorite,
}) {
  const { id, from, subject, short_description, date } = item;
  return (
    <div
      // className={
      //   read
      //     ? "flex email-item-container border read"
      //     : "flex email-item-container border unread"
      // }
      className={`flex email-item-container border ${
        read ? "read" : "unread"
      } ${activeEmailItem?.id === id ? "ActiveEmailItem" : ""}`}
      onClick={() => handleEmailClick(item)}
    >
      <Avatar name={from.name} />
      <div className="content-container">
        <div>
          <span>From: </span>
          <span className="main">{from.name + "<" + from.email + ">"}</span>
        </div>
        <div>
          <span>subject: </span>
          <span className="main">{subject}</span>
        </div>
        <div>
          <span>{short_description}</span>
        </div>
        <div className="flex">
          <span>{formatDate(date)}</span>
          {favorite && <span className="favorite main">Favorite</span>}
        </div>
      </div>
    </div>
  );
}
