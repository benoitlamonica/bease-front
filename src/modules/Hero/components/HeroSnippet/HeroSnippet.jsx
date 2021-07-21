import React from "react";
import style from "./HeroSnippet.module.scss";

function HeroSnippet({ content: { title, text } }) {
  return (
    <div className={`${style.heroSnippet} flex-basis-33`}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default HeroSnippet;
