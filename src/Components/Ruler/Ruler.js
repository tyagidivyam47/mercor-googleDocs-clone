import React from "react";
import style from "./Ruler.module.css";
import { BsFillCaretDownFill } from "react-icons/bs";

export default function Ruler() {
  return (
    <div className={style.main}>
      <label>1</label>
      <label>
        <BsFillCaretDownFill style={{ color: "#ffff" }} />
      </label>
      <label>1</label>
      <label>2</label>
      <label>3</label>
      <label>4</label>
      <label>5</label>
      <label>6</label>
      <label>7</label>
    </div>
  );
}
