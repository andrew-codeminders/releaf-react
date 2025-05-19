import React from "react";

export default function NoPayment() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "25px",
        paddingBottom: "25px",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.075) 0px 1px 0px 0px inset",
      }}
    >
      <div className="container-fluid">
        <img
          src="//onlinestore.wsimg.com/assets/themes/__master/assets/images/payment_card_icon-1a6d5485b9350ea0f76f4ebd2e6ad4a900993ac32639074dc4b1e48f21dbf87d.svg"
          style={{ paddingRight: "5px" }}
        />
        <span>
          Payment options will be displayed after entering your shipping address
        </span>
      </div>
    </div>
  );
}
