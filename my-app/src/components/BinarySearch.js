import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setArray,
  setSearchResult,
  setIterations,
  setElapsedTime,
} from "../redux/actions";
import BinarySearchVisualizer from "./BinarySearchVisualizer";
import "./../BinarySearch.css";

const BinarySearch = () => {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.array);
  const searchResult = useSelector((state) => state.searchResult);
  const iterations = useSelector((state) => state.iterations);
  const elapsedTime = useSelector((state) => state.elapsedTime);

  const [inputArray, setInputArray] = useState("");

  const handleInputChange = (e) => {
    setInputArray(e.target.value);
  };

  const setUserArray = () => {
    const userInputArray = inputArray
      .split(",")
      .map((num) => parseInt(num.trim(), 10));
    dispatch(setArray(userInputArray));
  };

  const binarySearch = async (num) => {
    const blocks = document.querySelectorAll(".block");
    dispatch(setIterations(0));
    dispatch(setElapsedTime(0));

    const startTime = performance.now();

    for (let i = 0; i < blocks.length; i += 1) {
      highlightBlock(i, "blue", i < array.length);
    }

    let start = 0;
    let end = array.length - 1;
    let flag = 0;
    let totalIterations = 0;
    let foundIndex = -1;

    while (start <= end) {
      totalIterations += 1;
      const mid = Math.floor((start + end) / 2);
      highlightBlock(mid, "red");
      const value = array[mid];

      await new Promise((resolve) => setTimeout(resolve, 900));

      if (value === num) {
        foundIndex = mid;
        dispatch(
          setSearchResult(
            <span className="found">Element Found at Index {foundIndex}</span>
          )
        );
        highlightBlock(mid, "green");
        flag = 1;
        break;
      }

      if (value > num) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }

      for (let i = 0; i < blocks.length; i++) {
        if (i < start || i > end) {
          highlightBlock(i, "blue", 0.3);
        }
      }
    }

    dispatch(setIterations(totalIterations));

    if (flag === 0) {
      dispatch(
        setSearchResult(<span className="not-found">Element Not Found</span>)
      );
    }

    const endTime = performance.now();
    const elapsedMilliseconds = endTime - startTime;
    dispatch(setElapsedTime(elapsedMilliseconds));
  };

  const highlightBlock = (index, color, opacity = 1) => {
    const blocks = document.querySelectorAll(".block");
    blocks[index].style.backgroundColor = color;
    blocks[index].style.opacity = opacity;
  };

  return (
    <div>
      <br />
      <p className="header">Binary Search</p>

      <BinarySearchVisualizer array={array} />

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
        <br />
        <p className="boldptag">Number of Iterations: {iterations}</p>
        <p className="boldptag">Elapsed Time: {elapsedTime} milliseconds</p>
      </div>
    </div>
  );
};

export default BinarySearch;
