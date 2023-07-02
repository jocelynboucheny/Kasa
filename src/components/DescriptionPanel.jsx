import React, { useState } from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel({ title, content }) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const contentClass =
    (isContentVisible ? "visible" : "hidden") + " description__content";

  return (
    <div className="description__panel">
      <p className="description__header">
        <span>{title}</span>
        <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
      </p>
      <p className={contentClass}>{content}</p>
    </div>
  );
}
