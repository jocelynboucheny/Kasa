import React, { useState } from "react";
import "./DescriptionPanel.scss";
import arrow from "/arrow.png";

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
        <img
          className={isContentVisible ? "arrow arrow_up" : "arrow arrow_down"}
          onClick={showContent}
          src={arrow}
          alt="show content"
        />
      </p>
      <p className={contentClass}>{content}</p>
    </div>
  );
}
