import React from "react";
import { Link } from "react-router-dom";
import content from "./content";
import style from "./Nav.modules.scss";

function Nav() {
  const ulContent = (content) => {
    return content.map((menuEl, key) => {
      if (menuEl.type === "link") {
        return (
          <li key={key}>
            <a
              target={menuEl.targetBlank ? "_blank" : "_self"}
              rel="noreferrer"
              href={menuEl.link}
            >
              {menuEl.icon} {menuEl.text}
            </a>
          </li>
        );
      } else {
        return (
          <li key={key}>
            <Link to={menuEl.link}>
              {menuEl.icon} {menuEl.text}
            </Link>
          </li>
        );
      }
    });
  };

  return (
    <nav className={style.nav}>
      <ul>{ulContent(content)}</ul>
    </nav>
  );
}

export default Nav;
