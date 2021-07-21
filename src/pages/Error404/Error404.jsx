import React from "react";
import style from "./Error404.module.scss";

function Error404() {
  return (
    <div className={style.error404}>
      <h2>404 - Not found</h2>
      <div className="robot">
        <i class="fas fa-robot"></i>
        <p>Bip boup bip ?</p>
      </div>
    </div>
  );
}

export default Error404;
