import React from "react";
import Nav from "../Nav";
import style from "./Header.module.scss";

function Header() {
  console.log(style);
  return (
    <header className={`${style.header}`}>
      <div className={style.headerColor}></div>
      <div
        className={`${style.headerContent} flex-inline align-items-center flex-between`}
      >
        <div className="flex-inline align-items-center">
          <h1>Bease.js</h1>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
