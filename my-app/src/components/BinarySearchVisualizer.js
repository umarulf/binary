import React from "react";
import "./../BinarySearch.css";

const Block = ({ index, value }) => {
  const blockHeight = 30;

  return (
    <div
      className="block"
      style={{
        height: `${blockHeight}px`,
        transform: `translate(${index * 40}px)`,
        backgroundColor: "blue",
      }}
    >
      <label className="block_id">{value}</label>
    </div>
  );
};

const BinarySearchVisualizer = ({ array }) => {
  return (
    <div id="array">
      {array.map((value, index) => (
        <Block key={index} value={value} index={index} />
      ))}
    </div>
  );
};

export default BinarySearchVisualizer;
