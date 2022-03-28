import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./num.css";

const ShowNumber = () => {
  const number = useSelector((state) => state.counter.number);
  return (
    <div className="show-num">
      My number is <span className="num">{number}</span>
    </div>
  );
};

export default ShowNumber;
