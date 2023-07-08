import React, { useState } from "react";
import { iconCollective } from "../../Constant/Constant";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { BiDotsVerticalRounded, BiPencil } from "react-icons/bi";
import {
  AiFillCaretDown,
  AiOutlineUp,
  AiOutlineHighlight,
  AiOutlineUnorderedList
} from "react-icons/ai";
import { ImTextColor } from "react-icons/im";
import styles from "./Home.module.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import NavBar from "../../Components/Nav Bar/NavBar";
import RightBar from "../../Components/RightBar/RightBar";
import Ruler from "../../Components/Ruler/Ruler";
import VerticleRuler from "../../Components/VerticleRuler/VerticleRuler";

function Home() {
  // State
  const [title, setTitle] = useState("Untitled Document"); // Initializes "title" state variable with the value "Untitled Document"
  const [color, setColor] = useState("#000000");
  const [higlightColor, setHiglightColor] = useState("#000000");
  const [zoomLevel, setZoomLevel] = useState(100); // Initializes "zoomLevel" state variable with value 100 and "setZoomLevel" function to update "zoomLevel"
  // Functions

  // This function is called when the user clicks on the "Increase font size" button. It increases the font size of the selected text by executing the "fontSize" command with a value of "7".
  function handleIncreaseFontSize() {
    document.execCommand("fontSize", false, "7");
  }

  // This function is called when the user clicks on the "Decrease font size" button. It decreases the font size of the selected text by executing the "fontSize" command with a value of "3".
  function handleDecreaseFontSize() {
    document.execCommand("fontSize", false, "3");
  }

  // This function is called when the user clicks on any of the icons. It executes the command associated with the icon.
  function handleClick(element) {
    document.execCommand(`${element.iconFunctionality}`);
  }

  // This function is called when the user selects a color from the color picker. It changes the color of the selected text by executing the "foreColor" command with the selected color.
  function handleFontColor(e) {
    setColor(e.target.value);
    document.execCommand("foreColor", false, e.target.value);
  }

  // This function is called when the user selects a background color from the color picker. It changes the background color of the selected text by executing the "backColor" command with the selected color.
  function handleHighlightColor(e) {
    setHiglightColor(e.target.value);
    document.execCommand("backColor", false, e.target.value);
  }

  // This function is called when the user clicks on the "Download" button. It converts the content of the "TextSheet" element to an image using the "html2canvas" library. It then creates a PDF document using the "jsPDF" library and adds the image to the document. Finally, it downloads the document as a PDF file.
  async function handleDownload() {
    const sheetContent = document.querySelector(`.${styles.TextSheet}`); // Selects the HTML element with the class name "TextSheet" using document.querySelector() method and assigns it to the sheetContent variable.
    const canvas = await html2canvas(sheetContent, { dpi: 300 }); // Uses html2canvas library to convert sheetContent to an image with 300 DPI resolution
    const imageData = canvas.toDataURL("image/png", 1.0); // Converts the canvas image to a data URL with PNG format and 1.0 quality
    const pdfDoc = new jsPDF({
      // Creates a new jsPDF object with portrait orientation, A4 size and no compression
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: false
    });
    pdfDoc.addImage(imageData, "PNG", 0, 0, 210, 297, "", "FAST"); // Adds the image to the PDF document with a width of 210mm and height of 297mm (A4 size)
    pdfDoc.save(`${title}.pdf`); // Saves saves the PDF document as a file with the filename being the same as the title of the document, which is passed to the save() method as an argument. The save() method downloads the file to the user's device.
  }

  return (
    <>
      <NavBar title={title} setTitle={setTitle} />
      <div className={styles.MainContainer}>
        {/* Icons and dropdowns */}
        <div className={styles.iconOption}>
          <div className={styles.IconContainer}>
            {/* Map through icons and render buttons */}
            {iconCollective.slice(0, 5).map((element, index) => (
              <button
                onClick={() => handleClick(element)}
                key={index}
                className={styles.MappedIcons}
                title={element.iconTitle}
              >
                {element.iconName}
              </button>
            ))}
            {/* Zoom level dropdown */}
            <select
              value={zoomLevel}
              onChange={(e) => setZoomLevel(parseInt(e.target.value))}
              className={styles.ZoomDropdown}
            >
              {[50, 75, 90, 100, 125, 150].map((value) => (
                <option className={styles.ZoomOption} value={value} key={value}>
                  {`${value}%`}
                </option>
              ))}
            </select>
            <select
              value={zoomLevel}
              onChange={(e) => setZoomLevel(parseInt(e.target.value))}
              className={styles.textDropdown}
            >
              {["Normal text", "Title", "Subtitle", "Heading1"].map((value) => (
                <option className={styles.ZoomOption} value={value} key={value}>
                  {`${value}`}
                </option>
              ))}
            </select>
            <select
              value={zoomLevel}
              onChange={(e) => setZoomLevel(parseInt(e.target.value))}
              className={styles.textDropdown}
            >
              {["Open...", "Title", "Subtitle", "Heading1"].map((value) => (
                <option className={styles.ZoomOption} value={value} key={value}>
                  {`${value}`}
                </option>
              ))}
            </select>
            {/* Text size increase/decrease icons */}
            <div className={styles.TextSizeIconsContainer}>
              <p
                className={styles.TextDecreaseIcon}
                onClick={handleDecreaseFontSize}
              >
                -
              </p>
              <p
                style={{
                  border: "1px solid rgb(70, 70, 70)",
                  padding: "0.2rem 0.5rem",
                  fontSize: "0.8rem",
                  borderRadius: "4px"
                }}
              >
                11
              </p>
              <p
                className={styles.TextIncreaseIcon}
                onClick={handleIncreaseFontSize}
              >
                +
              </p>
            </div>
            {iconCollective.slice(5, 8).map((element, index) => (
              <button
                onClick={() => handleClick(element)}
                key={index}
                className={styles.MappedIcons}
                title={element.iconTitle}
              >
                {element.iconName}
              </button>
            ))}

            {/* Text color input box */}
            <button className={styles.btn}>
              <label htmlFor="color">
                <ImTextColor style={{ color: color, fontSize: "1rem" }} />
              </label>
              <input
                className={styles.input}
                id="color"
                type="color"
                value={color}
                onChange={handleFontColor}
              />
            </button>
            {/* Text fill input box */}
            <button
              className={styles.btn}
              style={{ marginRight: "1vw", marginLeft: "1vw" }}
            >
              <label htmlFor="highlighColor">
                <AiOutlineHighlight
                  style={{
                    zIndex: "1",
                    fontSize: "1rem",
                    color: higlightColor
                  }}
                />
              </label>
              <input
                className={styles.input}
                id="highlighColor"
                type="color"
                value={higlightColor}
                onChange={handleHighlightColor}
              />
            </button>
            <BiDotsVerticalRounded
              style={{
                borderLeft: "1px solid lightgray",
                paddingLeft: "0.8rem"
              }}
            />
          </div>
          <div className={styles.rightOption}>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRight: "1px solid lightgray",
                paddingRight: "1.5rem",
                gap: "0.4vw"
              }}
            >
              <BiPencil />
              <AiFillCaretDown style={{ fontSize: "0.6rem" }} />
            </p>
            <AiOutlineUp style={{ fontSize: "0.7rem" }} />
          </div>
        </div>
        <div>
          <RightBar />
        </div>
        <div>
          <Ruler />
        </div>
        <div
          style={{
            margin: "2vh",
            borderBottom: "1px solid rgba(73, 73, 73, 0.5)",
            transform: "scaleX(1)"
          }}
        ></div>
        <div
          style={{
            rotate: "270deg",
            position: "absolute",
            left: "-27.3vw",
            bottom: "2.4vh"
          }}
        >
          <VerticleRuler />
        </div>
        <div className={styles.textContainer}>
          <div>
            <AiOutlineUnorderedList style={{ fontSize: "1.5rem" }} />
          </div>
          <div
            className={styles.TextSheet}
            contentEditable={true}
            suppressContentEditableWarning={true}
            style={{ fontSize: "17px" }}
          ></div>
        </div>
      </div>

      {/* Download icon */}
      <div onClick={handleDownload} className={styles.DownloadIconContainer}>
        <DownloadRoundedIcon className={styles.DownloadIcon} />
      </div>
    </>
  );
}

export default Home;
