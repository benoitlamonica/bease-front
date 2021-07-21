import React from "react";
import content from "./content";

function Nav() {
  const ulContent = (content) => {
    return content.map((menuEl) => {
      return (
        <li>
          <a
            target={menuEl.targetBlank ? "_blank" : "_self"}
            rel="noreferrer"
            href={menuEl.link}
          >
            {menuEl.icon} {menuEl.text}
          </a>
        </li>
      );
    });
  };

  return (
    <nav>
      <ul>{ulContent(content)}</ul>
    </nav>
  );
}

export default Nav;
