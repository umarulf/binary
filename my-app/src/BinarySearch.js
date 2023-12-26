import React, { useState } from "react";
import "./BinarySearch.css";

const Block = ({ height, index, value }) => {
  return (
    <div
      className="block"
      style={{ height: `${height}px`, transform: `translate(${index * 30}px)` }}
    >
      <label className="block_id">{value}</label>
    </div>
  );
};

const BinarySearch = () => {
  const [array, setArray] = useState([]);
  const [inputArray, setInputArray] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const handleInputChange = (e) => {
    setInputArray(e.target.value);
  };

  const setUserArray = () => {
    const userInputArray = inputArray
      .split(",")
      .map((num) => parseInt(num.trim()));
    setArray(userInputArray);
  };

  const highlightBlock = (index, color) => {
    const blocks = document.querySelectorAll(".block");
    blocks[index].style.backgroundColor = color;
  };

  const binarySearch = async (num) => {
    const blocks = document.querySelectorAll(".block");

    for (let i = 0; i < blocks.length; i += 1) {
      highlightBlock(i, "blue");
    }

    let start = 0;
    let end = array.length - 1;
    let flag = 0;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      highlightBlock(mid, "red");
      const value = array[mid];

      await new Promise((resolve) => setTimeout(resolve, 900));

      if (value === num) {
        setSearchResult(<span className="found">Element Found</span>);
        highlightBlock(mid, "green");
        flag = 1;
        break;
      }

      if (value > num) {
        end = mid - 1;
        highlightBlock(mid, "blue");
      } else {
        start = mid + 1;
        highlightBlock(mid, "blue");
      }
    }

    if (flag === 0) {
      setSearchResult(<span className="not-found">Element Not Found</span>);
    }
  };

  return (
    <div>
      <br />
      <p className="header">Binary Search</p>

      <div id="array">
        {array.map((value, index) => (
          <Block key={index} value={value} index={index} height={value * 3} />
        ))}
      </div>
      <br />
      <br />

      <div style={{ textAlign: "center" }}>
        <label htmlFor="arrayInput">Enter comma-separated numbers:</label>
        <input
          type="text"
          id="arrayInput"
          value={inputArray}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button id="btn" onClick={setUserArray}>
          Set Array
        </button>
        <br />
        <br />
        <label htmlFor="searchNumber">Number to be Searched:</label>
        <input type="text" id="searchNumber" name="searchNumber" />
        <br />
        <br />
        <button
          id="searchBtn"
          onClick={() =>
            binarySearch(
              parseInt(document.getElementById("searchNumber").value, 10)
            )
          }
        >
          Search
        </button>
        <br />
        <br />
        <div id="text">{searchResult}</div>
      </div>
    </div>
  );
};

export default BinarySearch;
