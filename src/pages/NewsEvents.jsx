import React, { useEffect, useState } from "react";

const NewsEvents = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/news-_-events.html")
      .then(res => res.text())
      .then(setHtml);
  }, []);

  return <div dangerouslySetInnerHTML={ { __html: html } } />;
};

export default NewsEvents;
