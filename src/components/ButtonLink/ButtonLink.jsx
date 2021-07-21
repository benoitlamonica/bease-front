import React from "react";
import { Link } from "react-router-dom";
import style from "./ButtonLink.module.scss";

function ButtonLink({ children, colorTheme = "blue", to, router = true }) {
  let link = router ? (
    <Link to={to}>{children}</Link>
  ) : (
    <a target="_blank" rel="noreferrer" href={to}>
      {children}
    </a>
  );
  return (
    <button className={`${style.buttonLink} ${style[colorTheme]}`}>
      {link}
    </button>
  );
}

export default ButtonLink;
