import React, { useEffect } from "react";
import Prism from "prismjs";

function Code({ children, language = "javascript" }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
}

export default Code;
