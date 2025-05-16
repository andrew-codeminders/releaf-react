import React, { useEffect, useState } from "react";

const Products = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/products.html")
      .then(res => res.text())
      .then(setHtml);
  }, []);

  return <div dangerouslySetInnerHTML={ { __html: html } } />;
};

export default Products;
