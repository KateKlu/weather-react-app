import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter your city" autoFocus="true" />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
