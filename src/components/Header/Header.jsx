import React from "react";
import { IconSmallInv } from "../../assets/img/logo";
import style from "./Header.module.scss";

function Header() {
  return (
    <header
      className={`${style.header} flex-inline align-items-center flex-between`}
    >
      <div className="flex-inline align-items-center">
        <img src={IconSmallInv} alt="Main icon" />
        <h1>Bease</h1>
      </div>
      <nav>
        <ul>
          <li>
            <a href="./">Getting Started</a>
          </li>
          <li>
            <a href="">Documentation</a>
          </li>
          <li>
            <a
              href="https://github.com/benoitlamonica/easydiscordbot"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
