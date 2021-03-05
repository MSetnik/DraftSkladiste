import React, { useEffect, useState } from "react";

//Bootstrap
import Button from "react-bootstrap/Button";

//Components
import TableHome from "../../molecules/table/table.js";
import NavigationBar from "../../molecules/navbar/navbar";

//Style
import "./home.css";

//dummy data
import data from "../../../assets/proizvodi";

export default function Home() {
  return (
    <div>
      <NavigationBar />

      <div className="home-container">
        <div className="header-div">
          <h1>DRAFT</h1>
        </div>

        <TableHome />
      </div>
    </div>
  );
}
