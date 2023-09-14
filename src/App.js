import React from "react";
import "./App.css";
import { formatDate, parseDate } from "./utils/dateUtils";

function App() {
  const dateStr = "2023-09-14T00:00:00Z";
  const isoDate = formatDate("2023-09-14T00:00:00Z", "ISO");
  const usDate = formatDate("2023-09-14T00:00:00Z", "US");
  const ukDate = formatDate("2023-09-14T00:00:00Z", "UK");

  return (
    <div className="App">
      <h1>Date Format Utility</h1>
      <p>Short Format: {formatDate(dateStr, "short")}</p>
      <p>Long Format: {formatDate(dateStr, "long")}</p>
      <p>With Day Format: {formatDate(dateStr, "day")}</p>
      <p>Default (ISO 8601) Format: {formatDate(dateStr)}</p>
      <p>ISO :{isoDate}</p>
      <p>US :{usDate}</p>
      <p>UK :{ukDate}</p>
      <p>MM-DD-YYYY : {formatDate("2023-09-14T00:00:00Z", "MM-DD-YYYY")}</p>
      <p>DD-MM-YYYY : {formatDate("2023-09-14T00:00:00Z", "DD-MM-YYYY")}</p>
      <p>MM/DD/YYYY : {formatDate("2023-09-14T00:00:00Z", "MM/DD/YYYY")}</p>
      <p>DD/MM/YYYY : {formatDate("2023-09-14T00:00:00Z", "DD/MM/YYYY")}</p>
      <p>HH:mm : {formatDate("2023-09-14T12:30:00Z", "HH:mm")}</p>
      <p>hh:mm A : {formatDate("2023-09-14T12:30:00Z", "hh:mm A")}</p>
      <p>
        MM/DD/YYYY HH:mm:ss :{" "}
        {formatDate("2023-09-14T12:30:00Z", "MM/DD/YYYY HH:mm:ss")}
      </p>
      <p>
        DD-MM-YYYY hh:mm A :{" "}
        {formatDate("2023-09-14T12:30:00Z", "DD-MM-YYYY hh:mm A")}
      </p>
      <p>
        Weekday Abbreviation : {formatDate(dateStr, "Weekday Abbreviation")}
      </p>
      <p>Month Abbreviation : {formatDate(dateStr, "Month Abbreviation")}</p>
      <p>Quarterly Format : {formatDate(dateStr, "Quarterly Format")}</p>
      <p>Year Only : {formatDate(dateStr, "Year Only")}</p>
      <p>Month and Year Only : {formatDate(dateStr, "Month and Year Only")}</p>
      <p>Day of the Year : {formatDate(dateStr, "Day of the Year")}</p>
      <p>
        Relative Time : {formatDate("2023-09-14T12:30:00Z", "Relative Time")}
      </p>
      <p>Parsed Date: {parseDate(dateStr).toString()}</p>
    </div>
  );
}

export default App;
