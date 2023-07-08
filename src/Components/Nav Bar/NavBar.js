import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { AiFillCaretDown, AiOutlineStar } from "react-icons/ai";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BiVideo } from "react-icons/bi";

function NavBar({ title, setTitle }) {
  const [color, setColor] = useState("black");

  return (
    <nav className={styles.main}>
      <div className={styles.NavBarContainer}>
        {/* An image element */}
        <img
          className={styles.GoogleDocLogo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Google_Docs_logo_%282014-2020%29.svg/1481px-Google_Docs_logo_%282014-2020%29.svg.png"
          alt="googledoclogo"
        />
        {/* An input element */}
        <input
          className={styles.NavList}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <AiOutlineStar
          className={styles.star}
          onClick={() => setColor(color === "black" ? "yellow" : "black")}
          style={{ color: color, zIndex: "1", cursor: "pointer" }}
        />
        {/* A menu bar element with several items */}
        <div className={styles.MenuBar}>
          <p className={styles.MenuItem}>File</p>
          <p className={styles.MenuItem}>Edit</p>
          <p className={styles.MenuItem}>View</p>
          <p className={styles.MenuItem}>Insert</p>
          <p className={styles.MenuItem}>Format</p>
          <p className={styles.MenuItem}>Tools</p>
          <p className={styles.MenuItem}>Extensions</p>
          <p className={styles.MenuItem}>Help</p>
        </div>
      </div>
      <div className={styles.Share}>
        <MdOutlineMessage
          style={{ fontSize: "1.4rem", transform: "scaleX(-1)" }}
        />
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5vw"
          }}
        >
          <BiVideo style={{ fontSize: "1.4rem" }} />
          <AiFillCaretDown style={{ fontSize: "0.6rem" }} />
        </p>
        <div className={styles.lock}>
          <HiOutlineLockClosed />
          <p style={{ fontSize: "0.9rem" }}>Share</p>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="picture"
        />
      </div>
    </nav>
  );
}

export default NavBar;
