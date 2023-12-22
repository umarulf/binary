import React, { useState } from "react";

const BinarySearch = () => {
  const [arrayInput, setArrayInput] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState(null);

  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  };

  const handleSearch = () => {
    const array = arrayInput.split(",").map((num) => parseInt(num, 10));
    const index = binarySearch(array, parseInt(target, 10));
    setResult(index);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "24px" }}>Binary Search</h2>
      <div>
        <label style={{ fontWeight: "bold", fontSize: "18px" }}>
          Array:
          <input
            type="text"
            value={arrayInput}
            onChange={(e) => setArrayInput(e.target.value)}
            style={{ fontSize: "16px" }}
          />
        </label>
      </div>
      <div>
        <label style={{ fontWeight: "bold", fontSize: "18px" }}>Target:</label>
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          style={{ fontSize: "16px" }}
        />
        <button
          onClick={handleSearch}
          style={{
            marginLeft: "5px",
            padding: "5px",
            backgroundColor: "green",
            color: "white",
            cursor: "pointer",
            border: "none",
            borderRadius: "3px",
            fontSize: "16px",
          }}
        >
          Search
        </button>
      </div>
      <div>
        <label style={{ fontWeight: "bold", fontSize: "18px" }}>
          Result:{" "}
          {result !== null
            ? result !== -1
              ? `Found at index ${result}`
              : "Not found"
            : ""}
        </label>
      </div>
    </div>
  );
};

export default BinarySearch;
