import React from "react";
import style from "./RightBar.module.css";
import { AiOutlinePlus } from "react-icons/ai";

export default function RightBar() {
  return (
    <div className={style.main}>
      <img src="https://imgur.com/2oEUP4B.png" alt="calender" height="40vh" />
      <img
        src="https://imgur.com/xDAzy12.png"
        alt="keep"
        height="30vh"
        width="30vh"
      />
      <img
        src="https://imgur.com/xMh4wIo.png"
        alt="tick"
        height="30vh"
        width="30vh"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Google_Contacts_icon_%282022%29.svg"
        alt="keep"
        height="25vh"
        width="25vh"
      />
      <img
        src="https://imgur.com/63twxFL.png"
        alt="map"
        width="20vh"
        height="30vh"
        style={{ borderBottom: "1px solid lightgray", paddingBottom: "6vh" }}
      />
      <AiOutlinePlus style={{ fontSize: "1.5rem" }} />
    </div>
  );
}
