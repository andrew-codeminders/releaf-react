import React, { useEffect, useState } from "react";

const LearnMore = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/learn-more.html")
      .then(res => res.text())
      .then(setHtml);
  }, []);

  return <div dangerouslySetInnerHTML={ { __html: html } } />;
};

export default LearnMore;
