import React, { useEffect, useState } from "react";

const Index = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/home.html")
      .then(res => res.text())
      .then(setHtml);
  }, []);

  return <div dangerouslySetInnerHTML={ { __html: html } } />;
};

export default Index;
