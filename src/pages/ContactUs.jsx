import React, { useEffect, useState } from "react";

const ContactUs = () => {
  const [html, setHtml] = useState("");

  useEffect(() => {
    fetch("/contact-us.html")
      .then(res => res.text())
      .then(setHtml);
  }, []);

  return <div dangerouslySetInnerHTML={ { __html: html } } />;
};

export default ContactUs;
