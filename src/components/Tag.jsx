import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    "Low priority": { backgroundColor: "#ffcc00" },
    "High priority": { backgroundColor: "#ff4d4d" }, 
    "Mid priority": { backgroundColor: "#ff9900" },  
    default: { backgroundColor: "#f0f0f0" },          
  };

  return (
    <button
      type="button"
      className={`tag ${selected ? "selected" : ""}`}
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
