import React from "react";
import Wrapper from "../Wrapper";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <Wrapper>
        <div>© Benoit Lamonica | Made with ♥️</div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
