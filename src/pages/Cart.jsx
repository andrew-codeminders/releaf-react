import React, { useEffect, useState } from "react";

const Cart = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/products_olsPage_cart.html")
      .then(res => res.text())
      .then(setHtml);
  }, []);

  return <div dangerouslySetInnerHTML={ { __html: html } } />;
};

export default Cart;
